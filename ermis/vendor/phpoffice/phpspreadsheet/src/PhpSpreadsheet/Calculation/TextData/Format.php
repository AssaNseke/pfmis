<?php

namespace PhpOffice\PhpSpreadsheet\Calculation\TextData;

use DateTimeInterface;
<<<<<<< HEAD
=======
use PhpOffice\PhpSpreadsheet\Calculation\ArrayEnabled;
>>>>>>> develop
use PhpOffice\PhpSpreadsheet\Calculation\DateTimeExcel;
use PhpOffice\PhpSpreadsheet\Calculation\Exception as CalcExp;
use PhpOffice\PhpSpreadsheet\Calculation\Functions;
use PhpOffice\PhpSpreadsheet\Calculation\MathTrig;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Shared\StringHelper;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;

class Format
{
<<<<<<< HEAD
=======
    use ArrayEnabled;

>>>>>>> develop
    /**
     * DOLLAR.
     *
     * This function converts a number to text using currency format, with the decimals rounded to the specified place.
     * The format used is $#,##0.00_);($#,##0.00)..
     *
     * @param mixed $value The value to format
<<<<<<< HEAD
     * @param mixed $decimals The number of digits to display to the right of the decimal point (as an integer).
     *                            If decimals is negative, number is rounded to the left of the decimal point.
     *                            If you omit decimals, it is assumed to be 2
     */
    public static function DOLLAR($value = 0, $decimals = 2): string
    {
=======
     *                         Or can be an array of values
     * @param mixed $decimals The number of digits to display to the right of the decimal point (as an integer).
     *                            If decimals is negative, number is rounded to the left of the decimal point.
     *                            If you omit decimals, it is assumed to be 2
     *                         Or can be an array of values
     *
     * @return array|string
     *         If an array of values is passed for either of the arguments, then the returned result
     *            will also be an array with matching dimensions
     */
    public static function DOLLAR($value = 0, $decimals = 2)
    {
        if (is_array($value) || is_array($decimals)) {
            return self::evaluateArrayArguments([self::class, __FUNCTION__], $value, $decimals);
        }

>>>>>>> develop
        try {
            $value = Helpers::extractFloat($value);
            $decimals = Helpers::extractInt($decimals, -100, 0, true);
        } catch (CalcExp $e) {
            return $e->getMessage();
        }

        $mask = '$#,##0';
        if ($decimals > 0) {
            $mask .= '.' . str_repeat('0', $decimals);
        } else {
            $round = 10 ** abs($decimals);
            if ($value < 0) {
                $round = 0 - $round;
            }
            $value = MathTrig\Round::multiple($value, $round);
        }
        $mask = "{$mask};-{$mask}";

        return NumberFormat::toFormattedString($value, $mask);
    }

    /**
     * FIXED.
     *
     * @param mixed $value The value to format
<<<<<<< HEAD
     * @param mixed $decimals Integer value for the number of decimal places that should be formatted
     * @param mixed $noCommas Boolean value indicating whether the value should have thousands separators or not
     */
    public static function FIXEDFORMAT($value, $decimals = 2, $noCommas = false): string
    {
        try {
            $value = Helpers::extractFloat($value);
            $decimals = Helpers::extractInt($decimals, -100, 0, true);
            $noCommas = Functions::flattenSingleValue($noCommas);
=======
     *                         Or can be an array of values
     * @param mixed $decimals Integer value for the number of decimal places that should be formatted
     *                         Or can be an array of values
     * @param mixed $noCommas Boolean value indicating whether the value should have thousands separators or not
     *                         Or can be an array of values
     *
     * @return array|string
     *         If an array of values is passed for either of the arguments, then the returned result
     *            will also be an array with matching dimensions
     */
    public static function FIXEDFORMAT($value, $decimals = 2, $noCommas = false)
    {
        if (is_array($value) || is_array($decimals) || is_array($noCommas)) {
            return self::evaluateArrayArguments([self::class, __FUNCTION__], $value, $decimals, $noCommas);
        }

        try {
            $value = Helpers::extractFloat($value);
            $decimals = Helpers::extractInt($decimals, -100, 0, true);
>>>>>>> develop
        } catch (CalcExp $e) {
            return $e->getMessage();
        }

        $valueResult = round($value, $decimals);
        if ($decimals < 0) {
            $decimals = 0;
        }
        if ($noCommas === false) {
            $valueResult = number_format(
                $valueResult,
                $decimals,
                StringHelper::getDecimalSeparator(),
                StringHelper::getThousandsSeparator()
            );
        }

        return (string) $valueResult;
    }

    /**
     * TEXT.
     *
     * @param mixed $value The value to format
<<<<<<< HEAD
     * @param mixed $format A string with the Format mask that should be used
     */
    public static function TEXTFORMAT($value, $format): string
    {
=======
     *                         Or can be an array of values
     * @param mixed $format A string with the Format mask that should be used
     *                         Or can be an array of values
     *
     * @return array|string
     *         If an array of values is passed for either of the arguments, then the returned result
     *            will also be an array with matching dimensions
     */
    public static function TEXTFORMAT($value, $format)
    {
        if (is_array($value) || is_array($format)) {
            return self::evaluateArrayArguments([self::class, __FUNCTION__], $value, $format);
        }

>>>>>>> develop
        $value = Helpers::extractString($value);
        $format = Helpers::extractString($format);

        if (!is_numeric($value) && Date::isDateTimeFormatCode($format)) {
            $value = DateTimeExcel\DateValue::fromString($value);
        }

        return (string) NumberFormat::toFormattedString($value, $format);
    }

    /**
     * @param mixed $value Value to check
     *
     * @return mixed
     */
    private static function convertValue($value)
    {
<<<<<<< HEAD
        $value = ($value === null) ? 0 : Functions::flattenSingleValue($value);
=======
        $value = $value ?? 0;
>>>>>>> develop
        if (is_bool($value)) {
            if (Functions::getCompatibilityMode() === Functions::COMPATIBILITY_OPENOFFICE) {
                $value = (int) $value;
            } else {
                throw new CalcExp(Functions::VALUE());
            }
        }

        return $value;
    }

    /**
     * VALUE.
     *
     * @param mixed $value Value to check
<<<<<<< HEAD
     *
     * @return DateTimeInterface|float|int|string A string if arguments are invalid
     */
    public static function VALUE($value = '')
    {
=======
     *                         Or can be an array of values
     *
     * @return array|DateTimeInterface|float|int|string A string if arguments are invalid
     *         If an array of values is passed for the argument, then the returned result
     *            will also be an array with matching dimensions
     */
    public static function VALUE($value = '')
    {
        if (is_array($value)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $value);
        }

>>>>>>> develop
        try {
            $value = self::convertValue($value);
        } catch (CalcExp $e) {
            return $e->getMessage();
        }
        if (!is_numeric($value)) {
            $numberValue = str_replace(
                StringHelper::getThousandsSeparator(),
                '',
                trim($value, " \t\n\r\0\x0B" . StringHelper::getCurrencyCode())
            );
            if (is_numeric($numberValue)) {
                return (float) $numberValue;
            }

            $dateSetting = Functions::getReturnDateType();
            Functions::setReturnDateType(Functions::RETURNDATE_EXCEL);

            if (strpos($value, ':') !== false) {
<<<<<<< HEAD
                $timeValue = DateTimeExcel\TimeValue::fromString($value);
=======
                $timeValue = Functions::scalar(DateTimeExcel\TimeValue::fromString($value));
>>>>>>> develop
                if ($timeValue !== Functions::VALUE()) {
                    Functions::setReturnDateType($dateSetting);

                    return $timeValue;
                }
            }
<<<<<<< HEAD
            $dateValue = DateTimeExcel\DateValue::fromString($value);
=======
            $dateValue = Functions::scalar(DateTimeExcel\DateValue::fromString($value));
>>>>>>> develop
            if ($dateValue !== Functions::VALUE()) {
                Functions::setReturnDateType($dateSetting);

                return $dateValue;
            }
            Functions::setReturnDateType($dateSetting);

            return Functions::VALUE();
        }

        return (float) $value;
    }

    /**
     * @param mixed $decimalSeparator
     */
    private static function getDecimalSeparator($decimalSeparator): string
    {
<<<<<<< HEAD
        $decimalSeparator = Functions::flattenSingleValue($decimalSeparator);

=======
>>>>>>> develop
        return empty($decimalSeparator) ? StringHelper::getDecimalSeparator() : (string) $decimalSeparator;
    }

    /**
     * @param mixed $groupSeparator
     */
    private static function getGroupSeparator($groupSeparator): string
    {
<<<<<<< HEAD
        $groupSeparator = Functions::flattenSingleValue($groupSeparator);

=======
>>>>>>> develop
        return empty($groupSeparator) ? StringHelper::getThousandsSeparator() : (string) $groupSeparator;
    }

    /**
     * NUMBERVALUE.
     *
     * @param mixed $value The value to format
<<<<<<< HEAD
     * @param mixed $decimalSeparator A string with the decimal separator to use, defaults to locale defined value
     * @param mixed $groupSeparator A string with the group/thousands separator to use, defaults to locale defined value
     *
     * @return float|string
     */
    public static function NUMBERVALUE($value = '', $decimalSeparator = null, $groupSeparator = null)
    {
=======
     *                         Or can be an array of values
     * @param mixed $decimalSeparator A string with the decimal separator to use, defaults to locale defined value
     *                         Or can be an array of values
     * @param mixed $groupSeparator A string with the group/thousands separator to use, defaults to locale defined value
     *                         Or can be an array of values
     *
     * @return array|float|string
     */
    public static function NUMBERVALUE($value = '', $decimalSeparator = null, $groupSeparator = null)
    {
        if (is_array($value) || is_array($decimalSeparator) || is_array($groupSeparator)) {
            return self::evaluateArrayArguments([self::class, __FUNCTION__], $value, $decimalSeparator, $groupSeparator);
        }

>>>>>>> develop
        try {
            $value = self::convertValue($value);
            $decimalSeparator = self::getDecimalSeparator($decimalSeparator);
            $groupSeparator = self::getGroupSeparator($groupSeparator);
        } catch (CalcExp $e) {
            return $e->getMessage();
        }

        if (!is_numeric($value)) {
            $decimalPositions = preg_match_all('/' . preg_quote($decimalSeparator) . '/', $value, $matches, PREG_OFFSET_CAPTURE);
            if ($decimalPositions > 1) {
                return Functions::VALUE();
            }
            $decimalOffset = array_pop($matches[0])[1];
            if (strpos($value, $groupSeparator, $decimalOffset) !== false) {
                return Functions::VALUE();
            }

            $value = str_replace([$groupSeparator, $decimalSeparator], ['', '.'], $value);

            // Handle the special case of trailing % signs
            $percentageString = rtrim($value, '%');
            if (!is_numeric($percentageString)) {
                return Functions::VALUE();
            }

            $percentageAdjustment = strlen($value) - strlen($percentageString);
            if ($percentageAdjustment) {
                $value = (float) $percentageString;
                $value /= 10 ** ($percentageAdjustment * 2);
            }
        }

        return is_array($value) ? Functions::VALUE() : (float) $value;
    }
}

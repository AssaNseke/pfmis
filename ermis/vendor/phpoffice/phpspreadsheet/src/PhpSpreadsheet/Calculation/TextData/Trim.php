<?php

namespace PhpOffice\PhpSpreadsheet\Calculation\TextData;

<<<<<<< HEAD
class Trim
{
=======
use PhpOffice\PhpSpreadsheet\Calculation\ArrayEnabled;

class Trim
{
    use ArrayEnabled;

>>>>>>> develop
    /**
     * CLEAN.
     *
     * @param mixed $stringValue String Value to check
<<<<<<< HEAD
     *
     * @return null|string
     */
    public static function nonPrintable($stringValue = '')
    {
=======
     *                              Or can be an array of values
     *
     * @return null|array|string
     *         If an array of values is passed as the argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function nonPrintable($stringValue = '')
    {
        if (is_array($stringValue)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $stringValue);
        }

>>>>>>> develop
        $stringValue = Helpers::extractString($stringValue);

        return preg_replace('/[\\x00-\\x1f]/', '', "$stringValue");
    }

    /**
     * TRIM.
     *
     * @param mixed $stringValue String Value to check
<<<<<<< HEAD
     *
     * @return string
     */
    public static function spaces($stringValue = '')
    {
=======
     *                              Or can be an array of values
     *
     * @return array|string
     *         If an array of values is passed as the argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function spaces($stringValue = '')
    {
        if (is_array($stringValue)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $stringValue);
        }

>>>>>>> develop
        $stringValue = Helpers::extractString($stringValue);

        return trim(preg_replace('/ +/', ' ', trim("$stringValue", ' ')) ?? '', ' ');
    }
}

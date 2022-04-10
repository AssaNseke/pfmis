<?php

namespace PhpOffice\PhpSpreadsheet\Calculation\TextData;

<<<<<<< HEAD
use PhpOffice\PhpSpreadsheet\Calculation\Functions;

class Text
{
=======
use PhpOffice\PhpSpreadsheet\Calculation\ArrayEnabled;

class Text
{
    use ArrayEnabled;

>>>>>>> develop
    /**
     * LEN.
     *
     * @param mixed $value String Value
<<<<<<< HEAD
     */
    public static function length($value = ''): int
    {
=======
     *                         Or can be an array of values
     *
     * @return array|int
     *         If an array of values is passed for the argument, then the returned result
     *            will also be an array with matching dimensions
     */
    public static function length($value = '')
    {
        if (is_array($value)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $value);
        }

>>>>>>> develop
        $value = Helpers::extractString($value);

        return mb_strlen($value ?? '', 'UTF-8');
    }

    /**
     * Compares two text strings and returns TRUE if they are exactly the same, FALSE otherwise.
     * EXACT is case-sensitive but ignores formatting differences.
     * Use EXACT to test text being entered into a document.
     *
     * @param mixed $value1 String Value
<<<<<<< HEAD
     * @param mixed $value2 String Value
     */
    public static function exact($value1, $value2): bool
    {
=======
     *                         Or can be an array of values
     * @param mixed $value2 String Value
     *                         Or can be an array of values
     *
     * @return array|bool
     *         If an array of values is passed for either of the arguments, then the returned result
     *            will also be an array with matching dimensions
     */
    public static function exact($value1, $value2)
    {
        if (is_array($value1) || is_array($value2)) {
            return self::evaluateArrayArguments([self::class, __FUNCTION__], $value1, $value2);
        }

>>>>>>> develop
        $value1 = Helpers::extractString($value1);
        $value2 = Helpers::extractString($value2);

        return $value2 === $value1;
    }

    /**
     * RETURNSTRING.
     *
     * @param mixed $testValue Value to check
<<<<<<< HEAD
     *
     * @return null|string
     */
    public static function test($testValue = '')
    {
        $testValue = Functions::flattenSingleValue($testValue);
=======
     *                         Or can be an array of values
     *
     * @return null|array|string
     *         If an array of values is passed for the argument, then the returned result
     *            will also be an array with matching dimensions
     */
    public static function test($testValue = '')
    {
        if (is_array($testValue)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $testValue);
        }
>>>>>>> develop

        if (is_string($testValue)) {
            return $testValue;
        }

        return null;
    }
}

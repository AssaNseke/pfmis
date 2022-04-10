<?php

namespace PhpOffice\PhpSpreadsheet\Calculation\MathTrig;

<<<<<<< HEAD
=======
use PhpOffice\PhpSpreadsheet\Calculation\ArrayEnabled;
>>>>>>> develop
use PhpOffice\PhpSpreadsheet\Calculation\Exception;

class Sign
{
<<<<<<< HEAD
=======
    use ArrayEnabled;

>>>>>>> develop
    /**
     * SIGN.
     *
     * Determines the sign of a number. Returns 1 if the number is positive, zero (0)
     *        if the number is 0, and -1 if the number is negative.
     *
<<<<<<< HEAD
     * @param float $number Number to round
     *
     * @return int|string sign value, or a string containing an error
     */
    public static function evaluate($number)
    {
=======
     * @param array|float $number Number to round, or can be an array of numbers
     *
     * @return array|int|string sign value, or a string containing an error
     *         If an array of numbers is passed as the argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function evaluate($number)
    {
        if (is_array($number)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $number);
        }

>>>>>>> develop
        try {
            $number = Helpers::validateNumericNullBool($number);
        } catch (Exception $e) {
            return $e->getMessage();
        }

        return Helpers::returnSign($number);
    }
}

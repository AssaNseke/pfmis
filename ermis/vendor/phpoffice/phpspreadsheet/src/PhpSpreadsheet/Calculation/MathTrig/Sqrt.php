<?php

namespace PhpOffice\PhpSpreadsheet\Calculation\MathTrig;

<<<<<<< HEAD
=======
use PhpOffice\PhpSpreadsheet\Calculation\ArrayEnabled;
>>>>>>> develop
use PhpOffice\PhpSpreadsheet\Calculation\Exception;

class Sqrt
{
<<<<<<< HEAD
=======
    use ArrayEnabled;

>>>>>>> develop
    /**
     * SQRT.
     *
     * Returns the result of builtin function sqrt after validating args.
     *
<<<<<<< HEAD
     * @param mixed $number Should be numeric
     *
     * @return float|string square roor
     */
    public static function sqrt($number)
    {
=======
     * @param mixed $number Should be numeric, or can be an array of numbers
     *
     * @return array|float|string square root
     *         If an array of numbers is passed as the argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function sqrt($number)
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

        return Helpers::numberOrNan(sqrt($number));
    }

    /**
     * SQRTPI.
     *
     * Returns the square root of (number * pi).
     *
<<<<<<< HEAD
     * @param float $number Number
     *
     * @return float|string Square Root of Number * Pi, or a string containing an error
     */
    public static function pi($number)
    {
=======
     * @param array|float $number Number, or can be an array of numbers
     *
     * @return array|float|string Square Root of Number * Pi, or a string containing an error
     *         If an array of numbers is passed as the argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function pi($number)
    {
        if (is_array($number)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $number);
        }

>>>>>>> develop
        try {
            $number = Helpers::validateNumericNullSubstitution($number, 0);
            Helpers::validateNotNegative($number);
        } catch (Exception $e) {
            return $e->getMessage();
        }

        return sqrt($number * M_PI);
    }
}

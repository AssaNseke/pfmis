<?php

namespace PhpOffice\PhpSpreadsheet\Calculation\MathTrig\Trig;

<<<<<<< HEAD
=======
use PhpOffice\PhpSpreadsheet\Calculation\ArrayEnabled;
>>>>>>> develop
use PhpOffice\PhpSpreadsheet\Calculation\Exception;
use PhpOffice\PhpSpreadsheet\Calculation\MathTrig\Helpers;

class Cosecant
{
<<<<<<< HEAD
=======
    use ArrayEnabled;

>>>>>>> develop
    /**
     * CSC.
     *
     * Returns the cosecant of an angle.
     *
<<<<<<< HEAD
     * @param float $angle Number
     *
     * @return float|string The cosecant of the angle
     */
    public static function csc($angle)
    {
=======
     * @param array|float $angle Number, or can be an array of numbers
     *
     * @return array|float|string The cosecant of the angle
     *         If an array of numbers is passed as the argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function csc($angle)
    {
        if (is_array($angle)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $angle);
        }

>>>>>>> develop
        try {
            $angle = Helpers::validateNumericNullBool($angle);
        } catch (Exception $e) {
            return $e->getMessage();
        }

        return Helpers::verySmallDenominator(1.0, sin($angle));
    }

    /**
     * CSCH.
     *
     * Returns the hyperbolic cosecant of an angle.
     *
<<<<<<< HEAD
     * @param float $angle Number
     *
     * @return float|string The hyperbolic cosecant of the angle
     */
    public static function csch($angle)
    {
=======
     * @param array|float $angle Number, or can be an array of numbers
     *
     * @return array|float|string The hyperbolic cosecant of the angle
     *         If an array of numbers is passed as the argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function csch($angle)
    {
        if (is_array($angle)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $angle);
        }

>>>>>>> develop
        try {
            $angle = Helpers::validateNumericNullBool($angle);
        } catch (Exception $e) {
            return $e->getMessage();
        }

        return Helpers::verySmallDenominator(1.0, sinh($angle));
    }
}

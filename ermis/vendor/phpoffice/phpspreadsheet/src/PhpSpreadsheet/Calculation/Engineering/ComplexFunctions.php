<?php

namespace PhpOffice\PhpSpreadsheet\Calculation\Engineering;

use Complex\Complex as ComplexObject;
use Complex\Exception as ComplexException;
<<<<<<< HEAD
=======
use PhpOffice\PhpSpreadsheet\Calculation\ArrayEnabled;
>>>>>>> develop
use PhpOffice\PhpSpreadsheet\Calculation\Functions;

class ComplexFunctions
{
<<<<<<< HEAD
=======
    use ArrayEnabled;

>>>>>>> develop
    /**
     * IMABS.
     *
     * Returns the absolute value (modulus) of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMABS(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the absolute value
     *
     * @return float|string
     */
    public static function IMABS($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the absolute value
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMABS($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return $complex->abs();
    }

    /**
     * IMARGUMENT.
     *
     * Returns the argument theta of a complex number, i.e. the angle in radians from the real
     * axis to the representation of the number in polar coordinates.
     *
     * Excel Function:
     *        IMARGUMENT(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the argument theta
     *
     * @return float|string
     */
    public static function IMARGUMENT($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the argument theta
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMARGUMENT($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        if ($complex->getReal() == 0.0 && $complex->getImaginary() == 0.0) {
            return Functions::DIV0();
        }

        return $complex->argument();
    }

    /**
     * IMCONJUGATE.
     *
     * Returns the complex conjugate of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMCONJUGATE(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the conjugate
     *
     * @return string
     */
    public static function IMCONJUGATE($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the conjugate
     *                      Or can be an array of values
     *
     * @return array|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMCONJUGATE($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return (string) $complex->conjugate();
    }

    /**
     * IMCOS.
     *
     * Returns the cosine of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMCOS(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the cosine
     *
     * @return float|string
     */
    public static function IMCOS($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the cosine
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMCOS($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return (string) $complex->cos();
    }

    /**
     * IMCOSH.
     *
     * Returns the hyperbolic cosine of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMCOSH(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the hyperbolic cosine
     *
     * @return float|string
     */
    public static function IMCOSH($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the hyperbolic cosine
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMCOSH($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return (string) $complex->cosh();
    }

    /**
     * IMCOT.
     *
     * Returns the cotangent of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMCOT(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the cotangent
     *
     * @return float|string
     */
    public static function IMCOT($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the cotangent
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMCOT($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return (string) $complex->cot();
    }

    /**
     * IMCSC.
     *
     * Returns the cosecant of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMCSC(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the cosecant
     *
     * @return float|string
     */
    public static function IMCSC($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the cosecant
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMCSC($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return (string) $complex->csc();
    }

    /**
     * IMCSCH.
     *
     * Returns the hyperbolic cosecant of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMCSCH(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the hyperbolic cosecant
     *
     * @return float|string
     */
    public static function IMCSCH($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the hyperbolic cosecant
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMCSCH($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return (string) $complex->csch();
    }

    /**
     * IMSIN.
     *
     * Returns the sine of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMSIN(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the sine
     *
     * @return float|string
     */
    public static function IMSIN($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the sine
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMSIN($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return (string) $complex->sin();
    }

    /**
     * IMSINH.
     *
     * Returns the hyperbolic sine of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMSINH(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the hyperbolic sine
     *
     * @return float|string
     */
    public static function IMSINH($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the hyperbolic sine
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMSINH($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return (string) $complex->sinh();
    }

    /**
     * IMSEC.
     *
     * Returns the secant of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMSEC(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the secant
     *
     * @return float|string
     */
    public static function IMSEC($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the secant
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMSEC($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return (string) $complex->sec();
    }

    /**
     * IMSECH.
     *
     * Returns the hyperbolic secant of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMSECH(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the hyperbolic secant
     *
     * @return float|string
     */
    public static function IMSECH($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the hyperbolic secant
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMSECH($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return (string) $complex->sech();
    }

    /**
     * IMTAN.
     *
     * Returns the tangent of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMTAN(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the tangent
     *
     * @return float|string
     */
    public static function IMTAN($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the tangent
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMTAN($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return (string) $complex->tan();
    }

    /**
     * IMSQRT.
     *
     * Returns the square root of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMSQRT(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the square root
     *
     * @return string
     */
    public static function IMSQRT($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the square root
     *                      Or can be an array of values
     *
     * @return array|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMSQRT($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        $theta = self::IMARGUMENT($complexNumber);
        if ($theta === Functions::DIV0()) {
            return '0';
        }

        return (string) $complex->sqrt();
    }

    /**
     * IMLN.
     *
     * Returns the natural logarithm of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMLN(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the natural logarithm
     *
     * @return string
     */
    public static function IMLN($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the natural logarithm
     *                      Or can be an array of values
     *
     * @return array|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMLN($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        if ($complex->getReal() == 0.0 && $complex->getImaginary() == 0.0) {
            return Functions::NAN();
        }

        return (string) $complex->ln();
    }

    /**
     * IMLOG10.
     *
     * Returns the common logarithm (base 10) of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMLOG10(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the common logarithm
     *
     * @return string
     */
    public static function IMLOG10($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the common logarithm
     *                      Or can be an array of values
     *
     * @return array|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMLOG10($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        if ($complex->getReal() == 0.0 && $complex->getImaginary() == 0.0) {
            return Functions::NAN();
        }

        return (string) $complex->log10();
    }

    /**
     * IMLOG2.
     *
     * Returns the base-2 logarithm of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMLOG2(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the base-2 logarithm
     *
     * @return string
     */
    public static function IMLOG2($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the base-2 logarithm
     *                      Or can be an array of values
     *
     * @return array|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMLOG2($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        if ($complex->getReal() == 0.0 && $complex->getImaginary() == 0.0) {
            return Functions::NAN();
        }

        return (string) $complex->log2();
    }

    /**
     * IMEXP.
     *
     * Returns the exponential of a complex number in x + yi or x + yj text format.
     *
     * Excel Function:
     *        IMEXP(complexNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number for which you want the exponential
     *
     * @return string
     */
    public static function IMEXP($complexNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
=======
     * @param array|string $complexNumber the complex number for which you want the exponential
     *                      Or can be an array of values
     *
     * @return array|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMEXP($complexNumber)
    {
        if (is_array($complexNumber)) {
            return self::evaluateSingleArgumentArray([self::class, __FUNCTION__], $complexNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        return (string) $complex->exp();
    }

    /**
     * IMPOWER.
     *
     * Returns a complex number in x + yi or x + yj text format raised to a power.
     *
     * Excel Function:
     *        IMPOWER(complexNumber,realNumber)
     *
<<<<<<< HEAD
     * @param string $complexNumber the complex number you want to raise to a power
     * @param float $realNumber the power to which you want to raise the complex number
     *
     * @return string
     */
    public static function IMPOWER($complexNumber, $realNumber)
    {
        $complexNumber = Functions::flattenSingleValue($complexNumber);
        $realNumber = Functions::flattenSingleValue($realNumber);
=======
     * @param array|string $complexNumber the complex number you want to raise to a power
     *                      Or can be an array of values
     * @param array|float|int|string $realNumber the power to which you want to raise the complex number
     *                      Or can be an array of values
     *
     * @return array|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function IMPOWER($complexNumber, $realNumber)
    {
        if (is_array($complexNumber) || is_array($realNumber)) {
            return self::evaluateArrayArguments([self::class, __FUNCTION__], $complexNumber, $realNumber);
        }
>>>>>>> develop

        try {
            $complex = new ComplexObject($complexNumber);
        } catch (ComplexException $e) {
            return Functions::NAN();
        }

        if (!is_numeric($realNumber)) {
            return Functions::VALUE();
        }

<<<<<<< HEAD
        return (string) $complex->pow($realNumber);
=======
        return (string) $complex->pow((float) $realNumber);
>>>>>>> develop
    }
}

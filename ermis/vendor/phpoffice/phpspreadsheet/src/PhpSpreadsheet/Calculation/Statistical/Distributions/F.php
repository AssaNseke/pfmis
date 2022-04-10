<?php

namespace PhpOffice\PhpSpreadsheet\Calculation\Statistical\Distributions;

<<<<<<< HEAD
=======
use PhpOffice\PhpSpreadsheet\Calculation\ArrayEnabled;
>>>>>>> develop
use PhpOffice\PhpSpreadsheet\Calculation\Exception;
use PhpOffice\PhpSpreadsheet\Calculation\Functions;

class F
{
<<<<<<< HEAD
=======
    use ArrayEnabled;

>>>>>>> develop
    /**
     * F.DIST.
     *
     *    Returns the F probability distribution.
     *    You can use this function to determine whether two data sets have different degrees of diversity.
     *    For example, you can examine the test scores of men and women entering high school, and determine
     *        if the variability in the females is different from that found in the males.
     *
     * @param mixed $value Float value for which we want the probability
<<<<<<< HEAD
     * @param mixed $u The numerator degrees of freedom as an integer
     * @param mixed $v The denominator degrees of freedom as an integer
     * @param mixed $cumulative Boolean value indicating if we want the cdf (true) or the pdf (false)
     *
     * @return float|string
     */
    public static function distribution($value, $u, $v, $cumulative)
    {
        $value = Functions::flattenSingleValue($value);
        $u = Functions::flattenSingleValue($u);
        $v = Functions::flattenSingleValue($v);
        $cumulative = Functions::flattenSingleValue($cumulative);
=======
     *                      Or can be an array of values
     * @param mixed $u The numerator degrees of freedom as an integer
     *                      Or can be an array of values
     * @param mixed $v The denominator degrees of freedom as an integer
     *                      Or can be an array of values
     * @param mixed $cumulative Boolean value indicating if we want the cdf (true) or the pdf (false)
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function distribution($value, $u, $v, $cumulative)
    {
        if (is_array($value) || is_array($u) || is_array($v) || is_array($cumulative)) {
            return self::evaluateArrayArguments([self::class, __FUNCTION__], $value, $u, $v, $cumulative);
        }
>>>>>>> develop

        try {
            $value = DistributionValidations::validateFloat($value);
            $u = DistributionValidations::validateInt($u);
            $v = DistributionValidations::validateInt($v);
            $cumulative = DistributionValidations::validateBool($cumulative);
        } catch (Exception $e) {
            return $e->getMessage();
        }

        if ($value < 0 || $u < 1 || $v < 1) {
            return Functions::NAN();
        }

        if ($cumulative) {
            $adjustedValue = ($u * $value) / ($u * $value + $v);

            return Beta::incompleteBeta($adjustedValue, $u / 2, $v / 2);
        }

        return (Gamma::gammaValue(($v + $u) / 2) /
                (Gamma::gammaValue($u / 2) * Gamma::gammaValue($v / 2))) *
            (($u / $v) ** ($u / 2)) *
            (($value ** (($u - 2) / 2)) / ((1 + ($u / $v) * $value) ** (($u + $v) / 2)));
    }
}

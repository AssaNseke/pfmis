<?php

namespace PhpOffice\PhpSpreadsheet\Calculation\Statistical;

<<<<<<< HEAD
=======
use PhpOffice\PhpSpreadsheet\Calculation\ArrayEnabled;
>>>>>>> develop
use PhpOffice\PhpSpreadsheet\Calculation\Exception;
use PhpOffice\PhpSpreadsheet\Calculation\Functions;

class Standardize extends StatisticalValidations
{
<<<<<<< HEAD
=======
    use ArrayEnabled;

>>>>>>> develop
    /**
     * STANDARDIZE.
     *
     * Returns a normalized value from a distribution characterized by mean and standard_dev.
     *
<<<<<<< HEAD
     * @param float $value Value to normalize
     * @param float $mean Mean Value
     * @param float $stdDev Standard Deviation
     *
     * @return float|string Standardized value, or a string containing an error
     */
    public static function execute($value, $mean, $stdDev)
    {
        $value = Functions::flattenSingleValue($value);
        $mean = Functions::flattenSingleValue($mean);
        $stdDev = Functions::flattenSingleValue($stdDev);
=======
     * @param array|float $value Value to normalize
     *                      Or can be an array of values
     * @param array|float $mean Mean Value
     *                      Or can be an array of values
     * @param array|float $stdDev Standard Deviation
     *                      Or can be an array of values
     *
     * @return array|float|string Standardized value, or a string containing an error
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function execute($value, $mean, $stdDev)
    {
        if (is_array($value) || is_array($mean) || is_array($stdDev)) {
            return self::evaluateArrayArguments([self::class, __FUNCTION__], $value, $mean, $stdDev);
        }
>>>>>>> develop

        try {
            $value = self::validateFloat($value);
            $mean = self::validateFloat($mean);
            $stdDev = self::validateFloat($stdDev);
        } catch (Exception $e) {
            return $e->getMessage();
        }

        if ($stdDev <= 0) {
            return Functions::NAN();
        }

        return ($value - $mean) / $stdDev;
    }
}

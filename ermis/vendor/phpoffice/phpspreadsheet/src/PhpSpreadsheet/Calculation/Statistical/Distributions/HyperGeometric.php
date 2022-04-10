<?php

namespace PhpOffice\PhpSpreadsheet\Calculation\Statistical\Distributions;

<<<<<<< HEAD
=======
use PhpOffice\PhpSpreadsheet\Calculation\ArrayEnabled;
>>>>>>> develop
use PhpOffice\PhpSpreadsheet\Calculation\Exception;
use PhpOffice\PhpSpreadsheet\Calculation\Functions;
use PhpOffice\PhpSpreadsheet\Calculation\MathTrig\Combinations;

class HyperGeometric
{
<<<<<<< HEAD
=======
    use ArrayEnabled;

>>>>>>> develop
    /**
     * HYPGEOMDIST.
     *
     * Returns the hypergeometric distribution. HYPGEOMDIST returns the probability of a given number of
     * sample successes, given the sample size, population successes, and population size.
     *
     * @param mixed $sampleSuccesses Integer number of successes in the sample
<<<<<<< HEAD
     * @param mixed $sampleNumber Integer size of the sample
     * @param mixed $populationSuccesses Integer number of successes in the population
     * @param mixed $populationNumber Integer population size
     *
     * @return float|string
     */
    public static function distribution($sampleSuccesses, $sampleNumber, $populationSuccesses, $populationNumber)
    {
        $sampleSuccesses = Functions::flattenSingleValue($sampleSuccesses);
        $sampleNumber = Functions::flattenSingleValue($sampleNumber);
        $populationSuccesses = Functions::flattenSingleValue($populationSuccesses);
        $populationNumber = Functions::flattenSingleValue($populationNumber);
=======
     *                      Or can be an array of values
     * @param mixed $sampleNumber Integer size of the sample
     *                      Or can be an array of values
     * @param mixed $populationSuccesses Integer number of successes in the population
     *                      Or can be an array of values
     * @param mixed $populationNumber Integer population size
     *                      Or can be an array of values
     *
     * @return array|float|string
     *         If an array of numbers is passed as an argument, then the returned result will also be an array
     *            with the same dimensions
     */
    public static function distribution($sampleSuccesses, $sampleNumber, $populationSuccesses, $populationNumber)
    {
        if (
            is_array($sampleSuccesses) || is_array($sampleNumber) ||
            is_array($populationSuccesses) || is_array($populationNumber)
        ) {
            return self::evaluateArrayArguments(
                [self::class, __FUNCTION__],
                $sampleSuccesses,
                $sampleNumber,
                $populationSuccesses,
                $populationNumber
            );
        }
>>>>>>> develop

        try {
            $sampleSuccesses = DistributionValidations::validateInt($sampleSuccesses);
            $sampleNumber = DistributionValidations::validateInt($sampleNumber);
            $populationSuccesses = DistributionValidations::validateInt($populationSuccesses);
            $populationNumber = DistributionValidations::validateInt($populationNumber);
        } catch (Exception $e) {
            return $e->getMessage();
        }

        if (($sampleSuccesses < 0) || ($sampleSuccesses > $sampleNumber) || ($sampleSuccesses > $populationSuccesses)) {
            return Functions::NAN();
        }
        if (($sampleNumber <= 0) || ($sampleNumber > $populationNumber)) {
            return Functions::NAN();
        }
        if (($populationSuccesses <= 0) || ($populationSuccesses > $populationNumber)) {
            return Functions::NAN();
        }

        $successesPopulationAndSample = (float) Combinations::withoutRepetition($populationSuccesses, $sampleSuccesses);
        $numbersPopulationAndSample = (float) Combinations::withoutRepetition($populationNumber, $sampleNumber);
        $adjustedPopulationAndSample = (float) Combinations::withoutRepetition(
            $populationNumber - $populationSuccesses,
            $sampleNumber - $sampleSuccesses
        );

        return $successesPopulationAndSample * $adjustedPopulationAndSample / $numbersPopulationAndSample;
    }
}

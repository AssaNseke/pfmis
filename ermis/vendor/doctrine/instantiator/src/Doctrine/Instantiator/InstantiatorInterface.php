<?php

namespace Doctrine\Instantiator;

use Doctrine\Instantiator\Exception\ExceptionInterface;

/**
 * Instantiator provides utility methods to build objects without invoking their constructors
 */
interface InstantiatorInterface
{
    /**
     * @param string $className
<<<<<<< HEAD
     *
     * @return object
=======
     * @phpstan-param class-string<T> $className
     *
     * @return object
     * @phpstan-return T
>>>>>>> develop
     *
     * @throws ExceptionInterface
     *
     * @template T of object
<<<<<<< HEAD
     * @phpstan-param class-string<T> $className
=======
>>>>>>> develop
     */
    public function instantiate($className);
}

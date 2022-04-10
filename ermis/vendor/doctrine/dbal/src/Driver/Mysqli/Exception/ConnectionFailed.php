<?php

declare(strict_types=1);

namespace Doctrine\DBAL\Driver\Mysqli\Exception;

use Doctrine\DBAL\Driver\AbstractException;
use mysqli;
use mysqli_sql_exception;
use ReflectionProperty;

<<<<<<< HEAD
=======
use function assert;

>>>>>>> develop
/**
 * @internal
 *
 * @psalm-immutable
 */
final class ConnectionFailed extends AbstractException
{
    public static function new(mysqli $connection): self
    {
<<<<<<< HEAD
        return new self($connection->connect_error, 'HY000', $connection->connect_errno);
=======
        $error = $connection->connect_error;
        assert($error !== null);

        return new self($error, 'HY000', $connection->connect_errno);
>>>>>>> develop
    }

    public static function upcast(mysqli_sql_exception $exception): self
    {
        $p = new ReflectionProperty(mysqli_sql_exception::class, 'sqlstate');
        $p->setAccessible(true);

        return new self($exception->getMessage(), $p->getValue($exception), (int) $exception->getCode(), $exception);
    }
}

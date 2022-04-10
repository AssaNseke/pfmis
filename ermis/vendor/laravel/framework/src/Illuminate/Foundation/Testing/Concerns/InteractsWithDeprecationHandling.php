<?php

namespace Illuminate\Foundation\Testing\Concerns;

use ErrorException;

trait InteractsWithDeprecationHandling
{
    /**
     * The original deprecation handler.
     *
     * @var callable|null
     */
    protected $originalDeprecationHandler;

    /**
     * Restore deprecation handling.
     *
     * @return $this
     */
    protected function withDeprecationHandling()
    {
        if ($this->originalDeprecationHandler) {
            set_error_handler(tap($this->originalDeprecationHandler, function () {
                $this->originalDeprecationHandler = null;
            }));
        }

        return $this;
    }

    /**
     * Disable deprecation handling for the test.
     *
     * @return $this
     */
    protected function withoutDeprecationHandling()
    {
        if ($this->originalDeprecationHandler == null) {
            $this->originalDeprecationHandler = set_error_handler(function ($level, $message, $file = '', $line = 0) {
<<<<<<< HEAD
                if (error_reporting() & $level) {
=======
                if (in_array($level, [E_DEPRECATED, E_USER_DEPRECATED]) || (error_reporting() & $level)) {
>>>>>>> develop
                    throw new ErrorException($message, 0, $level, $file, $line);
                }
            });
        }

        return $this;
    }
}

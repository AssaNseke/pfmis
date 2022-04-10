<?php

/*
 * This file is part of Psy Shell.
 *
<<<<<<< HEAD
 * (c) 2012-2020 Justin Hileman
=======
 * (c) 2012-2022 Justin Hileman
>>>>>>> develop
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Psy\ExecutionLoop;

use Psy\Shell;

/**
 * Abstract Execution Loop Listener class.
 */
abstract class AbstractListener implements Listener
{
    /**
     * {@inheritdoc}
     */
    public function beforeRun(Shell $shell)
    {
    }

    /**
     * {@inheritdoc}
     */
    public function beforeLoop(Shell $shell)
    {
    }

    /**
     * {@inheritdoc}
     */
    public function onInput(Shell $shell, string $input)
    {
    }

    /**
     * {@inheritdoc}
     */
    public function onExecute(Shell $shell, string $code)
    {
    }

    /**
     * {@inheritdoc}
     */
    public function afterLoop(Shell $shell)
    {
    }

    /**
     * {@inheritdoc}
     */
    public function afterRun(Shell $shell)
    {
    }
}

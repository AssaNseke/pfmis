<?php

namespace Maatwebsite\Excel\Concerns;

<<<<<<< HEAD
=======
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Relations\Relation;
>>>>>>> develop
use Illuminate\Database\Query\Builder;

interface FromQuery
{
    /**
<<<<<<< HEAD
     * @return Builder
=======
     * @return Builder|EloquentBuilder|Relation
>>>>>>> develop
     */
    public function query();
}

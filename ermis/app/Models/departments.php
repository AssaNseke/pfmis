<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class departments extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'dept_id',
        'dept_name',
    ];
    protected $dates = ['deleted_at'];
}

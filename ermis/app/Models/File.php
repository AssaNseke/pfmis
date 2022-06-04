<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'file_subject',
        'category_id',
        'status'
    ];

    protected $dates = ['deleted_at'];

    public function fileCategory(){
        return $this->belongsTo(FileCategory::class, 'category_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class DoumentFiling extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'file_id',
        'document_id',
        'folio_id',
    ];

    protected $dates = ['deleted_at'];

    public function file(){
        return $this->hasMany(File::class, 'file_id');
    }
    public function document(){
        return $this->hasMany(Document::class, 'document_id');
    }

    public function folio(){
        return $this->hasMany(Folio::class, 'folio_id');
    }
}

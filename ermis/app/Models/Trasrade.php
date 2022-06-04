<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Trasrade extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'section_id',
        'document_filing_id',
        'initial',
        'coment',
        'action',
    ];

    protected $dates = ['deleted_at'];

    public function section(){
        return $this->hasMany(Section::class, 'section_id');
    }
    public function documentFiling(){
        return $this->hasOne(DocumentFiling::class, 'document_filing_id');
    }

    public function initial(){
        return $this->hasMany(Users::class, 'initial');
    }

}

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

    public function contact(){
        return $this->belongsTo(Contact::class, 'contact_id');
    }
    public function department(){
        return $this->belongsTo(department::class, 'dept_id');
    }

    public function file(){
        return $this->belongsTo(File::class, 'file_id');
    }

    public function employeeCategory(){
        return $this->belongsTo(employeeCategory::class, 'category_id');
    }
}

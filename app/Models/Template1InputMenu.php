<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Template1InputMenu extends Model
{
    use HasFactory;

    protected $fillable = [
        'template1InputID',
    ];

    public function template1Input()
    {
        return $this->belongsTo(Template1Input::class, 'template1InputID', 'template1InputID');
    }
}

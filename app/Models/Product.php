<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'productSlug',
        'productName',
        'productTemplateNumber',
    ];

    public function template1Input()
    {
        return $this->belongsTo(Template1Input::class, 'productId', 'productId');
    }
}

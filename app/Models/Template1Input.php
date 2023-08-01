<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Template1Input extends Model
{
    use HasFactory;

    protected $fillable = [
        'productId',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'productId', 'productId');
    }

    public function template1InputMenu()
    {
        return $this->belongsTo(Template1InputMenu::class, 'template1InputID', 'template1InputID');
    }

    public function template1InputProductInfo()
    {
        return $this->belongsTo(Template1InputProductInfo::class, 'template1InputID', 'template1InputID');
    }

    public function template1InputSpec()
    {
        return $this->belongsTo(Template1InputSpec::class, 'template1InputID', 'template1InputID');
    }

    public function template1InputGift()
    {
        return $this->belongsTo(Template1InputGift::class, 'template1InputID', 'template1InputID');
    }

    public function template1InputProductExtendedInfo()
    {
        return $this->belongsTo(Template1InputProductExtendedInfo::class, 'template1InputID', 'template1InputID');
    }

    public function template1InputReviews()
    {
        return $this->hasMany(Template1InputReview::class, 'template1InputID', 'template1InputID');
    }
}

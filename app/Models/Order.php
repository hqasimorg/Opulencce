<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'date',
        'customer_name',
        'customer_email',
        'customer_phone',
        'customer_address',
        'total_amount',
    ];

    public function order_details()
    {
        return $this->hasMany(OrderDetail::class, 'order_id', 'order_id');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(['message' => 'HELLO WORLD']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {


            $new_order = new Order;

            $new_order->customer_name = $request->input('customer_name');
            $new_order->customer_email = $request->input('customer_email');
            $new_order->customer_phone = $request->input('customer_phone');
            $new_order->customer_address = $request->input('customer_address');
            $new_order->total_amount = $request->input('total_amount');

            $new_order->save();

            for ($i = 0; $i < 5; $i++) {


                OrderDetail::create([
                    'order_id' => $new_order->id,
                    'item_name'  => 'item_name' . $i,
                    'item_price'  => '10023' . $i,
                ]);
            }



            return response()->json(['message' => 'Successfully Saved']);
        } catch (\Throwable $th) {
            return response(['error' => $th->getMessage()], 200);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}

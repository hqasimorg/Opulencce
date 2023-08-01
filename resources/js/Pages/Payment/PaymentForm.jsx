import React, { useState } from "react";

export default function PaymentForm() {
    const handlePaymentSubmit = async (event) => {
        event.preventDefault();
    };
    return (
        <div className="container mx-auto py-8">
            <form onSubmit={handlePaymentSubmit} className="max-w-sm mx-auto">
                <div className="mb-4">
                    <label className="block mb-2">
                        Card details
                        {/* <CardElement className="mt-2 p-2 border border-gray-300 rounded" /> */}
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Pay Now
                </button>
            </form>
            {/* {paymentError && (
                <p className="text-red-500 mt-4">{paymentError}</p>
            )} */}
        </div>
    );
}

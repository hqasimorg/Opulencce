<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('template1_inputs', function (Blueprint $table) {
            $table->id('template1InputID');
            $table->foreignId('productId');
            $table->foreign('productId')->references('productId')->on('products')->onDelete('cascade');
            $table->timestamps();
        }); 

        // Schema::create('template1_input_menus', function (Blueprint $table) {
        //     $table->id('template1InputMenuID');
        //     $table->foreignId('template1InputID');
        //     $table->foreign('template1InputID')->references('template1InputID')->on('template1_inputs')->onDelete('cascade');
        //     $table->timestamps();
        // });

        // Schema::create('template1_input_product_infos', function (Blueprint $table) {
        //     $table->id('template1InputProductInfosID');
        //     $table->foreignId('template1InputID');
        //     $table->foreign('template1InputID')->references('template1InputID')->on('template1_inputs')->onDelete('cascade');
        //     $table->timestamps();
        // });

        // Schema::create('template1_input_specs', function (Blueprint $table) {
        //     $table->id('template1InputSpecsID');
        //     $table->foreignId('template1InputID');
        //     $table->foreign('template1InputID')->references('template1InputID')->on('template1_inputs')->onDelete('cascade');
        //     $table->timestamps();
        // });

        // Schema::create('template1_input_gifts', function (Blueprint $table) {
        //     $table->id('template1InputGiftsID');
        //     $table->foreignId('template1InputID');
        //     $table->foreign('template1InputID')->references('template1InputID')->on('template1_inputs')->onDelete('cascade');
        //     $table->timestamps();
        // });

        // Schema::create('template1_input_product_extended_infos', function (Blueprint $table) {
        //     $table->id('template1InputProductExtendedInfosID');
        //     $table->foreignId('template1InputID');
        //     $table->foreign('template1InputID')->references('template1InputID')->on('template1_inputs')->onDelete('cascade');
        //     $table->timestamps();
        // });

        // Schema::create('template1_input_reviews', function (Blueprint $table) {
        //     $table->id('template1InputReviewsID');
        //     $table->foreignId('template1InputID');
        //     $table->foreign('template1InputID')->references('template1InputID')->on('template1_inputs')->onDelete('cascade');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('template1_inputs');
    }
};

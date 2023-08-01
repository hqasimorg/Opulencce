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
        Schema::create('template1_input_reviews', function (Blueprint $table) {
            $table->id('template1InputReviewID');
            $table->foreignId('template1InputID');
            $table->foreign('template1InputID')->references('template1InputID')->on('template1_inputs')->onDelete('cascade');
            $table->string('name')->nullable()->default('');
            $table->string('star')->nullable()->default('');
            $table->string('tagline')->nullable()->default('');
            $table->date('date')->nullable();
            $table->boolean('status')->default(0);
            $table->string('description')->nullable()->default('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('template1_input_reviews');
    }
};

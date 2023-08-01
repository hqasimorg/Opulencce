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
        Schema::create('template1_input_product_extended_infos', function (Blueprint $table) {
            $table->id('template1InputProductExtendedInfoID');
            $table->foreignId('template1InputID');
            $table->foreign('template1InputID')->references('template1InputID')->on('template1_inputs')->onDelete('cascade');
            $table->string('question1')->nullable()->default('');
            $table->string('question2')->nullable()->default('');
            $table->string('question3')->nullable()->default('');
            $table->string('question4')->nullable()->default('');
            $table->string('question5')->nullable()->default('');
            $table->string('answer1')->nullable()->default('');
            $table->string('answer2')->nullable()->default('');
            $table->string('answer3')->nullable()->default('');
            $table->string('answer4')->nullable()->default('');
            $table->string('answer5')->nullable()->default('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('template1_input_product_extended_infos');
    }
};

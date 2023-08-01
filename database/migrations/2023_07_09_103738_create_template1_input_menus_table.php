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
        Schema::create('template1_input_menus', function (Blueprint $table) {
            $table->id('template1InputMenuID');
            $table->foreignId('template1InputID');
            $table->foreign('template1InputID')->references('template1InputID')->on('template1_inputs')->onDelete('cascade');

            $table->string('leftSide1')->nullable()->default('');
            $table->string('leftSide2')->nullable()->default('');
            $table->string('rightSide1')->nullable()->default('');
            $table->string('rightSide2')->nullable()->default('');
            $table->string('ctaButtonRightSide')->nullable()->default('');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('template1_input_menus');
    }
};

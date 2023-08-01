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
        Schema::create('template1_input_product_infos', function (Blueprint $table) {
            $table->id('template1InputProductInfoID');
            $table->foreignId('template1InputID');
            $table->foreign('template1InputID')->references('template1InputID')->on('template1_inputs')->onDelete('cascade');
            $table->decimal('price', 9, 2)->nullable()->default(0);
            $table->string('ctaGlobal')->nullable()->default('');
            $table->string('shortDescription')->nullable()->default('');
            $table->string('main4Benefits')->nullable()->default('');
            $table->string('videoLink')->nullable()->default('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('template1_input_product_infos');
    }
};

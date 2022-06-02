<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrasradesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trasrades', function (Blueprint $table) {
            $table->id();
            $table->string('trans_section');
            $table->string('trans_folio no');
            $table->string('trans_intial');
            $table->string('trans_date');
            $table->string('trans_action');
            $table->string('trans_intial');
            $table->string('trans_date');
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trasrades');
    }
}

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
        Schema::create('transladers', function (Blueprint $table) {
            $table->id();

            $table->integer('section_id')->unsigned();
            $table->foreign('section_id')
            ->references('id')->on('sections')
            ->onUpdate('cascade')
            ->onDelete('restrict');

            $table->integer('document_filing_id')->unsigned();
            $table->foreign('document_filing_id')
            ->references('id')->on('document_filings')
            ->onUpdate('cascade')
            ->onDelete('restrict');

            $table->integer('initial')->unsigned();
            $table->foreign('initial')
            ->references('id')->on('users')
            ->onUpdate('cascade')
            ->onDelete('restrict');

            $table->text('comment')->nullable();
            $table->string('action')->default('Foward');

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

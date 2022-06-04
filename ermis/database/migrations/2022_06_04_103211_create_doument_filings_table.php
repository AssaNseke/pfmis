<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoumentFilingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doument_filings', function (Blueprint $table) {
            $table->id();

            $table->integer('file_id')->unsigned();
            $table->foreign('file_id')
            ->references('id')->on('files')
            ->onUpdate('cascade')
            ->onDelete('restrict');

            $table->integer('document_id')->unsigned();
            $table->foreign('document_id')
            ->references('id')->on('documents')
            ->onUpdate('cascade')
            ->onDelete('restrict');

            $table->integer('folio_id')->unsigned();
            $table->foreign('folio_id')
            ->references('id')->on('folios')
            ->onUpdate('cascade')
            ->onDelete('restrict');

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
        Schema::dropIfExists('doument_filings');
    }
}

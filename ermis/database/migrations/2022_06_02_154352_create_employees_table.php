<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('emp_name');
            $table->string('emp_number')->nullable();

            $table->integer('dept_id')->unsigned();
            $table->foreign('dept_id')
            ->references('id')->on('departments')
            ->onUpdate('cascade')
            ->onDelete('restrict');

            $table->integer('file_id')->unsigned();
            $table->foreign('file_id')
            ->references('id')->on('files')
            ->onUpdate('cascade')
            ->onDelete('restrict');

            $table->integer('contact_id')->unsigned();
            $table->foreign('contact_id')
            ->references('id')->on('contacts')
            ->onUpdate('cascade')
            ->onDelete('restrict');

            $table->integer('category_id')->unsigned();
            $table->foreign('category_id')
            ->references('id')->on('employee_categories')
            ->onUpdate('cascade')
            ->onDelete('restrict');

            $table->string('status')->default('Active');


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
        Schema::dropIfExists('employees');
    }
}

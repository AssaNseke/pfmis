<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\DepartmentResource;
use App\Models\departments;

class DepartmentsController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = departments::all()->sortBy('id');
        return new DepartmentResource($results);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $department = new Department();
        $department->inst_name = $request->inst_name;
        $department->vote_code = $request->vote_code;
        $department->sub_vote_no = $request->sub_vote_no;
        $department->vote_name = $request->vote_name;
        $department->sub_vote_name = $request->sub_vote_name;
        $department->created_by = $request->created_by;
        $department->updated_by = $request->updated_by;
        $department->deleted_by = $request->deleted_by;
        $department->status = $request->status;
        $department->created_at = $request->created_at;
        $department->updated_at = $request->updated_at;
        $department->deleted_at = $request->deleted_at;
        if($department->save()){
            return new DepartmentResource($department);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department, $id)
    {
        $department = departments::findOrFail($id);
        return new DepartmentResource($department);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit(Department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Department $department, $id)
    {
        $department = Department::findOrFail($id);
        $department->inst_name = $request->inst_name;
        $department->vote_code = $request->vote_code;
        $department->sub_vote_no = $request->sub_vote_no;
        $department->vote_name = $request->vote_name;
        $department->sub_vote_name = $request->sub_vote_name;
        if($department->save()){
            return new DepartmentResource($department);
    }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $department, $id)
    {
        $department = Department::findOrFail($id);
        if($department->delete()){
            return new DepartmentResource($department);
        }
    }

}

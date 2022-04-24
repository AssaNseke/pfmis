<?php

namespace App\Http\Controllers;
use App\Models\employeeCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\employeeCategoryResource;

class EmployeeCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = employeeCategory::all()->sortBy('id');
        return new employeeCategoryResource($results);
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
        $employeecategory = new employeeCategory();
        $employeecategory->employeecategory_name = $request->employeecategory_name;
        $employeecategory->created_at = $request->created_at;
        $employeecategory->updated_at = $request->updated_at;
        $employeecategory->deleted_at = $request->deleted_at;
        if($employeecategory->save()){
            return new employeeCategoryResource($employeecategory);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\employeeCategory  $employeecategory
     * @return \Illuminate\Http\Response
     */
    public function show(employeeCategory $employeecategory, $id)
    {
        $employeecategory = employeeCategory::findOrFail($id);
        return new employeeCategoryResource($employeecategory);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\employeeCategory  $employeecategory
     * @return \Illuminate\Http\Response
     */
    public function edit(employeeCategory $employeecategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\employeeCategory  $employeecategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, employeeCategory $employeecategory, $id)
    {
        $employeecategory = employeeCategory::findOrFail($id);
        $employeecategory->employeecategory_name = $request->employeecategory_name;
        $employeecategory->created_at = $request->created_at;
        $employeecategory->updated_at = $request->updated_at;
        $employeecategory->deleted_at = $request->deleted_at;
        if($employeecategory->save()){
            return new employeeCategoryResource($employeecategory);
    }
    }
    public function list(Request $request)
    {
        $employeecategory_query=employeeCategory::with(['activity']);
        if($request->activity_id){
            $employeecategory_query->where('activity_id',$request->activity_id);
        }
        $employeecategory=$employeecategory_query->get();
                    return response()->json([

                    'message'=>'employeeCategory successfully fetched',
                    'data'=>$employeecategory
                    ],200);
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\employeeCategory  $employeecategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(employeeCategory $employeecategory, $id)
    {
        $employeecategory = employeeCategory::findOrFail($id);
        if($employeecategory->delete()){
            return new employeeCategoryResource($employeecategory);
        }
    }
}

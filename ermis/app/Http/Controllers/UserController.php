<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\UserResource;
use Tymon\JWTAuth\Contracts\JWTSubject;

use Validator;

class UserController extends Controller
{

    public function __construct(){
        $this->middleware('auth:api', ['except' =>['login']]);
    }
    public function index(Request $request)
    {
        $user_query=User::with(['department','role']);
        if($request->id){
            $user_query->where('id',$request->id);
        }
        $user=$user_query->get();
                    return response()->json([

                    'message'=>'All Users successfully fetched',
                    'data'=>$user
                    ],200);

    }


    //User login
    public function register(Request $request) {
        $validator  =   Validator::make($request->all(), [
            "name"  =>  "required",
            "email"  =>  "required|email",
            "department_id" => "required",
            "role_id" => "required",
            "password"  =>  "required",

        ]);

        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_errors" => $validator->errors()]);
        }

        $inputs = $request->all();
        $inputs["password"] = Hash::make($request->password);


        $user   =   User::create($inputs);

        if(!is_null($user)) {
            return response()->json(["status" => "success", "message" => "Success! registration completed", "data" => $user]);
        }
        else {
            return response()->json(["status" => "failed", "message" => "Registration failed!"]);
        }
    }/*end of registration*/



    //User login
    public function login(Request $request){
        $validator = Validator::make($request ->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:4'
        ]);

        if ($validator->fails()){
            return response()->json([$validator->errors(),400]);
        }

        $token_validity= 24 * 60;

        $this->guard()->factory()->setTTL($token_validity);

        if(!$token = $this->guard()->attempt($validator->validated())){
            return response()->json(['Status' => 'Failed']);
        }
        $user       =       Auth::user();
        $token      =       $this->respondWithToken($token);
        //return $this->respondWithToken($token);
        $token = $this->respondWithToken($token);

        return response()->json(["status" => "success", "login" => true, "token" => $token,  "data" => $user]);

    } /*end of login*/


    //User logout
    public function logout(){
        $this->guard()->logout();
        return response()->json(['message' => 'Logged out successfully']);
    }/*end of logout*/


    //User user profile
    public function profile(){
        return response()->json($this->guard()->user());
    }/*end of profile*/


     //Token Refresh
    public function refresh(){
        return $this->responseWithToken($this->guard()->refresh());
    }
    public function respondWithToken($token){
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'token_validity' => $this->guard()->factory()->getTTL() * 60
        ]);

    }/*end of token refresh*/


    //User Detail
    public function user() {
        $user       =       Auth::user();
        if(!is_null($user)) {
            return response()->json(["status" => "success", "data" => $user]);
        }

        else {
            return response()->json(["status" => "failed", "message" => "Whoops! no user found"]);
        }
    }/*end of user details*/


    //Fetch user by department ID
    public function list(Request $request)
    {
        $user_query=User::with(['department','role']);
        if($request->department_id){
            $user_query->where('department_id',$request->department_id);
        }
        $user=$user_query->get();
                    return response()->json([

                    'message'=>'Users successfully fetched',
                    'data'=>$user
                    ],200);

    }/*end of fetch by department ID*/

    //Authenticatio Guard
    protected function guard(){
        return Auth::guard();
    }/*end of guard*/
}


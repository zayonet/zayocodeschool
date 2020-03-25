<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use illuminate\Support\Facades\Auth;
use Auth;
use App\User;
use Illuminate\Support\Facades\Hash;
/**vc pode pegar o usuário logado de várias formas, usando  Auth::user(), usando helper auth()->user() e também pela request fazendo $request->user(); ou pela fachada da request tb, Request::user(); */
class AppController extends Controller
{
    public function init(){
        $user = Auth::user();
        //$user = auth()->user();
        return response()->json(['user' => $user], 200);
    }
    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], true)) {
            return response()->json(Auth::user(), 200);
        }
        else{
            return response()->json(['error' => 'Could not allow you in. Sorry'], 401);
        }
    }
    public function register(Request $request)
    {   
        $user = User::where('email', $request->email)->first();

        if (isset($user->id)) {
            return response()->json(['error' => 'User already exist.'], 401);
        }
        $user = new User();

        $user->name = $request->name;        
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        Auth::login($user);

        return response()->json($user, 200);
    }
    public function logout()
    {
        Auth::logout();
    }
}

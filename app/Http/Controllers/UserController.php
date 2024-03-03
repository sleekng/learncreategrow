<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {

        if($id=='matz'){

            $users = User::with('skills')->get();
            $usersCount = User::count();
    
            return Inertia::render('Users',[
                'users'=>$users,
                'usersCount'=>$usersCount
            ]);
        }else{
            return 'you are not allowed to view this page';
        }
        
        
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
 /*  */
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

       $user = User::findOrfail($id);
        $user->delete();

        return redirect()->back()->with('message', 'User deleted successfully.');
    }
}

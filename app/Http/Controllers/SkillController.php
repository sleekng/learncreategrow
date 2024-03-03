<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use App\Models\User;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {

        if($id=='matz'){

          
        $skills = Skill::all();
        return inertia('SkillForm', ['skills' => $skills]);


        }else{
            return 'you are not allowed to view this page';
        }

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('SkillForm');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255|unique:skills',
        ]);

        Skill::create([
            'name' => $request->name,
        ]);

        return redirect()->back()->with('message', 'Skill added successfully.');


    }

    /**
     * Display the specified resource.
     */
    public function show(Skill $skill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Skill $skill)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Skill $skill)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

       $skill = Skill::findOrfail($id);
       $skill->delete();

        return redirect()->back()->with('message', 'Skill deleted successfully.');
    }
}

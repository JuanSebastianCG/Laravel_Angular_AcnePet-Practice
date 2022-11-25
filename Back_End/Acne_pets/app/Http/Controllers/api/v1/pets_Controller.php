<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\Pet;
use Illuminate\Http\Request;

use App\Http\Requests\api\v1\pet_Request;
use App\Http\Resources\api\v1\pet_Resource;


class pets_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return  response()->json(['data' => pet_Resource::collection(Pet::all())], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /* validation  pet request */
        $validation = new pet_Request();
        $validator = $validation->rules(); 
        $request->validate($validator);

        /* create new pet */
        $pet = new Pet();
        $pet->name = $request->name;
        $pet->date_of_birth = $request->date_of_birth;
        $pet->type = $request->type;
        $pet->save();

        return response()->json(['data' => new pet_Resource($pet)], 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function show(Pet $pet)
    {
        return response()->json(['data' => new pet_Resource($pet)], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pet $pet)
    {
        /* validation  pet request */
        $validation = new pet_Request();
        $validator = $validation->rules(); 
        $request->validate($validator);

        /* update pet */
        $pet->name = $request->name;
        $pet->date_of_birth = $request->date_of_birth;
        $pet->type = $request->type;
        $pet->save();

        return response()->json(['data' => new pet_Resource($pet)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pet $pet)
    {
        $pet->delete();
        return response()->json(['data' => new pet_Resource($pet)], 200);
    }
}

<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\client_pet;

use Illuminate\Http\Request;

use App\Http\Requests\api\v1\client_pet_Request;
use App\Http\Requests\api\v1\pet_Request;
use App\Http\Requests\api\v1\pet_Request_client;

use App\Http\Resources\api\v1\pet_Resource;





class client_pets_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     /* get pets from one user by the request endpoint */
    public function index($client_id)
    {
        $client_pets = client_pet::where('client_id', $client_id)->get();

        /* get from clien_pets the pet related */
        $pets =  $client_pets->map(function($client_pet){
            return $client_pet->pet;
        });

        return response()->json(pet_Resource::collection($pets), 200);
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $client_id)
    {
        $validation = new client_pet_Request();
        $validation = $validation->rules();
        $validator = \Validator::make($request->all(), $validation);
        if ($validator->passes()) {
            $client_pet = new client_pet();
            $client_pet->client_id = $client_id;
            $client_pet->pet_id = $request->pet_id;
            $client_pet->save();
            return response()->json( new pet_Resource($client_pet->pet), 201);
        } else {
            return response()->json( $validator->errors()->all(), 400);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\client_pet  $client_pet
     * @return \Illuminate\Http\Response
     */
    public function show($client_id, $pet)
    {
        $client_pet = client_pet::where('client_id', $client_id)->where('pet_id', $pet)->first();
        return response()->json(new pet_Resource($client_pet->pet), 200);
       
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\client_pet  $client_pet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$client_id, $pet)
    {
        $validation = new petrequest_client();
        $validation = $validation->rules();
        $validator = \Validator::make($request->all(), $validation);
        if ($validator->passes()) {
            $client_pet = client_pet::where('client_id', $client_id)->where('pet_id', $pet)->first();
            $client_pet->pet->name = $request->name;
            $client_pet->pet->save();
            return response()->json( new pet_Resource($client_pet->pet), 200);
        } else {
            return response()->json( $validator->errors()->all(), 400);
        }
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\client_pet  $client_pet
     * @return \Illuminate\Http\Response
     */
    public function destroy($client_id, $pet)
    {
        $client_pet = client_pet::where('client_id', $client_id)->where('pet_id', $pet)->first();
        $client_pet->delete();
        return response()->json($client_pet, 200);
        
    }
}

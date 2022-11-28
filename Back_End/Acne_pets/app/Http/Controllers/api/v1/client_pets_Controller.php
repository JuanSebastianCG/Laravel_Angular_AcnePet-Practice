<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\client_pet;
use Illuminate\Http\Request;

use App\Http\Requests\api\v1\client_pet_Request;
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

        return pet_Resource::collection($pets);
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\client_pet  $client_pet
     * @return \Illuminate\Http\Response
     */
    public function show(client_pet $client_pet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\client_pet  $client_pet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, client_pet $client_pet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\client_pet  $client_pet
     * @return \Illuminate\Http\Response
     */
    public function destroy(client_pet $client_pet)
    {
        //
    }
}

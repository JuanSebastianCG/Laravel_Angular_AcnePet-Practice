<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\client_pet;
use Illuminate\Http\Request;

use App\Http\Requests\api\v1\client_pet_Request;
use App\Http\Resources\api\v1\client_pet_Resource;



class client_pets_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

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

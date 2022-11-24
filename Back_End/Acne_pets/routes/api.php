<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\api\v1\pets_Controller;
use App\Http\Controllers\api\v1\client_pets_Controller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::group(['prefix' => 'v1'], function () {

    Route::apiResource('pets', pets_Controller::class);

    Route::group(['prefix' => 'client_pets'], function () {
        Route::get('{user_id}', [client_pets_Controller::class, 'index']);/* show pets of the user */
        Route::post('{user_id}', [client_pets_Controller::class, 'store']); /* add pet to user */
        Route::delete('{user_id}/{pet_id}', [client_pets_Controller::class, 'destroy']); /* delete pet from user */
        Route::put('{user_id}/{pet_id}', [client_pets_Controller::class, 'update']); /* update pet from user */
    });

});
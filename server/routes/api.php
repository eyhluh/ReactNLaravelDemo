<?php

use App\Http\Controllers\Api\GenderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(GenderController::class)->prefix('/gender')->group(function () {
    Route::get('/loadGenders', 'loadGenders');
    Route::get('/loadGender/{genderId}', 'getGender');
    Route::post('/storeGender', 'storeGender');
    Route::put('/updateGender/{gender}', 'updateGender');
    Route::put('/destryGender/{gender}', 'destroyGender');
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

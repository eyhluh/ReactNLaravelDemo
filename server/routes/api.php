<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GenderController;

Route::middleware('api')->group(function () {
    Route::get('/genders', [GenderController::class, 'index']);
});

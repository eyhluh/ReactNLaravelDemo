<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GenderController extends Controller
{
    public function index()
    {
        // sample data for now
        return response()->json([
            ['id' => 1, 'name' => 'Male'],
            ['id' => 2, 'name' => 'Female'],
        ]);
    }
}

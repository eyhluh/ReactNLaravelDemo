<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GenderController extends Controller
{
    public function storeGender(Request $request)
    {
        $validated = $request->validate([
            'gender' => ['required', 'min:3', 'max:15']
        ]);

        Gender::create([
            'gender' => $validated['gender']
        ]);

        return response()->json([
            'message', 'Gender Succesfully Saved'
        ], 200);
    }
}

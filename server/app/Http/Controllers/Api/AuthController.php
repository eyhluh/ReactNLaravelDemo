<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validated = $request->validate([
            'username' => ['required', 'min:6', 'max:12'],
            'password' => ['required', 'min:6', 'max:12'],
        ]);

        $user = User::with(['gender'])
            ->where('tbl_users.username', $validated['username'])
            ->where('tbl_users.is_deleted', false)
            ->first();

        if (!$user || !Auth::attempt(['username' => $validated['username'], 'password' => $validated['password']])) {
            return response()->json(
                [
                    'message' => 'The provide credentials are incorrect.'
                ],
                401
            );
        }

        $user->tokens()->delete();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken->delete();

        return response()->json([
            'message' => 'Logged Out Successfully'
        ], 200);
    }

    public function me(Request $request)
    {
        return response()->json([
            'user' => $request->user()->load(['gender'])
        ], 200);
    }
}

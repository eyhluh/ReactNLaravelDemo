<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function loadUsers(Request $request)
    {

        $search = $request->input('search');

        $users = User::with(['gender'])
            ->leftJoin('tbl_genders', 'tbl_users.gender_id', '=', 'tbl_genders.gender_id')
            ->where('tbl_users.is_deleted', false)
            ->orderBy('tbl_users.last_name', 'asc')
            ->orderBy('tbl_users.first_name', 'asc')
            ->orderBy('tbl_users.middle_name', 'asc')
            ->orderBy('tbl_users.suffix_name', 'asc');

        if ($search) {
            $users->where(function ($user) use ($search) {
                $user->where('tbl_users.first_name', 'like', "%{$search}%")
                    ->orWhere('tbl_users.middle_name', 'like', "%{$search}%")
                    ->orWhere('tbl_users.last_name', 'like', "%{$search}%")
                    ->orWhere('tbl_users.suffix_name', 'like', "%{$search}%")
                    ->orWhere('tbl_genders.gender', 'like', "%{$search}%");
            });
        }

        $users = $users->paginate(15);

        return response()->json([
            'users' => $users
        ], 200);
    }

    public function storeUser(Request $request)
    {
        $validated = $request->validate([
            'first_name' => ['required', 'max:55'],
            'middle_name' => ['nullable', 'max:55'],
            'last_name' => ['required', 'max:55'],
            'suffix_name' => ['nullable', 'max:55'],
            'gender' => ['required'],
            'birth_date' => ['required', 'date'],
            'username' => ['required', 'min:6', 'max:6', Rule::unique('tbl_users', 'username')],
            'password' => ['required', 'min:6', 'max:12', 'confirmed'],
            'password_confirmation' => ['required', 'min:6', 'max:12']
        ]);

        $age = date_diff(date_create($validated['birth_date']), date_create('now'))->y;

        User::create([
            'first_name' => $validated['first_name'],
            'middle_name' => $validated['middle_name'],
            'last_name' => $validated['last_name'],
            'suffix_name' => $validated['suffix_name'],
            'gender_id' => $validated['gender'],
            'birth_date' => $validated['birth_date'],
            'age' => $age,
            'username' => $validated['username'],
            'password' => $validated['password'],
        ]);

        return response()->json([
            'message' => 'User Succesfully Saved.'
        ], 200);
    }

    public function updateUser(Request $request, User $user)
    {
        $validated = $request->validate([
            'first_name' => ['required', 'max:55'],
            'middle_name' => ['nullable', 'max:55'],
            'last_name' => ['required', 'max:55'],
            'suffix_name' => ['nullable', 'max:55'],
            'gender' => ['required'],
            'birth_date' => ['required', 'date'],
            'username' => ['required', 'min:6', 'max:6', Rule::unique('tbl_users', 'username')->ignore($user)],
        ]);

        $age = date_diff(date_create($validated['birth_date']), date_create('now'))->y;

        $user->update([
            'first_name' => $validated['first_name'],
            'middle_name' => $validated['middle_name'],
            'last_name' => $validated['last_name'],
            'suffix_name' => $validated['suffix_name'],
            'gender_id' => $validated['gender'],
            'birth_date' => $validated['birth_date'],
            'age' => $age,
            'username' => $validated['username'],
        ]);

        return response()->json([
            'message' => 'User Successfully Updated.',
            'user' => $user
        ], 200);
    }

    public function destroyUser(User $user)
    {
        $user->update([
            'is_deleted' => true
        ]);

        return response()->json([
            'message' => 'User Succesfully Deleted.'
        ], 200);
    }
}

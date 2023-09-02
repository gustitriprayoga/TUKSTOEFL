<?php

namespace App\Actions\Fortify;

use App\Models\User;
use App\Models\MasterData\Student;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Ramsey\Uuid\Uuid;
use App\Notifications\SendNewUserNotification;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        $niceNames = [
            'jurusan' => 'jurusan'
        ];

        $validator = Validator::make($input, [
            'name' => 'required|string|max:255',
            'nim_nidn'   => 'required|string|max:50',
            'jurusan' => 'required|string|max:255',
            // 'province_id' => 'required',
            // 'city_id' => 'required',
            // 'district_id' => 'required',
            // 'village_id' => 'required',
            // 'address' => 'required',
            'phone_number' => 'required|numeric|unique:students',
            'gender' => 'required',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed'
        ],
        [], // messages
        [
            'name' => __('user.name'),
            'nim_nidn' => _('user.nim_nidn'),
            'jurusan' => _('user.jurusan'),
            // 'province_id' => __('user.province_id'),
            // 'city_id' => __('user.city_id'),
            // 'district_id' => __('user.district_id'),
            // 'village_id' => __('user.village_id'),
            // 'address' => __('user.address'),
            'phone_number' => __('user.phone_number'),
            'gender' => __('user.gender'),
            'email' => __('user.email'),
            'password' => __('user.password'),

        ])->validate();

        $user = User::create([
            'id' => Uuid::uuid4()->getHex(),
            'name' => $input['name'],
            'email' => $input['email'],
            'nim_nidn' => $input['nim_nidn'],
            'password' => Hash::make($input['password']),
            'level' => 2,
            'is_active' => 1,
        ]);

        Student::create([
            'id' => Uuid::uuid4()->getHex(),
            'user_id' => $user->id,
            'jurusan' => $input['jurusan'],
            // 'province_id' => $input['province_id'],
            // 'city_id' => $input['city_id'],
            // 'district_id' => $input['district_id'],
            // 'village_id' => $input['village_id'],
            // 'address' => $input['address'],
            'phone_number' => $input['phone_number'],
            'gender' => $input['gender'],
            'is_member' => 1,
        ]);
          
        $message = "*Mohon dibaca dan dipahami!*\n\n_Hallo, saya admin dari ".env('APP_NAME').", akun anda telah terdaftar di platform kami, berikut link untuk aktivasi akun anda._\n\nNama: ".$user->name."\nEmail: ".$user->email."\n\nBerikut link verifikasi anda\n".env('APP_URL')."/user/".$user->id."/activation \n\n*Jika link tidak bisa diklik, silakan copy dan paste dibrowser anda.*\n\n_terimakasih telah menjadi bagian dari kami, semoga ".env('APP_NAME')." dapat membantu proses belajar anda. aamiin._";
        sendWhatsappNotification($user->student->phone_number, $message);
        
        // $admin = User::find('20b2a4122c614bb68e41b1a6f3f37780');
        // $admin->notify(new SendNewUserNotification($user));

        return $user;
    }

    public function setAttributeNames(array $attributes)
    {
        $this->customAttributes = $attributes;

        return $this;
    }
}

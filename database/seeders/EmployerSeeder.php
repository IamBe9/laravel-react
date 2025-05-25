<?php

namespace Database\Seeders;

use App\Models\Employer;
use App\Models\User;
use Illuminate\Database\Seeder;

class EmployerSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(5)->create()->each(function ($user) {
            Employer::factory()->create(['user_id' => $user->id]);
        });
    }
}

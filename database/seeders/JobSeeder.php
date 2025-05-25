<?php

namespace Database\Seeders;

use App\Models\Job;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;

class JobSeeder extends Seeder
{
    public function run(): void
    {
        $tags = Tag::factory(3)->create();
        Job::factory(20)
            ->hasAttached($tags)
            ->create(new Sequence(
                ['featured' => false, 'schedule' => 'Full Time'],
                ['featured' => true, 'schedule' => 'Part Time']
            ));
    }
}

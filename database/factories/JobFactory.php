<?php

namespace Database\Factories;

use App\Models\Employer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Job>
 */
class JobFactory extends Factory
{
    public function definition(): array
    {
        return [
            'employer_id' => Employer::factory(),
            'title' => $this->faker->jobTitle,
            'salary' => $this->faker->randomElement(['$50,000 USD', '$90,000 USD', '$150,000 USD']),
            'location' => 'Remote',
            'schedule' => 'Full Time',
            'url' => $this->faker->url,
            'featured' => false,
        ];
    }
}

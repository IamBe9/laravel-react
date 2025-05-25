<?php

namespace App\Http\Controllers;

use App\Models\Employer;
use App\Models\Job;
use App\Models\Tag;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index()
    {
        return Inertia::render('TestPage', [
            'employers' => Employer::with('user')->get(),
            'jobs' => Job::with(['employer', 'tags'])->get(),
            'tags' => Tag::with('jobs')->get(),
        ]);
    }
}

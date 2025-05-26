<?php

namespace App\Http\Controllers;

use App\Models\Employer;
use App\Models\Job;
use App\Models\Tag;
use Inertia\Inertia;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {
        $jobs = Job::with(['employer', 'tags'])->get();
        $employers = Employer::with('user')->get();
        $tags = Tag::with('jobs')->get();

        return Inertia::render('TestPage', [
            'jobs' => $jobs,
            'employers' => $employers,
            'tags' => $tags,
            'success' => session('success'),
        ]);
    }
}

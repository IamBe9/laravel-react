<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobController extends Controller
{
    public function index()
    {
        return Inertia::render('Index', [
            'jobs' => Job::with('employer', 'tags')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Create'); // Указываем просто 'Create', так как файл в pages/
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'salary' => 'required|string',
            'location' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $job = auth()->user()->employer->jobs()->create($validated);

        return redirect('/jobs')->with('success', 'Job created successfully.');
    }
}

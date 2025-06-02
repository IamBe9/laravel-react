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
        return Inertia::render('Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'salary' => 'required|string',
            'location' => 'required|string|max:255',
            'schedule' => 'required|string|in:Part Time,Full Time',
            'url' => 'required|url',
            'featured' => 'boolean',
            'tags' => 'required|string',
        ]);

        $job = auth()->user()->employer->jobs()->create([
            'title' => $validated['title'],
            'salary' => $validated['salary'],
            'location' => $validated['location'],
            'schedule' => $validated['schedule'],
            'url' => $validated['url'],
            'featured' => $validated['featured'] ?? false,
        ]);

        // Обработка тегов (предполагаем, что tags — строка, разделенная запятыми)
        if (!empty($validated['tags'])) {
            $tagNames = array_map('trim', explode(',', $validated['tags']));
            $tags = collect($tagNames)->map(function ($name) {
                return \App\Models\Tag::firstOrCreate(['name' => $name])->id;
            })->all();
            $job->tags()->sync($tags);
        }

        return redirect('/jobs')->with('success', 'Job created successfully.');
    }
}

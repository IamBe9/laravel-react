<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TagController extends Controller
{
    public function __invoke($tag)
    {
        $tagModel = Tag::where('name', urldecode($tag))->firstOrFail();
        $jobs = Job::with('employer', 'tags')
            ->whereHas('tags', function ($query) use ($tagModel) {
                $query->where('tags.id', $tagModel->id); // Уточнили таблицу для id
            })
            ->get();

        return Inertia::render('TagPage', [
            'tagName' => $tagModel->name,
            'jobs' => $jobs,
        ]);
    }
}

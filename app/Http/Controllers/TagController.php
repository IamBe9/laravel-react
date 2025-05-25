<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Inertia\Inertia;

class TagController extends Controller
{
    public function __invoke(Tag $tag)
    {
        return Inertia::render('Results', ['jobs' => $tag->jobs]);
    }
}

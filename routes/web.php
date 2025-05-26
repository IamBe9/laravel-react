<?php

use App\Http\Controllers\JobController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/test', [TestController::class, 'index'])->name('test');
Route::post('/jobs', [JobController::class, 'store'])->name('jobs.store');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

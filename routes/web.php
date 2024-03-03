<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\UserController;
use App\Models\Skill;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/sidebar', function () {
    return Inertia::render('Sidebard');
})->name('airtime');
Route::get('/sidebar', function () {
    return Inertia::render('Sidebard');
})->name('airtime');



Route::get('/', function () {
    $skills = Skill::all();
    return Inertia::render('Home', [
        'skills'=>$skills,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('registered-users{matz}', [UserController::class, 'index'])->name('registered-users.index');
Route::delete('registered-users/{id}', [UserController::class, 'destroy'])->name('registered-users.destroy');

Route::get('skills{matz}', [SkillController::class, 'index'])->name('skills.index');
Route::delete('skills/{id}', [SkillController::class, 'destroy'])->name('skills.destroy');
Route::post('skills', [SkillController::class, 'store'])->name('skills.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/{any}', function () {
    return Inertia::render('Error404');
})->where('any', '.*');

require __DIR__.'/auth.php';

<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::middleware('auth:sanctum')->group(function () {
	Route::get('user', [AuthController::class, 'user']);
	Route::get('selected-user-message/{id}', [MessageController::class, 'all']);
	Route::post('message-store', [MessageController::class, 'store']);
	Route::get('logout', [AuthController::class, 'logout']);
});


<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

Route::get('/products', [ProductsController::class, 'read']);
Route::post('/products', [ProductsController::class, 'create']);
Route::put('/products', [ProductsController::class, 'update']);
Route::delete('/products', [ProductsController::class, 'delete']);


Route::get('/test', function () {
    $var = 'test';
    return($var);
});



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

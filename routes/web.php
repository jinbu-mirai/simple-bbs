<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

// トップページを表示
Route::inertia('/', 'welcome')->name('home');

// 投稿一覧を表示
Route::get('/posts', [PostController::class, 'index'])
    ->name('posts.index');

 // 新しい投稿を保存
Route::post('/posts', [PostController::class, 'store'])
    ->name('posts.store');

// 投稿詳細を表示
Route::get('/posts/{post}', [PostController::class, 'show'])
    ->name('posts.show');

// 投稿編集画面を表示
Route::get('/posts/{post}/edit', [PostController::class, 'edit'])
    ->name('posts.edit');

// 投稿内容を更新
Route::put('/posts/{post}', [PostController::class, 'update'])
    ->name('posts.update');

// 投稿を削除
Route::delete('/posts/{post}', [PostController::class, 'destroy'])
    ->name('posts.destroy');
<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    // 投稿一覧を取得してReact側の一覧画面に渡す
    public function index()
      {
        $posts = Post::latest()->get();

     return Inertia::render('posts/index', [
            'posts' => $posts,
        ]);
}

 // 新しい投稿を保存する
 public function store(Request $request)
 {
        // 入力内容のバリデーション
        $validated = $request->validate([
            'name' => 'required|string|max:50',
            'title' => 'required|string|max:100',
            'body' => 'required|string',
        ]);
        // バリデーション済みのデータをDBへ保存
        Post::create($validated);

        // 保存後は投稿一覧へ戻る
        return redirect()->route('posts.index');
    }
 
    // 選択した投稿の詳細画面を表示する
    public function show(Post $post)
    {
        return Inertia::render('posts/show', [
            'post' => $post,
        ]);
    }

    // 選択した投稿の編集画面を表示する
    public function edit(Post $post)
    {
        return Inertia::render('posts/edit', [
            'post' => $post,
        ]);
    }

    // 編集した投稿内容を更新する
    public function update(Request $request, Post $post)
    {
        // 編集内容のバリデーション
        $validated = $request->validate([
            'name' => 'required|string|max:50',
            'title' => 'required|string|max:100',
            'body' => 'required|string',
        ]);

         // DB内の投稿データを更新
        $post->update($validated);

        // 更新後は投稿詳細画面へ戻る
        return redirect()->route('posts.show', $post);
    }

    // 選択した投稿を削除する
    public function destroy(Post $post)
    {
        $post->delete();

         // 削除後は投稿一覧へ戻る
        return redirect()->route('posts.index');
    }
}
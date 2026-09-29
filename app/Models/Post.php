<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// postsテーブルのデータを扱うモデル
class Post extends Model
{
     // 一括代入を許可するカラムを指定
    protected $fillable = [
        'name',
        'title',
        'body',
    ];
}

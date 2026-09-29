<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
     /**
     * postsテーブルを作成する
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('title', 100);
            $table->text('body');
            // created_at と updated_at を自動で作成
            $table->timestamps();
        });
    }

     /**
     * postsテーブルを削除する
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};

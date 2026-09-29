// Reactのフォームイベント型とstate管理用のuseStateを読み込む
import { router } from '@inertiajs/react';
// Reactのフォームイベント型とstate管理用のuseStateを読み込む
import { FormEvent, useState } from 'react';

// 投稿データの型を定義する
type Post = {
    id: number;
    name: string;
    title: string;
    body: string;
};

// このページが受け取るpropsの型を定義する
type Props = {
    post: Post;
    // Laravelのバリデーションエラーを受け取る
    errors: {
        name?: string;
        title?: string;
        body?: string;
    };
};

// 投稿編集ページのコンポーネント
export default function Edit({ post, errors }: Props) {
     // 現在保存されている投稿内容を初期値としてstateに設定する
    const [name, setName] = useState(post.name);
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

     // フォーム送信時に実行される処理
    const handleSubmit = (e: FormEvent) => {
        // 通常のフォーム送信によるページ再読み込みを防ぐ
        e.preventDefault();
        
        // Laravel側の更新用ルートへPUTリクエストを送る
        router.put(`/posts/${post.id}`, {
            name,
            title,
            body,
        });
    };

    return (
        <div>
             {/* ページタイトル */}
            <h1>投稿編集</h1>
            
            {/* 更新フォーム */}
            <form onSubmit={handleSubmit}>
                <div>
                    {/* 投稿者名の入力欄 */}
                    <label>投稿者名</label>
                    <br />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    {/* 投稿者名にバリデーションエラーがある場合だけ表示 */}
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    {/* タイトルの入力欄 */}
                    <label>タイトル</label>
                    <br />
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    {/* タイトルにバリデーションエラーがある場合だけ表示 */}
                    {errors.title && <p>{errors.title}</p>}
                </div>

                <div>
                    {/* 本文の入力欄 */}
                    <label>本文</label>
                    <br />
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />

                    {/* 本文にバリデーションエラーがある場合だけ表示 */}
                    {errors.body && <p>{errors.body}</p>}
                </div>

                {/* 入力した内容を更新する */}
                <button type="submit">更新する</button>
            </form>
        </div>
    );
}
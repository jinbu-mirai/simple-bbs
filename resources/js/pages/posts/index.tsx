// InertiaのLinkとrouterを読み込む
import { Link, router } from '@inertiajs/react';
// Reactのフォームイベント型とstate管理用のuseStateを読み込む
import { FormEvent, useState } from 'react';

// 投稿データの型を定義する
type Post = {
    id: number;
    name: string;
    title: string;
    body: string;
    created_at: string;
};

// このページが受け取るpropsの型を定義する
type Props = {
    posts: Post[];
     // Laravelから返されたバリデーションエラー
    errors: {
        name?: string;
        title?: string;
        body?: string;
    };
};

// 投稿一覧ページのコンポーネント
export default function Index({ posts, errors }: Props) {
    // 各入力欄の値をstateで管理する
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

     // 投稿フォーム送信時の処理
    const handleSubmit = (e: FormEvent) => {
         // 通常のフォーム送信によるページ再読み込みを防ぐ
        e.preventDefault();

        // Laravel側の投稿保存ルートへPOSTリクエストを送る
        router.post('/posts', {
            name,
            title,
            body,
        });
    };

    return (
        <div>
            {/* ページタイトル */}
            <h1>掲示板</h1>
            {/* 新規投稿フォーム */}
            <h2>新規投稿</h2>

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

                    {/* 投稿者名のバリデーションエラーを表示 */}
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

                    {/* タイトルのバリデーションエラーを表示 */}
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

                    {/* 本文のバリデーションエラーを表示 */}
                    {errors.body && <p>{errors.body}</p>}
                </div>
    
    {/* 投稿内容を送信するボタン */}
    <button type="submit">投稿する</button>
</form>

            <hr />
            {/* 投稿一覧 */}
            <h2>投稿一覧</h2>

            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>投稿者：{post.name}</p>
                    <p>{post.body}</p>
                    <p>{post.created_at}</p>
                    {/* 投稿詳細ページへのリンク */}
                    <Link href={`/posts/${post.id}`}>
                        詳細を見る
                    </Link>
                </div>
            ))}
        </div>
    );
}
// Inertiaを使ってページ遷移や削除リクエストを行う
import { Link, router } from '@inertiajs/react';

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
    post: Post;
};

// 投稿詳細ページのコンポーネント
export default function Show({ post }: Props) {
   // 削除ボタンを押したときに実行される処理
    const handleDelete = () => {
        // 誤操作防止のため、削除前に確認ダイアログを表示する
        if (confirm('本当に削除しますか？')) {
            // Laravel側の削除用ルートにDELETEリクエストを送る
            router.delete(`/posts/${post.id}`);
        }
    };

    return (
        <div>
            {/* ページタイトル */}
            <h1>投稿詳細</h1>
            {/* 投稿タイトルを表示 */}
            <h2>{post.title}</h2>
            {/* 投稿者名を表示 */}
            <p>投稿者：{post.name}</p>
            {/* 投稿本文を表示 */}
            <p>{post.body}</p>
            {/* 投稿日時を表示 */}
            <p>投稿日時：{post.created_at}</p>

            {/* 現在の投稿の編集ページへ移動する */}
            <Link href={`/posts/${post.id}/edit`}>
                編集する
            </Link>

            <br />

            {/* 投稿削除処理を実行するボタン */}
            <button onClick={handleDelete}>
                 削除する
            </button>

            <br />

            {/* 投稿一覧ページへ戻る */}
            <Link href="/posts">
                投稿一覧に戻る
            </Link>
        </div>
        
    );
}
# simple-bbs

## アプリケーション概要
LaravelとReactを使用して作成した簡易掲示板アプリケーションです。

投稿の新規作成、一覧表示、詳細表示、編集、削除ができます。
また、投稿作成・編集時にはLaravelのバリデーションを使用し、入力エラーを画面上に表示するようにしています。

## 使用技術
- Laravel
- React
- TypeScript
- Inertia.js
- SQLite
- Git
- GitHub

## 環境構築方法

### 1. リポジトリをクローン

```bash
git clone https://github.com/jinbu-mirai/simple-bbs
```

### 2. プロジェクトフォルダへ移動

```bash
cd simple-bbs
```

### 3. PHPの依存パッケージをインストール

```bash
composer install
```

### 4. JavaScriptの依存パッケージをインストール

```bash
npm install
```

### 5. .envファイルを作成

```bash
cp .env.example .env
```

### 6. アプリケーションキーを生成

```bash
php artisan key:generate
```

### 7. SQLiteデータベースを作成

```bash
touch database/database.sqlite
```

### 8. Migrationを実行

```bash
php artisan migrate
```

## 起動方法

Laravelの開発サーバーを起動します。

```bash
php artisan serve
```

別のターミナルで以下を実行します。

```bash
npm run dev
```

起動後、以下にアクセスします。

```text
http://127.0.0.1:8000/posts
```

## 実装した機能
- 投稿一覧表示
- 投稿作成
- 投稿詳細表示
- 投稿編集
- 投稿削除
- 削除確認ダイアログ
- Laravelによるバリデーション
- バリデーションエラー表示
- SQLiteへのデータ保存
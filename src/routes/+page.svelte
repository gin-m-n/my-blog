<h1>myblog</h1>

<p>なにからつくろうかなー</p>
<ul>
	<li>
		記事詳細ページ
		<ul>
			<li>markdown描画</li>
			<li>目次</li>
			<li>
				<a href="blog/hello-world">hello-world page </a>
			</li>
		</ul>
	</li>
	<li>ページレイアウトのデザイン考えないとな</li>
	<li></li>
	<li>記事のサムネ</li>
	<li>記事リストページ</li>
	<li>コメント機能</li>
	<li>いいね機能</li>
	<li>関連記事機能</li>
</ul>

<h3>参考サイト</h3>
<ul>
	<li>
		<a href="https://zenn.dev/k5h/articles/de9b49abade828">使える軽量なブログを土日で作る</a>
	</li>
</ul>

<h3>メモ</h3>
<pre>
  mdsvexは結局不採用にした
  ちょっと高度すぎると思ったな 表現はとてもおもしろいけど
  mdsvexを書くならLSPもそれように整備しないといけないしね
</pre>
<pre>
  色々markdownの読み込みは迷ったけど、結局これ一本でいく
  <a href="https://www.npmjs.com/package/vite-plugin-markdown"
		>https://www.npmjs.com/package/vite-plugin-markdown</a
	>
  内部的にはmarkdownitを使用している
</pre>
<pre>
  unifiedというけっこデカいエコシステムを見つけた
  色んなテキスト形式を色んなテキスト形式に変えれるやつらしい
  これを使って、viteプラグインを作ろうとした
  結局やらなかったけど、vite plugin APIをざっと知れてプラグインがなにしているかが分かった
  ていうか、viteってバンドル部分はrollupを使ってるんだな
  rollupとwebpackは競合なのかな？
</pre>
<pre>
  アンカーをつけようとしたら、素直にはできなさそう。
  ふと、きになってmarkedの方をみたら、めっちゃDL数とかもある。
  もしかしてこちらの方が拡張性ありか...?
  https://marked.js.org/using_pro#renderer まんま、使えそうな例が載ってないか？

  ていうか、ファイルから読み込む方式に今はしてるけど、いずれ別の場所にmdデータおきたくなったりしたら、いまのvite plugin 方式じゃだめだな...
</pre>

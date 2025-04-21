## layoutがScriptが実行されない問題

- https://svelte.jp/docs/kit/link-options#data-sveltekit-reload
- global state で解決できるか？ aタグを押したときに挙動を変える
- https://svelte.jp/tutorial/kit/page-state これで解決できるかぁ...?
- <script></script> の動作タイミング、俺ちゃんとわかってないな。https://svelte.jp/docs/svelte/svelte-files#script
    - script はインスタンスが起きた時にしか実行されない
- state による変化を追って計算結果を追いたい場合は$derived をもちいる
    - https://svelte.jp/docs/svelte/$derived#$derived.by


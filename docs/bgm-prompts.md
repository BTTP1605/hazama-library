# BGM生成プロンプト集 ―『はざまの図書館』専用―

Suno / Udio などの音楽生成AIで各トラックを生成し、**下記のファイル名どおり**に
`public/assets/audio/bgm/` へ配置してください（形式はmp3）。配置して再デプロイするだけで、
ゲームが場面に応じて自動的に再生します。**ファイルが無いトラックは自動的に無音になる**ので、
1曲ずつ追加していけます。

この作品で必要なのは、下記の **5曲だけ** です。

## 共通指定（全トラックのプロンプト末尾に必ず付ける）

> instrumental only, no vocals, seamless loop, subtle and atmospheric, for a dark mystery visual novel game, quiet enough to sit behind reading text

- **インスト限定・ボーカル無し**（歌詞があると文章が読めなくなるため）
- 長さは1〜2分でOK（ゲーム側でループ再生します）
- 頭と終わりが自然につながる「ループ向き」の構成にすると理想的
- ラウドネスは控えめに。ゲーム側でも音量0.35に絞って再生します

## トラック一覧（5曲）

| ファイル名 | 使われる場面 | プロンプト（英語・共通指定を末尾に付ける） | 雰囲気メモ |
|---|---|---|---|
| bgm_title.mp3 | タイトル画面 | Slow ambient piano with soft rain textures and distant reverb, a single repeating motif like a page turning in an endless library, mysterious, spacious and enchanting | 物語の顔。無限の図書館。神秘的で少し切なく |
| bgm_library.mp3 | 図書館（案内人との場面・序章・各章の合間・終章） | Warm quiet ambient with sparse felt piano and soft library-room reverb, dust and lamplight, gentle curiosity with a faint otherworldly stillness, timeless | 本作の主旋律。穏やかで、どこか現実離れした静けさ |
| bgm_rain.mp3 | 雨のコンビニ・旧線路沿いの道（第一頁・第二頁の導入） | Gentle rain ambience with sparse warm piano notes and low pad, nocturnal loneliness of a quiet Japanese town, calm but slightly uneasy | 物語への入り口。日常の中の微かな違和感 |
| bgm_tension.mp3 | 第四踏切が現れる場面（第二頁クライマックス） | Tense cinematic underscore with low string drones and slow heartbeat-like pulse, rising unease, restrained and cold, almost no melody | 決断の場面。心拍のような低音 |
| bgm_ending.mp3 | エンディング画面 | Emotional minimal piano instrumental, quiet resolution and gentle hope, like closing a book at dawn, warm afterglow | 読後感。静かな余韻と少しの希望 |

（参考: 場面とトラックの対応は `src/engine/audio.ts` の `BGM_BY_BG` で定義。
図書館=bgm_library / 雨のコンビニ・旧線路=bgm_rain / 第四踏切=bgm_tension。
タイトルとエンディングはそれぞれ bgm_title / bgm_ending。）

## 配置と反映の手順

1. 生成したmp3を上記ファイル名で `public/assets/audio/bgm/` に置く
2. ローカル確認: `npm run dev` → ゲーム内右上の「♪」がONであることを確認
3. 公開反映: `npm run deploy`
   （この作品は全編無料のため、解錠パスフレーズの設定は不要です）

## 効果音について

効果音8種（テキスト送り・選択・手がかり入手・推理成功/失敗・章開始・解錠・パネル開閉）は
`npm run gense` でプログラム合成され `public/assets/audio/se/` に出力済みです（外部素材不使用）。
差し替えたい場合は同名のwavを上書きするだけで反映されます。

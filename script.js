const words = [
  "ヴェルギリウス", "カロン", "ダンテ", "イサン", "ファウスト", "ドン・キホーテ", "良秀", "ムルソー", "ホンル", "ヒースクリフ",
  "イシュメール", "ロージャ", "シンクレア", "ウーティス", "グレゴール",
  "エピ", "ソード",
  "ユーリ", "アヤ", "ホプキンス", "アレックス",
  "(老衰した)旧G社部長", "口の悪い残骸兵", "粗野な残骸兵", "トーマ",
  "豹", "獅子", "狼",
  "ヘルマン", "クボ", "ガファン",
  "質屋の主人",
  "強く見られたかったぽんぽん派の組織員", "田舎臭いぽんぽん派の組織員", "ぽんぽん派 ボス",
  "カジノ客", "身なりの整ったカジノ警備員", "カジノ警備員隊長",
  "陽気なマリアッチの組織員", "嗚咽するマリアッチの組織員", "アイド",
  "威圧的な鉄工会の組織員", "身体を解す鉄工会の組織員", "鉄工会 ボス",
  "ソーニャ",
  "借金まみれの人質", "お前ぶたれたい？しこたま？",
  "悪徳税金収集者",
  "検問所の職員", "子供", "ジークフリート",
  "異端審問官", "グイド", "クローマー",
  "デミアン",
  "鶏頭のK社検問所要員",
  "サムジョ", "菩薩チキン 社長", "ウンボンのチキン酒場 社長", "社長の母","四つ足の獣","全てある異端審問官"
];
const randomWordElement = document.getElementById("random-word");
const generateBtn = document.getElementById("generate-btn");

function generateRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  randomWordElement.textContent = words[randomIndex];
}

generateBtn.addEventListener("click", generateRandomWord);
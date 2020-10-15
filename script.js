var texts = 
[
    "休みの日は何をして過ごしてる？",
    "今ハマっていること、おすすめなことは何？",
    "最近感動したことや涙したことは何？",
    "今ハマっていること、おすすめなことは何？",
    "会社でどんな仕事をしているの？",
    "須田さんの第一印象は？",
    "学生の頃にやってしまった失敗談",
    "今までの人生で会った人の中で「一番魅力的な人」は？",
    "明日地球が滅びるとしたら何がしたい？",
    "学校ではどんな勉強をしていたの？",
    "火事のときに持って逃げるもの、3つ教えて！",
    "宝くじがあたったら何に使う？",
    "学生時代のアルバイトとか部活は？",
    "取得して欲しい資格",
    "一日の過ごし方",
    "これはとくに好き、っていう本や映画は？",
    "働き方",
    "仕事内容",
    "自分のどんなところが好き？",
    "1年目は何が大変だったか",
    "仕事で困ってること",
    "明日地球が滅びるとしたら何がしたい？",
    "将来的に開発したい技術"
];
function changeText(){
    document.getElementById("myBtn").value="次へ"; 
    var text = document.getElementById("myText");
    var searchTerm =  text.innerHTML;
    text.innerHTML = texts[0];
    var result=texts[texts.indexOf(searchTerm)+1];
    text.innerHTML = result;
    return;
}

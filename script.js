var texts = 
[
    "休みの日は何をして過ごしてる？",
    "今ハマっていること、おすすめなことは何？",
    "最近感動したことや涙したことは何？",
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
var index = 0;
function changeText(){
    document.getElementById("myBtn").value="次へ";
    var classChange1 = document.getElementById("class1");
    var classChange2 = document.getElementById("class2");
    var myBtn = document.getElementById("myBtn");
    var text = document.getElementById("myText");
    var display = document.getElementById("display");
    if(index == texts.length)index = 0;
    if(index % 3 == 0){
        display.innerHTML="内定者向け";
        classChange1.className = "card-header h-75 bg-info";
        classChange2.className = "card-header h-75 bg-info";
        myBtn.className = "btn btn-primary text-center wi-150 mt-1";
    }else if(index % 3 == 1){
        display.innerHTML="新卒向け";
        classChange1.className = "card-header h-75 bg-success";
        classChange2.className = "card-header h-75 bg-success";
        myBtn.className = "btn btn-info text-center wi-150 mt-1";
    }else{
        display.innerHTML="社員向け";
        classChange1.className = "card-header h-75 bg-primary";
        classChange2.className = "card-header h-75 bg-primary";
        myBtn.className = "btn btn-success text-center wi-150 mt-1";
    }
    text.innerHTML = texts[index];
    index++;
    return;
}
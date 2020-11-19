var url_string = window.location.href;
    var url = new URL(url_string);
    var action = url.searchParams.get("action");
if(action == 1){
    var head = ["内定者向け", "新卒向け", "内定者向け", "社員向け", "内定者向け", "社員向け", "内定者向け", "新卒向け", "内定者向け", "社員向け", "内定者向け", "社員向け"];
    var class_bg = ["info", "success", "info", "primary", "info", "primary", "info", "success", "info", "primary", "info", "primary"];
    var class_btn = ["primary", "info", "primary", "success", "primary", "success", "primary", "info", "primary", "success", "primary", "success"];
    var texts = [
        "休みの日は何をして過ごしてる？",
        "今ハマっていること、おすすめなことは何？",
        "学生の頃にやってしまった失敗談",
        "最近感動したことや涙したことは何？",
        "学校ではどんな勉強をしていたの？",
        "会社でどんな仕事をしているの？",
        "取得したい資格",
        "これはとくに好き、っていう本や映画は？",
        "外国人になるならどこの国？",
        "今までの人生で会った人の中で「一番魅力的な人」は？",
        "地元の特産品は？",
        "最近、笑ったことは？",
    ];
}else if(action == 2){
    var head = ["内定者向け", "新卒向け", "内定者向け", "社員向け", "内定者向け", "社員向け", "内定者向け", "新卒向け", "内定者向け", "社員向け", "内定者向け", "社員向け"];
    var class_bg = ["info", "success", "info", "primary", "info", "primary", "info", "success", "info", "primary", "info", "primary"];
    var class_btn = ["primary", "info", "primary", "success", "primary", "success", "primary", "info", "primary", "success", "primary", "success"];
    var texts = [
        "もしも異性に２４時間なれたら何する？",
        "今ハマっていること、おすすめなことは何？",
        "学生の頃にやってしまった失敗談",
        "最近感動したことや涙したことは何？",
        "学校ではどんな勉強をしていたの？",
        "会社でどんな仕事をしているの？",
        "取得したい資格",
        "須田さんの第一印象は？",
        "外国人になるならどこの国？",
        "今までの人生で会った人の中で「一番魅力的な人」は？",
        "地元の特産品は？",
        "最近、笑ったことは？"
    ];
}else if(action == 3){
    var head = ["内定者向け", "社員向け", "社員向け", "内定者向け", "社員向け", "社員向け", "内定者向け", "社員向け", "社員向け", "内定者向け", "社員向け", "社員向け"];
    var class_bg = ["info", "primary", "primary", "info", "primary", "primary", "info", "primary", "primary", "info", "primary", "primary"];
    var class_btn = ["primary", "success", "success", "primary", "success", "success", "primary", "success", "success", "primary", "success", "success"];
    var texts = [
        "取得したい資格",
        "ひとりで生きていける？",
        "高校生の時に流行っていた曲",
        "もしも異性に２４時間なれたら何する？",
        "これはとくに好き、っていう本や映画は？",
        "火事のときに持って逃げるもの、3つ教えて！",
        "地元の特産品は？",
        "１ヶ月毎日食べるとしたら何？",
        "宝くじで1億円があたったら何に使う？",
        "今ハマっていること、おすすめなことは何？",
        "今までの人生で会った人の中で「一番魅力的な人」は？",
        "最近、笑ったことは？",
    ];
}else if(action == 4){
    var head = ["内定者向け", "新卒向け", "社員向け", "内定者向け", "新卒向け", "内定者向け", "新卒向け", "社員向け", "内定者向け", "新卒向け"];
    var class_bg = ["info", "success", "primary", "info", "success", "info", "success", "primary", "info", "success"];
    var class_btn = ["primary", "info", "success", "primary", "info", "primary", "info", "success", "primary", "info"];
    var texts = [
        "外国人になるならどこの国？",
        "なんでその職業を選んだの？",
        "本、テレビ、映画の世界で生きられるならどんな作品の世界に住みたい？",
        "もしも異性に２４時間なれたら何する？",
        "１ヶ月毎日食べるとしたら何？",
        "５年後はどうなってる？",
        "あなたが死んだ後、どんな人だったと周りの人に思い出されたい？",
        "どこにでも行けるならどこを旅したい？",
        "今ハマっていること、おすすめなことは何？",
        "宝くじで1億円があたったら何に使う？",
    ];
}else if(action == 5){
    var head = ["内定者向け", "新卒向け", "社員向け", "内定者向け", "社員向け", "内定者向け", "新卒向け", "社員向け", "内定者向け", "社員向け"];
    var class_bg = ["info", "success", "primary", "info", "primary", "info", "success", "primary", "info", "primary"];
    var class_btn = ["primary", "info", "success", "primary", "success", "primary", "info", "success", "primary", "success"];
    var texts = [
        "取得したい資格",
        "最近欲しい家電は",
        "須田さんの第一印象は？",
        "火事のときに持って逃げるもの、3つ教えて！",
        "最近、笑ったことは？",
        "もしも異性に２４時間なれたら何する？",
        "明日地球が滅びるとしたら何がしたい？",
        "宝くじで1億円があたったら何に使う？",
        "学生時代のアルバイトとか部活は？",
        "ひとりで生きていける？",
    ];
}else if(action == 6){
    var head = ["内定者向け", "新卒向け", "社員向け", "社員向け", "内定者向け", "社員向け", "内定者向け", "新卒向け", "社員向け", "社員向け", "内定者向け", "社員向け"];
    var class_bg = ["info", "success", "primary", "primary", "info", "primary", "info", "success", "primary", "primary", "info", "primary"];
    var class_btn = ["primary", "info", "success", "success", "primary", "success", "primary", "info", "success", "success", "primary", "success"];
    var texts = [
        "新しいスキルを1つマスターできるなら何を選ぶ？",
        "小さい時の夢は？",
        "最近感動したことや涙したことは何？",
        "高校生の時に流行っていた曲",
        "宝くじで1億円があたったら何に使う？",
        "１ヶ月毎日食べるとしたら何？",
        "これはとくに好き、っていう本や映画は？",
        "どこにでも行けるならどこを旅したい？",
        "ひとりで生きていける？",
        "須田さんの第一印象は？",
        "「愛」と「お金」どちらが大切？その理由は？",
        "火事のときに持って逃げるもの、3つ教えて！",
    ];
}
var index = 0;
function changeText(){
    document.getElementById("myBtn").value="次へ";
    var classChange1 = document.getElementById("class1");
    var classChange2 = document.getElementById("class2");
    var myBtn = document.getElementById("myBtn");
    var text = document.getElementById("myText");
    var display = document.getElementById("display");
    if(index == texts.length){
        location.href='end.html';
    }
    display.innerHTML = head[index];
    classChange1.className = "card-header h-75 bg-" + class_bg[index];
    classChange2.className = "card-header h-75 bg-" + class_bg[index];
    myBtn.className = "btn btn-" + class_btn[index] + " text-center wi-150 mt-1";
    text.innerHTML = texts[index];
    index++;
    return;
}

function getUrlParameterAndSendToUrl(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var action = url.searchParams.get("action");
    location.href='question.html?action=' + action;
}

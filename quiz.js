const quiz = [
    {
        question: "佐藤家の車のナンバーは？",
        choice: [
            "•2 29",
            "•9 31",
            "•3 10",
            "•• 45"
        ],
        answer: "•3 10"
    }, {
        question: "さかいゆうまの趣味は？",
        choice: [
            "ママ",
            "鉄道",
            "笑う",
            "全部"
        ],
        answer: "全部"
    }, {
        question: "現存しているもの",
        choice: [
            "ミヤマ",
            "丸大",
            "ベルネージュ",
            "全部無い"
        ],
        answer: "全部無い"
    }
]
let score = 0;
let quiz_count = 0;
const $buttons = document.querySelectorAll('.btn');
const f = (quiz_count) => {
    document.getElementById('question').textContent = quiz[quiz_count].question;
    for(let j = 0; j < $buttons.length; j++){
        $buttons[j].textContent = quiz[quiz_count].choice[j];
    }
}
f(quiz_count);

for(let i = 0; i < quiz[quiz_count].choice.length; i++){
    $buttons[i].addEventListener('click', (e) => {
        if(e.target.textContent === quiz[quiz_count].answer){
            window.alert('正解です！');
            score++;
        } else {
            window.alert('違います。答えは「' + quiz[quiz_count].answer + "」でした！");
        }
        quiz_count++;
        if(quiz_count < quiz.length){
            f(quiz_count);
        }
        else{
            document.getElementById('question').textContent = 'スコア:' + score + '/' + quiz.length;
            document.getElementById("buttons").style.visibility = 'hidden';
        }
    });
}

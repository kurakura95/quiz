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
        question: "李意洋の趣味は？",
        choice: [
            "海外旅行",
            "音楽",
            "言語の勉強",
            "全部"
        ],
        answer: "全部"
    }, {
        question: "現存している店",
        choice: [
            "アピタ",
            "ウオロク",
            "原信",
            "全部ある"
        ],
        answer: "全部ある"
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

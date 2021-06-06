var startBtn = $("#startBtn")
var intro = $("#intro")
var answers = $("#answers")
var question = [
    {
        title: "Images in your webpage may have the following extensions except",
        choices: [".png",".jpg",".gif",".psd"],
        answer: "psd"

    },
    {
        title: "Where is the correct place to put the title tag in an HTML document?",
        choices: ["Above the HTML tag","In the body of the document","In the head of the document","It doesn't matter"],
        answer: "In the head of the document"
    },
    {
        title: "What does CSS stand for?",
        choices: ["Custom Style Sheets","Cascading Style Sheets","Colorful Style Sheets","Computer Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "The # symbol specifies that the selector is?",
        choices: ["class","tag","id","first"],
        answer: "id"
    }
];
startBtn.on("click", function (){

    function test() {
        var quiz = questions.question1;
        intro.text(quiz.question)
        intro.text(quiz.answers)
        console.log(quiz.answers)
    }
    test()
    })
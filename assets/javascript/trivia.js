alert("allgood") //start game WW2 Trivia


//global variables
// * The player will have a limited amount of time to finish the quiz. 
var countDownTime = 20;

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
var questionsRight = 0;


//create an array o question objects

var questions = [{
        question: "What year did war against Germany begin?",
        answers: ["1938", "1939", "1940", "1941", "1942"],
        answer: "0"
    },

    {
        question: "What year did war against Japan begin?",
        answers: ["1938", "1939", "1940", "1941", "1942"],
        answer: "3"
    },

    {
        question: "Who was the leader of Germanh?",
        answers: ["Hitler", "Mussolini", "Churchill", "Mussolini", "Hirohito"],
        answer: "0"
    },

    {
        question: "Who was the leader of Great Britian?",
        answers: ["Hitler", "Mussolini", "Churchill", "Mussolini", "Hirohito"],
        answer: "2"
    },

    {
        question: "Who was the leader of Italy?",
        answers: ["Hitler", "Mussolini", "Churchill", "Mussolini", "Hirohito"],
        answer: "3"
    },

    {
        question: "What was the famous fighter plane the Japanese used",
        answers: ["Mustangr", "Spitfire", "FW-`190", "Buffalo", "Zero"],
        answer: "4"
    },

    {
        question: "What county was invaded in 1938 , startug WW II?",
        answers: ["Austria", "france", "Russia", "China", "Poland"],
        answer: "4"
    },

    {
        question: "Who was the General in commanad of Allied forces in Europe?",
        answers: ["Rommel", , "Montgomery", "Patton", "Eisenhower", "DeGaul"],
        answer: "3"
    },
]




console.log(questions[0].question);
console.log(questions[0].answers);
console.log(questions[0].answer);






//load questions function
var loadGame = function()
for (i = 0, questions.length { i }


    //timer function
    var intervalID = setInterval(function() {
        if (--countDownTime >= 0) {
            console.log(countDownTime);
            $("#targets").text(countDownTime)
        } else { clearInterval };
    }, 1000);





    //     if (questions[0].answers[2] === questions[0].answer) {
    //          console.log("Correct!")
    //      } else {
    //          console.log("Incorrect!");
    //      }

    // * You'll create a trivia form with multiple choice or true/false options (your choice).

    $("#question1").text(questions[0].question); console.log();


    /



    // * Don't let the player pick more than one answer per question.

    // * Don't forget to include a countdown timer.
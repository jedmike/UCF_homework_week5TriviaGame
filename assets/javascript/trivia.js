//alert("allgood") //start game WW2 Trivia


//global variables
// * The player will have a limited amount of time to finish the quiz. 
var countDownTime = 60;

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
var questionsRight = 0;


//create an array o question objects

var questions = [{
        question: "What year did war against Germany begin?",
        answers: ["1938", "1939", "1940", "1941", "1942"],
        answer: "1938"
    },

    {
        question: "What year did war against Japan begin?",
        answers: ["1938", "1939", "1940", "1941", "1942"],
        answer: "1941"
    },

    {
        question: "Who was the leader of Germanh?",
        answers: ["Hitler", "Mussolini", "Churchill", "Mussolini", "Hirohito"],
        answer: "Hitler"
    },

    {
        question: "Who was the leader of Great Britian?",
        answers: ["Hitler", "Mussolini", "Churchill", "Mussolini", "Hirohito"],
        answer: "Churchill"
    },

    {
        question: "Who was the leader of Italy?",
        answers: ["Hitler", "Mussolini", "Churchill", "Mussolini", "Hirohito"],
        answer: "Mussolini"
    },

    {
        question: "What was the famous fighter plane the Japanese used",
        answers: ["Mustangr", "Spitfire", "FW-`190", "Buffalo", "Zero"],
        answer: "Zero"
    },

    {
        question: "What county was invaded in 1938 , startug WW II?",
        answers: ["Austria", "france", "Russia", "China", "Poland"],
        answer: "Poland"
    },

    {
        question: "Who was the General in commanad of Allied forces in Europe?",
        answers: ["Rommel", , "Montgomery", "Patton", "Eisenhower", "DeGaul"],
        answer: "Eisenhower"
    },
]




console.log(questions[0].question);
console.log(questions[0].answers);
console.log(questions[0].answer);






//load questions function
for (var k = 0; k < questions.length; k++) {
    var q = $("<div>")
    q.attr("id", "question-" + k)
    q.html("<h4>" + questions[k].question + "</h4>")
        // $(".questions").append(q)


    for (var i = 0; i < questions[k].answers.length; i++) {
        var input = $("<input>")
        input.attr("type", "radio");
        input.attr("name", "survey" + k);
        input.attr("id", "Radios" + i);
        input.attr("value", questions[k].answers[i]);
        var label = $("<label>")
        label.addClass("radio-inline");
        label.append(input).append(questions[k].answers[i]);
        q.append(label);
    }
    $(".questions").append(q)
}

/*  -->
<!-- </id>
    <br> -->



<!-- <label class="radio-inline">
     
        <input type="radio" name="survey" id="Radios0" value="Yes">
     
        1938
     
      </label>
 */



//timer function
var intervalID = setInterval(function() {
    if (--countDownTime >= 0) {
        console.log(countDownTime);
        $("#targets").text(countDownTime)
    } else {
        clearInterval(intervalID);

        for (var i = 0; i < questions.length; i++) {
            console.log($("input[name=survey" + i + "]:checked", "#question-0").val())
            console.log(questions[0].answer)
            if ($("input[name=survey" + i + "]:checked", "#question-" + i).val() === questions[i].answer) {
                console.log("true");
                questionsRight++;
            } else {
                console.log("false")
            }
        }
        $("#yours").text(questionsRight)
    };
}, 1000);

//logic







//     if (questions[0].answers[2] === questions[0].answer) {
//          console.log("Correct!")
//      } else {
//          console.log("Incorrect!");
//      }

// * You'll create a trivia form with multiple choice or true/false options (your choice).

// $("#question1").text(questions[0].question); console.log();






// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.
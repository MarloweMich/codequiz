var body = document.body;
var contEl = document.createElement("div");
var startbtn = document.createElement("button");
var h1El = document.createElement("h1");
var ulEl = document.createElement("ul");
var scorecont = document.getElementById("pastscores");
var scorelist = document.createElement("ul");

h1El.textContent = "Code Quiz";
startbtn.textContent = "startbutton";

body.appendChild(contEl);
contEl.appendChild(h1El);
contEl.appendChild(ulEl);
contEl.appendChild(startbtn);
contEl.setAttribute("style", "position: relative; left: 35%;");
ulEl.setAttribute("style", "display: block;");
scorecont.appendChild(scorelist);
//variables of the buttons w; hich will have the possible answer. These shall remain the same in
//all style attributes but change in the text content
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");

//effects of startbutton
startbtn.addEventListener("click", function () {
  // console.log("starbutton done got clicked");
  contEl.removeChild(startbtn);
  ulEl.appendChild(a1);
  a1.setAttribute(
    "style",
    "padding: 5px; border-radius: 25%; color: white; background-color: purple; display: block;"
  );
  ulEl.appendChild(a2);
  a2.setAttribute(
    "style",
    "padding: 5px; border-radius: 25%; color: white; background-color: purple; display: block;"
  );
  ulEl.appendChild(a3);
  a3.setAttribute(
    "style",
    "padding: 5px; border-radius: 25%; color: white; background-color: purple; display: block;"
  );
  ulEl.appendChild(a4);
  a4.setAttribute(
    "style",
    "padding: 5px; border-radius: 25%; color: white; background-color: purple; display: block;"
  );
  return getquestionfunc();
});

//functions from q1 and onward

var questions = [
  {
    title: ["question1"],
    choices: ["1", "2", "3", "4"],
    answer: ["3"],
  },
  {
    title: ["question2"],
    choices: ["a", "b", "c", "d"],
    answer: ["a"],
  },
  {
    title: ["question3"],
    choices: ["!", "_", "-", "%"],
    answer: ["%"],
  },
  {
    title: ["question4"],
    choices: ["11", "22", "33", "44"],
    answer: ["33"],
  },
  {
    title: ["question5"],
    choices: ["6", "7", "8", "9"],
    answer: ["7"],
  },
  {
    title: ["question6"],
    choices: ["A", "Y", "D", "C"],
    answer: ["D"],
  },
];
// var correct = [];
// var incorrect = [];
var i = 0;
let timeLeft = 60;
var highscores = JSON.parse(localStorage.getItem("scores"))||[];

var s1 = document.createElement("li");
var s2 = document.createElement("li");
var s3 = document.createElement("li");
var s4 = document.createElement("li");
var s5 = document.createElement("li");

scorelist.appendChild(s1);
scorelist.appendChild(s2);
scorelist.appendChild(s3);
scorelist.appendChild(s4);
scorelist.appendChild(s5);

s1.textContent = highscores[0];
s2.textContent = highscores[1];
s3.textContent = highscores[2];
s4.textContent = highscores[3];
s5.textContent = highscores[4];

function getquestionfunc() {
  countdown();
  var timerEl = document.getElementById("timer");
  function countdown() {
    // console.log("timer started");
    var timeInterval = setInterval(function () {
      timerEl.textContent = "Ye olde seconds remaining: " + timeLeft;
      if (timeLeft <= 0){
          contEl.removeChild(ulEl);
          h1El.textContent = "SCOREBOARD";
          var currentscore = document.createElement("h2");
          contEl.appendChild(currentscore);
          currentscore.textContent = "Thine score be: " + timeLeft;
          var initialsprompt = document.createElement("label");
          contEl.appendChild(initialsprompt);
          initialsprompt.textContent = "Submit Thy Initials!"
          var initials = document.createElement("input");
          contEl.appendChild(initials);
          var submission = document.createElement("button");
          contEl.appendChild(submission);
          submission.textContent = "Submit";
          submission.addEventListener('click', function(){
          highscores.push(initials.value + " " + (timeLeft+1));
          localStorage.setItem("scores", JSON.stringify(highscores))});
      }
      if (i===6){
        clearInterval(timeInterval);
        timerEl.remove();
      }
      timeLeft--;
    }, 1000);
    questionlist();
  }
  function questionlist() {
    if (i < questions.length) {
      h1El.textContent = questions[i].title[0];
      a1.textContent = questions[i].choices[0];
      a2.textContent = questions[i].choices[1];
      a3.textContent = questions[i].choices[2];
      a4.textContent = questions[i].choices[3];
      // console.log(questions[i]);
    }
    ulEl.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      if (event.target.textContent === questions[i].answer[0]) {
        var notif = document.createElement("h2");
        contEl.appendChild(notif);
        notif.textContent = "CORRECT!";
        // correct.push("correct");
        setTimeout(correctout);

        var correctout = setTimeout(function dissapear() {
          contEl.removeChild(notif);
        }, 750);
      } else {
        timerEl.textContent = "Ye olde seconds remaining: " + (timeLeft -= 10);
          //draw incorrect onto page and decrement time when incorrect
        var notif = document.createElement("h2");
        contEl.appendChild(notif);
        notif.textContent = "INCORRECT!";
        // incorrect.push("incorrect");
        setTimeout(incorrectout);

        var incorrectout = setTimeout(function dissapear() {
          contEl.removeChild(notif);
        }, 750);
      }
      i++;
      if (i === 6) {
        contEl.removeChild(ulEl);
        h1El.textContent = "SCOREBOARD";
        var currentscore = document.createElement("h2");
        contEl.appendChild(currentscore);
        currentscore.textContent = "Thine score be: " + timeLeft;
        var initialsprompt = document.createElement("label");
        contEl.appendChild(initialsprompt);
        initialsprompt.textContent = "Submit Thy Initials!"
        var initials = document.createElement("input");
        contEl.appendChild(initials);
        var submission = document.createElement("button");
        contEl.appendChild(submission);
        submission.textContent = "Submit";
    
        submission.addEventListener('click', function(){
        highscores.push(initials.value + " " + (timeLeft+1));
        localStorage.setItem("scores", JSON.stringify(highscores))});
      }
      if (i < 6) {
        return questionlist();
      }
    });
  }
  
}

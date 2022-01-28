
var body = document.body;
var contEl = document.createElement("div");
var startbtn = document.createElement("button");
var h1El = document.createElement("h1");
var ulEl = document.createElement("ul");


h1El.textContent = "Code Quiz";
startbtn.textContent = "startbutton";

body.appendChild(contEl);
contEl.appendChild(h1El);
contEl.appendChild(ulEl);
contEl.appendChild(startbtn);

//variables of the buttons which will have the possible answer. These shall remain the same in 
//all style attributes but change in the text content
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");

//effects of startbutton
startbtn.addEventListener("click", function () {
  console.log("starbutton done got clicked");
  //countdown();
  contEl.removeChild(startbtn);
  ulEl.appendChild(a1);
  ulEl.appendChild(a2);
  ulEl.appendChild(a3);
  ulEl.appendChild(a4);
  return getquestionfunc();
})

//functions from q1 and onward

var questions = [{
  title: ["question1"],
  choices: ["1", "2", "3", "4"],
  answer: ["3"]
},
{
  title: ["question2"],
  choices: ["a", "b", "c", "d"],
  answer: ["a"]
},
{
  title: ["question3"],
  choices: ["!", "_", "-", "%"],
  answer: ["%"]
},
{
  title: ["question4"],
  choices: ["11", "22", "33", "44"],
  answer: ["33"]
},
{
  title: ["question5"],
  choices: ["6", "7", "8", "9"],
  answer: ["7"]
},
{
  title: ["question6"],
  choices: ["A", "Y", "D", "C"],
  answer: ["D"]
}]
var correct = [];
var incorrect = [];
var i = 0;
function getquestionfunc() {
  countdown();
  var timerEl = document.getElementById("timer");
  function countdown() {
    console.log("timer started");
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
      timerEl.textContent = "Ye olde seconds remaining: " + timeLeft;
      //if (decten()){
      // timerEl.textContent = "Ye olde seconds remaining: " + timeLeft - 10;
      //}
      if (timeLeft === -1) {
        clearInterval(timeInterval);
        timerEl.remove();
      }
      timeLeft--;
    }, 1000);
    questionlist();
  }
  function questionlist() {
    if (i < questions.length) {
      //this progresses as q1, q2, q4, q6. why? ANSWER: needed stopPropogation after eventlistener
      h1El.textContent = questions[i].title[0];
      a1.textContent = questions[i].choices[0];
      a2.textContent = questions[i].choices[1];
      a3.textContent = questions[i].choices[2];
      a4.textContent = questions[i].choices[3];
      console.log(questions[i]);
    }
    ulEl.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      if (event.target.textContent === questions[i].answer[0]) {
        var notif = document.createElement("h2");
        contEl.appendChild(notif);
        notif.textContent = ("CORRECT!");
        correct.push("correct");
        setTimeout(correctout);
        var correctout = setTimeout(function dissapear() {
          contEl.removeChild(notif);
        }, 750);
      }
      else {
        var notif = document.createElement("h2");
        contEl.appendChild(notif);
        notif.textContent = ("INCORRECT!");
        incorrect.push("incorrect");
        setTimeout(incorrectout);
        var incorrectout = setTimeout(function dissapear() {
          contEl.removeChild(notif);
          //timerEl.textContent = "Ye olde seconds remaining: " + (timeLeft.value - 10);
          //return decten();
          //add event into incorrectout and tie event into timer function to decrement by 10 seconds
        }, 750);
      }
      //draw incorrect onto page and decrement time when incorrect
      i++;
      if (i === 6) {
        contEl.removeChild(ulEl);
        h1El.textContent = "SCOREBOARD";
        var wins = document.createElement("h2");
        var losses = document.createElement("h2");
        contEl.appendChild(wins);
        contEl.appendChild(losses);
        wins.textContent = "Correct: " + correct.length;
        losses.textContent = "Incorrect: " + incorrect.length;
      }
      if (i < 6) {
        return questionlist();
      }
    })
  }
}




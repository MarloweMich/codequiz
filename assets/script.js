
var body = document.body;
var contEl = document.createElement("div");
var startbtn = document.createElement("button");
var h1El = document.createElement("h1");
var h2El = document.createElement('h2');

h1El.textContent = "Code Quiz";
startbtn.textContent = "startbutton";

body.appendChild(contEl);
contEl.appendChild(h1El);
contEl.appendChild(h2El);
h2El.appendChild(startbtn);

var q1 = document.createElement("h1");
var q2 = document.createElement("h1");
var q3 = document.createElement("h1");
var q4 = document.createElement("h1");
var q5 = document.createElement("h1");
var q6 = document.createElement("h1");


//text content of individual questions, to be kept constant
q1.textContent = "question1";
q2.textContent = "question2";
q3.textContent = "question3";
q4.textContent = "question4";
q5.textContent = "question5";
q6.textContent = "question6";

//variables of the buttons which will have the possible answer. These shall remain the same in 
//all style attributes but change in the text content
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");
var answers = [];
var choices = [];

a1.textContent = "answer1";
a2.textContent = "answer1";
a3.textContent = "answer1";
a4.textContent = "answer1";

//effects of startbutton
startbtn.addEventListener("click", function () {
  console.log("starbutton done got clicked");
  countdown();
  h1El.replaceWith(q1);
  h2El.removeChild(startbtn);
   h2El.appendChild(a1);
   h2El.appendChild(a2);
   h2El.appendChild(a3);
   h2El.appendChild(a4);
 return set1();
})


//functions from q1 and onward
//var question1 = ["1","2","3","4"];


function set1() {
  console.log("set1 just happened");
  //need eventlistener on buttons here
  a1.textContent = "milk";
  a2.textContent = "cheese";
  a3.textContent = "robot";
  a4.textContent = "seguey";
    h2El.addEventListener("click", function(){
      //need to make set2 dependent on set 1. possibly a promise/resolve
      // situation but that is not in curriculum yet so i'm nissing something
      //see line 66
     return set2();
    })
  }

  function set2() {
    console.log("set2 just happened");
    q1.replaceWith(q2);
    a1.textContent = "butter";
    a2.textContent = "beer";
    a3.textContent = "planets";
    a4.textContent = "eden";
    }


// is there a way to add boolean logic to a specific button that hops
// around as the questions progress
// var question1 = a1.addEventListener("click", function(){
//   //if (q1 === true) {
//   q1.replaceWith(q2);
//   a1.textContent = "answer1";
//   a2.textContent = "answer1";
//   a3.textContent = "answer1";
//   a4.textContent = "answer1";
//   //}
// })
//set conditions of the current question being displayed as true
//to progress to the next question with a correct answer. Else the progression
//still noves on but an inccorect answer is logged
// var question2 = a4.addEventListener("click", function(){
//   q2.replaceWith(q3);
//   a1.textContent = "answer2";
//   a2.textContent = "answer2";
//   a3.textContent = "answer2";
//   a4.textContent = "answer2";
// })
// var question3 = a4.addEventListener("click", function(){
//   q3.replaceWith(q4);
//   a1.textContent = "answer3";
//   a2.textContent = "answer3";
//   a3.textContent = "answer3";
//   a4.textContent = "answer3";
// })
// var question4 = a2.addEventListener("click", function(){
//   q4.replaceWith(q5);
//   a1.textContent = "answer4";
//   a2.textContent = "answer4";
//   a3.textContent = "answer4";
//   a4.textContent = "answer4";
// })
// var question5 = a1.addEventListener("click", function(){
//   q5.replaceWith(q6);
//   a1.textContent = "answer5";
//   a2.textContent = "answer5";
//   a3.textContent = "answer5";
//   a4.textContent = "answer5";
// })
// var question6 = a4.addEventListener("click", function(){
//   q6.replaceWith(h1El);
//   a1.textContent = "answer6";
//   a2.textContent = "answer6";
//   a3.textContent = "answer6";
//   a4.textContent = "answer6";
// })

//timer function not tied to high score at this time
var timerEl = document.getElementById("timer");

function countdown() {
  console.log("timer started");
  var timeLeft = 15;

  var timeInterval = setInterval(function () {
    timerEl.textContent = "Ye olde seconds remaining: " + timeLeft;

    if (timeLeft === -1) {
      clearInterval(timeInterval);
      timerEl.remove();
    }
    timeLeft--;
  }, 1000);
}
  //end timer function


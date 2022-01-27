var body = document.body;
var contEl = document.createElement("div");
var startbtn = document.createElement("button");
var h1El = document.createElement("h1");
var ulEl = document.createElement("ul")

h1El.textContent = "Code Quiz";
startbtn.textContent = "startbutton";

body.appendChild(contEl);
contEl.appendChild(h1El);
contEl.appendChild(ulEl);
contEl.appendChild(startbtn);

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
  contEl.removeChild(startbtn);
  ulEl.appendChild(a1);
  ulEl.appendChild(a2);
  ulEl.appendChild(a3);
  ulEl.appendChild(a4);
  return set1();
})


//functions from q1 and onward



var set1 = function () {
  //console.log("set1 just happened");
  a1.textContent = trueSet[0];
  a2.textContent = "cheese";
  a3.textContent = "robot";
  a4.textContent = "seguey";
  ulEl.addEventListener("click", function (event) {
    return correct(event,0), set2();
  })
}

var set2 = function () {
  //console.log("set2 just happened");
  q1.replaceWith(q2);
  a1.textContent = "butter";
  a2.textContent = trueSet[1];
  a3.textContent = "planets";
  a4.textContent = "eden";
  ulEl.addEventListener("click", function (event) {
    return correct(event, 1), set3();
  })
}

var set3 = function () {
  //console.log("set3 just happened");
  q2.replaceWith(q3);
  a1.textContent = "merry";
  a2.textContent = "pippin";
  a3.textContent = trueSet[2];
  a4.textContent = "sam";
  ulEl.addEventListener("click", function (event) {
    return correct(event, 2), set4();
  })
}
function set4()
var set4 = function () {
  //console.log("set4 just happened");
  q3.replaceWith(q4);
  a1.textContent = "i";
  a2.textContent = "like";
  a3.textContent = "to";
  a4.textContent = trueSet[3];
  ulEl.addEventListener("click", function (event) {
    return correct(event, 3), set5();
  })
}

var set5 = function () {
  //console.log("set5 just happened");
  q4.replaceWith(q5);
  a1.textContent = "crush";
  a2.textContent = "zap";
  a3.textContent = trueSet[4];
  a4.textContent = "cow";
  ulEl.addEventListener("click", function (event) {
    return correct(event, 4), set6();
  })
}

var set6 = function () {
  //console.log("set6 just happened");
  q5.replaceWith(q6);
  a1.textContent = "ursine";
  a2.textContent = trueSet[5];
  a3.textContent = "canine";
  a4.textContent = "lupine";
  ulEl.addEventListener("click", function (event) {
    return correct(event, 5);
    // return scorescreen();
  })
}


//possibly make an array that equals true globally, make the values of correct answers equal the indices of the correct array
 var trueSet = ["milk", "beer", "frodo", "ate", "pow", "bovine"];

 //how do i indicate the mouseclicking is selecting the trueset in this if statement
 var correct = function (event, index) {
   console.log(event.target);
   if (event.target.innerText === trueSet[index])
     console.log("correct")
   else console.log("incorrect")
 }

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

//   var questions = [
//     {
//    title: "coffee",
//    choices: ["1","2","3","4"],
//    answer: "3"
//  },
//  {
//    title: "coffee",
//    choices: ["1","2","3","4"],
//    answer: "3"
//  },
//  {
//    title: "coffee",
//    choices: ["1","2","3","4"],
//    answer: "3"
//  },
//  {
//    title: "coffee",
//    choices: ["1","2","3","4"],
//    answer: "3"
//  }
//  ]
//  getquestionfunc()
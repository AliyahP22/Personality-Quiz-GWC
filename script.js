/*Add your JavaScript here*/
var jasmineCount = 0;
var cinderellaCount = 0; /*initializing variables*/

var questionCounts = 0;/*initializing variables*/

/*STORING HTML ELEMENTS USING THE DOM*/
var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");


q1a1.addEventListener("click",jasmine);
q1a2.addEventListener("click",cinderella);
q2a1.addEventListener("click",cinderella);
q2a2.addEventListener("click",jasmine);
q3a1.addEventListener("click",cinderella);
q3a2.addEventListener("click",jasmine);

function jasmine(){
  jasmineCount +=1;
  questionCounts +=1;
  console.log("questionCounts = " + questionCounts + " jasmineScore = " + jasmineCount);
  
  if(questionCounts == 3){
    console.log("The quiz is done!!");
    updateResults();
  }
}
 
function cinderella(){
  cinderellaCount +=1;
  questionCounts +=1;
  console.log("questionCounts = " + questionCounts + " cinderellaScore = " + cinderellaCount);
  
  if(questionCounts == 3){
    console.log("The quiz is done!!");
    updateResults();
  }
}

function updateResults(){
  if (jasmineCount>=2){
    result.innerHTML = "You are Princess Jasmine!!";
    console.log("You are Princess Jasmine!!");
  } 
  else if(cinderellaCount>=2){
    result.innerHTML = "You are Princess Cinderella!!";
    console.log("You are Princess Cinderella!!");
  }
  
  restart.style.display = "block";
}

function restartQuiz(){
  // Resetting all variables
  jasmineCount = 0;
  cinderellaCount = 0;
  questionCounts = 0;
  
  result.innerHTML = "Your result is...";
  
  // Hide restart button until quiz is done
  restart.style.display = "none";
  
  console.log("Quiz restarted!");
}

restart.addEventListener("click", restartQuiz);

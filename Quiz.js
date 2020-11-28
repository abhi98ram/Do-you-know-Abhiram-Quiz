var readlineSync = require("readline-sync");

var score=0;

var chalk = require("chalk");

var username = readlineSync.question("What is your name  ");
console.log("\n");
console.log(chalk.green("Welcome " + username  + " TO THE GAME ... Do you know Abhiram !!!!"));
console.log("\n");
function play(question,answer) {
  console.log(chalk.bold(question));
  console.log('\n');
  var currentanswer = readlineSync.question(chalk.cyan.bold("GUESS The  Answer : "));
  var currentanswers=currentanswer.toUpperCase()
  console.log('\n');
  if(currentanswers === answer) {
    console.log(chalk.green("RIGHT ANSWER"));
    
    score = score+1;
    
    console.log("----------------------------------------------------------------");
    console.log("\n");
  }else {
    console.log(chalk.red("WRONG"));
    console.log("\n");
    console.log("The Right Answer is " + chalk.green(answer));

    console.log("-----------------------------------------------------------------");

    
    
    console.log("\n");
  }

  

}

var questions = [
  {
    question:"1.Abhiram's favorite Marvel Character ?",
    answer:"SPIDERMAN",
  },
  {
    question:"2.Abhiram's favourite DC Character ?",
    answer:"BATMAN",
  },
  {
    question:"3.Abhiram's favorite place in the world ?",
    answer:"BANGALORE",
  }
];

for(var i=0;i<questions.length;i=i+1) {
  currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer);
}

console.log("Your Total score is " + chalk.green.bold(score));
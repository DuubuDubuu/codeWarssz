//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  // Create an array

  var output = 1;

  for (let i = 0; i < x.length; i++) {
    output *= x[i];
  }
  return output;
}


// Reversed Strings;
function solution(str){
  //chaining methods 3 split, splits into an array, reverse = reverse the array, join, join the array all together reulsting in a string
  return str.split("").reverse().join("");
}

solution('world');
solution('word');

//set Alarm
//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

//The function should return true if you are employed and //not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

//setAlarm(true, true) -> false
//setAlarm(false, true) -> false
//setAlarm(false, false) -> false
//setAlarm(true, false) -> true

function setAlarm(employed, vacation){
  
  
  
  if (employed === true && vacation === true){
    return false;
  }
  else if (employed === false && vacation === true){
    return false;
  }
  else if (employed === false && vacation === false){
    return false
  }
  else{
    return true
  }

}
setAlarm();

// another solution
function setAlarm(employed, vacation){
  return employed && !vacation;
}

//repeats the string by the number of n
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
  
  return s.repeat(n);
  
  
}

// comparing first letter to first letter
//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

//Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


function feast(beast, dish) {
  
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  
}

// converts bool to string
// Implement a function which convert the given boolean value into its string representation.
//Note: Only valid inputs will be given.
function booleanToString(b){
  return b.toString()
}


//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//number % 2 == 0 checks whether the number is even. If the remainder is 0, the number is even.

function simpleMultiplication(number) {
  if(number % 2 == 0){
    return number * 8
  }
else{
  return number * 9
}
}

//Reverse Letter with digits and symbol removing
//Task
//Given a string str, reverse it and omit all non-alphabetic characters.

//Example
//For str = "krishan", the output should be "nahsirk".

//For str = "ultr53o?n", the output should be "nortlu".

//Input/Output
//[input] string str
//A string consists of lowercase latin letters, digits and //symbols.

//[output] a string

function reverseLetter(str) {
  //coding and coding..
  
  return str.split('').reverse().join('').replace(/[^a-zA-Z0]/g,'')
}


//Rock Paper Scissor
//Let's play! You have to return which player won! In case of a draw return Draw!.

//Examples(Input1, Input2 --> Output):

//"scissors", "paper" --> "Player 1 won!"
//"scissors", "rock" --> "Player 2 won!"
//"paper", "paper" --> "Draw!"


const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};

const test1 = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  }; 
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}

//Opposite Number
//Very simple, given an integer or a floating-point number, find its opposite.

Examples:

//1: -1
//14: -14
//-34: 34

function opposite(number) {
  return number * (-1)
}


//Twice as Old
//Your function takes two arguments:

//1. current father's age (years)
//2. current age of his son (years)

//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let twice = dadYearsOld - sonYearsOld * 2;
  return twice < 0 ? twice * (-1) : twice;

  //another solution
  return Math.abs(dadYearsOld - 2 * sonYearsOld);

  }


  //Square(n)Sum
  //Complete the square sum function so that it squares each number passed into it and then sums the results together.

  //For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


  function squareSum(numbers){
    var sum = 0
    
    for (let i = 0; i < numbers.length; i++){
      sum += Math.pow(numbers[i], 2)
      
    }
    return sum
  }


  // convert a string into an array
  function stringToArray(string){
    return string.split(' ');
    }


    //Will there be enough space
//to fit all the passengers.

 //Task Overview:
//You have to write a function that accepts three parameters:

//cap is the amount of people the bus can hold excluding the driver.
//on is the number of people on the bus excluding the driver.
//wait is the number of people waiting to get on to the bus excluding the driver.
//If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

//Usage Examples:
//cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
//cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting


    function enough(cap, on, wait) {
      if (on + wait < cap){
      return 0;
      } else {
      return (on + wait) - cap;
      }
    }

    function enough(cap, on, wait) {
      return Math.max(wait + on - cap, 0);
    }
    
    //A square of squares
    //Given an integral number, determine if it's a square number:

    var isSquare = function(n){
      if (n < 0){
        return false;
      }
      
      if(Number.isInteger(Math.sqrt(n))){
        return true;
      }else{
        return false;
      }
    }


    //oop
    class Person {
      constructor (firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
      }
      //prototypes methods
      getFullName(){
        return `${this.firstName} ${this.lastName}`;
      }
    }

    const Person1 = new Person ('Lance', 'Montiague', '05-23-2000')
  
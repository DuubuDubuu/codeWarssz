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


//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
  
  return s.repeat(n);
  
  
}


//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

//Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  
}

// Implement a function which convert the given boolean value into its string representation.
//Note: Only valid inputs will be given.
function booleanToString(b){
  return b.toString()
}





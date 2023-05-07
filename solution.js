//Write a function named setAlarm that has two arguments.
//-----------------------------------------------------//
/*
function setAlarm(employed, vacationing) {
  if (employed === true && vacationing === false) {
    return true;
  } else if (employed === true && vacationing === true) {
    return false;
  } else if (employed === false && vacationing === false) {
    return false;
  } else employed === false && vacationing === true;
  return false;
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, false));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));
*/
//-------------------------------------------------------//

//Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.
/*
function oddNumberCount(number) {
  let count = 0;
  for (let i = 0; i < number; i += 1) {
    if (i % 2 !== 0) {
      count = count + 1;
    }
  }
  return count;
}
console.log(oddNumberCount(7));
*/

//-----------------------------------------------------//
//Disemvoweling Trolls: Question no: 3
/*
function trollsBeGone(sentence) {
  const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let newString = "";
  for (let i = 0; i < sentence.length; i += 1) {
    const char = sentence[i];
    if (!vowels.includes(char)) {
      newString += char;
    }
  }
  return newString;
}
console.log(trollsBeGone("This website is for losers LOL"));
*/

//-----------------------------------------------------//

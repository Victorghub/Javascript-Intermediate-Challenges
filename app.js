//Intermediate Javascript questions//

/**
 * Question 1: 
 * Given two values, return the first one if it is falsy, otherwise
 * return the second one.
 * 
 * filterOutFalsy(0,500) -> 0
 * 
 * function falsyOrTruthy(elem1, elem2) {
    return !elem1 ? elem1 : elem2
}

console.log(falsyOrTruthy(0, 500))
 */

//////////////////////////////////////////////////////

/**
 * Question 2:
 * Give an array, return its length. 
 * 
 * 
 * function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([1, 2, 3, 5]));

 */

//////////////////////////////////////////////

/**
 * Question 3
 * get the last element in an array. 
 * 
 * function lastElement(arr) {
 return arr[arr.length - 1 ]
}

console.log(lastElement([1, 2, 4, "dog", true]))
 */

///////////////////////////////

/**
 * Question 4
 * Give an array, return the sum of every element
 * 
 * arrsum([2,2,2]) -> 6
 * 
 * function arrReturn(array) {
    let sum = 0;
    for (let i = 0; i < array.length; ++i) {
        sum = sum + array[i]
    }
    return sum
}

console.log(arrReturn([100, 91315, 1234, 3]))
 * 
 * for loop explanation: starting at 0, while I is less than 0 we want to run
 * this code. We are also incrementing it each time until I stops being less
 * than 0.
 */

////////////////////////////////////////////////

/**
 * Question 5: 
 * Add up the numbers from a single number
 * EG. An input of 4 will give you 1+2+3+4, which equals to 10.
 * 
 * progressiveSum(3) -> 6
 * progressiveSum(4) -> 10
 * 
 * function proressiveSum(num) {
 let sum = 0;
 for (let i = 1; i <= num; ++i) { //we add an = because we are starting from 1 which  means we are adding an extra iteration. so therefore we must put = so it doesnt get added
    sum = sum + i;
  }
return sum
}

console.log(proressiveSum(4))
 */

/////////////////////////////////////////////
/**
 * Question 6:
 * given a number in seconds, return this number in MM:SS Format.
 * calcTime(66) -> '01:06'
 * 
 * function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60); // thiis gives the minutes
    let timerSeconds = seconds % 60; // this gives the seconds that are left - 6 left

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds;

}

console.log(calcTime(100))
 * 
 *  */

/**
 * Question 7:
 * Find the largets numbers, return the largest number of that array
 * getMax([5,100,0])
 */

function getMax(arr) {
    let max = arr[0];
for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > max) { // if the current number were on, if its bigger than MAX (WHICH IS WHAT WE STARTED WITH)
        max =  arr[i] //Then this is our new maximum value
    }
}
return max;
}

console.log(getMax([1, 1500, 500]));

// let max = array at 0. - so max is currently one
// if arr[i] is a bigger  number than the current maximum value that we are storing, let the new maximum value be the current itiration we are on
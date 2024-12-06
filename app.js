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
 */

function arrSum(num1) {
    let sum = 0; //create a variable
 for (let i = 0; i < num1.length; ++i) { //loops over every element in the array
    sum = sum + num1[i]; //every iteration we want to add every current element we are on to the array
    }
    return sum;
}

console.log(arrSum([1, 500, 4]));



/**
 * for loop explanation: starting at 0, while I is less than 0 we want to run
 * this code. We are also incrementing it each time until I stops being less
 * than 0.
 */
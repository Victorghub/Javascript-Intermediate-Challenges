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

function arrReturn(array) {
    let sum = 0;
    for (let i = 0; i < array.length; ++i) {
        sum = sum + array[i]
    }
    return sum
}

console.log(arrReturn([100, 91315, 1234, 3]))


/**
 * for loop explanation: starting at 0, while I is less than 0 we want to run
 * this code. We are also incrementing it each time until I stops being less
 * than 0.
 */
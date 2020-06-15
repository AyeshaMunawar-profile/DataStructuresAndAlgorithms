// Google Interview Question
// Given an array = [2,5,2,1,2,4,5,6,7,4,3,4,6,3,4,6,8];
// it should given the answer of 2

///Given an array = [ 2,1,1,2,5,6,7,43,2,5,6,87,4]
//it should give 1

// given an array = [2,3,4,5]
// it should give undefined

// Good approach
function findFirstRecurringNumber(array) { // implemented inside javascript object is a type of map
    console.log("the given array is : [  " + array + " ] ");
    if (array && array.length) {
        let myMap = {};
        for (let i = 0; i < array.length; i++) {
            if (myMap.hasOwnProperty(array[i])) {
                return array[i];
            } else {
                myMap[array[i]] = i;
            }
        }
    }
    return undefined;
} // time complexity O(n) but space complexity is O(n)


// Bad approach
function findFirstRecurringNumber1(array) { // implemented using nested for loop
    console.log("the given array is : [ " + array + " ] ");
    if (array && array.length) {
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] === array[j]) {
                    return array[i];
                }
            }
        }
    }
    return undefined;
} // O(n^2) and space complexity is O(1)


console.log("------------------------------------------------------------------------------------------ ");

console.log("using Approach 1 i.e. two nested for loops ");
console.log("------------------------------------------------------------------------------------------ ");
console.log("The first recurring number in the given array is :", findFirstRecurringNumber1([0, 0, 2, 1, 2, 4, 5, 6, 7, 4, 3, 4, 6, 3, 4, 6, 8]) + "\n");
console.log("The first recurring number in the given array is :", findFirstRecurringNumber1([2, 1, 1, 2, 5, 6, 7, 43, 2, 5, 6, 87, 4]) + "\n");
console.log("The first recurring number in the given array is :", findFirstRecurringNumber1([2, 3, 4, 5]) + "\n");

console.log("The first recurring number in the given array is :", findFirstRecurringNumber1([2]) + "\n");
console.log("The first recurring number in the given array is :", findFirstRecurringNumber1([1, 2]) + "\n");


console.log("-------------------------------------------------------------------------------------------- ");
console.log("using Approach 2 i.e. using objects as a map to store the number as a property in an object if not already existing  ");
console.log("--------------------------------------------------------------------------------------------- ");
console.log("The first recurring number in the given array is :", findFirstRecurringNumber([0, 0, 2, 1, 2, 4, 5, 6, 7, 4, 3, 4, 6, 3, 4, 6, 8]) + "\n");
console.log("The first recurring number in the given array is :", findFirstRecurringNumber([2, 1, 1, 2, 5, 6, 7, 43, 2, 5, 6, 87, 4]) + "\n");
console.log("The first recurring number in the given array is :", findFirstRecurringNumber([2, 3, 4, 5]) + "\n");
console.log("The first recurring number in the given array is :", findFirstRecurringNumber([2]) + "\n");
console.log("The first recurring number in the given array is :", findFirstRecurringNumber([1, 2]) + "\n");



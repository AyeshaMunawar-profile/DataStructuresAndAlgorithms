let Array1 = [0, 3, 4];
let Array2 = [4, 6, 30];

function mergeSortedcArrays(array1, array2) {
    const mergedArray = [];
    let i = 1;
    let j = 1;
    let array1Item = array1[0];
    let array2Item = array2[0];

// check for the false input
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }
    while (array1Item || array2Item) {
        console.log(array1Item, array2Item);
        if (!array2Item || array1Item < array2Item) { // undefined is always less than a non zero value
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}

let result = mergeSortedcArrays(Array1, Array2);
console.log(result);
// [0,3,4,4,6,30,31]

// modularize the solution

console.log(undefined < undefined);
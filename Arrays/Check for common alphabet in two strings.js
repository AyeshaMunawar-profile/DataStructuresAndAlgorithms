let array1 = ['a', 'b', 'c', 'x', 'a'];
let array2 = ['z', 'x', 'r'];

// Aproach 0  Brute force Aproach naive solution
// time complexity of O(n^2)
// space coimplexity of O(1) not creating new variables

function containsCommmonItem(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true;
            }
        }
    }
    return false;
}

// console.log(containsCommmonItem(array1,array2));


// // Aproach 2 O(a+b)
// space complexity O(a)
// faster but spoace intensive
function containsCommmonItem1(array1, array2) {
    // 1. loop through pirst array create object where properties contain items of the array
    // can we assue always 2 parameters in the function
    let arrayObject1 = {};
    for (let i = 0; i < array1.length; i++) {
        if (!arrayObject1[i]) {
            const item = array1[i];
            arrayObject1[item] = true;
        }
    }
    console.log("Array 1 converted to object is : \n", arrayObject1);
    console.log("Array 2 is : [ " + array2 + " ]");
    // 2. loop through second array and check if the item in the second array exist on created objects
    for (let j = 0; j < array2.length; j++) {
        let prop = array2[j];
        if (arrayObject1[array2[j]]) {
            return true;
        }
    }
    return false;
}


// containsCommmonItem1(array1, array2);

//Aproach 3 build in function language specific more readable
function containsCommonItems3(array1, array2) {
    return array1.some(item => array2.includes(item));
    // some method checks if any of the value in the array pass the test provided in the form of function
}

containsCommonItems3(array1, array2);
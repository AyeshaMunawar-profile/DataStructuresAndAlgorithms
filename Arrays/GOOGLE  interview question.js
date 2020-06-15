let input = [1, 2, 3, 3, 4, 4, 12, 11];
let input2 = [3, 4, 2, 5, 3, 1, 31, 4, 12, 4, 4, 4, 6];
let input3 = [];
let input4 = null;
let input5 = [4];
let found = {
    found: false,
    valuePair: undefined,
    setFound: function (value1, value2, found) {
        if (!isNaN(value1) && !isNaN(value2)) { // check if values are numbers
            this.valuePair = new Map();
            this.valuePair.set(value1, value2);
            this.found = found;
            return true;
        } else {
            found = false;
            valuePair = undefined;
            return false;
        }

    }
}

function findPairFromSumSorted(input, sum) {
    if (!input) {
        found.setFound(null, null, false); // set found to false;
        return found;
    }
    let pointer1 = 0;
    let pointer2 = input.length - 1;
    while (pointer1 < pointer2) {
        let currentSum = input[pointer1] + input[pointer2]
        console.log("Current sum is :" + currentSum + " of value pairs :" + input[pointer1] + " and " + input[pointer2]);
// 4. if sum od pair equals to the sum provided return the pair
        if (currentSum === sum) {
            if (found.setFound(input[pointer1], input[pointer2], true)) {
                return found;
            } else {
                console.log("Number Pair is found but could not be stored\n NUmber are : " + input[pointer1] + input[pointer2]);
                return false;
            }
        }
        // 2. if sum greater than provided value move pointer 2 left or pointer 2 -1
        else if (currentSum > sum) {
            pointer2 -= 1;
        }
// 3. if sum smaller than the provided value pointer 1 + 1
        else {
            pointer1 += 1;
        }
    }
    found.setFound(null, null, false); // set found to false;
    return found;
}

function findPairFromSumUnsorted(input, sum) {
    if (!input) {
        return false;
    } else {
        let complimentaryList = new Set();
        for (let value of input) {
            if (complimentaryList.has(sum - value)) {
                return true;
            } else {
                complimentaryList.add(sum - value);
            }
            console.log(complimentaryList);
        }
        return false;
    }
}

console.log("For sorted array", input);
console.log(findPairFromSumSorted(input, 8));
console.log("For empty array", input3);
console.log(findPairFromSumSorted(input3, 8));
console.log("For null as input", input3);
console.log(findPairFromSumSorted(input4, 8));
console.log("For 4 as only input in array i.e [4]", input3);
console.log(findPairFromSumSorted(input5, 8));

console.log("For unsorted array", input2);
console.log(findPairFromSumUnsorted(input2, 8));
console.log("For empty array", input3);
console.log(findPairFromSumUnsorted(input3, 8));
console.log("For null as input", input3);
console.log(findPairFromSumUnsorted(input4, 8));
console.log("For 4 as only input in array i.e [4]", input3);
console.log(findPairFromSumUnsorted(input5, 8));

// Reverse a string in array

function reverse(str) {
    // check for input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return "Please enter a non empty string with more than one alphabet";
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}


// approach 2 built in functions
function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join("");

console.log(reverse("jhhgeqiuwrwq"));
console.log(reverse2("5427crvybrutqewr"));
console.log(reverse3("tqewr"));
console.log(reverse4("5kuhgxa8ywe7uqo"));
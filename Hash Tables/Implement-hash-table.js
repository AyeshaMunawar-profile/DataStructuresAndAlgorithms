// implement a hash table
// implement set and get method
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    searchArrayOfArraysByKey(key, array) {
        if (array) {      // no need to check for the length as it is set when the element added
            for (let i = 0; i < array.length; i++) {
                if (array[i][0] === key) {
                    return array[i][1];
                }
            }
        } else {
            return null;
        }
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.data[index]) {
            this.data[index] = [];
        }
        this.data[index].push([key, value]);
        console.log(this.data);
    }

    get(key) {
        let index = this._hash(key);
        let value = this.searchArrayOfArraysByKey(key, this.data[index]);
        return value;
    }

    keys() { // iterate through all keys of the hash table
        const allKeys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    allKeys.push(this.data[i][j][0]);
                }
            }
        }
        return allKeys;
    }
}

const myHashTable = new HashTable(100);
myHashTable.set("grapes", 10000);
myHashTable.set("mango", 5000);
myHashTable.set("Hello", 800);
myHashTable.set("hi", 900);
myHashTable.get("mango");
myHashTable.get("Hello");
console.log(myHashTable.keys()); // print all keys of the hash table

// have to traverse all the buckets and the array associated with each bucket so it is a draw back the data is
// unordered in hash tables i.e for in loop in js is slow

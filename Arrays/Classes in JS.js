// Optional classes in Javascript

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

// 1. reference type
// objects are reference types as well as arrays so they store only address not hte data itself
// 2. context
// this represent what object it is inside by default its window object
// 3. instantiation

class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log("my name is :" + this.name + " and my type is : " + this.type);
    }
}

var ayesha = new Player("Ayesha", "Defender");
ayesha.introduce();

class wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }

    play() {
        console.log(`Weeee i am a : ${this.type}`);
    }
}

const wizard1 = new wizard("shelly", "healer");
wizard1.play();
wizard1.introduce();
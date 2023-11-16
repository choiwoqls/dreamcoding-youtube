//Function
// sub program -> 여러번 재사용이 가능
// 한가지의 일이나 값을 계산하기 위해 사용

// function name(param1, param2){
//  body ... retrun;
//}

// e.g createCardAndPoint -> createCard, createPoint
// function -> Object

function printHello() {
    console.log("Hello");
}

printHello();

function log(msg) {
    console.log(msg);
}

log("hihihi");

//2. Parameters
//premitive -> value
//object -> reference

function changeName(obj) {
    obj.name = "coder";
}

const ellie = { name: "ellie" };

//Default parameters ES6
function showMessage(message, from = "unknown") {
    // if(from === undefined){
    //     from = 'unknown';
    // }

    console.log(`${message} by ${from}`);
}

//Rest parameters ES6
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        //
        console.log(arg);
    }
}

printAll("dream", "coding", "ellie");

// Local scope
let globalMessage = "global"; // global variable

function printMessage() {
    let message = "hello"; // local variable
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        let childMessage = "hihi";
    }
}
printMessage();

//return a value
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

//early return, early exit

//x
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic
    }
}

//o
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic
}

//function expression

const print = function () {
    console.log("print");
};
print();
const printAg = print;
printAg();

// Callback function
function randomQuiz(answer, printYes, printNo) {
    if (answer === "love you") {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log("Yes");
};

//named function
//better debugging
///recursions

const printNo = function print() {
    console.log("No");
};

//Arrow function
// always anonymous
const simplePrints = function () {
    console.log("simplePrint!");
};

const simplePrint = () => console.log("simplePrint!");

const add = (a, b) => a + b;

const adds = function (a, b) {
    return a + b;
};
//IIFE
//선언과 동시에 호출 할 수 있는 기능
// (function name(param1, param2){return})();
(function hello() {
    console.log("IIFE");
})();

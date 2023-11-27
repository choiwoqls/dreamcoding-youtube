"use strict";

//async & await
//깔끔하게 promise를 사용하는 방법

//Async
async function fetchUser() {
    //10 sec ...
    return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
//async 가 붙은 함수 안에서 만 사용 가능
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    return "apple";
}

async function getBanana() {
    await delay(3000);
    return "banana";
}

// function pictFruits() {
//     return getApple().then((apple) => {
//         return getBanana().then((banana) => `${apple} + ${banana}`);
//     });
// }

async function pickFruits() {
    const appleP = getApple();
    const bananaP = getBanana();
    const apple = await appleP;
    const banana = await bananaP;
    return `${apple} + ${banana}`;
}

pictFruits().then(console.log);

//useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then((fruits) => fruits.join("+"));
}
pickAllFruits().then(console.log);

//race()  ->  배열에 전달된 값중 먼저 실행 되는 것만 return;
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

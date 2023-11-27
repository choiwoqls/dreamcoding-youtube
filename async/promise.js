"use strict";

//Promise
//자바스크립트 내장 함수
//비동기 코드 실행 시 callback 대신 쓸 수 있음
//State : pending -> fulfilled or rejected
//소비자 & 제공자

//1. Producer
//만듦과 동시에 실행
const promise = new Promise((resolve, reject) => {
    //doing some heacy work(network, read files)
    console.log("doing somgthing...");
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error("no network"));
    }, 2000);
});

//2. Consumers then, catch, finally

//2-1 then
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally");
    });

//3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then((num) => console.log(num));

//4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("hen"), 1000);
    });

const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error ! ${hen} => egg`)), 1000);
    });

const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fried egg`), 1000);
    });

getHen()
    .then(getEgg)
    .catch((error) => {
        return "bread";
    })
    .then((egg) => cook(egg))
    .then((meal) => console.log(meal))
    .catch(console.log());

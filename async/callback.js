"use strict";
//js = 동기적이다
//hoistong : var, function.. 선언들이 코드 젤 위로 올라간다.
//1초 뒤에 실행
setTimeout(() => {
    console.log("2");
}, 1000);

//Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log("hello"));

//Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 1000);

//Callback Hell Ex
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if ((id === "ellie" && password === "dream") || (id === "coder" && password === "academy")) {
                onSuccess(id);
            } else {
                onError(new Error("not found"));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === "ellie") {
                onSuccess({ name: "ellie", role: "admin" });
            } else {
                onError(new Error("no access"));
            }
        }, 1000);
    }
}

const UserStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
UserStorage.loginUser(
    id,
    password,
    (user) => {
        UserStorage.getRoles(
            user,
            ((userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.name} role`);
            },
            (error) => {
                console.log("error");
            })
        );
    },
    (error) => {
        console.log("error");
    }
);

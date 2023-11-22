"use strict";

//Json
//데이터를 주고 받는 가장 간단한 포멧
//텍스트 기반 가볍고 눈으로 보기도 쉽고
//key, value 로 이루어져있다
//직렬화, 데이터 전송시 사용
//프로그램 언어와 플랫폼에 상관없이 사용이 가능하다

//1. Object To JSON
//stringfy(obj)
let json = JSON.stringif(true);

json = JSON.stringify(["apple", "banana"]);

const rabbit = {
    name: "tori",
    color: "white",
    size: "small",
    birthDate: new Date(),
    symbol: Symbol("id"),
    jump: () => {
        console.log(`${this.name} can jump!`);
    }, //함수는 포함 안됨
};
json = JSON.stringify(rabbit);

json = JSON.stringify(rabbit, ["name"]); // 원하는 properties 접근

json = JSON.stringify(rabbit, (key, value) => {
    return key === "name" ? "ellie" : value;
});
json = JSON.stringify(rabbit);

//2.JSON To Object
//parseFloat(json);

const obj = JSON.parse(rabbit);

//JSON => Object
//모든 값 String 형태로 불러옴 함수는 없어짐, Api도 String 형태로 변환됨

obj = JSON.parse(rabbit, (key, value) => {
    return key === "birthDate" ? new Date() : value;
});

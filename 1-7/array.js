"use strict";

//Array

const arr1 = new Array();
const arr2 = [1, 2];

//index
const fruits = ["apple", "banana"];
console.log(fruits[0]);

for (let fruit of fruits) {
    console.log(fruit);
}

//forEach
fruits.forEach((fruit, idx, arr) => console.log(fruit, idx, arr));

//add, delete, copy
//push - 배열 맨 뒤에 요소 추가
//pop - 배열 맨 뒤에 요소 삭제

//unshift : 배열 맨 앞에 요소 추가
//shift : 배열 맨 앞에 요소 삭제

//shift , unshift too slow -> 순차적으로 진행

//splice (start, count, 'str1', 'str2')
//start 인덱스부터 count 인덱스 까지 삭제, start만 필수
//삭제 된 자리에 str1, str2 추가

//concat - 두 배열 연결

//search
//find index

//indexOf(str) -> str의 index 값 리턴 앞에서 부터 찾음

//includes(str) -> str이 배열에 포함 여부 boolean

//lastIndexOf(str) -> str의 index 값 리턴 뒤에서 부터 찾음

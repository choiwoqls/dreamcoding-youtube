"use strict";
{
    //배열 -> 문자열
    const fruits = ["apple", "banana", "orange"];
    const result = fruits.join();
}
{
    //문자열 -> 배열
    const fruits = "apple,banana,cherry";
    const result = fruits.split(",");
}
{
    //배열 역방향
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); //[5,4,3,2,1]
}
{
    //배열 원하는 부분 가져오기
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // [3,4,5]
}

class student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new student("A", 29, true, 45),
    new student("b", 28, false, 80),
    new student("c", 30, true, 90),
    new student("d", 40, false, 66),
    new student("e", 18, true, 88),
];

{
    //score 가 90인 학생 출력
    const result = students.find(function (student) {
        return student.score === 90;
    });

    const result2 = students.find((student) => student.score === 90);
}
{
    //enrolled === true인 학생 배열
    const result = students.filter((student) => student.enrolled);
}
{
    //학생들 점수만 출력
    const result = students.map((student) => student.score);
}
{
    //점수가 50점 보다 작은 학생들이 있는지 확인 boolean 값 return
    const result = students.some((student) => student.score < 50);
    const result2 = !students.every((student) => student.score >= 50);
}
{
    //학생들 점수 평균
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}
{
    //학생들 점수만 출력 (문자열로 변환)
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result);
}
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b) //a-b = asc || b-a = desc
        .join();
    console.log(result);
}

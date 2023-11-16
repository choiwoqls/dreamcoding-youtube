// 객체 지향 프로그래밍
// 클래스 -template
// 클래스를 사용해 만든 데이터 -> Object

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} : "hello"`);
    }
}

const jb = new Person("jb", 24);

//Person.speak();
jb.speak();

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        //this._age = value;
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User("Steve", "Job", -1);

//public private
//그냥 선언하면 public
//# 붙여서 선언하면 private

class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();

//Static
//들어오는 데이터와 상관없이 공통적으로 클래스에서 사용되는 것 일 때
class Article {
    static publisher = "Dream Coding";

    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

Article.printPublisher();

//Inheritance 상속

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape() {}

class Triangle extends Shape() {
    draw() {
        super.draw();
        console.log("ㅋ");
    }

    getArea() {
        return (width * this.height) / 2; //오버라이딩
    }
}

//Class Checking instanceOf
//자바스크립트의 모든 클래스는 Object를 상속 한 것

//자바 스크립트 MDN

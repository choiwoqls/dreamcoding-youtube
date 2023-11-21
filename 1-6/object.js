//Object
//변수 하나 당 값 하나

const obj1 = { name: "" }; //Object literal
const obj2 = new Object(); //Object constructor

const name = "jb";
const age = 24;

print(name, age);

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jb = { name: "jb", age: 24 };

print(jb);

jb.hasJob = true;

delete jb.hasJob;

const ex = "hasjob";

console.log(jb[selectNum()]);
console.log(jb["name"]);
jb["hasJob"] = true;

function printValue(obj, key) {
    console.log(obj[key]);
}

function makePerson(name, age, gender) {
    let Gender = gender;
    //template
    return {
        name: name, //key == value 이면
        age, //생략 가능
        aa: gender,
    };
}

//in operator
console.log("name" in jb);
console.log("age" in jb);
console.log("random" in jb);

//for in, for of
//for (key in obj)
for (key in jb) {
    console.log(key);
}
//for (value of iterable)
const array = [1, 2, 4, 5];

for (value of array) {
    console.log(value);
}

const user = { name: "jj", age: 20 };
const user2 = user;

const user4 = {};

//복사
Object.assign(user4, user);

const user5 = Object.assign({}, user);

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); //뒤에 있는 것을 덮어 씌움
//mixed.color = blue;
//mixed.size = big;

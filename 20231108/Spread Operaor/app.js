let array = ["hello", "world"];
console.log(...array);

let word = "hello";
console.log(...word);

// let a = [1, 2, 3];
// let b = [4, 5];

// let c = [...a, ...b];
// console.log(c);

// let a = [1, 2, 3];
// let b = [...a];

// a[3] = 4;

// console.log(a);
// console.log(b);

// 객체
let object1 = { a: 1, b: 2 };
let object2 = { ...object1, c: 3 };
let object3 = { a: 2, ...object1 }; // 중복되는 값이 있으면(a) 자동으로 뒤에 값으로 스크립트가 출력한다.

console.log(object3);

// ! ... spread operator 문법은 대괄호를 제거해준다.
// ! 문자에 붙이면 문자를 분리 해준다.
// ^ 사용용도 array를 합치기 / 복사 / Deep copy
// * 각각 독립적인 값을 가지도록 Array, Object를 복사하려면? Spread Operator를 사용
// ? 함수 파라미터 넣을 때 사용

function sum(a, b, c) {
  console.log(a + b + c);
}

const input = [10, 20, 30];
sum(input[0], input[1], input[2]); //주먹구구식
sum.apply(undefined, input); // 옛날 방식
sum(...input); // 요즘방식

let person = {
  인사: function () {
    console.log(this.name + "안녕하세요");
  },
};

let person2 = {
  name: "손흥민",
};

person.인사();

// person.인사.apply(person2);
// person.인사.call(person2);

var a = [1, 2, 3];
var b = ["you", "are"];
var c = function () {
  console.log([...a], [...[...b]], [a[0]]);
};

c(a, b);

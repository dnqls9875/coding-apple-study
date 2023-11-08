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

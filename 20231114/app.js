// 원시 타입
var a = 1;
b = a;
console.log(b);
// ! 복사가 가능

// 참조 타입

var obj = {
  name: "이우빈",
};

var obj2 = {
  name: "박우빈",
};

console.log(obj);
console.log(obj2);
// console.log((obj.name = "김우빈"));

// ! constructor 문법의 용도
// ! - object를 마구 복사하고 싶을 때 사용한다.
// ! - 비슷한 object를 쉽게 찍어낼 수 있는 분법

// ? 일반적으로는
var 사람 = { name: "kim" };
var 사람2 = 사람; // X 이렇게 되면 사람과 사람2 의 object 값을 공유하기 때문에 비효율적 사람의 값을 바꿔도 사람2가 바뀌게 됨.
var 사람2 = { name: "kim" }; // 이렇게 해야 독립적인 object 값을 가지게 됨

// ? constructor
// var 학생1 = {
//   name: "kim",
//   age: 15,
//   sayHi: function () {
//     console.log("안녕하세요" + this.name + "입니다.");
//   },
// };

// ! 생성자 함수
// ! constructor object 생성 기계를 만들 때 함수 이름 첫글자는 대문자로 짓는다.
// 문제
// function Student(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function () {
//     console.log(`안녕 나는 ${this.name}이야 내 나이는 ${this.age}살이야`);
//   };
// }

// const 학생1 = new Student("Kim", 20);
// const 학생2 = new Student("Park", 21);
// const 학생3 = new Student("Lee", 22);

// 학생1.sayHi();
// 학생2.sayHi();
// 학생3.sayHi();

// prototype 변경

function Student(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi();
}

Student.prototype.sayHi = function () {
  console.log(`안녕 나는 ${this.name}이야 내 나이는 ${this.age}살이야`);
};

const 학생1 = new Student("Kim", 20);
const 학생2 = new Student("Park", 21);
const 학생3 = new Student("Lee", 22);

// ----------------------------------------------------------------------------------

Array.prototype.remove3 = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === 3) {
      this.splice(i, 1);
    }
  }
};

// function Remove(remove) {
//   this.remove = remove;
//   this.remove3();
// }

// Remove.prototype.remove3 = function () {
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === 3) {
//       this.splice(i, 1);
//     }
//   }
// };

// const remove = new Remove(2);

var arr = [1, 2, 3, 4, 5, 6];
arr.remove3();
console.log(arr); //[1,2]

// var arr = [1, 2, 3];
// var arr = new Array(1, 2, 3); // 실제 array가 만들어지는 방식
// var obj = { name: "kim" };
// var obj = new Object(); // 실제 object 만들어지는 방식

// var 부모 = {
//   name: "kim",
// };
// var 자식 = {};
// 자식.__proto__ = 부모;

// 자식.name;
// 문제
// function Product(product, price) {
//   this.product = product;
//   this.price = price;
//   this.부가세 = function () {
//     console.log(`${this.price}` * 0.1);
//   };
// }

// const product1 = new Product("shirts", 50000);
// const product2 = new Product("pants", 60000);

// product1.부가세();
// product2.부가세();

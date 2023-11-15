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

// ! 함수는 객체 타입이라고 했으면서 왜function이 반환될까?

// ! 그 이유는 일반 객체는 내부 메서드와 내부 슬롯을 가진다.

// ! 여기서 중요한 점은 함수도 객체라는 점이다. 그러므로 함수도 내부 메서드와 내부 슬롯을 가진다.

// ! 하지만 차이점은 함수는 호출을 할 수 있다는 점이다.

// ! 함수는 call과 construct 메서드를 가지고 있다.

// ! 함수는 모든 함수와 생성자 함수 까지 호출을 할 수 있는데

// ! call메서드를 갖는 함수 객체를 callable이라고 하며, construct 메서드를 갖는 함수 객체를 consturtor 이라고 한다.
// ! construct 메서드를 갖고 있지 않는 함수 객체는 non-consturtor이라고 불린다.

// ! consturtor는 생성자 함수에서 호출 할 수 있으며, non-consturtor함수는 생성자 함수에서 호출 할 수 없다.

// ! consturtor 는 함수선언문, 함수 표현식, 클래스 이라고
// ! non-consturtor는 매서드, 화살표 함수이다.

// ! 즉 결론은 모든 함수객체는 call 할 수 있는 callable이며 callable 할 수 있으면 데이터 타입은 모두 function으로 반환된다.

// ! 여기서 차이는 일반 함수 정의로 생성자 함수에서 호출 할 수 있는지 없는지에 차이이다.

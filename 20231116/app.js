// ES5 상속
// var 부모 = { name: "kim", age: 60 };

// var 자식 = Object.create(부모);
// 자식.age = 30;

// var 손자 = Object.create(자식);
// 손자.age = 3;

// ES6 상속 방법 : class

class 부모 {
  constructor() {
    this.name = "kim";
    this.age = 60;
    // this.sayHi = function () {  // 여기에 함수 작성하면 자식에다가 상속 해줄 수 있음
    //   console.log("hello");
    // };
  }
  // 여기는 상속 하지 않음
  sayHi() {
    console.log("hello"); // 부모.prototype에 추가됨
  }
}

var 자식 = new 부모();
자식.__proto__; // 아래와 같음
Object.getPrototypeOf(자식); // 더 많이 사용해야함

// class

class Father {
  constructor() {
    this.firstName = "이";
  }
  sayHi() {
    console.log("안녕하세요 저는 아빠에요");
  }
}

class User extends Father {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log("안녕하세요 저는 저에요");
  }
}

const family1 = new User("용열", 61);
const family2 = new User("우빈", 29);

class Person {
  constructor() {
    this.name = "이";
    this.age = 32;
  }

  get nextAge() {
    return this.age + 1;
  }

  set setAge(age) {
    this.age = age;
  }
}

const person1 = new Person();

// let 사람 = {
//   name: "Lee",
//   age: 30,
//   // getter
//   get nextAge() {
//     return this.age + 1;
//   },
//   // setter
//   set setAge(age) {
//     this.age = parseInt(age); // parseInt는 문자도 숫자로 치환해주는 메서드
//   },
// };

// 사람.setAge = "20";
// 사람.nextAge = 20;

// ! set은 데이터 변경하는 함수에 사용 - 파라미터 1개 강요함.
// ! get은 데이터 꺼내쓰는 함수에 사용 - return이 꼭 있어야 한다. , 파라미터 없어야 함

// 문제 1

class Dog {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}
const 강아지1 = new Dog("말티즈", "white");
const 강아지2 = new Dog("진돗개", "brown");

class Cat extends Dog {
  constructor(type, color, age) {
    super(type, color);
    this.age = age;
  }
}
const 고양이1 = new Cat("코숏", "white", 5);
const 고양이2 = new Cat("러시안블루", "brown", 2);

// class Pet {
//   constructor(type, color, age) {
//     this.type = type;
//     this.color = color;
//     this.age = age;
//   }

//   get nextAge() {
//     return this.age + 1;
//   }
//   set setAge(age) {
//     this.age = age;
//   }
// }

// class Dog extends Pet {
//   constructor() {
//     super();
//   }
// }

// class Cat extends Pet {
//   constructor() {
//     super();
//   }
// }

// const 강아지1 = new Pet("말티즈", "white");
// const 강아지2 = new Pet("진돗개", "brown");
// const 고양이1 = new Pet("코숏", "white", 5);
// const 고양이2 = new Pet("러시안블루", "brown", 2);

// 문제 2
class Unit {
  constructor() {
    this.공격력 = 5;
    this.체력 = 100;
  }
  get battlePoint() {
    return console.log(`${this.공격력 + this.체력}`);
  }
  set heal(heal) {
    this.체력 = this.체력 + heal;
  }
}

const 유저1 = new Unit();
const 유저2 = new Unit();
const 유저3 = new Unit();

// 문제 3



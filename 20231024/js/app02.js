/**
 * ^ 함수
 * ! 1. 코드들을 기능으로 묶고 싶을 때 사용
 * ! 2. 입출력 기계를 만들고 싶을 때 사용
 */

/**
 * * 화살표 함수 장점
 * ? 코드가 한줄이면 중괄호 생략, return 생략 가능
 */

var 함수 = (a, b) => a + b;

함수(10, 6);

[1, 2, 3, 4].forEach((a) => console.log(a));

var obj = {
  fnc: () => {},
};

var 사람 = {
  name: "손흥민",
  sayHi: function () {
    console.log(`안녕 나는 ${this.name}`);
  },
};

사람.sayHi();

var 자료 = {
  data: [1, 2, 3, 4, 5],
};

자료.전부더하기 = () => {
  var 합 = 0;
  자료.data.forEach((a) => {
    합 = 합 + a;
  });
  console.log(합);
};

자료.전부더하기();

document.getElementById("버튼").addEventListener("click", function () {
  setTimeout(() => {
    console.log(this.innerHTML);
  }, 1000);
});

const btnList = document.querySelectorAll(".button");

const removeClass = (element, className) => element.classList.remove(className);
const addClass = (element, classsName) => element.classList.add(classsName);

const btnHandler = (event) => {
  btnList.forEach((button) => removeClass(button, "active"));
  addClass(event.currentTarget, "active");
};

btnList.forEach((element) => element.addEventListener("click", btnHandler));

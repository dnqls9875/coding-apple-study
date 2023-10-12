// ! 369 게임 3의 배수 박수 나머지 통과
function game(num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
// ! 369게임 9의 배수 박수x2, 3의 배수 박수 나머지 통과
function game2(num) {
  if (num % 9 == 0) {
    console.log("박수x2");
  } else if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
function game3(num) {
  if (num % 10 == 3 || num % 10 == 6 || num % 10 == 9) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
// ! 공인중개사 시험 합격 여부 확인 두과목 합계 120점 이상 합격
function test(point, point2) {
  if (point < 40 || point2 < 40) {
    console.log("불합격");
  } else if (point + point2 >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}
// ! 0 ~ 100점 입력 점수 넘어가면 alert
function test2(point) {
  if (point > 100) {
    alert("100점이 만점입니다.");
  } else {
    alert("점수 제대로 입력했네요");
  }
}
// ! 변수
let age = 28;
const homeTown = "양주";

var 예금액 = 10000;
var 미래예금액 = 0;

if (예금액 >= 50000) {
  console.log(예금액 * 1.2 * 1.2);
} else {
  console.log(예금액 * 1.15 * 1.15);
}
console.log(미래예금액);

// ^ 태조 이성계
// ! 내가 짠 코드
// document.getElementById("send-answer").addEventListener("click", function () {
//   if (document.getElementById("answer").value == "1335") {
//     alert("정답");
//   } else if (document.getElementById("answer").value == "") {
//     alert("답을 입력하세요");
//   } else {
//     alert("틀렸습니다");
//   }
// });

// 참고 코드
// let year = 0;
// document.querySelector("#send-answer").addEventListener("click", function () {
//   year++;
//   const answer = document.querySelector("#answer").value;
//   if (answer == "1335") {
//     alert("정답입니다");
//   } else if (answer == "") {
//     alert("답을 입력하세요");
//   } else {
//     alert("틀렸습니다");
//   }
// });

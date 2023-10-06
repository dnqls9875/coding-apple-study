// ? . = ~의
// ? 등호(=) : 오른쪽 내용을 왼쪽에 넣으라는 뜻

// * 문서의 hello 아이디를 사용하는 요소를 가져오고, 내부 html 내용을 안녕으로 바꿔줘
// document.getElementById("hello").innerHTML = "안녕";
// document.getElementById("hello").style.fontSize = "16px";

// document.getElementById("close").addEventListener("click", () => {
//   document.getElementById("alert").style.display = "none";
// });

// * 파라미터
// function alertBox(alertText) {
//   document.getElementsByClassName("title")[0].innerHTML = alertText;
//   document.getElementById("alert").style.display = "block";
// }

// ^ clistList
// ^ querySelector => 항상 맨 위의 내용인 querySelector만 가지고 온다.
// ^ 그래서 모두 선택 하고 싶으면 querySelectorAll 사용
const btnHandler = () => {
  document.querySelector(".list-group").classList.toggle("active");
};

document.querySelector(".navbar-toggler").addEventListener("click", btnHandler);

const logInHandler = () => {
  document.querySelector(".black-bg").classList.add("show");
};
const closeBtnHandler = () => {
  document.querySelector(".black-bg").classList.remove("show");
};

document.querySelector(".loginBtn").addEventListener("click", logInHandler);
document.querySelector(".closeBtn").addEventListener("click", closeBtnHandler);

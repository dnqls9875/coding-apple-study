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

// 팝업 모달창
const logInHandler = () => {
  document.querySelector(".black-bg").classList.add("show");
};
const closeBtnHandler = () => {
  document.querySelector(".black-bg").classList.remove("show");
};

document.querySelector(".loginBtn").addEventListener("click", logInHandler);
document.querySelector(".closeBtn").addEventListener("click", closeBtnHandler);

// 조건문
// 전송버튼 누르면 저기 input 에 입력한 값이 공백이면 알림창 띄워주세요

// if (true) {
//   console.log("안녕");
// } else {
//   console.log("잘가");
// }

if (1 == 3) {
  console.log("맞아요");
} else if (1 < 3) {
  console.log("맞아요1");
}

document.getElementById("send").addEventListener("click", function (e) {
  if (document.getElementById("email").value == "") {
    e.preventDefault();
    alert("아이디를 입력하세요");
  }
  if (document.getElementById("password").value == "") {
    e.preventDefault();
    alert("비밀번호를 입력하세요");
  }
  if (document.getElementById("password").value.length < 6) {
    e.preventDefault();
    alert("비밀번호 더 길게 입력하세요");
  }
});

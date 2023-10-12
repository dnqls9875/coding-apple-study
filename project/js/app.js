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

document.getElementById("send").addEventListener("click", function (e) {
  const clientInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  // 아이디 공백 검사
  if (clientInput == "") {
    e.preventDefault();
    alert("아이디를 입력하세요");
  }
  // 이메일 유효성 검사
  if (/\S+@\S+.\S+/.test(clientInput) == false) {
    alert("정확한 이메일 형식을 작성해주세요");
  }
  // 비밀번호 공백 검사
  if (passwordInput == "") {
    e.preventDefault();
    alert("비밀번호를 입력하세요");
  }
  // 비밀번호 유효성 검사
  if (/[A-Z]/.test(passwordInput) == false) {
    e.preventDefault();
    alert("대문자 최소 한글자를 포함시켜주세요");
  }
  // 비밀번호 6자리 미만시
  if (passwordInput < 6) {
    e.preventDefault();
    alert("비밀번호 더 길게 입력하세요");
  }
});

// 다크 모드

// 버튼 눌렀을 때 나오는 함수 이벤트
let count = 0;
const lightBtnHandler = function () {
  count++;
  if (count % 2 == 1) {
    document.querySelector(".bg-dark").innerHTML = "Light 🔄";
    document.querySelector("body").classList.add("dark");
    document.querySelector(".change").src = "./images/dark.jpg";
  } else {
    document.querySelector(".bg-dark").innerHTML = "Dark 🔄";
    document.querySelector("body").classList.remove("dark");
    document.querySelector(".change").src = "./images/light.jpg";
  }
};
// 다크모드 버튼을 클릭하는 이벤트 모션
document.querySelector(".bg-dark").addEventListener("click", lightBtnHandler);

// setTimeout(() => {
//   document.querySelector(".alert").style.display = "none";
// }, 5000);

// const tabBtns = document.querySelectorAll(".tab-button");
// const activeBtns = document.querySelectorAll(".tab-content");

// const removeClass = (element, className) => element.classList.remove(className);
// const addClass = (element, className) => element.classList.add(className);

// const tabBtnHandler = (event) => {
//   // 모든 탭 버튼에서 "orange" 클래스 제거
//   tabBtns.forEach((button) => removeClass(button, "orange"));
//   // 클릭된 탭 버튼에 "orange" 클래스 추가
//   addClass(event.currentTarget, "orange");

//   // 탭 버튼과 연결된 탭 콘텐츠의 인덱스 찾기
//   const tabIndex = Array.from(tabBtns).indexOf(event.currentTarget);

//   // 모든 탭 콘텐츠에서 "active" 클래스 제거
//   activeBtns.forEach((div) => removeClass(div, "active"));
//   // 클릭된 탭 버튼에 해당하는 탭 콘텐츠에 "active" 클래스 추가
//   addClass(activeBtns[tabIndex], "active");
// };

// tabBtns.forEach((element) => element.addEventListener("click", tabBtnHandler));

// 버튼0 누르면
// 모든버튼에 붙은 orange라는 클래스를 제거
// 버튼0에 orange 클래스 추가
// 모든 div에 붙은 active 클래스명 제거
// div0에 active 부착

const tabBtnHandler = document.querySelectorAll(".tab-button");
const tabActiveHandler = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabBtnHandler.length; i++) {
  document
    .querySelectorAll(".tab-button")
    [i].addEventListener("click", function () {
      document.querySelector(".tab-button").classList.remove("orange");
      document.querySelectorAll(".tab-button")[i].classList.add("orange");
      document.querySelector(".tab-content").classList.remove("active");
      document.querySelectorAll(".tab-content")[i].classList.add("active");
    });
}

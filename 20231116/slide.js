// 변수 지정

const sliderWrapper = document.querySelector(".slide"); // 클래스명 slide
const slideList = document.querySelector(".slide-list"); // 클래스명 slide-list
const slideItem = document.querySelectorAll(".slide-list__item"); // 클래스명 slide-list__item
const slideCount = slideItem.length; // 슬라이드 개수
let currentIndex = 0;
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//  슬라이드 이동 함수
const moveSlide = function (idx) {
  slideList.style.left = `${idx * -100}%`;
  currentIndex = idx;
};

// 버튼을 클릭하면 슬라이드 이동시키기
const slideNextBtn = function () {
  moveSlide(currentIndex + 1);
};
const slidePrevBtn = function () {
  moveSlide(currentIndex - 1);
};

// 클릭 이벤트 지정 이벤트 리스터
nextBtn.addEventListener("click", slideNextBtn);
prevBtn.addEventListener("click", slidePrevBtn);

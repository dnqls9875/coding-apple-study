// let 변수 = "손흥민";
// let 문자 = `안녕하세요 저는 ${변수} 입니다.`;

// function 해체분석기(문자들, 변수들) {
//   console.log(문자들[1], 문자들[0]);
//   // console.log(변수들);
// }

// 해체분석기`안녕하세요 저는 ${변수} 입니다.`;

let pants = 9;
let socks = 100;

function array(글자들, 변수들1, 변수들2) {
  if (변수들1 <= 10) {
    console.log(`바지 다 팔렸어요`);
  } else {
    console.log(글자들[1] + 변수들1 + 글자들[0] + 변수들2);
  }
}

array`바지${pants} 양말${socks}`;

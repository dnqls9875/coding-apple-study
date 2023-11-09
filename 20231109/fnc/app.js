// function 임시함수() {
//   return 10;
// }

// function plus(a, b = 임시함수()) {
//   console.log(a + b);
// }

// plus(1);

// function fnc(a, b, c) {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

// fnc(3, 4, 5);

function fnc2(...rest) {
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

function 어레이(...rest) {
  return rest;
}

var a = [1, 2, 3];
var b = ["you", "are"];
var c = function (a, b) {
  console.log([[...a], ...[...b]][1]);
};
c(a, b);

function 함수(a = 5, b = a * 2) {
  console.log(a + b);
  return 10;
}
함수(3); // a=3 b=6

function array(...rest) {
  return rest;
}

var newAarray = array(
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25
);
console.log(newAarray);

var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 10, 5, 4, 6, 15, 7];
console.log(Math.max(...numbers));

console.log(["b", "c", "a"].sort());

//['a', 'b', 'c'] 출력됨

function 정렬(글자) {
  // (여기 어떤 코드가 들어가야할까요?)
  console.log(...[...글자].sort());
}

정렬("bear");

글자세기("aacbbb");
function 글자세기(글자) {
  let 결과 = {};
  [...글자].forEach(function (a) {
    if (결과[a] > 0) {
      결과[a]++;
    } else {
      결과[a] = 1;
    }
  });
  console.log(결과);
}

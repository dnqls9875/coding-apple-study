// this 바인딩

console.log(this); // 1. window

let obj = {
  data: "kim",
  age: 29,
  fnc: function () {
    console.log(this); // 2. 오브젝트 내 함수에서 this 사용하면 그 함수를 가지고 있는 오브젝트를 뜻함
  },
};

obj.fnc();

let obj2 = {
  data: {
    fnc: () => {
      console.log(this); // 화살표 함수는 this 값을 함수 밖에 있던거 그대로 사용
    },
  },
};

obj2.data.fnc();

function 간지나는함수() {
  console.log(this); // 일반함수 내에서는 this값이 window
}

var 오브젝트1 = {
  data: function () {
    console.log(this);
  },
};
오브젝트1.data();

var 오브젝트2 = {
  data: {
    간지함수: function () {
      console.log(this);
    },
  },
};
오브젝트2.data.간지함수();

function 기계() {
  this.이름 = "kim"; // 3. 새로 생성되는 오브젝트 (instance)
}

let object = new 기계();

document.getElementById("button").addEventListener("click", function (e) {
  // console.log(this);  // 4. 이벤트리스터 안에서는 e.currentTarget

  let arr = [1, 2, 3];
  arr.forEach(function (a) {
    console.log(this);
  });
});

let object4 = {
  names: ["kim", "lee", "park"],
  fnc: function () {
    console.log(this); // object4
    object4.names.forEach(() => {
      console.log(this); // object4
    });
  },
};

object4.fnc();

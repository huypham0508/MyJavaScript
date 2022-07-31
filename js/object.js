/**
 * Làm việc với Oject
  var myInfo = {
  age: 20,
  name: "Pham Manh Huy",
  address: "Kien Giang",
  getName: function () {
    return this.name;
  },
};
myInfo.email = "phammanhuy1107@gmail.com"; //Them key va value
console.log(myInfo.address); // lấy value
delete myInfo.name; // xoa
 * *** lưu ý trong Oject, function được gọi là phương thức
 */
var myInfo = {
  name: "Pham Manh Huy",
  age: 20,
  address: "KG, VN",
};
var myName = ["Pham Manh Huy", 19, "Dep trai"];
/* Làm việc với mảng 2 */
/* array methods:
  - forEach()
  - every()
  - some()
  - find()
  - filter()
  - map()
  - reduce()
*/
var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 0,
    isFinish: true,
  },
  {
    id: 2,
    name: "PHP",
    coin: 0,
    isFinish: true,
  },
  {
    id: 3,
    name: "React JS",
    coin: 250,
    isFinish: false,
  },
  {
    id: 4,
    name: "HTMl",
    coin: 0,
    isFinish: false,
  },
  {
    id: 5,
    name: "Javascript",
    coin: 350,
    isFinish: true,
  },
];

/* forEach --- tương tự vòng lặp for*/
courses.forEach(function (course, index) {
  console.log(index, course);
});
/* every --- Kiêm tra các phần tử đúng điều kiện*/
var isEvery = courses.every(function (course, index) {
  console.log("đây la every");
  return course.coin === 0;
});
console.log(isEvery);
/* some --- Trả về false hoặc true khi 1 trong tất cả thỏa mãn điều kiện*/
var isSome = courses.some(function (course, index) {
  console.log("đây la some");
  return course.coin === 0;
});
console.log(isSome);
/* find --- tìm kiếm và trả về chỉ một phần tử đầu tiên được tìm trong mảng đó  */
var isFind = courses.find(function (course, index) {
  console.log("đây la find");
  return course.name === "Javascript";
});
console.log(isFind);
/* filter --- tìm kiếm và trả về tất cả các phần tử được tìm được trong mảng đó  */
var isFilter = courses.filter(function (course, index) {
  console.log("đây la Filter");
  return course.name === "Javascript";
});
console.log(isFilter);
/* map --- thêm sửa (originArray là array gốc) */
var newCourses = courses.map(function (newName, index, originArray) {
  // console.log("đây la array gốc");
  // console.log(originArray);
  console.log("đây la map");
  return {
    id: newName.id,
    index: `vi tri la ${index + 1}`,
    name: `Khoa hoc ${newName.name}`,
    coin: newName.coin,
    textCoin: `tien hoc la ${newName.coin}`,
  };
});
console.log(newCourses);
/* reduce1 --- sử dụng khi muốn trả về một kết quả duy nhất*/
/**
 *
 * -  data (biến lưu trữ)
 * -  currentValue (Giá trị hiện tại)
 * -  currentIndex (Vị trí hiện tại)
 * -  originArray (Mảng gốc)
 * -  0 là giá trị khởi tạo của biến lưu trữ
 */
var totalCoin = courses.reduce(function (
  data,
  currentValue,
  currentIndex,
  originArray
) {
  var total = data + currentValue.coin;
  console.table({
    "Lần chạy: ": currentIndex + 1,
    "Lưu trữ: ": data,
    "Giá trị coin: ": currentValue.coin,
    "Giá trị cộng thêm: ": total,
  });
  return total;
},
0);
console.log("đây là reduce1");
console.log(totalCoin);
/* reduce 2 --- Có thể không viết giá trị khởi tạo (tùy trường hợp)*/
var totalCoin2 = courses.reduce(function (data, course) {
  return data + course.coin;
}, 0);
console.log("đây là reduce2");
console.log(totalCoin2);
//ví dụ không đặt giá trị khởi tạo
var numbers = [100, 100, 500, 300];
var sumNumbers = numbers.reduce(function (data, number) {
  return data + number;
});
console.log("đây là ví dụ khi không đặt giá  trị khởi tạo(reduce2)");
console.log(sumNumbers);
/* flat --- "Làm phẳng mảng" từ Depth array (Mảng sâu) */
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (output, items) {
  return output.concat(items);
}, []);
console.log("Làm phẳng mảng");
console.log(flatArray);
var topics = [
  {
    topic: "Front-end",
    coursers: [
      { id: 1, name: "HTML, CSS" },
      { id: 2, name: "Sass, TailwindCSS" },
    ],
  },
  {
    topic: "Back-end",
    coursers: [
      { id: 1, name: "NodeJS" },
      { id: 2, name: "PHP" },
    ],
  },
];
var flatTopics = topics.reduce(function (output, topic) {
  return output.concat(topic.coursers);
}, []);
console.log(flatTopics);
/* thế nào là phương thức reduce có logic */
// var result = flatArray.reduce((output, items) => {
//   return output + items;
// });
// console.log(result);
/* includes method */
// var title = "Responsive web design";
// console.log(title.includes("web", 0));
// var courses = ["JS", "PHP", "NODEJS"];
// console.log(courses.includes("JS", 0));

/* call  back  */
/**
 * Khái niệm: là hàm (function) được truyền vào đối số
 * Khi gọi hàm khác
 * 1. là hàm
 * 2. Được truyền vào đối số
 * 3. Được gọi lại (trong hàm nhận đối số)
 */

function myFunction(param) {
  //chắc chắn là function thì mới thực thi
  if (typeof param === "function") {
    console.log(param);
  }
}
function myCallback(value) {
  console.log("Value vua nhap: ", value);
}
myFunction(123);
myFunction("Pham Manh Huy");
myFunction(myCallback("haha"));
/* call back 2 */
var monhoc = ["Javascript", "PHP", "Ruby"];
/* base map */
// Array.prototype.map2 = function (callback) {
//   var output = [],
//     length = this.length;
//   for (let i = 0; i < length; ++i) {
//     var result = callback(this[i], i);
//     output.push(result);
//   }
//   return output;
// };
// var callBack = monhoc.map2(function (output, index) {
//   console.log(index, output);
//   return `<h2>${output}</h2>`;
// });
// console.log(callBack.join(""));
/* base forEach */
Array.prototype.forEach2 = function (output) {
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      output(this[i], i, this);
    }
  }
};
monhoc.forEach2(function (output, index, originArray) {
  console.log(output);
  console.log(index);
  console.log(originArray);
});

/* base find / filter */
Array.prototype.filter2 = function (callback) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

var filterCourses = courses.filter2(function (output) {
  return output.name === "Javascript";
});
console.log(filterCourses);
/* base some */
Array.prototype.some2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
      if (callback) {
        return true;
      }
    }
    return false;
  }
  return output;
};
var someCourses = courses.some2(function (output, index, array) {
  return output.name === "PHP";
});
console.log(someCourses);
/* base every */
Array.prototype.every2 = function (callback) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};
var everyCourses = courses.every2(function (output, index, array) {
  return output.coin > 50;
});
console.log(everyCourses);

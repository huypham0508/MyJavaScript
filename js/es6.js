// class course {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   getName() {
//     return this.name;
//   }
//   getPrice() {
//     return this.price;
//   }
// }

// var PHPCourse = new course("PHP", 1200);
// var JSCourse = new course("Javascript", 1200);
// console.log(PHPCourse);
// console.log(JSCourse);

/* default parameter values */
// default value trong es5
function bloger(log) {
  if (typeof log === "undefined") {
    console.log("no log");
  }
  console.log(log);
}
// default value trong es6
function bloger(log = "gia tri mac dinh") {
  console.log(log);
}

/* Enhanced object literal  */
/**
 * 1. Định nghĩa key: value cho oject
----------------------------------------------------------------
var name = "Javascript";
var price = 2000;

var course = {
  name,
  price,
  getname() {
    return name;
  },
};
console.log(course.getname());
----------------------------------------------------------------
 * 2. Định nghĩa methods cho oject
 * 3. Định nghĩa key cho oject dưới dạng variable
var fieldName = "Name";
var fieldPrice = "Price";

var course = {
  [fieldName]: "Javascript",
  [fieldPrice]: 2000,
};
console.log(course);

 */
// -------------------------------------------------------
/* Destructuring*/
// *** es5
// lấy từng giá trị trong array gắn vào biến a,b,c
/*
var array = ["Javascript", "PHP", "CPP"];
var a = array[0];
var b = array[1];
var c = array[2];
console.log(a, b, c);
*/
// *** es6
// lấy từng giá trị trong array gắn vào biến a,b,c
/* var array = ["Javascript", "PHP", "CPP"];
var [a, b, c] = array;
console.log(a, b, c); */

/* Rest parameters --> rấy ra những phần còn lại*/
/* var array = ["Javascript", "PHP", "CPP"];
var [a, ...rest] = array;
console.log(a, rest); */
/* toán tử rest là khi sử dungnj với destructuring  */

/* var courses = {
  name: "Javascript",
  price: "6000",
  children: {
    name: "reactJS",
  },
};
var {
  name: newName,
  children: { name: childrenname },
} = courses;
console.log(newName, childrenname); */

// ----------------------------------------------------------------
/* tagged template literals */
// ----------------------------------------------------------------
/* Modules */
// import / Exports
// ----------------------------------------------------------------
/* Optional chaining */

function arrToObj(arr) {
  const obj = {};
  arr.map((items) => {
    obj[items[0]] = items[1];
    console.log(items[0]);
    console.log(items[1]);
  });
  return obj;
}
const obj1 = arrToObj([
  ["name", "Son Dang"],
  ["age", 21],
  ["address", "Ha Noi"],
]);
console.log(obj1);

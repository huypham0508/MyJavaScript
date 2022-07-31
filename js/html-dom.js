/**
 * HTML DOM - DOM  (Doucument Object Model)
 * có 3 thành phần
 * element
 * - get element ---
 * * id
 * document.getElementById("id");
 * * classname
 * document.getElementsByClassName("classname");
 * * tagname
 * document.getElementsByTagName("tagname");
 * * CSS selector
 * document.querySelector("CSS selector");
 * document.querySelectorAll("CSS selector"); - selector All
 * * HTML collection
 * - chỉ  có 1 số thẻ HTML
 * ví dụ:
 * console.log(document.forms);
 *
 *
 *
 * Attribute
 * text
 *
 *  var box = document.querySelectorAll(".box-1");
 *  console.log(box.querySelector("li"));
 *
 *
 *
 * attribute node
 *
 *
 *
 * - get attribute
 * var box = document.querySelector(".box");
 * 1. box.title = "hhudjds";
 * 2. box.setAttribut("attribute-name", "value");
 * 3. box.getAttribut("attribute-name");
 * text node
 * 1. innerText --- trả về text được nhìn thấy
 * var textnode = document.querySelector(".h1");
 * console.log(textnode.innerText);
 * set --- textnode.innerText = "day la set";
 * 2. textContent --- trả về giá trị thật trong html
 * var textnode = document.querySelector(".h1");
 * console.log(textnode.textContent);
 * set --- textnode.textContent = "day la set";
 * 3. innerHTML --- có thể đưa thẻ html vào trong element được chọn
 * 4. OuterHTML --- thay đổi element được chọn
 *
 *
 *
 *
 * node properties
 *
 * var boxElement = document.querySelector(".box");
 * console.log([boxElement]);
 * review thuoc tinh
 *
 *
 * Dom CSS
 * var box = document.querySelector(".box");
 * console.log(box.style);
 * box.style.width = "100px";
 * box.style.height = "100px";
 * box.style.backgroundColor = "red";
 * --- cach 2
 * Object.assign(box.style, {
 * width: "100px",
 * height: "100px",
 * backgroundColor: "red",
 * });
 *
 *
 *
 * *** lastlist property
 * ---- add
 * var selectBox = document.querySelector(".box");
 * selectBox.classList.add(".className");
 *
 * --- contains -- kiem tra class co hay khong
 * var selectBox = document.querySelector(".box");
 * selectBox.classList.contains(".className");
 *
 * --- remove
 * var selectBox = document.querySelector(".box");
 * selectBox.classList.remove(".className");
 *
 * --- toggle
 * var selectBox = document.querySelector(".box");
 * selectBox.classList.toggle(".className");
 */

/**
 * DOM events
 * ----Attributr events
 * var toogleBar = document.querySelector(".menu-active");
 * toogleBar.onclick = function (e) {
 * console.log(Math.ramdom);
 * };
 * --- chon tat ca cac class
 * for (var index = 0; index < toogleBar.length; index++) {
 * var toogleBar = document.querySelectorAll(".menu-active");
 * toogleBar[index].onclick = function (e) {
 * console.log(e.target);
 * };
 * }
 */

/* - onchange(cap nhat khi click chuot ra ngoai)
 * - oninput(cap nhan ngay)


------------------cho ca page-----------------
document.onkeydown = function (e) {
  switch (e.which) {
    case 27:
      confirm("ban co chac chan muon thoat");
      break;
  }
};
---------------------------------------------
var username = document.querySelector('input[type="text"]');
var chekcbox = document.querySelector('input[type="checkbox"]');
var select = document.querySelector("#select");
console.log(select);
username.onkeyup = function (e) {
  console.log(e.which);
  switch (e.which) {
    case 27:
      confirm("ban co chac chan muon thoat");
      break;
  }
};
 */

/**
 * 1. preventDefault --- loại bỏ hành vi mặc định của thẻ html
 *
 *
var aElement = document.links;
console.log(aElement);
for (var i = 0; i < aElement.length; ++i) {
  aElement[i].onclick = function (e) {
    if (!e.target.href.startsWith("https://github.com/")) {
      e.preventDefault();
    }
  };
}

-----------------vi du---------------
 var ulElement = document.querySelector("ul");

ulElement.onmousedown = function (e) {
  e.preventDefault();
};

ulElement.onclick = function (e) {
  console.log(e.target);
};

 *
 * 2. stopPropagation --- loại bỏ sự kiện nổi bọt
 *
  buttonElement.onclick = function (e) {
  e.stopPropagation()
};
 */

/* event listener
var Aelement = document.querySelector("a");
Aelement.addEventListener("click", function (e) {
  //code
});
*/

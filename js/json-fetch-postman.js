/* JSON - là một "ĐỊNH DẠNG" dữ liệu (chuỗi)
        - JavaScript Object Notation
        - JSON thể hiện được: Number, String, Boolean(true, false), null, Array, Object.
        - Thao tác: Giải mã(decode), Mã hóa(Encode)
        - Tên thao tác chuẩn:
        * Stringify (chuyển sang bộ mã khác)--- JS -> JSON
        Cú pháp:
        var json = { name: "Manh Hy", age: 20 };
        console.log(JSON.stringify(json));

        * Parse (dịch lại) --- JSON -> JS
        Cú pháp:
        console.log(JSON.parse(variables));

        ----------------------------------
        Ví dụ JSON:
        var json = "1";
        var json = "true";
        var json = "false";
        ...
*/

/**
 * Primise -
 * 3 trạng thái (pendding - không làm gì, Fulfilled - thành công, rejected - Thất bại )
 * - Sync (Đồng bộ)
 * - Async (Bất đồng bộ)
 * -- cách kiểu bất đồng bộ: fetch,
 * setimeout, setInterval, XMLHttpRequest, file reading
 * - pain
var promise = new Promise(function (resolve, reject) {
  resolve();
});

promise
  .then(function (variables) {
    console.log("Thanh cong");
  })
  .catch(function (variables) {
    console.log("That bai");
  })
  .finally(function () {
    console.log("That bai");
  });
 */
//Câu hỏi phỏng vấn:
//1. Promise là gì?
//- Promise sinh ra để xử lý các thao tác bất đồng bộ, trước khi có promise thì chúng ta sẽ có callback và call back sẽ xảy ra vấn đề là "Call back hell"
//- Để sử dụng promise chúng ta sử dụng từ khóa new promise, ở trong contructor chúng ta sẽ truyền vào executor. Trong đó chúng ta sẽ nhận đuọc 2 tham số(resolve(thành công), reject(Thất bại)).
//- Khi promise được tạo ra chúng ta sẽ sử dụng những phương thức then hoặc catch
//.then hoặc .catch đều nhận những callback function
//.then sẽ được thực thi khi được promise được resolve();
//.catch sẽ được thực thi khi được promise được reject();

/**
 * Promise methods
 * - resolve
promise.then((result) => {
  console.log("result: " + result);
});
 * - reject
promise.then((result) => {
  console.log("result: " + result);
});
 * - all (Chạy song song resolve và reject)
var promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([1, 2]);
  }, 2000);
});
var promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([3, 4]);
  }, 5000);
});

Promise.all([promise1, promise2]).then((result) => {
  console.log(result[0].concat(result[1]));
});
 */

/*
  Promise example
*/

// var users = [
//   {
//     id: 1,
//     name: "Manh Huy",
//   },
//   {
//     id: 2,
//     name: "Son Dang",
//   },
// ];

// var comments = [
//   {
//     id: 1,
//     content: "Xin chao anh son",
//   },
//   {
//     id: 2,
//     name: "Chao em!",
//   },
// ];

// function getComment() {
//   return new Promise((resolse) => {
//     setTimeout(() => {
//       resolse(comments);
//     }, 1000);
//   });
// }
// getComment().then((comment) => {
//   console.log(comment);
// });

var postApi = "http://localhost:3000/todos";

function start() {
  getPost();
  handleCreatePost();
}
function getPost() {
  fetch(postApi)
    .then((response) => response.json())
    .then((posts) => renderPost(posts));
}

function renderPost(posts) {
  const postList = document.querySelector(".post");
  var htmls = posts.map((post) => {
    return `<li class="items items${post.id}">
      <h4 class="userid ${post.id}">${post.userId}</h4>
      <p class="title">${post.title}</p>
      <button onclick="handleDelete(${post.id})" class="${post.id}" )">&times;</button>
      <button onclick="handleUpdate(${post.id})" class="update ${post.id}" id="update">Update</button>
    </li>`;
  });
  postList.innerHTML = htmls.join("");
}

function handleCreatePost() {
  var createBtn = document.querySelector("#create");
  createBtn.addEventListener("click", () => {
    var title = document.querySelector('input[name="title"]').value;
    var userId = document.querySelector('input[name="userid"]').value;
    data = {
      title: title,
      userId: userId,
    };
    sentData(data);
  });
}
function sentData(data) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  };
  fetch(postApi, options)
    .then((response) => {
      return response.json;
    })
    .then((data) => {
      renderPost(data);
    });
}

function handleDelete(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  fetch(postApi + "/" + id, options)
    .then((response) => {
      return response.json;
    })
    .then(() => {
      var postDelete = document.querySelector(".items" + id);
      postDelete.remove();
    });
}

function sendUpdate(id, data) {
  var options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  };
  fetch(postApi + "/" + id, options)
    .then((response) => {
      return response.json;
    })
    .then((data) => {
      renderPost(data);
    });
}
function handleUpdate(id) {
  var ipTitle = document.querySelector('input[name="title"]').value;
  var ipUserid = document.querySelector('input[name="userid"]').value;

  data = {
    title: ipTitle.value,
    userId: ipUserid.value,
  };
  console.log(data);
}

start();

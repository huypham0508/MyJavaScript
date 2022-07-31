/**
 * Hàm là gì ?
 * 1. Hàm
 * - Một khối mã
 * - Làm 1 việc cụ thể
 * 2. Loại hàm
 * - Built - in
 * - Tự định nghĩa
 * 3. Tính chất
 * - Không thực thi khi định nghĩa
 * - Sẽ thực thi khi được gọi
 * - Có thể nhận tham số
 * - Có thể trả về một giá trị
 * 4. Tạo hàm đầu tiên
 */
/**
 * Tham số hàm
 * 1. tham số
 * - Định nghĩa
 * - kiểu dữ liệu
 * - tính privata
 * - 1 tham số
 * - nhiều tham số
 * 2. truyền tham số
 * - 1 tham số
 * - nhiều tham số
 * 3. Arguments?
 * - Đối tượng arguments
function max() {
  console.log(arguments);
}
max("hausid", "asjdhias", "asjdias");
 * - giới thiệu vòng for
function max() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param} - `;
  }
  console.log(myString);
}
 *
 */

/**
 * mảng
 * 1. cách tạo mảng
 * - cách tạo
 * - kiểm tra data type -- console.log(Array.isArray(Arrayname));
 * 2. truy xuất mảng
 * - Độ dài mảng -- console.log(Arrayname.length);
 * - lấy phần tử theo index -- console.log(Arrayname[4]);
 */
/**
 * Làm việc với mảng
 * ví dụ :
 */
var languges = ["English", "Vietnamese", "Japan"];
var languges2 = ["Miên", "Lào", "haha"];
console.log(languges);

//  1. To string - chuyển thành chuỗi
// console.log(languges.toString());

//   2. Join - ngăn các phần tử mảng bằng ...
// console.log(languges.join(", "));

//   3. Pop - Xóa phần tử cuối mảng và trả về phần tử đó
// console.log(languges.pop());

//   4. Push - Thêm một hoặc nhiều phần tử ở cuối mảng và trả về số phần tử trong mảng
// console.log(languges.push("Dart", "Python"));

//   5. Shift - Xóa phần tử đầu mảng và trả về phần tử đó
// console.log(languges.shift());

//   6. Unshift - Thêm một hoặc nhiều phần tử ở đầu mảng và trả về số phần tử trong mảng
// console.log(languges.unshift());

//   7. Splicing - (Xóa, sửa, cắt, thêm)
// languges.splice(1, 1);
// - Xóa (tham số đầu tiên là vị trí bắt đầu, tham số thứ 2 số lượng phần tử muốn xóa)
// -------------------------------
// languges.splice(1, 0, "Dart");
// - Chèn (tham số đầu tiên là vị trí bắt đầu, tham số thứ 2 số lượng phần tử muốn xóa, tham số thứ 3 là phần tử muốn chèn)
// -------------------------------
// languges.splice(1, 1, "Dart");
// - Thay đổi(tham số đầu tiên là vị trí bắt đầu, tham số thứ 2 số lương phần tử muốn xóa, tham số thứ 3 là phần tử muốn thay đổi)

//   8. Concat - Nối mảng
// console.log(languges.concat(languges2));
// - Nối mảng languges với languges2

//   9. Slicing - Cắt element
// console.log(languges.slice(0));
// - tham số thứ nhất là vị trí bắt đầu, tham số thứ 2 là vị trí kết thúc

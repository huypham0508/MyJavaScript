var test = "hd jasus du as";

//   Làm việc với chuỗi "Keyword: JS string methods"
//   1. length
//   2. Find index
console.log(test.indexOf("as"));
//   -- tìm kiếm vị trí của từ as trong biến test. --
//   3. Cut string
console.log(test.slice(4, 6));
//   -- cắt chuỗi 4 và 6 là vị trí đầu và cuối của chuỗi muốn cắt
//   4. Replace
console.log(test.replace("as", "ahsudsad"));
//   -- ghi đè lên chuỗi có sẵn "as" là chuỗi có sẵn trong chuỗi "ahsudsad" để ghi đè
//    Chú ý: /as/g thay thế cho "as" dùng để ghi  đè tất cả các chuỗi là "as"
//   5. Convert to upper case
console.log(test.toLocaleUpperCase());
//   --- thay đổi chuỗi thành chữ hoa
//   6. Convert to lower case
console.log(test.toLocaleLowerCase());
//   --- thay đổi chuỗi thành chữ thường
//   7. Trim
console.log(test.trim());
//   --- Loại bỏ kí tự khoảng trắng ở đầu và ở cuối của chuỗi
//   8. Split
console.log(test.split(" "));
//   --- Chuyển đổi từ kiểu String sang Array
//    Chú ý: Phải tìm được điểm chung trong chuỗi
//    Ví dụ: ', '
//   9. Get a character by index
console.log(test.charAt(4));
console.log(test[4]);
//    Lấy kí tự mong muốn trong chuỗi
//    Chú ý: 4 là vị trị của kí tự mong muốn

//--------------------------------number-------------------------------
/**
 * làm việc với number
 * to string
 * to fixed
 */

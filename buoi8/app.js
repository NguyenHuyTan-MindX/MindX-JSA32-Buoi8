//JSON là gì
/*
JSON là viết tắt của Ký hiệu đối tượng JavaScript
JSON là một định dạng trao đổi dữ liệu nhẹ
JSON là văn bản thuần túy được viết bằng ký hiệu đối tượng JavaScript
JSON được sử dụng để gửi dữ liệu giữa các máy tính
JSON là ngôn ngữ độc lập *
*/
const myObj = {
    name: 'Tan',
    age: 20,
    food: 'BeefSteak'
};
const myObjStr = JSON.stringify(myObj);
console.log(myObjStr);
//{"name":"Tan","age":20,"food":"BeefSteak"}
console.log(JSON.parse(myObjStr));
// phương thức này cũng có thể sử dụng tương tự với mảng
const myArr = ['phobo', 'bunthitnuong', 'nemnuong'];
const myArrStr = JSON.stringify(myArr);
console.log(myArrStr);
console.log(JSON.parse(myArrStr));


// Tại sao dùng JSON
// lí do ta có thể chuyển đối tượng(object) thành kiểu dữ liệu JSON(JSON data)
// thường được ứng dụng trong API -> điển hình nhất là messenger facebook
//Trong JSON, các giá trị phải là một trong các loại dữ liệu sau:
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. array
// 6. object


// JSON.stringpify và JSON.parse


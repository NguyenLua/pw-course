/*
1. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
Biết object student bao gồm 2 thuộc tính: name và grades.
Trong đó grades là một object với 2 thuộc tính kiểu number: math và english
*/
let student = {
    name: 'Nguyen Lua',
    grades: {
        math: 8,
        english: 9
    }
};
console.log(student["grades"]["math"]);
/*
2. Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá
của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.
*/
let product = {
    macBook: 3000000,
    dell: 15000000,
    hp: 10000000

};
for (let property in product) {
    console.log(`San pham ${property}: ${product[property]} VND`);
}
/*
3. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
*/
let bike = {};
bike.color = 'Red';
console.log(bike["color"]);
/*
4. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi
object này
*/
let employee = {
    name: "Nguyen Phuoc",
    age: 30
}
delete employee.age;
console.log(employee);
/*
5. Một trường học có các lớp học và học sinh như sau:
○ classA: An, Bình, Châu
○ classB: Đào, Hương, Giang
Hãy viết code để đáp ứng yêu cầu sau:
- Khai báo tên biến: school
- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
tên các học sinh
*/
const school = { classA: ["An", "Bình", "Châu"], classB: ["Đào", "Hương", "Giang"] }
console.log(school["classA"]);
console.log(school["classB"]);
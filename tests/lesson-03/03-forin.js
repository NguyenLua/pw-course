/*
1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student
= {“name”: “Alex”, “age”: 10} thì in ra
name=Alex
age=10
*/
let student = { name: 'Xiu', age: 30 };
for (const value in student) {
    console.log(`${value} = ${student[value]}`);
}
/*
2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object
student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng
30 (=10+20).
*/
let student2 = { name: 'Xiu', age: 30, salary: 20000, Height: 160 };
let tong = 0;
for (const value in student2) {
    if (typeof student2[value] === "number") {
        tong += student2[value];
    }
}
console.log(tong);
/*
3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object
student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng
[“name”, “age”]
*/
let student3 = { name: 'Xiu', age: 30, salary: 20000, Height: 160 };
let student4 = [];
for (const value in student3) {
    student4.push(value);
}
console.log(student4);
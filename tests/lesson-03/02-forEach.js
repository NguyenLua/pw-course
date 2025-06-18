/*
1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra
1
2
3
*/
let arr = [1, 6, 7, 8, 99, 90];
arr.forEach((myNumber) => {
    console.log(myNumber);
})
/*
2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2,
3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3
*/

let arr2 = [1, 6, 7, 8, 99, 90];
let tong = 0;
let max = arr2[0];
let min = arr2[0];
arr.forEach((myNumber) => {
    tong += myNumber;
    if (myNumber > max) {
        max = myNumber;
    }
    if (myNumber < min) {
        min = myNumber;
    }
})
console.log(`Tong là ${tong}`);
console.log(`Số lớn nhất là ${max}`);
console.log(`Số nhỏ nhất là ${min}`);
/*
3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví
dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]
*/
let arr3 = [3, 5, 7, 9];
let arr4 = [];
arr3.forEach((myNumber) => {
    let i = myNumber * 2;
    arr4.push(i);
})
console.log(arr4);
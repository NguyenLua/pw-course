/*
1. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,
“y”, “a”, “l”, “P”] => dua vao bai tap for
*/
let text = "Playwright103";
let arr = [];
for (let i = text.length - 1; i >= 0; i--) {
    arr.push(text[i]);
}
console.log(arr);
/*
2. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
*/
let arr1 = [1, 2, 4, 6, 9, 7, 6, 3, 2];
let arr2 = [];
for (let value of arr1) {
    let count = 0;

    for (let value2 of arr1) {
        if (value === value2) {
            count++;
        }
    }

    if (count === 1) {
        arr2.push(value);
    }
}
console.log(arr2);
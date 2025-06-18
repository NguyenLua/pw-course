/*
1. Tính tổng từ 1 đến 100.
*/
let tong = 0;
for (let i = 1; i <= 100; i++) {
    tong += i;
}
console.log(`Tong từ 1 đến 100 là ${tong}`);
/*
2. In bảng cửu chương từ 2 đến 9.
*/
let ketQua = 0
for (let i = 2; i <= 9; i++) {
    for (let x = 0; x <= 10; x++) {
        ketQua = i * x;
        console.log(`${i} x ${x} = ${ketQua}`);
    }
}
/*
3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
*/
let arr = [];
for (let i = 1; i < 100; i++) {
    if (i % 2 != 0) {
        arr.push(i);
    }
}
console.log(arr);
/*
4. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100}
*/
let doanhThu = [{ month: 1, total: 100 }, { month: 2, total: 50 }, { month: 3, total: 150 }, { month: 4, total: 200 }, { month: 5, total: 250 }, { month: 6, total: 300 }, { month: 7, total: 350 }, { month: 8, total: 400 }, { month: 9, total: 450 }, { month: 10, total: 500 }, { month: 11, total: 550 }, { month: 12, total: 600 }];
let tongDoanhThu = 0
doanhThu.forEach((doanhThuMotThang) => {
    tongDoanhThu += doanhThuMotThang.total;
})
console.log(`Tổng Doanh Thu của năm là ${tongDoanhThu}`);
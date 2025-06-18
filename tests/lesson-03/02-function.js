const { Console } = require("console");

/*
1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân
nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
Biết:
○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
○ Cân nặng tính theo kg
○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
○ BMI < 18.5: Thiếu cân
○ BMI < 25: Bình thường
○ BMI < 30: Thừa cân
○ BMI >= 30: Béo phì
*/
function bodyMassIndex(height, weight) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Thiếu cân";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Bình thường";
    } else if (bmi >= 25 && bmi < 30) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
}
const result = bodyMassIndex(1.53, 56);
console.log(`Phân loại BMI là ${result}`);
/*
2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ nhận
vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển
đổi.
Biết công thức chuyển đổi:
○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;
*/
function temperature(nhietDo, loaiNhietDo) {
    if (loaiNhietDo == "F") {
        const congThucTuFsangC = (nhietDo - 32) * 5 / 9;
        return `Độ C là ${congThucTuFsangC}`;

    } else {
        const congThucTuCsangF = nhietDo * 9 / 5 + 32;
        return `Độ F là ${congThucTuCsangF}`;
    }
}
const chuyenDoi = temperature(50, "C");
console.log(chuyenDoi);
/*
3. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
Biết:

○ Số 0, số 1 không phải số nguyên tố.
○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó
*/
function isKiemTraSoNguyenTo(number) {
    if (number < 2) {
        return false;
    } else {
        for (let a = 2; a < number; a++) {
            if (number % a == 0) {
                return false;
            }
        }
        return true;
    }
}
function soNguyenTo() {
    const arr = [0, 1, 4, 5, 8, 11, 12, 15, 17, 20];
    for (let a = 0; a < arr.length; a++) {
        if (isKiemTraSoNguyenTo(arr[a])) {
            console.log(`${arr[a]} la so nguyen to`);
        }
    }
}
soNguyenTo();
/*
4. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên
người dùng.
Đoạn code giả mã (pseudo code) như sau:
// Khai báo mảng global các object có 2 thuộc tính: name, email
// Khai báo hàm có 2 tham số: name, newEmail
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên
trùng với tham số name, cập nhật giá trị email về newEmail
*/
var user = [
    {
        name: 'lua',
        email: 'nguyenlua@manadr.com'
    },
    {
        name: 'phuoc',
        email: 'nguyenphuoc@manadr.com'
    },
    {
        name: 'mien',
        email: 'nguyenmien@manadr.com'
    }
]
function UpdateEmail(newName, newEmail) {
    for (let a = 0; a < user.length; a++) {
        if (user[a].name === newName) {
            user[a].email = newEmail;
        }
    }
    return;
}
UpdateEmail("lua", "abcd@manadr.com");
console.log(user);
/*
5. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
mảng các object.
Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
*/
let students = [{ name: 'Mien', score: 85 }, { name: 'Xiu', score: 75 }, { name: 'Phuoc', score: 60 }];

function diemTrungBinh() {
    let tongDiem = 0;
    students.forEach((student) => {
        tongDiem += student.score;
    })
    console.log(tongDiem / students.length);
}
diemTrungBinh();
/*
6. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5
tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
*/
function giaVe(age) {
    if (age < 5) {
        return "miễn phí";
    } else if (age > 6 && age <= 17) {
        return "50,000 VNĐ";
    } else {
        return "100,000 VNĐ";
    }
}
console.log(giaVe(15));
/*
7. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh
switch...case để xử lý.
*/
let months = [1, 5, 8, 6, 10, 12];
function tenThang() {
    for (let i of months) {
        switch (i) {
            case 1:
                console.log("Tháng 1");
                break;
            case 2:
                console.log("Tháng 2");
                break;
            case 3:
                console.log("Tháng 3");
                break;
            case 4:
                console.log("Tháng 4");
                break;
            case 5:
                console.log("Tháng 5");
                break;
            case 6:
                console.log("Tháng 6");
                break;
            case 7:
                console.log("Tháng 7");
                break;
            case 8:
                console.log("Tháng 8");
                break;
            case 9:
                console.log("Tháng 9");
                break;
            case 10:
                console.log("Tháng 10");
                break;
            case 11:
                console.log("Tháng 11");
                break;
            case 12:
                console.log("Tháng 12");
                break;

            default:
                break;
        }
    }
}
tenThang();
/*
8. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng
(>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
*/
function thoiTiet(nhietDo) {
    if (nhietDo < 20) {
        console.log(`Hiện tại nhiệt độ là ${nhietDo} độ C : Thời tiết lạnh`);
    } else if (nhietDo >= 20 && nhietDo < 30) {
        console.log(`Hiện tại nhiệt độ là ${nhietDo} độ C : Thời tiết mát`);
    } else {
        console.log(`Hiện tại nhiệt độ là ${nhietDo} độ C : Thời tiết nóng`);
    }
}
thoiTiet(40);

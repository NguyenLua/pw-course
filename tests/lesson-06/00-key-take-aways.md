

## 1.Class trong JavaScript

### a. Class là gì?
- Dùng để khai báo kiểu dữ liệu (đối tượng)
- Giúp tái sử dụng và tổ chức code tốt hơn

### b. Cấu trúc một Class cơ bản
- Tên class
- Constructor (hàm tạo)
- Property (thuộc tính)
- Method (phương thức)
- Method có tham số

### c. Ví dụ sử dụng
class Student {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        console.log(this.name);
    }
}

const student = new Student("Lua");
student.sayMyName();

## 2. Kế thừa (extends) trong Class

### a. extends là gì?
- Giúp class con kế thừa thuộc tính & phương thức từ class cha.

### b. Cấu trúc.
class B {
    constructor() {
        console.log("Constructor B");
    }
}

class A extends B {
    constructor() {
        super(); // gọi constructor class cha
        console.log("Constructor A");
    }
}

- super() bắt buộc phải có nếu class con có constructor

- extends giúp tái sử dụng logic

## 3. POM - Page Object Model

### a. POM là gì?
- Là một design pattern trong automation test.
- Giúp tổ chức code test tốt hơn.

### b. Lợi ích của POM
- Tái sử dụng code
- Code gọn gàng
- Dễ bảo trì, mở rộng

## 4. Ghi nhớ quan trọng
- constructor(page: Page) là bắt buộc nếu muốn sử dụng this.page
- Nếu kế thừa từ class cha: constructor của class con phải gọi super()
- Khi dùng POM:
- Dùng 1 class cho mỗi trang
- Tách logic rõ ràng: thao tác & kiểm tra- 

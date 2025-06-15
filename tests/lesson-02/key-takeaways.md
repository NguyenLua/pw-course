### Lesson 02
1. Version control system
- VCS (Version control system): Hệ thông quản lý các phiên bản : Lưu ngày giờ và người sửa.
- Type:
    * Local: Lưu ở máy cá nhân
    * Centralize: Lưu ở một máy chủ tập trung
    * Distribute: Lưu ở nhiều máy khác nhau

2. Git
- Git là một dạng distribute version control system.
- Dùng git do nhu cầu quản lý phiên bản và làm việc giưã nhiều người với nhau.
- So sánh git & VCS khác:
    * Tính năng: Dễ dùng, có nhiều tính năng vượt trội: Branching, tốc độ xử lý nhanh.
    * Chi phí: Free.
    * Phổ biển: nhiều công ty sử dụng.
- Phân biết Git & GitHub
    * Git là một phần mềm trên máy còn github là một dịch vụ web.
    * Git được cài trên máy cá nhân, github: host trên website
    * Git: là một commanline tool, github: là công cụ có giao diện.
    * Git: là một công cụ quản lý phiên bản đưa file vào git rep, GitHub: là nơi để upload git rep lên.
    * Git: có các tính năng của VCS, GitHub: Có các tính năng của VCS và một số tính năng khác.
- Git có 3 vùng làm việc:
    * Working Directory: Các fie mới hoặc file có thay đổi.
    * Staging area: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
    * Repository: Các commit (phiên bản)
- Các câu lệnh thường dùng:
    * Khởi tạo: Git Init
    * cấu hình git: 
        * Cho một Rep:
            * git config user.name "name"
            * git config user.email "email"
        * Cho toàn bộ máy tính (Default):
            * git config --global user.name "name"
            * git config --global user.email "email"
    * Thêm vào vùng staging: 
        * Thêm một file: git add <file_name>
        * Thêm toàn bộ: git add .
    * Commit: git commit -m "message"
    * Kiểm tra lịch sử commit: git log
- Git -commit convention:
    * Convention: "type: short_description"
    * Type: Loại commit:
        * chore: sửa nhỏ lẻ, chính tả, xoá file không dùng tới,..
        * feat: thêm tính năng mới, test case mới.
        * fix: sử lỗi 1 test trước đó.
    * Short_description: mô tả ngắn gọn bằng tiếng anh hoặc tiếng việt (5 ký tự)

3. Javascript basic
- Variable: dùng để lưu trữ giá trị, có thể thay đổi giá trị được.
    * Khai báo: 
        * var <ten_bien> = "gia tri";
        * let <ten_bien> = "gia tri";
    * Trong đó: <ten_bien>
        * Bắt đầu bằng: chữ, gạch dưới hoặc $
        * Không chưa dấu cách.
        * Không là các " từ khoá", tức là cá từ đã có trong Javascrip (VD: var,let,for,if,..)
    * Khác nhau giữa var và let.
        * var khai báo lại được nhưng let thì không.
        * Phạm vi của biến:
            * Var: phạm vi toàn cục ( global)
            * let: phạm vi trong ngoặc {}
        * Nên dùng: let vì dễ kiểm soát phạm vi của biến.
- Constant : Hằng số. Dùng để khai báo các giá trị không thể thay đổi
    * Khai báo:
        * const <name> = "gia tri";
- Khi nào dùng let/var, khi nò dùng const
    * var/let: khi biến sẽ gán lại .
    * const: khi biến không gán lại .
    * Thường sẽ dùng let và const, KHÔNG dùng var.
- Data type : kiểu dữ liệu
Có 8 kiểu dữ liệu : String, Number, Bigint, Boolean, Underfined, Null, Symbol, Object.
- Comparison operator: toán tử so sánh.
    * Dùng để so sánh giá trị giưã 2 biến với nhau kết quả trả về boolean.
    * Các toán tử so sánh:
        * So sánh hơn kém: >, <
        * So sánh bằng : ==, ===, !=, !==, <=, >=
- Unary operator: toán tử một ngôi
    * Dùng để tăng hoặc giảm gía trị .
    * i++ bằng với i =i+1
    * i-- bằng với i=i-1
- Arithmetic operator: toán tử số học.
    * Dùng tính toán gái trị biểu thức.
    * Các phép toán: +, -, *, /
- Conditional: Điều kiện, dùng để kiểm tra có nên thực hiện một đoạn logic không.
    * Cú pháp: 
        if( [dieu kien] ) {//code} : Nếu điều kiện đúng sẽ chạy đoạn code.
- Loop: vòng lặp, dùng để thực hiện một đoạn logic một số lần nhất định
    * Cú pháp: 
        for ( [khởi tạo]; [Điều kiện dừng]; [Điều kiện tăng]) { //Code }
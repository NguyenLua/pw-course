## 1. API là gì?
- **API** (Application Programming Interface) là cầu nối giúp các hệ thống (frontend, backend, third-party...) giao tiếp với nhau.
- Ví dụ: API giống như người bồi bàn – nhận yêu cầu từ khách hàng và đưa kết quả từ bếp trở lại.

---

## 2. Các thành phần trong API
- **Client**: gửi yêu cầu (request)
- **Server**: xử lý và trả về (response)
- **Request** bao gồm:
  - URL = BaseURL + Endpoint + Params
  - Method: GET, POST, PUT, DELETE...
  - Headers (Authentication, Content-Type,...)
  - Body (dữ liệu gửi lên)
- **Response** gồm:
  - `status code` (200, 201, 400, 401, 404, 500...)
  - `body` (thường là JSON hoặc XML)

---

## 3. Định dạng dữ liệu
- **JSON** – phổ biến nhất:
{
  "user": {
    "email": "example@gmail.com",
    "password": "123456"
  }
}

## 4. Tại sao cần test API?
- Giúp kiểm tra hệ thống backend ngay cả khi frontend chưa hoàn thiện.
- Phát hiện lỗi logic/phản hồi không mong muốn từ server sớm hơn.
## 5.  Các định dạng sử dụng trong API
- **XML** – Extensible Markup Language
Có cấu trúc dạng thẻ mở/thẻ đóng, giống HTML.
- **JSON** JavaScript Object Notation
    + Dạng phổ biến nhất hiện nay, đặc biệt với REST API.

    + Cấu trúc:

        key: luôn là string (trong dấu "")

        value: có thể là:

        string

        number

        boolean

        object

        array

        null 

## 6. Các loại API:
-  **SOAP** – Simple Object Access Protocol
    Dùng giao thức XML để truyền dữ liệu.
    Cấu trúc chặt chẽ, thường dùng trong các hệ thống cũ, ngân hàng, bảo hiểm.
    Trả về dữ liệu dạng XML.

-  **RPC** – Remote Procedure Call
    Cho phép gọi các hàm từ xa giữa client và server như gọi hàm local.
    Ít phổ biến hơn trong API hiện đại.

-  **REST** – Representational State Transfer
    Giao tiếp qua HTTP (GET, POST, PUT, DELETE, ...)
    Trả về dữ liệu chủ yếu là JSON.
    Dễ đọc, dễ dùng, phổ biến nhất hiện nay.
    Playwright và khoá học này sử dụng REST.

## 7.Dùng Postman để test API thủ công
- Dễ thao tác, gửi các loại request khác nhau.
- Dễ debug request/response.
- Lưu collection để tái sử dụng.

## 8 .API Testing với Playwright
- Sử dụng request fixture để thực hiện gọi API.
- Gọi các API mà không cần phải thực hiện thao tác thông qua trình duyệt
- Thực hiện các thao tác gọi API trực tiếp trong code.

## 9. POM (Page Object Model) trong API Testing
- Tách riêng logic gọi API ra thành class, giúp:
- Dễ tái sử dụng
- Dễ bảo trì
- File test gọn gàng hơn
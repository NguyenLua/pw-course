### 1. Fixtures.
## a. Fixtures là gì?
- Playwright sử dụng concept fixture
- Fixture dùng để khởi tạo các environment khác nhau cho các test.
- Fixture là isolate giữa các test.
- Fixture giúp nhóm các test dựa trên ý nghĩa, thay vì common setup.
## b. Built-in fixtures.
Fixture nhớ kĩ:
-  Trước use: giống beforeEach
-  use: chạy code trong test
-  Sau use: giống afterEach
## c. Tạo một fixture
- Sử dụng test.extend() để tạo mới một test object.
- Dùng mergeTests() để gộp nhiều fixture vào một.

### 2. Managing environment variables
- Trước tiên cần cài đặt thư viện dotenv:
npm install dotenv --save
- Tạo file .env


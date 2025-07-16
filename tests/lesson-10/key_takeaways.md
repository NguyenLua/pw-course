### 1. async / await trong JavaScript
- async: khai báo hàm bất đồng bộ.
- await: tạm dừng thực thi để chờ Promise hoàn thành.
=> Giúp tăng hiệu năng và dễ đọc code bất đồng bộ. 

### 2. Test Generator (Sinh mã test tự động)
- Ghi lại thao tác người dùng để tạo mã test.
- 2 cách dùng:
    * Trong VS Code: Record new test / Record at cursor.
    * Terminal: npx playwright codegen <`url`>
- Tính năng pick locator rất tiện.

### 3. Visual Comparison (So sánh giao diện bằng hình ảnh)
- Dùng toHaveScreenshot() để chụp và so sánh UI:
    `await expect(page).toHaveScreenshot('home.png');`
- Có thể mask 1 số element để loại bỏ ảnh động:
    `await expect(page).toHaveScreenshot({
    mask: [page.locator('img')],
    maskColor: '#00FF00',
    });`

### 4. Video Recording
Cấu hình để ghi video quá trình chạy test:
`use: {
  video: {
    mode: 'on',
    size: { width: 640, height: 480 }
  }
}`

### 5. Test Report
- Cung cấp báo cáo sau khi test chạy.

- Có thể dùng reporter của bên thứ ba:
    Xem thêm: https://playwright.dev/docs/test-reporters#third-party-reporter-showcase

### 6. Test Emulation (Giả lập môi trường)
- Giả lập nhiều thứ:
    * Thiết bị (device), kích thước màn hình (viewport)
    * Múi giờ, locale, geolocation, quyền truy cập (permission)

- Dùng trong browserContext để mô phỏng môi trường chạy test:

    * https://playwright.dev/docs/emulation

 ### 7. Drag and Drop
- Kéo thả phần tử:  
    `await page.locator('#drag').dragTo(page.locator('#drop'));`

- Cách thủ công:
    `await page.locator('#drag').hover();
await page.mouse.down();
await page.locator('#drop').hover();
await page.mouse.up();`

### 8. Global Setup & Teardown
- Global Setup: chạy 1 lần trước tất cả test.
- Global Teardown: chạy 1 lần sau tất cả test.
- So sánh với fixture:
    * Fixture: chạy lại mỗi lần test.
    * Global setup/teardown: dùng cho logic chỉ cần chạy một lần duy nhất (vd: login, chuẩn bị dữ liệu test lớn...).

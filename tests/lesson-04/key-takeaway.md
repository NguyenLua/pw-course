## 1. DOM (Document Object Model)
- DOM là mô hình cấu trúc cây (tree) đại diện cho HTML.
- Các thành phần trong DOM gọi là **node**, bao gồm:
  - Thẻ mở (start tag), thẻ đóng (end tag)
  - Text node (nội dung)
  - Thuộc tính và giá trị

### Một số thẻ HTML thường gặp:
- `<div>`: phân chia khối
- `<h1>–<h6>`: heading tiêu đề
- `<form>`, `<input>`, `<textarea>`, `<select>`, `<button>`, `<table>`, `<iframe>`

## 2. DOM Relationships (Quan hệ giữa các node)
- `self`: chính nó
- `parent`: node cha
- `children`: các node con
- `ancestor`: tổ tiên (nhiều cấp cha)
- `descendant`: hậu duệ (con, cháu,...)
- `sibling`: anh em cùng cha
- `following`, `preceding`: node theo sau / trước
- `following-sibling`, `preceding-sibling`: anh em phía sau / trước

## 3. Selector – Bộ chọn phần tử
### Loại selector:
- XPath selector
- CSS selector
- Playwright selector

### XPath cơ bản:
- XPath tuyệt đối: `/html/body/div/...`
- XPath tương đối (nên dùng): `//tag[@attr="value"]`

### XPath nâng cao:
- Wildcard: `*`
- `contains()`, `starts-with()`, `text()`, `normalize-space()`
- Dùng `and`, `or`, `not`
- **Axes**:
  - `parent::`, `child::`, `ancestor::`, `descendant::`
  - `following::`, `preceding::`
  - `following-sibling::`, `preceding-sibling::`

## 4. Playwright Basic Syntax

### Khai báo test:

import { test } from '@playwright/test';

test('Tên test', async ({ page }) => {
  await test.step('Tên step', async () => {
    // code test
  });
});


### Các thao tác cơ bản:
- `page.goto(url)`: Truy cập trang

- `page.locator(xpath).click()`: Click

- `page.locator(xpath).fill(value)`: Nhập text (dán nội dung)

- `page.locator(xpath).pressSequentially(text)`: Gõ từng ký tự

- `page.locator(xpath).check()/uncheck()`: Chọn checkbox/radio

- `page.locator(xpath).setInputFiles(file)`: Upload file

- `page.locator(xpath).isChecked()`: Kiểm tra trạng thái checkbox

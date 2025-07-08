
## Phần 1: Git nâng cao

### Merge
- **Merge** là quá trình gộp code từ nhánh này vào nhánh khác.
- **Chiến lược Merge**:
  - **Fast-forward merge**: 
    - Không tạo commit merge.
    - Xảy ra khi nhánh chính không có thay đổi kể từ lúc tạo nhánh feature.
  - **Three-way merge**:
    - Tạo ra commit merge.
    - Áp dụng khi có sự khác biệt giữa nhánh chính và nhánh feature.

### Conflict (Xung đột)
- **Conflict xảy ra khi** 2 người cùng sửa một file và cùng merge vào.
- **Giải quyết conflict**: Chọn và chỉnh sửa lại đoạn code bị xung đột, sau đó `git add` và `git commit`.
### Rebase
- **Rebase**: Đưa toàn bộ commit của nhánh hiện tại lên đầu nhánh chính để lịch sử commit gọn gàng.
- Lệnh: `git rebase main`

### Squash
- **Squash**: Gộp nhiều commit thành một commit duy nhất.
- Dùng trong quá trình `rebase` để giữ lịch sử commit sạch sẽ.
- Lệnh: `git rebase -i HEAD~{số lượng commit}`

---

## Phần 2: Các kiểu thiết kế POM nâng cao

### 1. POM Manager
- Quản lý tập trung nhiều page object.
- Lợi ích:
- Tạo page object khi cần.
- Các page độc lập, dễ quản lý.
### 2. Return POM from Another POM
- Một Page Object có thể return một Page Object khác.
- Hữu ích cho luồng liên tiếp: login → dashboard → cart → checkout...


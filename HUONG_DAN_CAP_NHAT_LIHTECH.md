# Triển khai bản LihTech by LihLabs

## 1. Cập nhật mã nguồn website

1. Giải nén gói `LihTech_Website_Rebuild.zip`.
2. Mở trực tiếp thư mục **`LihTech`** bằng VS Code (đây là thư mục có `package.json`).
3. Nếu chép vào repo cũ, **giữ lại thư mục `.git`** của repo và chỉ chép đè các file mã nguồn mới.
4. Mở `src/config.ts` để kiểm tra hotline `0377 339 643`, Zalo và URL Apps Script/Google Sheet.
5. Chạy:

```powershell
pnpm.cmd install --frozen-lockfile
pnpm.cmd build
pnpm.cmd test:sheet
```

Kết quả build nằm trong thư mục `dist`. Khi dùng Vercel, chỉ cần đẩy source lên nhánh đã kết nối; Vercel sẽ tự chạy build.

## 2. Cập nhật Google Apps Script

Website và Apps Script đều dùng mã đơn mới bắt đầu bằng `LT-`.

1. Mở Google Sheet đang nhận đơn → **Tiện ích mở rộng → Apps Script**.
2. Mở file `google-apps-script/Code.gs` trong gói này, sao chép toàn bộ nội dung và thay vào file `Code.gs` trên Apps Script.
3. Nhấn **Lưu**.
4. Chọn **Triển khai → Quản lý bản triển khai** → chọn ứng dụng web hiện có → **Chỉnh sửa**.
5. Chọn **Phiên bản mới**, sau đó triển khai lại với quyền chạy bằng tài khoản của bạn và quyền truy cập theo cấu hình đang dùng.
6. Nếu chỉnh sửa cùng một deployment, URL `/exec` cũ vẫn giữ nguyên. Nếu tạo deployment mới, dán URL `/exec` mới vào `sheetScriptUrl` trong `src/config.ts`.

## 3. Kiểm tra trước khi công khai

1. Trong Apps Script, chạy hàm `testWriteOrder` một lần.
2. Trong Google Sheet, kiểm tra có dòng mã `LT-TEST-...` trong tab `Support Requests`.
3. Mở trang `/booking`, gửi một đơn thử với thông tin không nhạy cảm và kiểm tra đơn có xuất hiện trong Sheet.
4. Mở `/reviews`, gửi thử một đánh giá; để hiển thị công khai, vào tab `Reviews` và đổi trạng thái thành `Đã duyệt`.

## 4. Những điều cần giữ nhất quán khi truyền thông

- Dùng tên chính: **LihTech**; chữ phụ: **by LihLabs**.
- Diễn đạt dịch vụ: cài đặt, cấu hình, xử lý lỗi phần mềm và IT Support từ xa.
- Không quảng cáo “Microsoft 365 vĩnh viễn”. Microsoft 365 là thuê bao; phí license và phí kỹ thuật phải báo tách riêng.
- Chỉ nhận triển khai phần mềm, key và license có nguồn hợp pháp.
- Không yêu cầu mật khẩu chính của khách hàng và không hỗ trợ vượt khoá bảo mật/tài khoản.

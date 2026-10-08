# Kết nối form LihTech với Google Sheet

Website gửi yêu cầu đặt lịch đến Google Sheet qua Google Apps Script. Cấu hình đã nằm sẵn trong dự án; bạn chỉ cần dán mã Apps Script và triển khai lại một phiên bản mới.

## 1. Mở đúng thư mục dự án

Giải nén ZIP và mở thư mục **`LihTech`** — nơi có file `package.json` — bằng VS Code. Trong PowerShell, chạy:

```powershell
pnpm.cmd install --frozen-lockfile
pnpm.cmd build
pnpm.cmd test:sheet
```

Không chạy lệnh ở thư mục cha của `LihTech`.

## 2. Cập nhật Google Apps Script

1. Mở Google Sheet nhận đơn của bạn, vào **Tiện ích mở rộng → Apps Script**.
2. Mở `google-apps-script/Code.gs` trong dự án LihTech, sao chép toàn bộ rồi thay thế nội dung file `Code.gs` trên Google.
3. Nhấn **Lưu**.
4. Chọn hàm `testWriteOrder` và bấm **Chạy** một lần để cấp quyền và thử ghi dữ liệu.
5. Mở Sheet, kiểm tra tab `Support Requests` có một dòng mã `LT-TEST-...`.
6. Vào **Triển khai → Quản lý bản triển khai**, chọn ứng dụng web đang dùng, bấm chỉnh sửa, chọn **Phiên bản mới** rồi triển khai.

Ứng dụng web nên chạy bằng tài khoản của bạn và cho phép khách truy cập theo thiết lập phù hợp để khách không phải đăng nhập khi gửi form. Khi giữ nguyên deployment, URL `/exec` thường không đổi.

Mở URL `/exec` trong trình duyệt để kiểm tra. Phản hồi đúng có dạng:

```json
{"ok":true,"service":"LihTech booking endpoint"}
```

## 3. Kiểm tra cấu hình website

Mở `src/config.ts` và chỉ thay khi bạn đổi Sheet hoặc tạo deployment mới:

```ts
sheetScriptUrl: 'https://script.google.com/macros/s/DEPLOYMENT_ID/exec',
sheetUrl: 'https://docs.google.com/spreadsheets/d/SHEET_ID/edit',
showSheetOnSuccess: false,
```

- `sheetScriptUrl`: URL Apps Script kết thúc bằng `/exec`, dùng để nhận đơn.
- `sheetUrl`: link Google Sheet của bạn; nên giữ riêng tư vì có dữ liệu khách hàng.
- `showSheetOnSuccess`: để `false` để không hiển thị nút mở Sheet cho khách.

Không dán API key, mật khẩu, URL `/dev` hoặc link Google Sheet vào `sheetScriptUrl`.

## 4. Kiểm tra hoàn tất

Chạy `pnpm.cmd dev`, mở trang `/booking`, gửi một đơn thử không chứa thông tin nhạy cảm và kiểm tra dòng có cùng mã `LT-...` trong tab `Support Requests`. Sau đó đẩy source lên GitHub/Vercel để website công khai nhận cấu hình mới.

# Hướng dẫn đánh giá dịch vụ LihTech

Trang `/reviews` cho khách gửi đánh giá. Mọi đánh giá mới đều vào Google Sheet ở trạng thái **Chờ duyệt**; chỉ đánh giá bạn duyệt mới xuất hiện công khai.

## Thiết lập lần đầu

1. Cập nhật `google-apps-script/Code.gs` theo hướng dẫn trong `HUONG_DAN_KET_NOI_GOOGLE_SHEET.md`.
2. Trong Apps Script, chọn hàm `setupReviews` rồi bấm **Chạy** một lần.
3. Script sẽ tạo tab `Reviews` với 9 cột, bao gồm trạng thái duyệt ở cột G.
4. Triển khai một **phiên bản mới** của ứng dụng web Apps Script để API đánh giá có hiệu lực.

## Duyệt hoặc ẩn đánh giá

Trong tab `Reviews`:

- Để **Chờ duyệt**: đánh giá chưa hiển thị trên website.
- Chọn **Đã duyệt**: website sẽ hiển thị đánh giá, điểm trung bình và phân bố sao.
- Chọn **Ẩn**: đánh giá không hiển thị và không được tính điểm.

Khách chỉ gửi được tên hiển thị, loại dịch vụ, số sao và nhận xét. Website không công khai số điện thoại, email, mã xác nhận hoặc dữ liệu từ tab đặt lịch.

## Kiểm tra nhanh

Gửi một đánh giá thử trên `/reviews`, xác nhận dòng mới xuất hiện trong Sheet, đổi trạng thái sang **Đã duyệt**, rồi tải lại trang web. Sau khi kiểm tra xong, có thể đổi về **Ẩn** để không công khai dữ liệu thử.

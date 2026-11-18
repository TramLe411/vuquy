# Thiệp Vu Quy online — Lê Thị Như Trâm & Bùi Duy Thành

Website thiệp cưới một trang, tối ưu mobile, dựng theo video tham chiếu và sử dụng 7 ảnh cưới được cung cấp.

## Chạy website trên máy tính

1. Cài Node.js bản LTS: https://nodejs.org/
2. Giải nén thư mục dự án.
3. Mở Terminal/Command Prompt tại thư mục dự án.
4. Chạy `npm install`.
5. Chạy `npm run dev`.
6. Mở địa chỉ local mà Vite in ra (thường là `http://localhost:5173`).

## Chỉnh thông tin

Mở `src/config.js` để sửa tên, cha mẹ hai bên, địa chỉ, thời gian, địa điểm, đường dẫn nhạc và nội dung bản đồ.

## Thay nhạc

Thay file `public/audio/wedding-theme.mp3` bằng MP3 khác (giữ nguyên tên file), hoặc sửa `music` trong `src/config.js`.

**Lưu ý:** File nhạc hiện tại được trích xuất toàn bộ phần âm thanh từ video MP4 bạn vừa gửi, không cắt ngắn thêm. Thời lượng track trong file bạn cung cấp là khoảng **1 phút 25 giây**. Nếu bản nhạc gốc bạn muốn dài hơn, hãy gửi file MP3/M4A đầy đủ hơn để thay thế. Chỉ nên công khai website cùng âm thanh này nếu bạn có quyền sử dụng bản nhạc.

## Thay ảnh

Các ảnh hiện tại nằm trong `public/images/`. Thay ảnh tương ứng nhưng giữ tên `photo-01.jpg` đến `photo-07.jpg` để không cần sửa code.

## Build để đưa lên Internet

```bash
npm run build
```

Thư mục đầu ra là `dist/`. Có thể triển khai miễn phí lên Netlify hoặc Cloudflare Pages:

1. Tạo tài khoản GitHub và repository mới, tải toàn bộ thư mục dự án lên repository.
2. Đăng nhập Netlify, chọn **Add new site → Import an existing project**.
3. Chọn repository vừa tải lên.
4. Build command: `npm run build`; publish directory: `dist`.
5. Chọn **Deploy**. Sau khi deploy thành công, Netlify cấp một đường link dạng `ten-site.netlify.app`.

Cloudflare Pages cũng hỗ trợ kết nối GitHub với build command `npm run build` và output directory `dist`.

## Các chức năng đã triển khai

- Màn hình bìa và thao tác mở thiệp.
- Ảnh cưới được rút lên khỏi phong bì, không crop ảnh.
- Hiệu ứng nắp phong bì, con dấu và 22 trái tim bay khi mở thiệp.
- Chuyển động cuộn và album được tinh chỉnh bằng transition transform/opacity để giảm giật.
- Nhạc nền bắt đầu sau thao tác mở thiệp, có nút bật/tắt.
- Album tự chuyển sau 4,2 giây, có nút chuyển và hỗ trợ vuốt.
- Đếm ngược thời gian thực tới 09:00 ngày 16/12/2026 (giờ Việt Nam).
- Lịch tháng 12/2026, đánh dấu ngày 16.
- Liên kết tạo sự kiện Google Calendar.
- Bản đồ nhúng Google Maps và nút mở chỉ đường.

## Giới hạn cần lưu ý

- Video chỉ cho thấy bản đồ nhúng và vị trí ghim ở mức giao diện; không cung cấp tọa độ hoặc link ghim chính xác. Bản đồ hiện tìm kiếm theo địa chỉ chữ đã cung cấp, nên cần thay `mapQuery` bằng link/địa chỉ ghim chính xác nếu muốn chỉ đường tới đúng cổng nhà.
- Video tham chiếu là bản quay màn hình điện thoại, nên không thể suy ra chính xác toàn bộ breakpoint desktop.
- Hiệu ứng phong bì là mô phỏng chuyển động CSS từ ảnh cưới, không phải bản dựng 3D trùng khớp từng khung hình của website nguồn.
- Không thể khẳng định tương đồng 100%: font gốc, mã nguồn, texture và thông số animation nội bộ của website tham chiếu không được cung cấp.


## Cập nhật cuối cùng
- Đã thêm cụm hoa PNG nền trong suốt vào `public/images/envelope-floral.png` và tích hợp vào phong bì.
- Trái tim bay được chuyển ra lớp phủ toàn màn hình, xuất hiện ngay tại nút Mở thiệp khi người xem nhấn.
- CSS phong bì được cập nhật theo bố cục tham chiếu: ảnh nghiêng, hoa bên trái, nếp gấp chéo và con dấu vàng ở giữa.

## Responsive layout

The latest stylesheet includes dedicated layouts for compact phones (320–380px), phones, tablets (520–899px), desktop (900px and wider), and short landscape screens. The invitation remains a centered portrait composition on desktop, while the envelope, floral overlay, photo, typography, family cards, album, calendar, and map scale within the viewport without intentionally stretching source photos. Touch targets are enlarged on touch devices.

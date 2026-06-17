# Portfolio Ngô Thanh Hiền

Một trang portfolio cá nhân được xây dựng bằng React, TypeScript và Vite, tập trung vào trải nghiệm trình bày dự án, kỹ năng và thông tin liên hệ theo phong cách hiện đại, trực quan và đa ngôn ngữ.

## Giới thiệu

Đây là website portfolio một trang dành cho giới thiệu bản thân, kinh nghiệm, dự án và cách liên hệ. Ứng dụng hỗ trợ chuyển ngôn ngữ với `i18next`, hiệu ứng chuyển động với `framer-motion`, giao diện responsive với `react-bootstrap` và nhiều thành phần animation như Lottie, typewriter, counter, marquee và tilt effect.

## Tính năng chính

- Giao diện portfolio hiện đại, tối ưu cho cả desktop và mobile.
- Điều hướng theo từng section: Home, About, Experience, Project và Contact.
- Hỗ trợ đa ngôn ngữ `en` và `vi`.
- Hiệu ứng chuyển động và tương tác mượt với `framer-motion`.
- Hiển thị nội dung dự án, kỹ năng, kinh nghiệm và thông tin liên hệ rõ ràng.
- Có nút tải CV ở màn hình nhỏ.
- Hỗ trợ route fallback phù hợp khi deploy trên Vercel.

## Công nghệ sử dụng

- React 18
- TypeScript
- Vite
- React Router DOM
- React Bootstrap / Bootstrap 5
- Framer Motion
- i18next, react-i18next, i18next-http-backend, i18next-browser-languagedetector
- Lottie React
- React Icons
- Sass

## Yêu cầu môi trường

- Node.js
- npm

## Cài đặt và chạy cục bộ

1. Clone repository về máy.
2. Cài dependencies:

```bash
npm install
```

3. Chạy môi trường phát triển:

```bash
npm run dev
```

4. Mở trình duyệt tại địa chỉ hiển thị trong terminal, mặc định là `http://localhost:3000`.

## Các lệnh hữu ích

- `npm run dev`: khởi động môi trường phát triển.
- `npm run build`: build bản production.
- `npm run preview`: xem trước bản build.
- `npm run lint`: kiểm tra mã nguồn bằng ESLint.
- `npm start`: chạy Vite dev server, tương đương `npm run dev`.

## Cấu trúc dự án

```text
public/
	locales/                 # File dịch ngôn ngữ
src/
	assets/                   # Ảnh, SVG, Lottie, tài nguyên tĩnh
	components/               # Component tái sử dụng
	helpers/                  # Dữ liệu và hàm hỗ trợ
	pages/                    # Các trang chính
	styles/                   # Global styles, variables, animations
	i18n.ts                   # Cấu hình đa ngôn ngữ
	layout.tsx                # Layout chính
	main.tsx                  # Entry point
variants.tsx                # Variants animation dùng cho Framer Motion
```

## Đa ngôn ngữ

Nội dung dịch được lưu trong `public/locales/en/translation.json` và `public/locales/vi/translation.json`. Ứng dụng sử dụng `i18next-http-backend` để tải bản dịch và `i18next-browser-languagedetector` để tự nhận diện ngôn ngữ người dùng.

## Triển khai

File `vercel.json` đã cấu hình rewrite để hỗ trợ SPA routing khi deploy trên Vercel. Khi deploy, chỉ cần build project với `npm run build` và trỏ nền tảng hosting vào output mặc định của Vite.

## Ghi chú

- Cập nhật nội dung cá nhân, dự án và liên hệ trong các file dữ liệu hoặc component tương ứng trước khi public.
- Nếu thêm ngôn ngữ mới, hãy bổ sung file dịch trong `public/locales/` và cập nhật cấu hình i18n.

## License

Repository này hiện chưa khai báo license. Nếu cần chia sẻ công khai, hãy bổ sung license phù hợp trước khi phát hành.

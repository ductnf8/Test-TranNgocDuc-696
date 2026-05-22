# ReelFlow - Vertical Video Feed

Một ứng dụng xem video theo kiểu cuộn dọc lấy cảm hứng từ TikTok và Instagram Reels. Project được xây dựng để thể hiện khả năng xử lý video, animation và tối ưu hiệu năng trong Next.js.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- HTML5 Video API

## Features

### Tính năng chính
- Vertical scroll feed với CSS Scroll Snap
- Mỗi video chiếm toàn bộ chiều cao màn hình
- Click vào video để play/pause
- Giao diện responsive (full screen trên mobile, căn giữa trên desktop)
- Sidebar bên trái trên desktop và bottom navigation trên mobile
- Mock data với 3 video

### Tính năng nâng cao
- Tự động play/pause khi cuộn sử dụng Intersection Observer
- Nút Like có animation và cập nhật số lượng
- Hỗ trợ phím mũi tên (↑ ↓) để chuyển video trên desktop
- Animation mượt mà khi tương tác
- Thiết kế tối giản, hiện đại với hiệu ứng glassmorphism

## Folder Structure
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/          # Sidebar, BottomNav
│   ├── feed/            # VideoFeed, VideoCard
│   ├── video/           # VideoPlayer
│   └── ui/              # LikeButton,...
├── hooks/
├── data/
│   └── mockVideos.ts
├── types/
│   └── video.ts
text## Installation

```bash
npm install
npm run dev
Truy cập http://localhost:3000
Logic Play/Pause khi cuộn trang
Project sử dụng Intersection Observer API để theo dõi video nào đang hiển thị trong viewport.

Mỗi video được gán data-index và class video-card.
Observer kiểm tra ngưỡng visible (threshold 0.4 - 0.8).
Khi một video trở thành isActive, component VideoPlayer sẽ tự động play video đó.
Ngược lại, video ra khỏi viewport sẽ bị pause.
Tôi sử dụng custom hook useVideoPlayer để quản lý trạng thái play/pause và phân biệt giữa auto-play (không hiện icon) và pause thủ công (hiện icon Play).
Đảm bảo chỉ có một video phát tại cùng một thời điểm và cleanup Observer để tránh rò rỉ bộ nhớ.

Trade-offs

Video được mute để hỗ trợ autoplay theo quy định của trình duyệt.
State like hiện lưu tạm thời trong component.
Sử dụng HTML5 <video> thuần thay vì thư viện video player để giữ hiệu năng nhẹ.

Future Improvements

Kết nối với API thực tế
Thêm infinite scroll
Hỗ trợ swipe gesture trên mobile
Chức năng comment và chia sẻ
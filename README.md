# js_template

## carousel

<p align="center">
  <img src = "./preview/carousel.png" width="300" alt=""/>
</p>

### 사용법

```html
<!--CAROUSEL -->
<div class="carousel-container">
    <link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" rel="stylesheet"/>
    <script>
        const loopMode = false;
        const slidable = true;
        const ratio = 16 / 9;
        const autoPlayOption = {
            autoPlay: true,
            delay: 3000,
        }
        const sources = [
            // 링크가 있는 비디오
            {
                src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                href: "https://example.com/video1",
                target: "_blank"
            },
            // 링크가 있는 이미지 (새 탭에서 열기)
            {
                src: "https://shopby-images.cdn-nhncommerce.com/20250607/164006.240394529/필통.jpg",
                href: "https://example.com/image1",
                target: "_blank"
            },
            // 링크가 있는 이미지 (같은 탭에서 열기)
            {
                src: "https://shopby-images.cdn-nhncommerce.com/20250607/164006.240394529/필통.jpg",
                href: "https://example.com/image2",
                target: "_self"
            },
            // 링크가 없는 이미지
            {
                src: "https://shopby-images.cdn-nhncommerce.com/20250607/164006.240394529/필통.jpg"
            }
        ];
    </script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/allcle-projects/js_template@0.1.8/carousel/carousel.js"></script>
</div>
<!--CAROUSEL FINISH-->
```

### 설정 옵션

| 옵션                      | 타입    | 기본값 | 설명                       |
| ------------------------- | ------- | ------ | -------------------------- |
| `loopMode`                | boolean | false  | 무한 루프 모드             |
| `slidable`                | boolean | true   | 터치/드래그 가능 여부      |
| `ratio`                   | number  | 16/9   | 캐러셀 비율 (width/height) |
| `autoPlayOption.autoPlay` | boolean | true   | 자동 재생 여부             |
| `autoPlayOption.delay`    | number  | 3000   | 자동 재생 간격 (ms)        |

### 지원하는 파일 형식

- **이미지**: jpg, jpeg, png, gif, webp, svg
- **비디오**: mp4, webm, ogg, mov

### 호스트 제한

캐러셀은 다음 호스트에서만 작동합니다:
- store.allcl.kr
- store-dev.allcl.kr
- motemote.kr
- localhost

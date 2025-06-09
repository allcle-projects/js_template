# js_template

## carousel

<p align="center">
  <img src = "./preview/carousel.png" width="300" alt=""/>
</p>

```html

<div class="carousel-container">
    <link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" rel="stylesheet"/>
    <script>
        const loopMode = false;
        const ratio = 16 / 9;
        const autoPlay = {
            delay: 3000,
        }
        const images = [
            "https://shopby-images.cdn-nhncommerce.com/20250607/164006.240394529/필통.jpg",
            "https://shopby-images.cdn-nhncommerce.com/20250607/164006.240394529/필통.jpg",
            "https://shopby-images.cdn-nhncommerce.com/20250607/164006.240394529/필통.jpg",
        ];
    </script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/allcle-projects/js_template@0.1.2/carousel/carousel.js"></script>
</div>
```

# js_template

## carousel

<p align="center">
  <img src = "./preview/carousel.png" width="300" alt=""/>
</p>

```html

<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" rel="stylesheet"/>
</head>
<body>
<script>
    const loopMode = false;
    const ratio = 16 / 9;
    const autoPlay = {
        delay: 500,
    }
    const images = ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", "https://placehold.co/600x300/orange/white", "https://placehold.co/600x300/orange/white"];
</script>

<div class="carousel-container"></div>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script type="text/javascript"
        src="https://cdn.jsdelivr.net/gh/allcle-projects/js_template@0.1.1/carousel/carousel.js"></script>
</body>
</html>
```

if (images.length !== 0) {
  var wrapper = document.createElement("div");
  wrapper.innerHTML = `
  <!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          -webkit-text-size-adjust: 100%;
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
        }
  
        ul {
          list-style: none;
        }
  
        .store-carousel-container {
          position: relative;
          touch-action: pan-y;
        }

        .store-carousel-carousel {
          width: 100%;
          height: 0px;
          display: flex;
          justify-content: space-between;
          overflow: hidden;
          position: relative;
          background: #ffffff;
        }
        .store-carousel-slides {
          display: flex;
          width: 100%;
          height: 100%;
        }
        .store-carousel-slide {
          flex: 1 0 auto;
          width: 100%;
          height: 100%;
          position: relative;
          margin: 0;
        }
        .store-carousel-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
        .store-carousel-action-box {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          width: 100%;
          flex-basis: auto;
          padding: 0 16px;
          pointer-events: none;
        }
        .store-carousel-prev-button,
        .store-carousel-next-button {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          width: 36px;
          border-radius: 28px;
          border: 1px solid #e8e8f4;
          background: #ffffff;
          opacity: 0.5;
          box-shadow: 0px 4px 12px 0px rgba(110, 109, 120, 0.16);
          pointer-events: all;
        }
      </style>
    </head>
    <body>
      <div class="store-carousel-container">
        <div class="store-carousel-carousel">
          <ul class="store-carousel-slides"></ul>
        </div>
        <div class="store-carousel-action-box">
          <button class="store-carousel-prev-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0284 15.4717L12.9712 14.5289L8.4426 10.0003L12.9712 5.47168L12.0284 4.52887L6.55698 10.0003L12.0284 15.4717Z"
                fill="#ACAABB"
              />
            </svg>
          </button>
          <button class="store-carousel-next-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.97162 15.4717L7.02881 14.5289L11.5574 10.0003L7.02881 5.47168L7.97162 4.52887L13.443 10.0003L7.97162 15.4717Z"
                fill="#ACAABB"
              />
            </svg>
          </button>
        </div>
      </div>
    </body>
  </html>
   `;

  document.querySelector(".carousel-container").append(wrapper);
  const carousel = document.querySelector(".store-carousel-carousel");
  const slides = document.querySelector(".store-carousel-slides");
  const prevButton = document.querySelector(".store-carousel-prev-button");
  const nextButton = document.querySelector(".store-carousel-next-button");

  images.forEach((imageSrc) => {
    const slide = document.createElement("li");
    slide.classList.add("store-carousel-slide");
    const image = document.createElement("img");
    image.src = imageSrc;
    image.onload = () => {
      const ratio = image.naturalWidth / image.naturalHeight;
      carousel.style.height = `${100 / ratio}vw`;
    };
    slide.appendChild(image);
    slides.appendChild(slide);
  });

  const clamp = (num, a, b) =>
    Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
  const adjustSlide = () => {
    isMouseDown = false;
    const percent = (getTranslateXPercent(slides) / window.innerWidth) * 100;
    const slideIndex = Math.abs(Math.round(percent / 100));
    showSlide(slideIndex);
  };
  const getTranslateXPercent = (element) => {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
  };

  let isMouseDown = false;
  let currentSlide = 0;
  let startX = 0;
  const showSlide = (n) => {
    if (n === 0) {
      prevButton.style.visibility = "hidden";
    } else {
      prevButton.style.visibility = "visible";
    }
    if (n === slides.children.length - 1) {
      nextButton.style.visibility = "hidden";
    } else {
      nextButton.style.visibility = "visible";
    }
    slides.style.transition = `transform 0.7s ease-in-out`;
    slides.style.transform = `translateX(${-100 * n}%)`;
    currentSlide = n;
  };
  const moveOffset = (event) => {
    if (isMouseDown) {
      const deltaX = event.clientX - startX;
      const left = carousel.scrollLeft - deltaX;
      const translateX = (left / carousel.clientWidth) * 100;
      const currentX = (getTranslateXPercent(slides) / window.innerWidth) * 100;
      const toOffset = currentX - translateX;
      const maxOffset = 0;
      const minOffset = -(100 * (slides.children.length - 1));
      const offset = clamp(toOffset, minOffset, maxOffset);
      slides.style.transition = `transform 0.0s ease-in-out`;
      slides.style.transform = `translateX(${offset}%)`;
      startX = event.clientX;
    }
  };
  const setStartOffset = (event) => {
    isMouseDown = true;
    startX = event.clientX;
  };
  prevButton.addEventListener("click", () => {
    showSlide(Math.max(currentSlide - 1, 0));
  });
  nextButton.addEventListener("click", () => {
    showSlide(Math.min(currentSlide + 1, slides.children.length - 1));
  });
  carousel.addEventListener("pointerdown", setStartOffset);
  carousel.addEventListener("pointermove", moveOffset);
  document.addEventListener("pointerup", adjustSlide);
  document.addEventListener("pointerleave", adjustSlide);
  showSlide(0);
}

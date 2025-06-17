const hostName = window.location.hostname || new URL(window.location.ancestorOrigins?.[0]).hostname || '';

const availableHosts = [
    "store.allcl.kr",
    "store-dev.allcl.kr",
    "motemote.kr",
    "localhost",
]

if (hostName && availableHosts.includes(hostName)) {
    if (images.length !== 0) {
        const container = document.querySelector(".carousel-container");

        const wrapper = document.createElement("div");
        wrapper.className = "swiper";
        wrapper.style.width = "100%";
        wrapper.style.position = "relative";
        wrapper.style.paddingTop = `${(1 / ratio) * 100}%`; // 비율 유지용 padding-top

        wrapper.innerHTML = `
    <style>
      * {
        margin: 0; padding: 0; box-sizing: border-box;
      }
      .swiper {
        width: 100%;
        aspect-ratio: ${ratio};
        position: relative;
        background: #fff;
      }
      .swiper-wrapper {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
      }
      .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 100%; height: 100%;
      }
      .swiper-slide img,
      .swiper-slide video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
      }
    
     
      .swiper-pagination {
        position: absolute;
        top: 8px !important;
        right: 8px !important;
        pointer-events: auto !important;
        gap: 2px;
        width: 100%;
        z-index: 20;
        display: flex;
        flex-direction: row;
      }
       
      .swiper-pagination-bullet {
         margin: 0 !important;
         width: 5px;
         height: 2px;
         border-radius: 24px;
      }
    
      .swiper-pagination-bullet-active {
        background: #000
      }
    </style>

    <div class="swiper-wrapper">
      ${images
            .map((src) => {
                const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(src);
                return `
            <div class="swiper-slide">
              ${
                    isVideo
                        ? `<video src="${src}" autoplay muted loop playsinline></video>`
                        : `<img src="${src}" alt="carousel image" />`
                }
            </div>`;
            })
            .join("")}
    </div>
    <div class="swiper-pagination"></div>
  `;

        container.appendChild(wrapper);

        new Swiper(".swiper", {
            slidesPerView: 1,
            loop: loopMode,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: autoPlayOption.autoPlay ? {
                ...autoPlayOption,
                disableOnInteraction: false,
            } : false,
        });
    }
}



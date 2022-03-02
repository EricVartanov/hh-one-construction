var Slider = document.querySelector(".idc-swiper"),
    mySwiper;

let InitSwiper = function (slider) {
    mySwiper = new Swiper(slider, {
        // Default parameters
        loop: true,
        direction: "horizontal",
        slidesPerView: "auto",
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        touchReleaseOnEdges: true,
        allowTouchMove: true,
        /*    grabCursor: true, */
        watchOverflow: true,
        navigation: {
            nextEl: ".idc-swiper-button-next",
            prevEl: ".idc-swiper-button-prev",
        },
    });
};

var mySwiper;
if (Slider) InitSwiper(Slider);

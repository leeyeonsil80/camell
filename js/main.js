 // Initialize Swiper 
var swiper = new Swiper(".main_banner", {
    slidesPerView: "3",
    /*한번에 보여지는 슬라이드*/
    spaceBetween: 20,
    /*슬라이드 사이 갭*/
    loop: true,
    speed: 3000,
    /*슬라이드 하나 넘기는데 걸리는 시간, 1000=1초*/

    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    autoplay: {
        delay: 1000,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 0px
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 1280px
        1280: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
});
var swiper = new Swiper(".main_best_list", {
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 2.2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3.2,
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
var swiper = new Swiper(".main_clip", {
    slidesPerView: 4.4,
    spaceBetween: 28,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    breakpoints: {
        0: {
            slidesPerView: 2.2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3.2,
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 4.4,
            spaceBetween: 20,
        },
    },
        
});
/* New Arrivals Swiper */

let mainNewSwipers = [];

function initMainNewSwiper() {

    // 기존 swiper 제거
    mainNewSwipers.forEach(swiper => swiper.destroy(true, true));
    mainNewSwipers = [];

    // 모든 main_new_list 초기화
    document.querySelectorAll(".main_new_list").forEach(el => {

        const swiper = new Swiper(el, {
            spaceBetween: 30,

            pagination: {
                el: el.querySelector(".swiper-pagination"),
                clickable: true,
            },

            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            breakpoints: {
                0: {
                    slidesPerView: 2.2,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 3.2,
                    spaceBetween: 16,
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            },
        });
        mainNewSwipers.push(swiper);

    });

}

initMainNewSwiper();

let resizeTimer;

window.addEventListener("resize", () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

        initMainNewSwiper();

    }, 200);

});


/* New Arrivals Tab */

const tabs = document.querySelectorAll(".new_tab button");
const swiperBoxes = document.querySelectorAll(".swiper_box");

tabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        // active 제거
        tabs.forEach(btn => btn.classList.remove("active"));
        swiperBoxes.forEach(box => box.classList.remove("active"));

        // 현재 탭 활성화
        tab.classList.add("active");

        // 해당 swiper 표시
        const target = document.getElementById(tab.dataset.tab);

        target.classList.add("active");

        // swiper 다시 계산
        setTimeout(() => {

            if (mainNewSwipers[index]) {
                mainNewSwipers[index].update();
            }

        }, 0);

    });

});

/*Wish Button*/
const wishBtns = document.querySelectorAll(".wish_btn");

wishBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        btn.classList.remove("wish_pop");
        void btn.offsetWidth; // 강제 리플로우
        btn.classList.add("wish_pop");
    });
    btn.addEventListener("animationend", () => {
        btn.classList.remove("animate");
    });
});

/*Mobile Menu */
const btnMenu = document.querySelector(".btn_menu");
const mobileMenu = document.querySelector(".mobile_menu");
btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
/*스크롤 감지 fixed menu*/
const fixedMenu = document.querySelector('.aside_menu');
const mainVisual = document.querySelector('#main_best');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            fixedMenu.classList.remove('active');
        } else {
            fixedMenu.classList.add('active');
        }
    });
});
observer.observe(mainVisual);
/* Scroll Top 버튼 */
const btnTop = document.querySelector(".btn_top");        
btnTop.addEventListener("click", () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
});
AOS.init();

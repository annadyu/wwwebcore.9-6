import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementsByClassName("main_text")[0];
    const btnReadMore = document.getElementsByClassName("read_more-btn")[0];

    if (text && btnReadMore) {
        btnReadMore.addEventListener("click", () => {
            text.classList.toggle("expanded");
            btnReadMore.textContent = text.classList.contains("expanded")
                ? "Скрыть"
                : "Читать далее";
        });
    }

    if (window.matchMedia("(min-width: 320px) and (max-width: 767px)").matches) {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }

    if (window.matchMedia("(min-width: 768px)").matches) {
        const brandsSwiper = document.getElementsByClassName("brands_swiper")[0];
        const btnShowAll = document.getElementsByClassName("show_all-btn")[0];

        if (brandsSwiper && btnShowAll) {
            btnShowAll.addEventListener("click", () => {
                brandsSwiper.classList.toggle("expanded");
                btnShowAll.textContent = brandsSwiper.classList.contains("expanded")
                    ? "Скрыть"
                    : "Показать все";
            });
        }

        const devicesSwiper = document.getElementsByClassName("devices_swiper")[0];
        const btnShowDevices = document.getElementsByClassName("show_btn")[0];

        if (devicesSwiper && btnShowDevices) {
            btnShowDevices.addEventListener("click", () => {
                devicesSwiper.classList.toggle("expanded");
                btnShowDevices.textContent = devicesSwiper.classList.contains("expanded")
                    ? "Скрыть"
                    : "Показать все";
            });
        }
    }

    const headerMenu = document.querySelector('.header_menu');
    if (headerMenu) {
        headerMenu.addEventListener('click', () => {
            const aside = document.querySelector('.aside');
            if (aside) aside.classList.toggle('open');
        });
    }

    const burger = document.querySelector('.burger');
    const aside = document.querySelector('.aside');
    if (burger && aside) {
        burger.addEventListener('click', () => {
            aside.classList.remove('open');
        });
    }
});

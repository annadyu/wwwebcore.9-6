import '../scss/style.scss';

const text = document.getElementsByClassName("about_text")[0];
const btn = document.getElementsByClassName("about_read-more-btn")[0];

btn.addEventListener("click", () => {
    text.classList.toggle("expanded");
    btn.textContent = text.classList.contains("expanded")
        ? "Скрыть"
        : "Читать далее";
});

if (window.matchMedia("(min-width: 320px) and (max-width: 767px)").matches) {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },
    })
}

if (window.matchMedia("(min-width: 768px)").matches) {
    const brandsSwiper = document.getElementsByClassName("brands_swiper")[0];
    const btn = document.getElementsByClassName("show_all-btn")[0];

    btn.addEventListener("click", () => {
        brandsSwiper.classList.toggle("expanded");
        btn.textContent = brandsSwiper.classList.contains("expanded")
            ? "Скрыть"
            : "Показать все";
    });
}

if (window.matchMedia("(min-width: 768px)").matches) {
    const devicesSwiper = document.getElementsByClassName("devices_swiper")[0];
    const btn = document.getElementsByClassName("devices_show-btn")[0];

    btn.addEventListener("click", () => {
        devicesSwiper.classList.toggle("expanded");
        btn.textContent = devicesSwiper.classList.contains("expanded")
            ? "Скрыть"
            : "Показать все";
    });
}

document.querySelector('.about_menu').addEventListener('click', function () {
    document.querySelector('.aside').classList.toggle('open');
});

const aside = document.querySelector('.aside');
const asideBurger = document.querySelector('.aside_burger');
document.querySelector('.aside_burger').addEventListener('click', function () {
    aside.classList.remove('open')
});

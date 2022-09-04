const header = document.querySelector(".header");
const headerHeight = parseInt(window.getComputedStyle(header).height);

document.addEventListener("scroll", function () {
    if (window.scrollY > headerHeight) {
        header.classList.add("header_scroll");
    } else {
        header.classList.remove("header_scroll");
    };
});


var swiper = new Swiper(".mySwiperBanner", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiperInstagram", {
  
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
});

const menuToggle = document.querySelector('.menu-toggle');
const wrapper = document.querySelector('.wrapper');
const navigation = document.querySelector('.menu-area');
const collapse = document.querySelector('.collapse');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    collapse.classList.toggle('active');
    navigation.classList.toggle('active');
    wrapper.classList.toggle("menu--is-revealed");
    if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
        menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    } else {
        menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
}



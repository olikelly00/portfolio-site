const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

// event listener

navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open');
});

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    //breakpoints
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    }
    
});

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: '3000',
    delay: 600,
    //reset: true
});

//hero

sr.reveal('.hero__text', {origin: 'top'});

//steps

sr.reveal('.steps__step', {distance: '100px', interval: 100 });

//about

sr.reveal('.about__text', {origin: 'left'});
sr.reveal('.about__img', {origin: 'right', delay: '800'});


//testimonials

sr.reveal('.testimonial__bg', {delay: '800'});
sr.reveal('.testimonial__title');
sr.reveal('.testimonial__slider', {delay: '1000'});

//news
sr.reveal('.news__title');

sr.reveal('.news__item', {
    distance: '100px', 
    interval: 100,
    delay: 1000,
});

//footer
sr.reveal('.footer__item', {
    distance: '100px',
    interval: 100,
});

document.body.style.overflow = 'hidden';

//preloader
window.onload = function () {
    let preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
    document.body.style.overflow = '';
};
document.addEventListener('DOMContentLoaded', function () {
    //Menu-mobile

    const humburgerMenu = document.querySelector('.humburger-menu');
    const menuMobile = document.querySelector('.menu-mobile');

    humburgerMenu.addEventListener('click', () => {
        menuMobile.classList.toggle('menu-mobile--active');
        humburgerMenu.classList.toggle('humburger-menu--active');
    });

    //Modal

    const modalButton = document.querySelectorAll('.modal-button');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-content__close');


    function openModal() {
        modal.classList.add('modal--open');
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.add('modal--close');
        modal.classList.remove('modal--open');
        document.body.style.overflow = "";
    }

    modalButton.forEach(button => {
        button.addEventListener('click', openModal);
    });

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('modal--open')) {
            closeModal();
        }
    });

    function openModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', openModalByScroll);
        }
    }
    window.addEventListener('scroll', openModalByScroll);

    //Reviews Slaider
    function swiperReviews() {
        const swiperReviews = new Swiper('.reviews-slider', {

            navigation: {
                nextEl: '.reviews-slider__arrows-button-next',
                prevEl: '.reviews-slider__arrows-button-prev',
            },
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            speed: 830,
            pagination: {
                el: '.reviews-slider-pagination',
                clickable: true,
            },
        });
    }
    swiperReviews();
    //partners Slaider
    function swiperPartners() {
        const swiperPartner = new Swiper('.partners-slider', {

            pagination: {
                el: '.partners-slider-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            speed: 830,
        });
    }
    swiperPartners();

    //page-faq
    //Accordion
    const accordion = document.querySelectorAll('.accordion-item');

    accordion.forEach(accordion => {
        accordion.addEventListener('click', e => {
            accordion.classList.toggle('accordion-item--active');

            const accordionPanel = accordion.nextElementSibling;

            if (accordion.classList.contains('accordion-item--active')) {
                accordionPanel.style.display = "block";
                accordionPanel.style.transition = "all 3s";
            } else {
                accordionPanel.style.display = "";
            }
        });
    });

    //page-card
    //Tabs
    const tabs = document.querySelectorAll('.product-card-tabs__item');
    const tabsContent = document.querySelectorAll('.product-card-tabcontent');
    const tabsWrapper = document.querySelector('.product-card-tabs__wrapper');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('product-card-tabcontent__hide');
            item.classList.remove('product-card-tabcontent__show', 'product-card-tabcontent__fade');
        });

        tabs.forEach(item => {
            item.classList.remove('product-card-tabs__item--active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('product-card-tabcontent__show', 'product-card-tabcontent__fade');
        tabsContent[i].classList.remove('product-card-tabcontent__hide');
        tabs[i].classList.add('product-card-tabs__item--active');
    }

    hideTabContent();
    showTabContent();

    tabsWrapper.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('product-card-tabs__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    //page-card
    //counter
    const counterPlus = document.querySelector('.product-card-info__couter-plus');
    const counterMinus = document.querySelector('.product-card-info__couter-minus');
    const counterNumber = document.querySelector('.product-card-info__couter-number');
    const conterButton  = document.querySelector('.product-card-info__button-cart');
    let counterPrice = 4000;

    counterPlus.addEventListener('click', plus);
    counterMinus.addEventListener('click', minus);
    conterButton.addEventListener('click', button);

    function plus() {
        if (counterNumber.textContent == 50) {
            counterNumber.textContent = 50;
        }else{
            counterNumber.innerText++;
        }
    }
    function minus() {
        if (counterNumber.textContent == 0) {
            counterNumber.textContent = 0;
        }else{
            counterNumber.innerText--;
        }
    }
    function button () {
        alert(counterNumber.textContent + ' x ' + counterPrice + ' ₽');
        alert('Итого: ' + counterPrice * counterNumber.textContent + ' ₽');
    }
});
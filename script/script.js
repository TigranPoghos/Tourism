document.addEventListener("DOMContentLoaded", function(){

    //слайдер rated
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        allowTouchMove: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });



    //rated карточки
    const ratedMenuButtons = document.querySelectorAll('.rated__menu-button');
    const ratedCards = document.querySelectorAll('.rated__swiper-slide');
    const swiperButton = document.querySelector('.rated__swiper-button');
    
    function updateCardsAndButton(selectedContinent) {
        let visibleCount = 0;
    
        ratedCards.forEach(ratedCard => {
            if (selectedContinent === 'world' || ratedCard.classList.contains(selectedContinent)) {
                ratedCard.style.display = 'flex'; 
                visibleCount++;
            } else {
                ratedCard.style.display = 'none'; 
            }
        });

        if (visibleCount <= 3) {
            swiperButton.style.display = 'none';
        } else {
            swiperButton.style.display = 'flex';
        }
    }
    
    ratedMenuButtons.forEach(ratedButton => {
        ratedButton.addEventListener('click', function () {
            ratedMenuButtons.forEach(b => b.classList.remove('active'));
            ratedButton.classList.add('active');

            const selectedContinent = ratedButton.getAttribute('data-continent');

            updateCardsAndButton(selectedContinent);

            swiper.slideTo(0, 0);
        });
    });

    swiper.init();
    





})
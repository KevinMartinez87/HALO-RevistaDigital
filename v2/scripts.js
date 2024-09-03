document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.control.next');
    const prevButton = document.querySelector('.control.prev');
    const previews = document.querySelectorAll('.preview');

    let currentSlide = 0;

    setTimeout(() => {
        loader.style.display = 'none';
    }, 3000); // Tiempo de la pantalla de carga

    function goToSlide(index) {
        const offset = -index * 100;
        slider.style.transform = `translateX(${offset}%) rotateY(${index % 2 === 0 ? '-' : ''}10deg)`;
        currentSlide = index;
    }

    nextButton.addEventListener('click', () => {
        const nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    });

    prevButton.addEventListener('click', () => {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    });

    previews.forEach((preview, index) => {
        preview.addEventListener('click', () => {
            goToSlide(index);
        });
    });
});




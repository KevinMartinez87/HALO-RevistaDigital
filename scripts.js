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


document.querySelector('.control.next').addEventListener('click', function(e) {
    document.getElementById('page').classList.add('slide-out');
});

document.querySelector('.control.prev').addEventListener('click', function(e) {
    document.getElementById('page').classList.add('slide-out');
});


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        slider.classList.add('transition-flip');
        slider.style.transform = `translateX(-${index * 100}%)`;

        setTimeout(() => {
            slider.classList.remove('transition-flip');
        }, 800);

        currentIndex = index;
    }

    prevButton.addEventListener('click', () => {
        updateSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        updateSlide(currentIndex + 1);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const bookLoader = document.getElementById("book-loader");
    const mainContent = document.getElementById("main-content");

    // Mostrar el contenido después de la animación de apertura del libro
    setTimeout(function() {
        bookLoader.style.opacity = '0'; // Desvanecer la animación del libro
        setTimeout(function() {
            bookLoader.style.display = 'none'; // Ocultar el preloader
            document.body.classList.add('show-content'); // Mostrar el contenido del cuerpo
        }, 1000); // Tiempo de desvanecimiento de la animación
    }, 2500); // Duración total de la animación de abrir el libro (2.5 segundos)

    // Agregar un retardo al cambiar de página
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Prevenir la acción por defecto
            mainContent.classList.add("page-transition"); // Agregar clase para transición de salida
            const destination = this.href;

            setTimeout(function() {
                window.location.href = destination; // Redireccionar después de la animación
            }, 1000); // Espera de 1 segundo antes de cambiar de página
        });
    });
});

document.getElementById("toggleInfo").addEventListener("click", function() {
    var infoBox = document.getElementById("infoBox");
    infoBox.classList.toggle("show"); // Alterna entre mostrar y ocultar
});


document.addEventListener("DOMContentLoaded", function() {
    // Desaparecer el título animado después de 4 segundos
    setTimeout(() => {
        document.querySelector('.animated-title').style.display = 'none';
    }, 6000); // Se alinea con la duración de la animación (4s)
});



document.querySelector(".info-button").addEventListener("click", function() {
    document.getElementById("info-box").style.display = "block"; // Muestra la caja de información
});

document.querySelector(".close-button").addEventListener("click", function() {
    document.getElementById("info-box").style.display = "none"; // Cierra la caja de información
});





function togglePopup() {
    const popup = document.getElementById('popup');
    if (popup.style.display === 'block') {
        popup.style.display = 'none'; // Ocultar popup
    } else {
        popup.style.display = 'block'; // Mostrar popup
    }
}




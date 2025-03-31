document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let currentSlide = 0;

    // Configuração inicial
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * index}%)`;
        slide.style.opacity = index === 0 ? '1' : '0';
        slide.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
    });

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    // Botão anterior
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Botão próximo
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Transição automática (opcional)
    function autoSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

     //Intervalo para transição automática - a cada 5 segundos (opcional)
     //const slideInterval = setInterval(autoSlide, 5000);

    // Parar transição automática quando o mouse estiver sobre o carrossel (opcional)
    //carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
    //carousel.addEventListener('mouseleave', () => slideInterval = setInterval(autoSlide, 5000));

    // Mostrar primeiro slide
    showSlide(0);
});
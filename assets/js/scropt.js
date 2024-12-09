var swiper = new Swiper (".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 80,
    grabCursor: true,
    loop: false, // Desactiva el bucle infinito
    watchOverflow: true, // Evita que Swiper se active si las diapositivas son menos que el tamaño del contenedor
    breakpoints: {
        320: { // Añadir un punto de interrupción para pantallas pequeñas
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: { // Otro punto de interrupción para pantallas medianas
            slidesPerView: 2,
            spaceBetween: 5
        },
        580: {
            slidesPerView:2,
            spaceBetween: 10
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        700: {
            slidesPerView:2,
            spaceBetween: 20
        },
        790: {
            slidesPerView: 2,
            spaceBetween: 70
        },
        886: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 70
        },
        1200: { // Añadir un punto de interrupción para pantallas grandes
            slidesPerView: 3,
            spaceBetween: 80
        }
    }
});
let position = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel ul');
    const itemWidth = document.querySelector('.carousel ul li').offsetWidth;
    const carouselWidth = carousel.scrollWidth;
    const containerWidth = document.querySelector('.carousel').offsetWidth;

    position += direction * itemWidth;

    // Limites
    if (position > 0) {
        position = 0;
    } else if (Math.abs(position) + containerWidth > carouselWidth) {
        position = -(carouselWidth - containerWidth);
    }

    carousel.style.transform = `translateX(${position}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
    Object.keys(data).forEach(sectionId => {
        const section = data[sectionId];
        
        // Insert description
        document.querySelector(`#${sectionId} .description`).textContent = section.description;
        
        // Create carousel
        const carousel = document.querySelector(`#${sectionId} .carousel`);
        section.games.forEach(game => {
            const a = document.createElement('a');
            a.href = game.link;
            a.target = '_blank';  // Open link in new tab
            const img = document.createElement('img');
            img.src = game.img;
            img.alt = game.link;
            a.appendChild(img);
            carousel.appendChild(a);
        });
        
        // Duplicate the items for infinite scrolling
        section.games.forEach(game => {
            const a = document.createElement('a');
            a.href = game.link;
            a.target = '_blank';  // Open link in new tab
            const img = document.createElement('img');
            img.src = game.img;
            img.alt = game.link;
            a.appendChild(img);
            carousel.appendChild(a);
        });
    });
});

function slide(sectionId, direction) {
    const carousel = document.querySelector(`#${sectionId} .carousel`);
    const items = document.querySelectorAll(`#${sectionId} .carousel a`);
    const itemWidth = items[0].clientWidth + 20; // Width plus margin

    // Get the current translateX value of the carousel
    let currentTransform = getComputedStyle(carousel).transform;
    let currentTranslateX = currentTransform !== 'none' ? parseFloat(currentTransform.split(',')[4].trim()) : 0;

    // Calculate the new translateX value
    let newTranslateX = currentTranslateX + direction * itemWidth;

    // Calculate the width of the original set of items
    const totalWidth = itemWidth * (items.length / 2);

    // Check if the new position is beyond the bounds of the original items
    if (newTranslateX > 0) {
        newTranslateX = -totalWidth + itemWidth;
    } else if (newTranslateX < -totalWidth) {
        newTranslateX = 0;
    }

    // Apply the new translateX value to the carousel
    carousel.style.transform = `translateX(${newTranslateX}px)`;
}

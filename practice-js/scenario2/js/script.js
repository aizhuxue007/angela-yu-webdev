// Select all the needed elements
let slides = document.getElementsByClassName('jumbo-slider__slide'),
links = document.getElementsByClassName('jumbo-slider__nav-link'),
circles = document.getElementsByClassName('jumbo-slider__circle'),

container = document.getElementsByClassName('jumbo-slider__slides')[0],

current = 1,
loopTime = 6000;


// Add active to next slide elements
const addActiveClasses = () => {
    slides[0].classList.add('jumbo-slider__slide--active');
    links[current-1].classList.add('jumbo-slider__nav-link--active');
    circles[current-1].classList.add('jumbo-slider__circle--filled');
}

// Remove active classes from current slide
const removeActiveClasses = () => {
    slides[0].classList.remove('jumbo-slider__slide--active');
    links[current-1].classList.remove('jumbo-slider__nav-link--active');
    circles[current-1].classList.remove('jumbo-slider__circle--filled');
}

// Set background to next slide
const nextSlide = () => {
    container.appendChild(slides[0].cloneNode([true]));
    container.removeChild(slides[0]);
}

// Update slide, link and circle to next
const updateSlide = () => {
    removeActiveClasses();
    if (current < slides.length) {
        current++;
    } else {
        current = 1;
    }
    nextSlide();
    addActiveClasses();
    
}

const init = () => {
    // Pull up first slide when site is first reached
    addActiveClasses();

    // Implement setInterval to update slide every 6 seconds
    setInterval(updateSlide, loopTime);
}

init();
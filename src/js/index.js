// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: .65
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
       if(!entry.isIntersecting) {
           return;
       } else {
           entry.target.classList.add('appear');
           appearOnScroll.unobserve(entry.target);
       }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})
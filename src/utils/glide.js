import Glide from '@glidejs/glide';

document.addEventListener('DOMContentLoaded', () => {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 14,
    autoplay: 1000,
    animationDuration: 2000,
    animationTimingFunc: 'ease-in-out',
  }).mount();
});

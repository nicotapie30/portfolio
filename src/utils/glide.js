import Glide from '@glidejs/glide';

document.addEventListener('DOMContentLoaded', () => {
  const glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 14,
    autoplay: 1000,
    animationDuration: 2000,
    animationTimingFunc: 'ease-in-out',
  });

  glide.mount();

  const glideElement = document.querySelector('.glide');

  glideElement.addEventListener('mouseenter', () => {
    glide.pause();
  });

  glideElement.addEventListener('mouseleave', () => {
    glide.play();
  });
});

new Splide('.dashboard__deposit-slider', {
 type: 'loop',
 arrows: true,
 pagination: false,
 perPage: 1,
 focus: 'center',
 gap: '2rem',
 classes: {
  prev: 'splide__arrow--prev dashboard__progress-prev',
  next: 'splide__arrow--next dashboard__progress-next',
 },
}).mount();

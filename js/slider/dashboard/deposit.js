new Splide('.dashboard__deposit-slider', {
 type: 'loop',
 arrows: true,
 pagination: false,
 gap: 28.5,
 width: 223,
 autoHeight: true,
 classes: {
  arrows: 'splide__arrows dashboard__arrows',
  arrow: 'splide__arrow dashboard__arrow',
  prev: 'splide__arrow--prev dashboard__progress-prev',
  next: 'splide__arrow--next dashboard__progress-next',
 },
}).mount();

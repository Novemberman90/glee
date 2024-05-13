$(function() {
  $('.top-slider__inner').slick({
    dots:true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });


var mixerOne = mixitup('.mixer-1', {
    controls: {
        scope: 'local',
    }
});

var mixerTwo = mixitup('.mixer-2', {
    controls: {
        scope: 'local',
    }
});
});
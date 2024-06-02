$(function() {

    $('.product-item-list__btn-card').on('click', function() {
      $(this).removeClass('product-item-list__btn-card--active');
      $(this).parent().find('.product-item-list__btn-like').toggleClass('product-item-list__btn-like--active');
      $(this).parent().find('.product-item-list__btn').toggleClass('product-item-list__btn--active');
    });
    $('.product-item-list__btn').on('click', function() {
      $(this).removeClass('product-item-list__btn--active');
      $(this).parent().find('.product-item-list__btn-card').toggleClass('product-item-list__btn-card--active');
      $(this).parent().find('.product-item-list__btn-like').toggleClass('product-item-list__btn-like--active');
    });

    $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path style="stroke:none; "d="M 9.902344 0.5625 C 9.738281 0.21875 9.386719 0 9.003906 0 C 8.617188 0 8.273438 0.21875 8.101562 0.5625 L 6.09375 4.695312 L 1.605469 5.359375 C 1.230469 5.414062 0.917969 5.679688 0.804688 6.039062 C 0.6875 6.398438 0.78125 6.792969 1.050781 7.058594 L 4.304688 10.28125 L 3.539062 14.835938 C 3.476562 15.210938 3.632812 15.589844 3.941406 15.8125 C 4.25 16.035156 4.660156 16.0625 4.996094 15.882812 L 9.007812 13.742188 L 13.015625 15.882812 C 13.351562 16.0625 13.761719 16.039062 14.070312 15.8125 C 14.382812 15.585938 14.539062 15.210938 14.476562 14.835938 L 13.703125 10.28125 L 16.960938 7.058594 C 17.226562 6.792969 17.324219 6.398438 17.207031 6.039062 C 17.085938 5.679688 16.777344 5.414062 16.402344 5.359375 L 11.914062 4.695312 Z M 9.902344 0.5625"/></g></svg>'
  });
    $(".product-item-list__star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path style="stroke:none; "d="M 9.902344 0.5625 C 9.738281 0.21875 9.386719 0 9.003906 0 C 8.617188 0 8.273438 0.21875 8.101562 0.5625 L 6.09375 4.695312 L 1.605469 5.359375 C 1.230469 5.414062 0.917969 5.679688 0.804688 6.039062 C 0.6875 6.398438 0.78125 6.792969 1.050781 7.058594 L 4.304688 10.28125 L 3.539062 14.835938 C 3.476562 15.210938 3.632812 15.589844 3.941406 15.8125 C 4.25 16.035156 4.660156 16.0625 4.996094 15.882812 L 9.007812 13.742188 L 13.015625 15.882812 C 13.351562 16.0625 13.761719 16.039062 14.070312 15.8125 C 14.382812 15.585938 14.539062 15.210938 14.476562 14.835938 L 13.703125 10.28125 L 16.960938 7.058594 C 17.226562 6.792969 17.324219 6.398438 17.207031 6.039062 C 17.085938 5.679688 16.777344 5.414062 16.402344 5.359375 L 11.914062 4.695312 Z M 9.902344 0.5625"/></g></svg>'
  });

  $('.filter-price__input').ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);       
      },
      onChange: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
      },
  })

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
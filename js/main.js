/**
 * Play Video
 */

$(document).on('click', '.js-videoPoster', function (e) {
  //отменяем стандартное действие button
  e.preventDefault();
  var poster = $(this);
  // ищем родителя ближайшего по классу
  var wrapper = poster.closest('#video-area');
  videoPlay(wrapper);
});

//вопроизводим видео, при этом скрывая постер
function videoPlay(wrapper) {
  var iframe = wrapper.find('.vide0-iframe');
  // Берем ссылку видео из data
  var src = iframe.data('src');
  // скрываем постер
  wrapper.addClass('videoWrapperActive');
  // подставляем в src параметр из data
  iframe.attr('src', src);
}

$(document).ready(function () {
  $('#contact-btn').on('click', function (e) {
    e.preventDefault();
    $('#get-in-touch').fadeIn();
  });
  $('#get-in-touch .form-header p').on('click', function () {
    $('#get-in-touch').fadeOut();
  });
});

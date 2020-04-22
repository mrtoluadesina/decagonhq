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

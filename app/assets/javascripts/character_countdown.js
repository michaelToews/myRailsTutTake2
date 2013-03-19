function updateCountdown() {
  // 140 characters max
  var remaining = 140 - jQuery('.micropost_text_area').val().length;
  jQuery('.countdown').text(remaining + ' characters remaining.');
}

jQuery(document).ready(function($) {
  updateCountdown();
  $('.micropost_text_area').change(updateCountdown);
  $('.micropost_text_area').keyup(updateCountdown);
});
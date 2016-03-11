
$(document).ready(function() {
  $('#userInput form').submit(function() {
    for (i = 1; i <= 100; i++) {
    if ( i % 15 === 0) {
        $('#numLoop').append('<span>pingpong</span>');
      }
    else if( i % 3 === 0) {
        $('#numLoop').append('<span>ping</span>');
      }
    else if ( i % 5 === 0) {
        $('#numLoop').append('<span>pong</span>');
      }
    else {
        $('#numLoop').append('<span>'+i+'</span>');
        event.preventDefault();
      }
    }
});
});

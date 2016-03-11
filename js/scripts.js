$(document).ready(function() {

  var $numLoop = $('#numLoop');

  $('#userInput').submit(function(event) {

    event.preventDefault();

    var cap = $('input:first').val();

    for (i = 1; i <= cap; i++) {
      if (i % 15 === 0) {
        $numLoop.append('<div>pingpong</div>');
      }
      else if(i % 3 === 0) {
        $numLoop.append('<div>ping</div>');
      }
      else if (i % 5 === 0) {
        $numLoop.append('<div>pong</div>');
      }
      else {
        $numLoop.append('<div>'+i+'</div>');
      }
    }
  });
});

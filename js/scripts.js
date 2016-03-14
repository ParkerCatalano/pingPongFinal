$(document).ready(function() {

  var $numLoop = $('#numLoop');
  var $input = $('input:first');

  $('#userInput').submit(function(event) {

    event.preventDefault();
    $numLoop.empty();

    var cap = $input.val();
    $input.val('');

    for (i = 1; i <= cap; i++) {
      $numLoop.append('<div>' + pingPong(i) + '</div>');
    }

  });
});

function pingPong(n) {
  var result;

  if (n % 15 === 0) {
    result = 'pingpong';
  } else if (n % 3 === 0) {
    result = 'ping';
  } else if (n % 5 === 0) {
    result = 'pong';
  } else {
    result = n;
  }

  return result;
}

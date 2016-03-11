
$(document).ready(function() {
  $('#blanks form').submit(function() {
    for (i = 1; i <= 100; i++) {
      if ( i % 15 === 0) {
        console.log("pingpong");
      }
      else if( i % 3 === 0) {
        console.log("ping");
      }
      else if ( i % 5 === 0) {
        console.log("pong");
      }
      else {
        console.log(i)
        event.preventDefault();
      }
  }
});
});

$(function() {
  $('#showpop').hover(function(){
    $('#popinv').removeClass('inv');
  }, function(){
    $('#popinv').addClass('inv');
  });

  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  var progress_value = 0;
  var timer = setInterval(function() {
    progress_value += 1;
    setProgressValue(progress_value);
    if (progress_value == 100) {
      clearInterval(timer);
    }
  }, 80);
});

var counter = 0;
function doAction() {
  if (counter++ % 2 == 0) {
    $('#btn1').addClass("btn-warning");
    $('#btn1').removeClass("btn-primary");
    $('#btn1').removeClass("btn-danger");
  } else if (counter % 10 == 0) {
    $('#btn1').addClass("btn-danger");
    $('#btn1').removeClass("btn-primary");
    $('#btn1').removeClass("btn-warning");
  } else {
    $('#btn1').addClass("btn-primary");
    $('#btn1').removeClass("btn-warning");
    $('#btn1').removeClass("btn-danger");
  }
  $('#msg').text('clicked: ' + counter);
}

function doForm(e) {
  if (!e.target.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    alert("OK!");
  }
  $('#form1').addClass('was-validated');
}

function setProgressValue(n) {
  $('#progress1')
    .css('width', n + '%')
    .prop('aria-valuenow', n)
    .text(n + '%');
}

function reset() {
  setProgressValue(0);
}

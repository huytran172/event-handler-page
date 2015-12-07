window.onload = function() {
  var outermost = document.getElementsByClassName('outermost')[0];
  var innermost = outermost.firstElementChild;
  var inner = innermost.firstElementChild;
  var divs = [outermost, innermost, inner];
  var i;

  window.addEventListener('scroll', function (event) {
    if (window.pageYOffset > window.innerHeight * 2 / 3) {
      for (i = 0; i < divs.length; i += 1) {
        divs[i].classList.add('active');
      }
    }

    // Progess bar
    var max = document.body.clientHeight - window.innerHeight;
    var currentOffset = window.pageYOffset;
    console.log(max + " " + currentOffset);
    var percent = (currentOffset / max) * 100;
    console.log(percent);

    document.getElementById('progressbar').setAttribute('value', percent);
  });
};

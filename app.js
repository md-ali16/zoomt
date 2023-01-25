// Hero section Slider

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activ", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activ";
  slides.autoplay = true;
  //setTimeout(showSlides, 2000);


}

// Products Indecator
function imgShow(i, ri, rri) {
  const img = document.getElementById(i + '-img');
  const imgRemove = document.getElementById(ri + '-img');
  const imgRemoved = document.getElementById(rri + '-img');
  img.style.display = 'block';
  imgRemove.style.display = 'none';
  imgRemoved.style.display = 'none';
}
function dotActive(n, rx, x, i) {
  const active = document.getElementById(n + '-dot');
  const remove = document.getElementById(rx + '-dot');
  const removed = document.getElementById(x + '-dot');
  active.classList.add('acti');

  remove.classList.remove('acti');
  removed.classList.remove('acti');

}
document.getElementById('black-dot').addEventListener('click', function () {
  dotActive('black', 'blue', 'white')
  imgShow('black', 'blue', 'white')
})
document.getElementById('blue-dot').addEventListener('click', function () {
  dotActive('blue', 'black', 'white')
  imgShow('blue', 'black', 'white')
})
document.getElementById('white-dot').addEventListener('click', function () {
  dotActive('white', 'blue', 'black')
  imgShow('white', 'blue', 'black')
})


// Tastimonial Slider
var divsIndex = 1;
showDivs(divsIndex);

function plusDivs(n) {
  showDivs(divsIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("tastiSlides");
  if (n > x.length) { divsIndex = 1 }
  if (n < 1) { divsIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[divsIndex - 1].style.display = "block";
}
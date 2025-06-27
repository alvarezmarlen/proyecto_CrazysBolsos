let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/* MENU HAMBURGUESA , PARA QUE LOS SLIDER SE BAJEN Y YO PUEDA VER EL SLIDER ABAJO */
  const menuToggle = document.getElementById('menu-toggle');
  const slideshow = document.querySelector('.slideshow-container');

  menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
      slideshow.style.marginTop = '350px';  // Ajusta este valor al alto de tu menú desplegable
    } else {
      slideshow.style.marginTop = '0';
    }
  });

/* lupa de buscar */
  const abrirBusqueda = document.getElementById('abrirBusqueda');
  const cerrarBusqueda = document.getElementById('cerrarBusqueda');
  const barraBusqueda = document.getElementById('busqueda');

  abrirBusqueda.addEventListener('click', () => {
    barraBusqueda.style.display = 'flex';
  });

  cerrarBusqueda.addEventListener('click', () => {
    barraBusqueda.style.display = 'none';
  });
  


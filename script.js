var words = [
    "TRAINER MAX",
    "Mantén tu jardín limpio y hermoso todo el tiempo",
    "Deja de preocuparte por los perros callejeros arruinando tu jardín",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 2,
  speed = 100;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
          $(".gif").show(); // Mostrar el GIF al final de las palabras
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".text").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});

function vibrateImage() {
  var image = document.getElementById("vibrating-image");
  image.classList.add("vibrating"); // Agrega la clase que activa la animación

  setTimeout(function () {
    image.classList.remove("vibrating"); // Quita la clase después de un tiempo
  }, 1000); // Ajusta el tiempo en milisegundos
}

// Llama a la función para vibrar la imagen cada cierto tiempo
setInterval(vibrateImage, 2000);

// Función para intercambiar las imágenes al hacer clic en una imagen de la izquierda
function swapImages(clickedItem) {
  var rightImage = document.getElementById("rightImage");
  var tempSrc = rightImage.src;
  rightImage.src = clickedItem.querySelector("img").src;
  clickedItem.querySelector("img").src = tempSrc;
}

// Función para cambiar aleatoriamente las imágenes cada cierto tiempo
function randomSwap() {
  var gridItems = document.querySelectorAll(".grid-item-product");
  var randomIndex = Math.floor(Math.random() * gridItems.length);
  var rightImage = document.getElementById("rightImage");
  var tempSrc = rightImage.src;
  rightImage.src = gridItems[randomIndex].querySelector("img").src;
  gridItems[randomIndex].querySelector("img").src = tempSrc;
}

// Cambiar aleatoriamente cada 5 segundos (5000 milisegundos)
setInterval(randomSwap, 10000);


// Obtener el encabezado
var header = document.querySelector('.sticky-header');
// Variable para guardar la posición anterior del scroll
var lastScrollTop = 0;

// Función para manejar el scroll
window.addEventListener('scroll', function() {
  // Obtener la posición actual del scroll
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Comprobar si el scroll está yendo hacia abajo y la distancia es mayor que 50px
  if (scrollTop > lastScrollTop && scrollTop > 50) {
    // Hacer el encabezado transparente
    header.classList.add('transparent');
  } else {
    // Hacer el encabezado normal
    header.classList.remove('transparent');
  }
  
  // Actualizar la posición anterior del scroll
  lastScrollTop = scrollTop;
});



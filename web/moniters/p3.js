document.addEventListener("DOMContentLoaded", function() {
    const bagImage = document.getElementById("bagImage");
    const seimge = document.querySelector(".seimge1 img");

    seimge.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Replace the bag image source with another image
        bagImage.src = "mon35.png";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const bagImage = document.getElementById("bagImage");
    const seimge = document.querySelector(".seimge2 img");

    seimge.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Replace the bag image source with another image
        bagImage.src = "mon36.png";
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.colorbag img');
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Remove the 'clicked' class from all images
            images.forEach(function(img) {
                img.classList.remove('clicked');
            });
            // Add the 'clicked' class to the clicked image
            this.classList.add('clicked');
        });
    });
});


var selectedImage = null;

function toggleGreenBorder(imgElement) {
  if (selectedImage !== imgElement) {
    if (selectedImage) {
      selectedImage.classList.remove("green-border");
    }
    imgElement.classList.add("green-border");
    selectedImage = imgElement;
  } else {
    imgElement.classList.remove("green-border");
    selectedImage = null;
  }
}


document.addEventListener("DOMContentLoaded", function() {
    const bagImage = document.getElementById("bagImage");
    const seimge = document.querySelector(".bag1");

    seimge.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Replace the bag image source with another image
        bagImage.src = "mon3.png";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const bagImage = document.getElementById("bagImage");
    const seimge = document.querySelector(".bag2");

    seimge.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Replace the bag image source with another image
        bagImage.src = "mon33.png";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const bagImage = document.getElementById("bagImage");
    const seimge = document.querySelector(".bag3");

    seimge.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Replace the bag image source with another image
        bagImage.src = "mon34.png";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const bagImage = document.getElementById("bagImage");
    const seimge = document.querySelector(".bag4");

    seimge.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Replace the bag image source with another image
        bagImage.src = "mon35.png";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const bagImage = document.getElementById("bagImage");
    const seimge = document.querySelector(".bag5");

    seimge.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Replace the bag image source with another image
        bagImage.src = "mon36.png";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const bagImage = document.getElementById("bagImage");
    const seimge = document.querySelector(".bag6");

    seimge.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Replace the bag image source with another image
        bagImage.src = "mon37.png";
    });
});


function openZoomWindow() {
    var imageSrc = document.getElementById("bagImage").src;
    window.open(imageSrc, "_blank");
  }









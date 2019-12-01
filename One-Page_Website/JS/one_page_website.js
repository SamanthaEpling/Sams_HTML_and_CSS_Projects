//Challenge Assignment: Step 273
// Create a lighbox (modal image gallery) for all images in this project.

function openModal() {
    document.getElementById("MWModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("MWModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("MWSlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  };

  function validateForm() {
    var X = document.forms["myForm"]["phone"].value;
    if(X == "") {
      alert("Phone number field must be filled out like this: 123-456-7890");
      return false;
    }
  }

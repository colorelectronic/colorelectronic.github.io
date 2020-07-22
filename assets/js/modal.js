// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Jasko nasro

var slideshowImages = document.getElementsByClassName("slideshow-img");
var modalImg = document.getElementById("img01");

for (var i = 0; i < slideshowImages.length; i++) {
    slideshowImages[i].onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
}
// Setting up Image Carousel Slider 
let imageSlider = document.querySelectorAll(".slide"),
  leftArrow = document.querySelector("#leftArrow"),
  rightArrow = document.querySelector("#rightArrow"),
  current = 0;

// Setting up arrow buttons and making them interactive 
leftArrow.addEventListener("click", () => {
  if (current === 0) {
    current = imageSlider.length;
  }
  left();
});

rightArrow.addEventListener("click", () => {
  if (current === imageSlider.length - 1) {
    current = -1;
  }
  right();
});
startSlide();


function reset() {
  for (let i = 0; i < imageSlider.length; i++) {
    imageSlider[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  imageSlider[0].style.display = "block";
}

// Moving Image Slide to left and right
function left() {
  reset();
  imageSlider[current - 1].style.display = "block";
  current--;
}


function right() {
  reset();
  imageSlider[current + 1].style.display = "block";
  current++;
}


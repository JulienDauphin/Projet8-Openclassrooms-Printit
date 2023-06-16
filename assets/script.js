const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const dotsContainer = document.querySelector(".dots");
let dots = [];
let position = 0;



  // Clic sur la flèche de droite 
  arrowRight.addEventListener("click", function() {
    console.log("Clic sur la flèche de droite");
  });

  // Clic sur la flèche de gauche 
  arrowLeft.addEventListener("click", function() {
    console.log("Clic sur la flèche de gauche");
  });

  // Création des points
  slides.forEach(() => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  // Affichage point en cours
  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.remove("dot_selected");
      if (index === position) {
        dot.classList.add("dot_selected");
      }
    });
  }

  updateDots();

  const bannerImg = document.querySelector(".banner-img");
  const bannerText = document.querySelector("#banner p");

// Changement Slide  
  function changeSlide() {
    bannerImg.src = "./assets/images/slideshow/" + slides[position].image;
    bannerText.innerHTML = slides[position].tagLine;
  }

// Clic sur une flèche
  function ArrowClic(direction) {
    position += direction;
    updateDots();
    changeSlide();
  }

    // Clic sur la flèche de droite 
    arrowRight.addEventListener("click", function() {
        console.log("Clic sur la flèche de droite");
        console.log(position);
        ArrowClic(1);
      });
    
      // Clic sur la flèche de gauche 
      arrowLeft.addEventListener("click", function() {
        console.log("Clic sur la flèche de gauche");
        console.log(position);
        ArrowClic(-1);
      });
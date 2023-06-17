// Encapsulation du code dans une fonction auto-exécutée pour éviter les collisions de variables
(function() {
  const slides = [
    {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
      image: "slide2.jpg",
      tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
    }
  ];


  const bannerImg = document.querySelector(".banner-img");
  const bannerText = document.querySelector("#banner p");
  const arrowRight = document.querySelector(".arrow_right");
  const arrowLeft = document.querySelector(".arrow_left");
  const dotsContainer = document.querySelector(".dots");
  let position = 0;
  let dots = [];
  

  // Fonction pour changer l'image et le texte
  function changeSlide() {
    bannerImg.src = "./assets/images/slideshow/" + slides[position].image;
    bannerText.innerHTML = slides[position].tagLine;
  }

  // Fonction pour vérifier et ajuster la position
  function checkPosition() {
	// Si la position devient supérieure au nombre d'élément de slides alors position = 0 pour boucler le diaporama
    if (position >= slides.length) {
      position = 0;
	//   Et si la position devient négative alors position = au nombre d'élément de slides - 1 pour boucler le diaporama
    } else if (position < 0) {
      position = slides.length - 1;
    }
  }

  // Fonction pour mettre à jour les points avec 2 paramètres dans la méthode forEach
  //  (dot = point en cours d'itération et index = index de l'élément dans le tableau (auto))
  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.remove("dot_selected");
      if (index === position) {
        dot.classList.add("dot_selected");
      }
    });
  }

  // Fonction lors du clic sur une flèche (droite ou gauche) position = direction +1 ou -1 et on lance nos fonctions de vérif et changement
  function ArrowClic(direction) {
    position += direction;
    checkPosition();
    updateDots();
    changeSlide();
  }

  // Création des points (1 Div avec classe dot pour chaque élément du tableau slides)
  slides.forEach(() => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  // Clic sur la flèche de droite donc je définis direction à 1 dans la fonction ArrowClic
  arrowRight.addEventListener("click", function() {
    ArrowClic(1);
    console.log("Clic sur le bouton de droite");
    console.log(position);
  });

  // Clic sur la flèche de gauche donc je définis direction à -1 dans la fonction ArrowClic
  arrowLeft.addEventListener("click", function() {
    ArrowClic(-1);
    console.log("Clic sur le bouton de gauche");
    console.log(position);
  });

  // Clic sur un point
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
      position = index;
      updateDots();
      changeSlide();
    });
  });

  // Affichage initial du premier slide pour sécuriser l'affichage de départ sur 0 (position étant égal à 0)
  changeSlide();
  updateDots();
})();

// Début du tableau ******************************************
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
// Fin du tableau **********************************************

// Début du déplacement du slider ******************************
let i = 0;

let imageBanner = document.querySelector(".banner-img");
let tagLineP = document.querySelector("#banner p");
let span = document.querySelectorAll(".dots .dot");
const arrow_right = document.querySelector(".arrow_right");
const arrow_left = document.querySelector(".arrow_left");
const nbSlides = slides.length;

// Fonction pour mettre à jour le slider et les dots
function updateSlider(index) {
    // Met à jour l'image et le texte
    imageBanner.src = "./assets/images/slideshow/" + slides[index].image;
    tagLineP.innerHTML = slides[index].tagLine;

    // Met à jour les dots
    span.forEach(dot => dot.classList.remove("dot_selected")); // Enlève la classe de tous les dots
    span[index].classList.add("dot_selected"); // Ajoute la classe au dot actif
}

// Flèche droite ********************************************
arrow_right.addEventListener("click", () => {
    i = (i + 1) % nbSlides; // Boucle vers le début après la dernière slide
    updateSlider(i);
});

// Flèche gauche ********************************************
arrow_left.addEventListener("click", () => {
    i = (i - 1 + nbSlides) % nbSlides; // Boucle vers la fin si on va avant la première
    updateSlider(i);
});

// Clic sur les dots (pour permettre de naviguer directement)
span.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        i = index;
        updateSlider(i);
    });
});

// Initialisation
updateSlider(i);
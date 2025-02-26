// debut du tableau ******************************************

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

//fin du tableau **********************************************

// debut du deplacement du slider ******************************

let i = 0

let imageBanner = document.querySelector(".banner-img")
let tagLineP = document.querySelector("#banner p")
let span = document.querySelectorAll(".dots .dot")
const arrow_right = document.querySelector(".arrow_right") // selection img fleche droite dans index.html
const arrow_left = document.querySelector(".arrow_left") // selection img fleche gauche dans index.html
const nbSlides = slides.length


// fleche droite ********************************************
arrow_right.addEventListener("click", ()=> {
	if (i < nbSlides - 1){
		i++ 
	} else {
		i = 0
	}
	const image = slides[i].image 
	const tagLine = slides [i].tagLine 
	imageBanner.src = "./assets/images/slideshow/" + image 
	tagLineP.innerHTML = tagLine 

 if (i < 4){
	span[i].classList.add("dot_selected")
} else {
	span[i].classList.remove("dot_selected")
}

})
  //fleche gauche ******************************************
arrow_left.addEventListener("click", ()=> {
	if (i > 0){
		i--
	} else {
		i = nbSlides - 1
	}
	const image = slides[i].image 
	const tagLine = slides [i].tagLine 
	imageBanner.src = "./assets/images/slideshow/" + image 
	tagLineP.innerHTML = tagLine 
	console.log(i)


})

//dots *******************************************

// dots.forEach(dot => {
// 	dot.addEventListener('click', (e) => {
// 	  currentSlide = parseInt(e.target.getAttribute('data-index'));
// 	  showSlide(currentSlide);
// 	});
//   });

// -------------------------------------------------------------

// fin du deplacement du slider



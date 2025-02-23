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



i = 0
const nbSlides = slides.length //nombres d'images dans le slide

const arrow_right = document.querySelector(".arrow_right") // selection img fleche droite dans index.html
arrow_right.addEventListener("click", ()=> {
	if (i < nbSlides - 1){
		i++
	} else {
		i = 0
	}
	const image = slides[i].image // var contenant la source de l'image
	const tagLine = slides [i].tagLine // var contenant la tagLine
	let imageBanner = document.querySelector(".banner-img")
	imageBanner.src = "./assets/images/slideshow/" + image // modification de l'attribut src du banner html
	let tagLineP = document.querySelector("#banner p")
	tagLineP.innerHTML = tagLine // modification de la balise P dans le banner html
	console.log(i)
})

const arrow_left = document.querySelector(".arrow_left") // selection img fleche gauche dans index.html
arrow_left.addEventListener("click", ()=> {
	if (i > 0){
		i--
	} else {
		i = nbSlides - 1
	}
	const image = slides[i].image // var contenant la source de l'image
	const tagLine = slides [i].tagLine // var contenant la tagLine
	let imageBanner = document.querySelector(".banner-img")
	imageBanner.src = "./assets/images/slideshow/" + image // modification de l'attribut src du banner html
	let tagLineP = document.querySelector("#banner p")
	tagLineP.innerHTML = tagLine // modification de la balise P dans le banner html
	console.log(i)
})











//`slide${slides.length}.jpg`




window.onload = function hola () {
	console.log("Js conectado");
}

const card =		document.querySelectorAll(".card");

const contenido = 	document.querySelectorAll('.toggle');


card.forEach((each, i) => {
	
	
	card[i].addEventListener('click', () =>{
		
		
		contenido.forEach((each, i) => {
			// contenido[i].classList.add('activo')
		})

		contenido[i].classList.toggle('toggle')
	})
})

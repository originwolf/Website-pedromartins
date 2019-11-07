const go = (elem) => {
	window.scroll({top: document.querySelector(elem).offsetTop, left: 0, behavior: 'smooth'});
}

function modoClaro() {
	//general function
	document.getElementById('btnClaro').style.display = 'none'
	document.getElementById('btnEscuro').style.display = 'inline'
	//document.getElementsByClassName('h2Geral').style.color = "#25221A"
	//sobremim Section
	document.getElementById('sobremim').style.background = "#CECECE"
	document.getElementById('sobremim').style.color = "#25221A"
	document.getElementById('h2Sobremim').style.color = "#25221A"
	document.getElementById('meusDados').style.color = "#25221A"
	document.getElementById('meApresenta').style.color = "#25221A"
	document.getElementById('minhaFoto').style.border = "1px solid black"
	// //habilidades Section
	// document.getElementById('habilidades').style.background = "#cecece"
	// document.getElementById('habilidades').style.color = "#25221A"
	// document.getElementById('divHab1').style.color = "#25221A"
	// document.getElementById('divHab2').style.color = "#25221A"
	// document.getElementById('divHab3').style.color = "#25221A"
}

function modoEscuro() {
	//general function
	document.getElementById('btnEscuro').style.display = 'none'
	document.getElementById('btnClaro').style.display = 'inline'
	//document.getElementsByClassName('h2Geral').style.color = "#CECECE"
	//sobremim Section
	document.getElementById('sobremim').style.background = "#25221A"
	document.getElementById('sobremim').style.color = "#CECECE"
	document.getElementById('h2Sobremim').style.color = "#CECECE"
	document.getElementById('meusDados').style.color = "#CECECE"
	document.getElementById('meApresenta').style.color = "#CECECE"
	document.getElementById('minhaFoto').style.border = "1px solid white"
	// //habilidades Section
	// document.getElementById('habilidades').style.background = "#25221A"
	// document.getElementById('habilidades').style.color = "#cecece"
	// document.getElementById('divHab1').style.color = "#cecece"
	// document.getElementById('divHab2').style.color = "#cecece"
	// document.getElementById('divHab3').style.color = "#cecece"
}
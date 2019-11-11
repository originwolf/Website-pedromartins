const go = (elem) => {
	window.scroll({top: document.querySelector(elem).offsetTop, left: 0, behavior: 'smooth'});
}

function modoClaro() {
	//general function
	document.getElementById('btnClaro').style.display = 'none'
	document.getElementById('btnEscuro').style.display = 'inline'
	//top-navigation section
	document.getElementById('home').style.background = "#AFAFAF"
	document.getElementById('home').style.color = "#25221A"
	document.getElementById('meuNome').style.color = "#25221A"
	document.getElementById('redesSociais1').style.color = "#25221A"
	document.getElementById('redesSociais2').style.color = "#25221A"
	document.getElementById('redesSociais3').style.color = "#25221A"
	//navbar section
	document.getElementById('barraMenu').style.backgroundColor = "rgba(39,64,139,0.72)"
	//sobremim Section
	document.getElementById('sobremim').style.background = "#CECECE"
	document.getElementById('sobremim').style.color = "#25221A"
	document.getElementById('h2Sobremim').style.color = "#25221A"
	document.getElementById('meusDados').style.color = "#25221A"
	document.getElementById('meApresenta').style.color = "#25221A"
	document.getElementById('minhaFoto').style.border = "1px solid black"
	document.getElementById('aLinkedin').style.color = "#25221A"
	document.getElementById('aLattes').style.color = "#25221A"
	document.getElementById('aCurriculoLG').style.color = "#25221A"
	document.getElementById('aCurriculoXL').style.color = "#25221A"
	// //habilidades Section
	document.getElementById('habilidades').style.background = "#AFAFAF"
	document.getElementById('habilidades').style.color = "#25221A"
	document.getElementById('h2Habilidades').style.color = "#25221A"
	document.getElementById('divHab1').style.color = "#25221A"
	document.getElementById('divHab2').style.color = "#25221A"
	document.getElementById('divHab3').style.color = "#25221A"
}

function modoEscuro() {
	//general function
	document.getElementById('btnEscuro').style.display = 'none'
	document.getElementById('btnClaro').style.display = 'inline'
	//top-navigation section
	document.getElementById('home').style.background = "#272727"
	document.getElementById('home').style.color = "#CECECE"
	document.getElementById('meuNome').style.color = "#CECECE"
	document.getElementById('redesSociais1').style.color = "#CECECE"
	document.getElementById('redesSociais2').style.color = "#CECECE"
	document.getElementById('redesSociais3').style.color = "#CECECE"
	//navbar section
	document.getElementById('barraMenu').style.backgroundColor = "rgba(39,64,139,0.8)"
	//sobremim Section
	document.getElementById('sobremim').style.background = "#25221A"
	document.getElementById('sobremim').style.color = "#CECECE"
	document.getElementById('h2Sobremim').style.color = "#CECECE"
	document.getElementById('meusDados').style.color = "#CECECE"
	document.getElementById('meApresenta').style.color = "#CECECE"
	document.getElementById('minhaFoto').style.border = "1px solid white"
	document.getElementById('aLinkedin').style.color = "#CECECE"
	document.getElementById('aLattes').style.color = "#CECECE"
	document.getElementById('aCurriculoLG').style.color = "#CECECE"
	document.getElementById('aCurriculoXL').style.color = "#CECECE"
	// //habilidades Section
	document.getElementById('habilidades').style.background = "#25221A"
	document.getElementById('habilidades').style.color = "#CECECE"
	document.getElementById('h2Habilidades').style.color = "#CECECE"
	document.getElementById('divHab1').style.color = "#CECECE"
	document.getElementById('divHab2').style.color = "#CECECE"
	document.getElementById('divHab3').style.color = "#CECECE"
}
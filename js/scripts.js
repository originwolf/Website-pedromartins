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
	document.getElementById('sobremim').style.background = "#AFAFAF"
	document.getElementById('sobremim').style.color = "#25221A"
	document.getElementById('h2Sobremim').style.color = "#25221A"
	document.getElementById('meusDados').style.color = "#25221A"
	document.getElementById('meApresenta').style.color = "#25221A"
	document.getElementById('minhaFoto').style.border = "1px solid black"
	document.getElementById('aLinkedin').style.color = "#25221A"
	document.getElementById('aLattes').style.color = "#25221A"
	document.getElementById('aCurriculoLG').style.color = "#25221A"
	document.getElementById('aCurriculoXL').style.color = "#25221A"
	//habilidades Section
	document.getElementById('habilidades').style.background = "#CECECE"
	document.getElementById('habilidades').style.color = "#25221A"
	document.getElementById('h2Habilidades').style.color = "#25221A"
	document.getElementById('divHab1').style.color = "#25221A"
	document.getElementById('divHab2').style.color = "#25221A"
	document.getElementById('divHab3').style.color = "#25221A"
	//converse Section
	document.getElementById('converse').style.background = "#AFAFAF"
	//rodape Section
	//curriculum
	document.getElementById('rodapeSite').style.background = "#CECECE"
	document.getElementById('h3Curriculo').style.color = "#25221A"
	document.getElementById('aCurriculo').style.color = "#25221A"
	document.getElementById('aLattes2').style.color = "#25221A"
	//contatos
	document.getElementById('h3Contatos').style.color = "#25221A"
	document.getElementById('pEmail').style.color = "#25221A"
	document.getElementById('pTelefone').style.color = "#25221A"
	//redesSociais
	document.getElementById('h3RedesSociais').style.color = "#25221A"
	document.getElementById('aGithub').style.color = "#25221A"
	document.getElementById('aLinkedin2').style.color = "#25221A"
	//arrow
	document.getElementById('arrow').style.color = "#25221A"
	//nome
	document.getElementById('aMeuNome').style.color = "#25221A"
}

function extensaoClaro() {
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
	//importancia section
	document.getElementById('importancia').style.background = "#AFAFAF"
	document.getElementById('h1Importancia').style.color = "#25221A"
	document.getElementById('divImportancia').style.color = "#25221A"
	document.getElementById('divRelevancia').style.color = "#25221A"
	//arduino section
	document.getElementById('arduino').style.background = "#AFAFAF"
	document.getElementById('h2Arduino').style.color = "#25221A"
	document.getElementById('divArduino1').style.color = "#25221A"
	document.getElementById('divArduino2').style.color = "#25221A"
	document.getElementById('imgArduino').style.border = "1px solid #25221A"
}

function extensaoEscuro() {
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
	//importancia section
	document.getElementById('importancia').style.background = "#25221A"
	document.getElementById('h1Importancia').style.color = "#CECECE"
	document.getElementById('divImportancia').style.color = "#CECECE"
	document.getElementById('divRelevancia').style.color = "#CECECE"
	//arduino section
	document.getElementById('arduino').style.background = "#25221A"
	document.getElementById('h2Arduino').style.color = "#CECECE"
	document.getElementById('divArduino1').style.color = "#CECECE"
	document.getElementById('divArduino2').style.color = "#CECECE"
	document.getElementById('imgArduino').style.border = "1px solid #CECECE"
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
	//habilidades Section
	document.getElementById('habilidades').style.background = "#25221A"
	document.getElementById('habilidades').style.color = "#CECECE"
	document.getElementById('h2Habilidades').style.color = "#CECECE"
	document.getElementById('divHab1').style.color = "#CECECE"
	document.getElementById('divHab2').style.color = "#CECECE"
	document.getElementById('divHab3').style.color = "#CECECE"
	//converse Section
	document.getElementById('converse').style.background = "#CECECE"
	//rodape Section
	document.getElementById('rodapeSite').style.background = "#25221A"
	document.getElementById('h3Curriculo').style.color = "#CECECE"
	document.getElementById('aCurriculo').style.color = "#CECECE"
	document.getElementById('aLattes2').style.color = "#CECECE"
	//contatos
	document.getElementById('h3Contatos').style.color = "#CECECE"
	document.getElementById('pEmail').style.color = "#CECECE"
	document.getElementById('pTelefone').style.color = "#CECECE"
	//redesSociais
	document.getElementById('h3RedesSociais').style.color = "#CECECE"
	document.getElementById('aGithub').style.color = "#CECECE"
	document.getElementById('aLinkedin2').style.color = "#CECECE"
	//arrow
	document.getElementById('arrow').style.color = "#CECECE"
	//nome
	document.getElementById('aMeuNome').style.color = "#CECECE"
}
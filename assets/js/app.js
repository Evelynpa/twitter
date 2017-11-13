function add(){

			//obtener el valor del texarea
	var text = document.getElementById('textarea').value;

		//crear etiqueta p
		var campP = document.createElement('p');
		campP.classList.add('textResult');
		var nodoText = document.createTextNode(text);

		//agregando un nodo texto a la nueva seccion
		campP.appendChild(nodoText);

		//obtener hora
		var getHora = moment().format('LT');
		var nodoHora = document.createTextNode(getHora);

		//agregar span
		var camSpan = document.createElement('span');
		camSpan.classList.add('horaResult');

		//agregar nodo a span hora
		camSpan.appendChild(nodoHora);

		//crear nueva seccion
		var sectionBottom = document.createElement('section');

		//agregando un id a la nueva seccion
		sectionBottom.setAttribute('id', 'containerBottom')
		sectionBottom.appendChild(campP);
		sectionBottom.appendChild(camSpan);

		document.body.appendChild(sectionBottom);

	
	/*limpiar textarea*/
	document.getElementById("textarea").value = "";
}

var btnSubmit = document.getElementById('btnButton');
btnSubmit.addEventListener('click', add);

//funcion desabilitar boton

function disableButton(){

	var text = document.getElementById('textarea').value;
	var btnTweet = document.getElementById('btnButton');
	if (text.length === '') {

		btnTweet.disabled = true;
		btnTweet.style.backgroundColor = '#8c8c8c';

	}else if(text.length !== ''){

		btnTweet.disabled = false;
		btnTweet.style.backgroundColor = '#006dbf';
		btnTweet.style.color = '#fff';
		btnTweet.style.backgroundColor = '#006dbf';
		btnTweet.style.cursor = 'pointer';

	}
}


//funcion hora
	function actualizaHora(){
	var fecha = new Date();

	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();

	var spanHour = document.getElementById('hora');

	spanHour.textContent = hora +':'+ minutos +':'+ segundos;
	}
	setInterval(actualizaHora,1000);

//funcion contador	
function contar() { 
         var max = "140"; 
         var cadena = document.getElementById('textarea').value;
         var longitud = cadena.length; 
         var cont = document.getElementById("contador").value = max-longitud;
         

             if(longitud <= max) { 
             	//document.getElementById("contador").value = max-longitud;
             	if(cont >=130){ 
      				document.getElementById("contador").style.color = '#00ffff';
             	}
             	else if(cont >=120){
             		document.getElementById("contador").style.color = '#ff00ff';
             	}

             } else { 
                  document.getElementById('textarea').value = cadena.substr(0, max);
                  document.getElementById('btnButton').disabled = true;
                  
             } 
    } 

//AJUSTAR TAMAÑO DE TEXAREA
function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = (10 + element.scrollHeight)+"px";
}

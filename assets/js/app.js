
function add(){

			//obtener el valor del texarea
	var text = document.getElementById('textarea').value;
		//crear etiqueta p
		var campP = document.createElement('p');
		campP.classList.add('textResult');
		var nodoText = document.createTextNode(text);

		//agregando un id a la nueva seccion
		campP.appendChild(nodoText);


		//crear nueva seccion
		var sectionBottom = document.createElement('section');
		sectionBottom.setAttribute('id', 'containerBottom')
		sectionBottom.appendChild(campP);
		//sectionBottom.appendChild(camSpan);

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
		btnTweet.disabled = false;
	}else {
		btnTweet.disabled = false;
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

//funcion contar
function contar() { 
         var max = "140"; 
         var cadena = document.getElementById('textarea').value;
         var longitud = cadena.length; 
         var cont = document.getElementById("contador").value = max-longitud;
         

             if(longitud <= max) { 
             	//document.getElementById("contador").value = max-longitud;
             	if(cont >=130){ 
      				document.getElementById("contador").style.color = '#0000ff';
             	}
             	else if(cont >=120){
             		document.getElementById("contador").style.color = '#00ff00';
             	}

             } else { 
                  document.getElementById('textarea').value = cadena.substr(0, max);
                  document.getElementById('btnButton').disabled = true;
                  
             } 
    } 
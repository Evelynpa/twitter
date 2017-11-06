function add(){


	//obtener el valor del texarea
	var text = document.getElementById('textarea').value;
	var nodoText = document.createTextNode(text);

	//crear la nueva seccion
	var campSpan = document.createElement('p');

	//agregando un id a la nueva seccion
	campSpan.appendChild(nodoText);

	//crear hora
	var spanHour = document.createElement('span');
	spanHour.setAttribute('id', 'hora');

	//funcion hora
	function actualizaHora(){
	var fecha = new Date();

	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();

	//var spanHour = document.getElementById('hora');

	spanHour.textContent = hora +':'+ minutos +':'+ segundos;
	}
	setInterval(actualizaHora,1000);


	var nodoHour = document.createTextNode(text);


	var sectionBottom = document.createElement('section');
	sectionBottom.setAttribute('id', 'containerBottom')
	sectionBottom.appendChild(campSpan);
	sectionBottom.appendChild(spanHour);

	document.body.appendChild(sectionBottom);
}

var btnSubmit = document.getElementById('btnButton');
btnSubmit.addEventListener('click', add);



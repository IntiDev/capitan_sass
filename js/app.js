console.log("Bienvenido");

var api = {
	url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var $listaAlumnas = $("#lista-asistencia");//Se manda llamar el elemento HTML en el que se crearám los items

var plantillaNombre = '<li> <input type="checkbox"> __nombre__   </li>';

var cargarPagina = function (){
	cargarApi();
};

var cargarApi = function (){
	$.getJSON(api.url, function (listaAsistenacia){
		$listaAlumnas.html(" ");//Limpia la lista para mostrar los elementos obtenidos desde la api.
		listaAsistenacia.forEach(crearItem);
	});
};

var crearItem = function (alumna){
	//Se obtiene la propiedad name de cada objeto de la api
	var nombre = alumna.name;
	// console.log(nombre);

	// Se reemplaza valor en la plantilla
	var itemAsistencia = "";
	itemAsistencia += plantillaNombre.replace('__nombre__', nombre);

	//Se agregan nombres a la lista
	$listaAlumnas.append(itemAsistencia);
};

$(document).ready(cargarPagina);

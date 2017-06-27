console.log("Bienvenido");

var api = {
	url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var $listaAlumnas = $("#lista-asistencia");//Se manda llamar el elemento HTML en el que se crearám los items

var plantillaNombre = '<li> __id__ .<input type="checkbox"> __nombre__ __apeP___ __apeM__</li>';

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
	var id = alumna.id;
	var nombre = alumna.name;
	var apeP = alumna.pLastName;
	var apeM = alumna.mLastName;
	// console.log(nombre);

	// Se reemplaza valor en la plantilla
	var itemAsistencia = "";
	itemAsistencia += plantillaNombre.replace('__id__',id).replace('__nombre__', nombre).replace('__apeP___',apeP).replace('__apeM__',apeM);

	//Se agregan nombres a la lista
	$listaAlumnas.append(itemAsistencia);
};

$(document).ready(cargarPagina);

var ingreso = document.getElementById('btnIngresar');			
var usuario = document.getElementById('user');
var pass = document.getElementById('upass');

ingreso.onclick = function() {
	if (usuario.value === "" || pass.value === "" ) {
		alert("Debe completar usuario y clave");
	} else if (usuario.value.includes('@')) {
		exit;
	} else {
		alert('El usuario debe tener un arroba');
	}
}

onload=function(){
  //Asociamos la función ponFoco a los dos input
       function foco(e){
         e.target.style.outline = "purple solid 2px";
       }
       function noFoco(e){
         e.target.style.outline="none";
       }
       //cojo todos los inputs
       inputs = document.querySelectorAll("input");

       for (var i = 0; i < inputs.length; i++) {
         var select = document.querySelector("select");
         inputs[i].addEventListener("focus",foco);
         select.addEventListener("focus",foco);
       }
       //para que cuando se quite el foco del anterior.
       for (var i = 0; i < inputs.length; i++) {
         var select = document.querySelector("select");
         inputs[i].addEventListener("blur",noFoco);
         select.addEventListener("blur",noFoco);
       }

var formulario = document.forms[0];

formulario.onsubmit = function(e){
var err = document.getElementsByClassName('errores')[0];
var errores ="";
var ret = true;
e.preventDefault();

 var nom = document.getElementById('nombre').value;
 if (nom==null||nom.length==0 || !(/^\S+[\s?\S+]*$/.test(nom))) {
   errores += "El nombre introducido es erroneo, introduzca un valor valido <br>";
   ret = false;
 }
 var lastName = document.getElementById('apellidos').value;
 if (lastName==null||lastName==0||!(/^\S+[\s?\S+]*$/.test(lastName))) {
    errores += "Los apellidos introducidos son erroneos<br>";
    ret = false;
 }

 var email = document.getElementById('email').value;
 if (!/^\w+@\w+\.\w+$/.test(email)) {
   errores +="Email erróneo<br>";
   ret=false;
 }

 var compEmail = document.getElementById('emailRepe').value;
 if (compEmail != email) {
   errores += "Los emails no coinciden<br>";
   ret= false;
 }
 var dni = document.getElementById('dni').value;
 var letras = ['T','R','W','A','G','M','Y','F','P','D','X',
    'B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
  if(isNaN(dni)){
    if (!/^\d{8}[A-Z]$/.test(dni)) {
      errores += "El DNI introducido es incorrecto<br>";
      ret = false;
  }
  if (dni.charAt(8) != letras[(dni.substring(0, 8))%23]) {
    ret = false;
  }
}

    var fecha = (document.getElementById("fecha").value).split("-");
    var year = fecha[0];
    var month = fecha[1];
    var day = fecha[2];
    var fechaCreada = new Date(year,(month - 1),day);
    var hoy = new Date();
    var age = hoy.getFullYear() - year - 1;
    if (hoy.getMonth()+1-month>0) {
      age++;
    }
    if (hoy.getUTCDate()-year>=0) {
      age++;
    }
    if( isNaN(fechaCreada) || day > 31 ||day < 1 || month < 1 || month >12 || year < 0 || year >= hoy.getFullYear()){
      errores += "La fecha introducida es errónea<br>";
      ret = false;
    }else if (age < 18) {
      errores += "Debe ser mayor de edad para inscribirse </br>"
      ret = false;
    }

    var fav = document.getElementById('selector').value;
    if (fav==0 || fav == null) {
      errores += "Escoja un favorito<br>";
      ret = false;
    }
    if(fav=="discos"){
        formulario.action="discos.html";
    }
    if(fav=="libros"){
        formulario.action="libros.html";
    }

    if(fav=="tecnologia"){
    formulario.action="tecnologia.html";
    }

    if (!document.getElementById("efectivo").checked && !document.getElementById("tarjeta").checked) {
      ret = false;
      errores += "Seleccione un metodo de pago <br>";
    }
    if (!document.getElementById("cond").checked) {
      ret = false;
      errores += "No se ha aprobado las condiciones de alta <br>";
    }

 if (ret){


      document.getElementById("enviar").value = "Enviando...";
      document.getElementById("enviar").disabled = true;
      errores += "peticion enviada correctamente";
      console.log(errores);
      formulario.submit();
      err.style.color="blue";

    }else{
      err.style.color= "red";

    }
    err.innerHTML = errores;
    return ret;
}
}

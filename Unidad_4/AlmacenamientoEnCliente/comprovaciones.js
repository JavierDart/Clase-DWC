onload=function(){



  var formulario = document.forms[0];
  formulario.onsubmit = function(e){

    function cookieNom(name,value,days){
      if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          var expires = ";expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+";path=/";
        console.log(document.cookie);
    }




  var err = document.getElementsByClassName('errores')[0];
  var errores ="";
  var ret = true;
  e.preventDefault();

  var nom = document.getElementById('nombre').value;
  if (nom==null||nom.length==0) {
    errores += "El nombre no puede ser nulo<br>";
    ret = false;
  }

  var lastName = document.getElementById('apellidos').value;
  if (lastName==null||lastName==0) {
     errores += "Los apellidos no pueden ser nulos<br>";
     ret = false;
  }

  var emailN = document.getElementById('email').value;
  if (emailN==null|| emailN=="") {
    errores +="Email no puede ser nulo<br>";
    ret=false;
  }

  var compEmail = document.getElementById('emailRepe').value;
  if (compEmail == null || compEmail!=emailN|| compEmail=="") {
    errores += "Los emails no pueden ser nulos<br>";
    ret= false;
  }

  var fecha = document.getElementById("fecha").value;
  if (fecha==null) {
    errores += "La fecha no puede ser nula </br>";
    ret = false;
  }

  var fav = document.getElementById('selector').value;
  if (fav==0 || fav == null) {
    errores += "El favorito no puede ser nulo<br>";
    ret = false;
  }


  if (!document.getElementById("efectivo").checked && !document.getElementById("tarjeta").checked) {
    ret = false;
    errores += "Seleccione un metodo de pago <br>";
  }

  var miDni = document.getElementById('dni').value;

  if (ret){
           var name = "nombre Usuario";
           var value = nom;
           var days = 360;
           cookieNom(name,value,days);
           var apel = "Apellido";
           var apell = lastName;
           var days =360;
           cookieNom(apel,apell,days);
           var emailLocal = "Email";
           var valueMail= document.getElementById('email').value;
           window.localStorage.setItem(emailLocal,valueMail);
           var dniLocal ="Dni local";
           var valueDni = miDni;
           window.sessionStorage.setItem(dniLocal,valueDni);
           formulario.action ="alta.html";
       formulario.submit();
     }

  err.innerHTML = errores;
  return ret;
}

}

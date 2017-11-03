var u = new Usuario(productos);
u.calcularImporte();
u.mostrarCompra();


function condCompraOnline(){
   window.open("cdc.html", "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=650, height=650");
}
function cookiesActivadas(){
document.cookie = 'testcookie';
var result = document.cookie.indexOf('testcookie') != -1;
document.cookie = 'testcookie; expires=Thu, 25-Jan-2019 00:00:01 GMT';
return result;
}
if(cookiesActivadas()==true){
alert('Cookies disponibles, disfrute de la pagina');
}else{
alert('Cookies NO disponibles, Active las cookies para funcionar correctamente');
}

function hacerPedido(){
  if (u.compra.length==0) {
    alert("no hay pedidos!!");
  }else{
    var response = confirm("¿Acepta las condiciones de compra?");
    if(response) {
      window.open("pedidoOK.html", "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=180, height=180");
    } else {
        console.log("cancel");
    }
  }
}

function eliminar(){
  if (u.compra.length==0) {
    alert("no hay productos para eliminar ");
  }else {
    u.compra.pop();
  }
  u.calcularImporte();
  u.mostrarCompra();
}

function imprimir(){
  if (u.compra.length==0) {
    alert("No puede imprimir.No hay pedidos!!");
  }else{
      window.print();
  }
}
function inicio(){
location.assign("home.html");
}

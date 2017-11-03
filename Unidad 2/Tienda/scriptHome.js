var p = new Surtido(productos);
var micompra=[productos[0],productos[1],productos[2],productos[3],productos[4],productos[5],productos[6],productos[7]];
p.dibujarSurtido(micompra);

function recarga(){
document.location.reload();
}
function verPorPrecioMas(p) {
  p.ordenPorPrecioMas();
  p.dibujarSurtido();
}

function verPorPrecioMenos(p) {
  p.ordenPorPrecioMenos();
  p.dibujarSurtido();
}

function verVegano() {
  p.dibujarSurtido(p.filtrarVegano());
}

function condCompraOnline(){
   window.open("cdc.html", "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=800, height=800");
}
function navegarCarrito(){
location.assign("carrito.html");
}

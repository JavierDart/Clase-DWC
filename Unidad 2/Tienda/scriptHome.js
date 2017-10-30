var p = new Surtido(productos);
var micompra=[productos[0],productos[3]];
p.dibujarSurtido(micompra);

function recarga(){

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

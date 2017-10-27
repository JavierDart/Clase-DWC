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

var u = new Surtido(compra);
var compra = [productos[0],productos[1],productos[2],productos[3],productos[4],productos[5]];
p.dibujarSurtido(compra);

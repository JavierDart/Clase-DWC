'use strict'
function Usuario(compra){
  this.id= Math.floor(Math.random() * 1000)+1;
  this.idioma= navigator.language;
  this.navegador= navigator.useragent;
  this.compra = compra;
  this.importe =0;

  function eliminarCompra(){
    if (this.compra.length==0) {
      alert("no hay productos para eliminar ");
    }else {
      this.compra.pop();
    }
    u.mostrarCompra();
  }


  this.calcularImporte=function() {
    // var total=0;
    // for (var i = 0; i < compra.length; i++) {
    //   total+=this.compra[i].precio;
    // }
    // this.importe=total;
    // this.importe = this.compra.reduce(function (total, num){
    //   return total+num;
    //  }
    for (var i = 0; i < this.compra.length; i++) {
      var t = this.compra[i].precio;
      this.importe =t;
    }
    return this.importe;
  }


  this.mostrarCompra = function(comp){
    cuerpo.innerHTML = " ";
    var str = "";
    if (comp == undefined) {
      for (var i = 0; i < this.compra.length; i++) {
        str += "<div>";
        str += "<img src='" +this.compra[i].foto + "' alt = '"
        str += this.compra[i].nombre+"'>";
        str += "<p> El producto: "+ this.compra[i].nombre+"</p>";
        str += "<p> El producto: "+ this.compra[i].descripcion+"</p>";
        str += "<p><b> El producto: "+ this.compra[i].precio+"</b></p>";
      str += "</div>";
      }
      str += "<p>El importe total: "+this.calcularImporte()+"</p>"
    }else {
    for (var i = 0; i <comp.length; i++) {
      str += "<div>";
        str += "<img src='" +comp[i].foto + "' alt = '"
        str += comp[i].nombre+"'>";
        str += "<p> El producto:"+ comp[i].nombre+"</p>";
        str += "<p> "+ comp[i].descripcion+"</p>";
        str += "<p><b> El producto: "+ comp[i].precio+"</b></p>";
        str += "</div>";
      }
    }
    cuerpo.innerHTML = str;
  }

}

'use strict'
function Surtido(productos){
  this.productos = productos;
  this.ordenPorPrecioMas = function(){
    this.productos.sort(function(n1,n2){
      return n1.precio - n2.precio;
    });
    }
    this.ordenPorPrecioMenos = function(){
      this.productos.sort(function(n1,n2){
        return n2.precio - n1.precio;
      });
      }
      function vegano(p){
        return p.vegano == true;
      }
      this.filtrarVegano = function(){
        var veg = this.productos.filter(vegano);
        return veg;
      }
      this.dibujarSurtido = function(produ){
        cuerpo.innerHTML = " ";
        var str = "";
        if (produ == undefined) {
          for (var i = 0; i < this.productos.length; i++) {
            str += "<div>";
            str += "<img src='" +this.productos[i].foto + "' alt = '"
            str += this.productos[i].nombre+"'>";
            str += "<p> El producto: "+ this.productos[i].nombre+"</p>";
            str += "<p> El producto: "+ this.productos[i].descripcion+"</p>";
            str += "<p><b> El producto: "+ this.productos[i].precio+"</b></p>";
          str += "</div>";
          }
        }else {
        for (var i = 0; i <produ.length; i++) {
          str += "<div>";
            str += "<img src='" +produ[i].foto + "' alt = '"
            str += produ[i].nombre+"'>";
            str += "<p> El producto:"+ produ[i].nombre+"</p>";
            str += "<p> "+ produ[i].descripcion+"</p>";
            str += "<p><b> El producto: "+ produ[i].precio+"</b></p>";
            str += "</div>";
          }
        }
        cuerpo.innerHTML = str;
      }
  }

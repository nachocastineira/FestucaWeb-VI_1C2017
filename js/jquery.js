// un jquery
$(document).ready(function(){
  $("#botonRetiro").click(function(){
    var textoResumen = $("#textoResumen").value();
    if(textoResumen == ""){
      return false;
    }
    else {

      return "Realizado el descuento del 10% del producto ya que retiras en la sucursal mas cercana";
    }
  });
});

// un jquery
$(document).ready(function(){
  $("#botonRetiro").on("click",function(){
    var textoResumen = $("#textoResumen").val();
    if(textoResumen == ""){
      $("#textoResumen").fadeIn();
      return false;
    }
    else{
      $("textoResumen").fadeOut();
    }
  })
});

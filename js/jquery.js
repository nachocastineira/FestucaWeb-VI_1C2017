// un jquery
//validacion del checkout en la compra
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

//validacion del formulario
$(document).ready(function(){
  var expr=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
  $(document).ready(function(){
    $("#btn-submit").on("click",function(){
      var nombre = $("#First_name").val();
      var apellido = $("#last_name").val();
      var contraseña = $("#password").val();
      var r_contraseña = $("#password2").val();
      var email = $("#last_name").val();
      var enviarFormulario = $("#btn-submit").val();
      if(nombre == ""){
        $("#error").fadeIn();
        return false;
      }
      else{
        $("#error").fadeOut();
        if(apellido == ""){
          $("#error2").fadeIn();
          return false;
        }
        else {
          $("#error2").fadeOut();
          if(contraseña == ""){
            $("#error3").fadeIn();
            return false;
          }
          else {
            $("#error3").fadeOut();
            if(r_contraseña == ""){
              $("#error4").fadeIn();
              return false;
            }
            else{
              $("#error4").fadeOut();
              if(email == "" ){
                $("#error5").fadeIn();
                return false;
              }
              else {
                $("#error5").fadeOut();

              }
            }
          }
        }
      }
    });
  });
  });

  //validacion de la tienda
  $(document).ready(function(e){

    $("#categorias").click(function(){
      $("#principio").hide();
    });

    $("#categorias").click(function(){
      $("#principio").show();
    });

    $("#anotador").click(function(){
      $('.imagen-anotador').show();
      //$("#producto").show();
    });
  });

  $(document).ready(function(){
  $(document).scroll(function() {
    $("#barraTrans").css("background-color", "silver");
    $("#barraTrans").css("opacity", "0.8");
    });
  });

  $(document).ready(function(){
  $(document).scroll(function() {
    var s = $(window).scrollTop();
    if(s < 10) {
      $("#barraTrans").css("background-color", "transparent");
      $("#barraTrans").css("box-shadow", "none");
    }
  else {
    $("#barraTrans").css("background-color", "silver");
    $("#barraTrans").css("opacity", "0.8");
  }
    });
  });




  $(document).ready(function(){
    $("#anotador").click(function(){
      $("#anotador-producto").show();
    });
  });

  $(document).ready(function(){
    $("#pruebaCierre").click(function(){
      $("#anotador-producto").hide();
    });
  });


  $(document).ready(function(){
     $('.materialboxed').materialbox();
   });


 // Materialize.toast(message, displayLength, data-position);
 // Materialize.toast('I am a toast!', 800, 'left' ) // 4000 is the duration of the toast

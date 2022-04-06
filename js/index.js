$(document).ready(()=>{
    const html = $(".titulotm").html();
    let showH1 = true;
    $("#ocultarBtn").click(function() {
       $('.descripciont').slideToggle();
        showH1=!showH1;
        if (showH1) {
            $("#iconobtno").attr("src","https://cdn.lordicon.com/eflfmgmj.json");
            //$(this).html("Ocultar h1");
       }else{
            $("#iconobtno").attr("src","https://cdn.lordicon.com/xhdhjyqy.json");
            //$(this).html("Mostrar h1");
        }
    });
    var nuevoS = $('<section id="tema" class="seccion_tema">'+
    '<article class="titulo_contenido">'+
        '<input id="CheckT" type="checkbox">'+
        '<h2 class="titulotm">'+$("#tituloCInput").val() +'</h2>'+
        '<button id="ocultarBtn" class="boton_slidedown">'+
          '<lord-icon'+
            ' id="iconobtno"'+
            ' src="https://cdn.lordicon.com/eflfmgmj.json"'+
            ' trigger="hover"'+
            ' style="width: 25px; height: 25px">'+
          '</lord-icon>'+
        '</button>'+
      '</article>'+
      '<article class="descripciont">'+
        '<p>'+$("#descricionCInput").val()+
        '</p>'+
        '<a id="abrirVermas">ver más</a>'+
      '</article>' +
      '</section>');
    $("#guardarT").click(function(){
        $(".bodyPage").append(nuevoS);
        $(".fondo_modalC").css("display","none");
    });
    $("#btncrearT").click(function(){
        $(".fondo_modalC").css("display","block");
    });
    $("#cerrar_modal").click(function(){
        $(".fondo_modalC").css("display","none");
    });
    $("#abrirVermas").click(function(){
        $(".fondo_modalV").css("display","block");
    });
    $("#cerrar_modalV").click(function(){
        $(".fondo_modalV").css("display","none");
    });
    $("#eliminarT").click(function(){
        $(".fondo_modalE").css("display","block");
    });
    $("#cerrar_modalE").click(function(){
        $(".fondo_modalE").css("display","none");
    });
    $("#NoE").click(function(){
        $(".fondo_modalE").css("display","none");
    });
    $("#SiE").click(function(){
        $(".fondo_modalE").css("display","none");
        $(".fondo_modalEC").css("display","block");
    });
    $("#cerrar_modalEC").click(function(){
        $(".fondo_modalEC").css("display","none");
    });
    $("#AceptarEC").click(function(){
        $(".fondo_modalEC").css("display","none");
    });

})
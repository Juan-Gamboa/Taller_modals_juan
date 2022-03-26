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

})
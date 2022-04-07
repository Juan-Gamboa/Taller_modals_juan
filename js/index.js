$(document).ready(()=>{
    const html = $(".titulotm").html();
    let showH1 = true;

    $("#ocultarBtn").click(function() {
       $('.descripciont').slideToggle();
        showH1=!showH1;
        if (showH1) {
            $("#ocultarBtn").attr("src","https://cdn.lordicon.com/eflfmgmj.json");
            //$(this).html("Ocultar h1");
       }else{
            $("#ocultarBtn").attr("src","https://cdn.lordicon.com/xhdhjyqy.json");
            //$(this).html("Mostrar h1");
        }
    });

    /*/var nuevoS = $('<section id="tema" class="seccion_tema">'+
    '<article class="titulo_contenido">'+
        '<input id="CheckT" type="checkbox">'+
        '<h2 class="titulotm">'+$("#tituloCInput").val() +'</h2>'+
        '<button id="ocultarBtn" class="boton_slidedown">'+
          '<lord-icon'+
            ' id="ocultarBtn"'+
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
      '</section>');/*/

//creacion array
    let temas = [];

    function addtema() {
        let titulo = $("#tituloCInput").val();
        let codigo =$("#codigoCInput").val();
        let descrip = $("#descricionCInput").val();
        let fechaC = $("#fechaCInput").val();
        let Tema = {'titulo': titulo, 'codigo': codigo, 'descripcion': descrip, 'fecha Ingreso': fechaC};
        temas.push(Tema);
        console.log(Tema);
        let nuevoS = document.getElementById('bodyPage').getElementsByTagName('div')[0];
        let Thtml = getTemaHtml(Tema);
        nuevoS.html+=Thtml;
    };

    function getTemaHtml(Tema) {
        let Thtml = '';
        Thtml+='<section'+ /*/id="tema"/*/ +'class="seccion_tema">';
        Thtml+='    <article class="titulo_contenido">';
        Thtml+='        <input'+ /*/id="CheckT"/*/ +'type="checkbox">';
        Thtml+='        <h2 class="titulotm">'+Tema.titulo +'</h2>';
        Thtml+='        <button id="ocultarBtn" class="boton_slidedown">';
        Thtml+='            <lord-icon';
        Thtml+='            id="ocultarBtn"';
        Thtml+='            src="https://cdn.lordicon.com/eflfmgmj.json"';
        Thtml+='            trigger="hover"';
        Thtml+='            style="width: 25px; height: 25px">';
        Thtml+='            </lord-icon>';
        Thtml+='        </button>';
        Thtml+='    </article>';
        Thtml+='    <article class="descripciont">';
        Thtml+='        <p>'+Tema.descripcion+'</p>';
        Thtml+='        <a id="abrirVermas">ver más</a>';
        Thtml+='    </article>' ;
        Thtml+='</section>';
        return Thtml;
    };

    $("#formCrear").submit((ev)=> {
        ev.preventDefault();
        addtema();
        /*/$(".bodyPage").append(nuevoS);/*/
        $(".fondo_modalC").css("display","none");
        console.log('si');
    });

    $("#btncrearT").click(function(){
        $(".fondo_modalC").css("display","block");
        $("#tituloCInput").val("");
        $("#codigoCInput").val("");
        $("#descricionCInput").val("");
        $("#fechaCInput").val("");
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
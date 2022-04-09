$(document).ready(()=>{
    let showH1 = true;

    $("#oBtn").click(function() {
       $('#desEj').slideToggle();
       alert("si");
        showH1=!showH1;
        if (showH1) {
            $("#oBtn").attr("src","https://cdn.lordicon.com/eflfmgmj.json");
       }else{
            $("#oBtn").attr("src","https://cdn.lordicon.com/xhdhjyqy.json");
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
        let fechaM = "";
        let Tema = {'titulo': titulo, 'codigo': codigo, 'descripcion': descrip, 'fecha Ingreso': fechaC, 'fecha Modificar':fechaM};
        temas.push(Tema);
        console.log(Tema);
        let nuevoS = $('#contenidoPage');
        let Thtml = getTemaHtml(Tema);
        let htmlP = nuevoS.html();
        nuevoS.html(htmlP + Thtml);  
        
       $(".boton_slidedown").click(function() 
        {
            let id = $(this).attr('id');
            let codigo = id.replace('ocultarBtn','');
            let showT = true;
            alert('#'+ id+'.descripciont');
            $('#Descrip'+ codigo).slideToggle();
                showT=!showT;
            if (showT) {
                $(this).attr("src","https://cdn.lordicon.com/eflfmgmj.json");
            }else{
                $(this).attr("src","https://cdn.lordicon.com/xhdhjyqy.json");
                 }
        });
        
        $("#VM"+ Tema.codigo).click(function(){
            $(".fondo_modalV").css("display","block");
        });
    
    };

    /*/function btnOcultar() {
    $(document).on('click', 'button[name="slide"]', function(event){
        let id =this.id;
         console.log("se presiono el boton con id:" +id);
         return id;
    });/*/
        /*/for (let i = -1; i <= Tema.codigo; i++) {
            
            if (i==Tema.codigo) { 

                $("#ocultarBtn" + Tema.codigo).click(function() 
                {
                    let showT = true;
                    alert('#Descrip'+ Tema.codigo);
                    $('#Descrip'+ Tema.codigo).slideToggle();
                        showT=!showT;
                    if (showT) {
                        $("#ocultarBtn"+Tema.codigo).attr("src","https://cdn.lordicon.com/eflfmgmj.json");
                    }else{
                        $("#ocultarBtn"+Tema.codigo).attr("src","https://cdn.lordicon.com/xhdhjyqy.json");
                         }
                });

            } else {
                
                $("#ocultarBtn" + Tema.codigo-1).click(function() 
                {
                    let showT = true;
                    alert('#Descrip'+ Tema.codigo-1);
                    $('#Descrip'+ Tema.codigo-1).slideToggle();
                        showT=!showT;
                    if (showT) {
                        $("#ocultarBtn"+Tema.codigo-1).attr("src","https://cdn.lordicon.com/eflfmgmj.json");
                    }else{
                        $("#ocultarBtn"+Tema.codigo-1).attr("src","https://cdn.lordicon.com/xhdhjyqy.json");
                         }
                });  
            } 
            console.log("hola for" + i);
        }/*/   
    }

    function modtema(Tema) {
        let tituloM = $("#tituloMInput").val();
        let descripM = $("#descricionMInput").val();
        let fechaM = $("#fechaMInput").val();

        
    };

    function deltema(Tema){

    };

    

    function getTemaHtml(Tema) {
        let Thtml = '';
        Thtml+='<section id ="T'+ Tema.codigo +'" class="seccion_tema">';
        Thtml+='    <article class="titulo_contenido">';
        Thtml+='        <input id="Cod'+Tema.codigo +'" type="checkbox">';
        Thtml+='        <h2 class="titulotm">'+Tema.titulo +'</h2>';
        Thtml+='        <button name="slide" id="ocultarBtn'+Tema.codigo+'" class="boton_slidedown">';
        Thtml+='            <lord-icon name="slide" ';
        Thtml+='            id="ocultarBtn'+Tema.codigo+'"';
        Thtml+='            src="https://cdn.lordicon.com/eflfmgmj.json"';
        Thtml+='            trigger="hover"';
        Thtml+='            style="width: 25px; height: 25px">';
        Thtml+='            </lord-icon>';
        Thtml+='        </button>';
        Thtml+='    </article>';
        Thtml+='    <article id ="Descrip'+ Tema.codigo +'" class="descripciont">';
        Thtml+='        <p>'+Tema.descripcion+'</p>';
        Thtml+='        <a id="VM'+ Tema.codigo+'">ver más</a>';
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

    $("#formM").submit((ev)=> {
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

    $("#modificarT").click(function(){
        $(".fondo_modalM").css("display","block");
        $("#tituloMInput").val("");
        $("#codigoMInput").val("");
        $("#descricionMInput").val("");
        $("#fechaCMInput").val("");
        $("#fechaMInput").val("");
    });

    $("#cerrar_modal").click(function(){
        $(".fondo_modalC").css("display","none");
    });

    $("#cerrar_modalM").click(function(){
        $(".fondo_modalM").css("display","none");
    });

    function verMas(){

        
    }

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
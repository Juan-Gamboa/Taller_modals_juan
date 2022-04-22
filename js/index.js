$(document).ready(()=>{
    let showH1 = true;

    $("#oBtn").click(function() {
       $('#desEj').slideToggle();
       alert("si");
        showH1=!showH1;
        if (showH1 == true) {
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
    let temas = [
        {
            titulo: 'Tema_1',
            codigo: '0',
            descripcion: 'Ciencias',
            fecha_Ingreso:'2022-04-04',
            fecha_Modificar:'2022-04-22'
          }
    ];
    function addtema() {
        let titulo = $("#tituloCInput").val();
        let codigo =$("#codigoCInput").val();
        let descrip = $("#descricionCInput").val();
        let fechaC = $("#fechaCInput").val();
        let fechaM = "";
        let Tema = {'titulo': titulo, 'codigo': codigo, 'descripcion': descrip, 'fecha_Ingreso': fechaC, 'fecha_Modificar':fechaM};
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
            if (showT== true) {
                $(this).attr("src","https://cdn.lordicon.com/eflfmgmj.json");
            }else{
                $(this).attr("src","https://cdn.lordicon.com/xhdhjyqy.json");
                 }
        });
        $(".BtnVerM").click(function(){
            let id = $(this).attr('id');
            console.log(id);
            let TemaB = Buscarid(id);
            if (TemaB != null) {
                console.log("VM SI")
                $(".fondo_modalV").css("display","block");  
                $("#tituloVInput").val(TemaB.titulo);
                $("#codigoVInput").html(TemaB.codigo);
                $("#descricionVInput").html(TemaB.descripcion);
                $("#fechaVIInput").html(TemaB.fecha_Ingreso);
                $("#fechaVMInput").html(TemaB.fecha_Modificar);   
            };    
        });
    };

    function modtema() {
        let TemaB = Buscarid($("#BId").val());
        if (TemaB != null) {
            console.log("MoD SI")
            $(".fondo_modalM").css("display","block");
            $("#tituloMInput").val(TemaB.titulo);
            $("#codigoMInput").text(TemaB.codigo);
            $("#descricionMInput").text(TemaB.descripcion);
            $("#fechaCMInput").text(TemaB.fecha_Ingreso);
            $("#fechaMInput").text(TemaB.fecha_Modificar);   
        }       
    };

    function Buscarid(id){
        console.log(id);
        console.log("si buscar id");
        for(let item of temas){
          console.log(item.codigo,id);
          if (item.codigo == id){
            return item;
          }
      
        }
          return null;
    };

    function ActuaTema(id){
        temas.forEach(function(tema, i) {
            if (tema.codigo == id) {
                temas[i] = {
                codigo: tema.codigo,
                descripcion: $('#descricionMInput').val(),
                titulo: $('#tituloMInput').val(),
                fecha_Ingreso:tema.fecha_Ingreso,
                fecha_Modificar:$('#fechaMInput').val()
                };
                let ct = id.replace('T','');
                if ($('#T'+ id) == ct ) {
                    let nuevoS = $('#T'+ id);
                    let Thtml = getTemaHtml(Tema);
                    nuevoS.html(Thtml);  
                }
            };
        }); 
    };

    
    $("#SiE").click(function(){
        $(".fondo_modalE").css("display","none");
        var id = $("#Eid").val();
        var  index =  -1;
        let ct = id.replace('T','');
        temas.forEach(function(tema,i) {
            if (tema.codigo == id) {
            index = i;
                if ($('#T'+ id) == ct ) {
                    $('#T'+ id).remove();  
                }
            }
        });
        if(index >= 0){
        temas.splice(index,1)
        }
        $(".fondo_modalEC").css("display","block");
    });

    

    function getTemaHtml(Tema) {
        let Thtml = '';
        Thtml+='<section id ="T'+ Tema.codigo +'" class="seccion_tema">';
        Thtml+='    <article class="titulo_contenido">';
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
        Thtml+='        <a class="BtnVerM" id="'+ Tema.codigo+'">ver más</a>';
        Thtml+='    </article>' ;
        Thtml+='</section>';
        return Thtml;
    };

   /*/ function onClickVermas(index){
        let Tema = temas.index;
        $(".fondo_modalV").css("display","block");
        $("#tituloVInput").html(Tema.titulo);
        $("#codigoVInput").html(Tema.codigo);
        $("#descricionVInput").html(Tema.descripcion);
        $("#fechaVIInput").text(Tema.fecha);
        $("#fechaVMInput").text(Tema.fechaM);
        $(".BtnVerM").click(function(){
            let id = $(this).attr('id');
            //let codigo = id.replace('VM','');
            //if (id == Tema.codigo) {
                $("#tituloVInput").html(Tema.titulo);
                $("#codigoVInput").html(Tema.codigo);
                $("#descricionVInput").html(Tema.descripcion);
                $("#fechaVIInput").text(Tema.fechaC);
                $("#fechaVMInput").text(Tema.fechaM);
                
            //}else{

            //}
            
            
        });
    }/*/

    $("#formCrear").submit((ev)=> {
        ev.preventDefault();
        addtema();
        $(".fondo_modalC").css("display","none");
        console.log('si guardo');
    });

    $("#formodalB").submit((ev)=>{
        ev.preventDefault();
        modtema();
    });

    $("#formM").submit((ev)=> {
        ev.preventDefault();
        let bid = $("#BId").val();
        ActuaTema(bid);
        $(".fondo_modalM").css("display","none");
        console.log('si modifico');
    });

    $("#btncrearT").click(function(){
        $(".fondo_modalC").css("display","block");
        /*/$("#tituloCInput").val("");
        $("#codigoCInput").val("");
        $("#descricionCInput").val("");
        $("#fechaCInput").val("");/*/
    });

    $("#modificarT").click(function(){
        $(".fondo_modalB").css("display","block");
        /*/$("#tituloMInput").val("");
        $("#codigoMInput").val("");
        $("#descricionMInput").val("");
        $("#fechaCMInput").val("");
        $("#fechaMInput").val("");/*/
    });

    $("#cerrar_modal").click(function(){
        $(".fondo_modalC").css("display","none");
    });

    $("#cerrar_modalM").click(function(){
        $(".fondo_modalM").css("display","none");
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

    

    $("#cerrar_modalEC").click(function(){
        $(".fondo_modalEC").css("display","none");
    });

    $("#AceptarEC").click(function(){
        $(".fondo_modalEC").css("display","none");
    });

});
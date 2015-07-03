var path_query="http://obvii.net/obvii/markan/query.php";
var MK_LON=0;
var MK_LAT=0;
var MK_ACCU=0;
var MK_MAIL="";
var MK_MENU=0;
var PAIS_LON=-70.656235;
var PAIS_LAT=-33.458943;
var PAIS_ZOOM=10;
var MK_TIEMPO_POP=5000;
var jsLoadedMapa=false;
function openPopstatic(contenido,MK_TIEMPO_POP)
{
	
	$("#cont_static").html(contenido);
	$("#myPopup_static").popup("open");
	if(MK_TIEMPO_POP>100)
	{
		setTimeout(function() {

       $("#myPopup_static").popup("close");

    }, MK_TIEMPO_POP);
  }
}
function deviceListo()
{
	getEstadoUsuario();
	
	
}
function errorPos()
{
	 openPopstatic("Error en la captura de coordenadas. Por favor revise su GPS",5000);
	 
}
function inicio()
{
	var rut=$.trim(document.getElementById("rut").value);
	if(rut!="")
	{
		$.mobile.loading( 'show', {
				text: 'Validando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		navigator.geolocation.getCurrentPosition (function (pos)
		{
			var lat = pos.coords.latitude;
  		var lng = pos.coords.longitude;
  		var accu=pos.coords.accuracy.toFixed(2);
  		
  		MK_LON=lng;
  		
  		MK_LAT=lat;
  		MK_ACCU=accu;
  		
  		setTimeout("initSesion();",300);
			
			},initSesion,{timeout:6000});	
	}else
	{
		openPopstatic("Debe ingresar un identificador valido.",5000);		
	}
}
function initSesion()
{
	
	var rut=$.trim(document.getElementById("rut").value);			
	$("#output").load(path_query, 
			{tipo:1, id:rut, lon:MK_LON, lat:MK_LAT, accu:MK_ACCU} 
				,function(){				
					$.mobile.loading( 'hide');				
					
				}
			);
		
		
	
}
function mensaje(texto,div)
{
	$( "#"+div ).html("<p>"+ texto+"</p>" );
                  $("#"+div).popup("close");
                  $("#"+div).popup("open");
}
function hideMensaje(div)
{
	  $("#"+div).popup("close");
}
function loadUsuario(id,nick,lon,lat)
{
	$.mobile.loading( 'show', {
				text: 'Iniciando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		$("#menu_sesion").load(path_query, 
			{tipo:2, id:id, nick:nick, lon:lon, lat:lat} 
				,function(){				
					$.mobile.loading( 'hide');		
					$('#menu_sesion').trigger('create');
					
				}
			);
}
function opcMarca(id_emp)
{
	$.mobile.loading( 'show', {
				text: 'Validando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
	
		navigator.geolocation.getCurrentPosition (function (pos)
		{
			var lat = pos.coords.latitude;
  		var lng = pos.coords.longitude;
  		var accu=pos.coords.accuracy.toFixed(2);
  		
  		MK_LON=lng;
  		MK_LAT=lat;
  		MK_ACCU=accu;
  		
  		checkDistanciaMarca(id_emp);
			
		},errorGPS,{timeout:6000});	
	
	//alert("paso");
	//mensaje("prueba","myPopup");
	
}
function checkDistanciaMarca(id_emp)
{
	$("#output").load(path_query, 
			{tipo:10, lon:MK_LON, lat:MK_LAT, accu:MK_ACCU,id_emp:id_emp} 
				,function(){				
					$.mobile.loading( 'hide');		
					
					
				}
			);
}
function marcar(tipo,id_emp)
{
	$.mobile.loading( 'show', {
				text: 'Marcando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		$("#output").load(path_query, 
			{tipo:9, es:tipo, id_emp:id_emp,lon:MK_LON, lat:MK_LAT, accu:MK_ACCU} 
				,function(){				
					$.mobile.loading( 'hide');		
					
					
				}
			);
	
}
function loadMenu()
{
	
	$("#menu_footer").load(path_query, 
			{tipo:3} 
				,function(){				
					
					$('#menu_footer').trigger('create');
					
				}
			);
}
function loadSenal()
{
	
	$.mobile.loading( 'show', {
				text: 'Cargando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		$("#contenido_sesion").load(path_query, 
			{tipo:4} 
				,function(){				
					$.mobile.loading( 'hide');		
					$('#contenido_sesion').trigger('create');
					MK_MENU=0;
					
				}
			);
}
function loadHistorial()
{
	$.mobile.loading( 'show', {
				text: 'Cargando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		$("#contenido_sesion").load(path_query, 
			{tipo:5} 
				,function(){				
					$.mobile.loading( 'hide');		
					$('#contenido_sesion').trigger('create');
					MK_MENU=1;
				}
			);
}
function loadAyuda()
{
	$.mobile.loading( 'show', {
				text: 'Cargando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		$("#contenido_info").load(path_query, 
			{tipo:6, menu:MK_MENU} 
				,function(){				
					$.mobile.loading( 'hide');		
					$('#contenido_info').trigger('create');
					//$.mobile.changePage('#mod_info',  {transition: 'pop', role: 'dialog'});
					$.mobile.changePage('#mod_info');
					
				}
			);
}
function getEstadoUsuario()
{
	$.mobile.loading( 'show', {
				text: 'Cargando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		$("#output").load(path_query, 
			{tipo:7} 
				,function(){				
					$.mobile.loading( 'hide');		
					
					
				}
			);
	
}
function loadSesion()
{
	$.mobile.loading( 'show', {
				text: 'Cargando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
	
	$("#contenido_sesion").load(path_query, 
			{tipo:8} 
				,function(){				
					$.mobile.loading( 'hide');		
					$('#contenido_sesion').trigger('create');
					
				}
			);
}
function errorGPS()
{
	openPopstatic('<div class=div_static>Ocurrio un error al obtener coordenas. Por favor intentelo nuevamente</div>',5000);
	$.mobile.loading( 'hide');		
}
function salir()
{
	
	$("#output").load(path_query, 
			{tipo:11} 
				,function(){				
					window.location="index.html";
					$("#men_pan").hide();
			$("#men_pan2").hide();
			$("#men_pan3").hide();
			$("#men_pan4").hide();
			
					
				}
			);
}
function loadEnvioHistorial(tipo)
{
	$("#mypanel2").panel( "close" );
	openPopstatic('<div class=div_static>Correo Electronico<br><input type="text" class=input_form id=mail_correo name=mail_correo value="'+MK_MAIL+'"><br><input type="button" onclick="historial('+tipo+');" class="bottom_coment" value="Enviar"></div>',0);
	
	
}
function historial(tipo)
{
	
	$("#myPopup_static").popup("close");
	setTimeout("sendHistorial("+tipo+");",1000);
	
}
function sendHistorial(tipo)
{
	var mail=$.trim(document.getElementById("mail_correo").value);
	$.mobile.loading( 'show', {
				text: 'Enviando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
	
	$("#output").load(path_query, 
			{tipo:12, opc:tipo, mail:mail} 
				,function(){				
					$.mobile.loading( 'hide');		
					openPopstatic('<div class=div_static>Historial enviado</div>',5000);				
					
				}
			);
}
function volver()
{
	
	
	history.go(-1);
}
function ayuda()
{
	$.mobile.loading( 'show', {
				text: 'Cargando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		$("#contenido_info").load(path_query, 
			{tipo:6, menu:2} 
				,function(){				
					$.mobile.loading( 'hide');		
					$('#contenido_info').trigger('create');
					//$.mobile.changePage('#mod_info',  {transition: 'pop', role: 'dialog'});
					$.mobile.changePage('#mod_info');
					
				}
			);
}
function sendLocation()
{
	$.mobile.loading( 'show', {
				text: 'Cargando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
		$("#cont_static").load(path_query, 
			{tipo:13} 
				,function(){				
					$('#cont_static').trigger('create');
					$("#myPopup_static").popup("open");
					$.mobile.loading( 'hide');		
					
					
					
				}
			);
}
function sendLocat(id_empleador,trab)
{
		$.mobile.loading( 'show', {
				text: 'Enviando',
				textVisible: true,
				theme: 'a',
				html: ""
			});
	
		navigator.geolocation.getCurrentPosition (function (pos)
		{
			var lat = pos.coords.latitude;
  		var lng = pos.coords.longitude;
  		var accu=pos.coords.accuracy.toFixed(2);
  		
  		MK_LON=lng;
  		MK_LAT=lat;
  		MK_ACCU=accu;
  		
  		$("#output").load(path_query, 
			{tipo:14, id_emp:id_empleador,lat:MK_LAT, lon:MK_LON, trab:trab} 
				,function(){	
				
					$.mobile.loading( 'hide');		
					setTimeout("openPopstatic('<div class=div_static>Ubicaci&oacute;n Enviada</div>',5000);",2000);
					
					
				}
			);
			
		},errorGPS,{timeout:6000});	
}
function offline()
{
	$("#contenido_sesion").html("<br><br>Se encuentra sin conecci&oacute;n a internet, Por favor verifiquelo e intente nuevamente.<br><br>Necesitas ayuda? contactate con nosotros enviando un mail a contacto@architeq.cl");
	$('#contenido_sesion').trigger('create');
	openPopstatic('<div class=div_static>Se encuentra sin conecci&oacute;n a internet, Por favor verifiquelo e intente nuevamente.</div>',5000);
}
function online()
{
	getEstadoUsuario();
}
function loadMapa()
{
	
		if(1==1)//jsLoadedMapa)
	{
		$.mobile.loading( 'show', {
				text: 'Cargando Mapa',
				textVisible: true,
				theme: 'a',
				html: ""
			});
			$("#contenido_sesion").load(path_query, 
			{tipo:15} 
				,function(){	
					
					$.mobile.loading( 'hide');					
					//$.mobile.changePage('#mod_mapa');
					$('#contenido_sesion').trigger('create');
					init(PAIS_LON,PAIS_LAT,PAIS_ZOOM);
					$("#myPopup_static").popup("close");
					
		navigator.geolocation.getCurrentPosition (function (pos)
		{
			var lat = pos.coords.latitude;
  		var lng = pos.coords.longitude;
  		var accu=pos.coords.accuracy.toFixed(2);
  		
  		MK_LON=lng;
  		MK_LAT=lat;
  		MK_ACCU=accu;
  		moverCentro(MK_LAT,MK_LON,17);
			addMarcadores(MK_LON,MK_LAT,"Ubicacion Actual","img/marker.png",30,30);
		
			
		},errorGPS,{timeout:6000});						
					
				}
			);
		}else
			{
				mensaje("Ocurrio un problema y no podemos cargar mapas en este momento. Por favor intentelo nuevamente en unos minutos mas","ERROR","myPopup");
			}
}
function moveOn()
{
	
}
var path_query="http://obvii.net/obvii/markan/query.php";
var MK_LON=0;
var MK_LAT=0;
var MK_ACUU=0;
var MK_MAIL="";
function openPopstatic(contenido)
{
	$("#cont_static").html(contenido);
	$("#myPopup_static").popup("open");
}
function deviceListo()
{
	getEstadoUsuario();
	document.getElementById("rut").focus();
	
}
function errorPos()
{
	 openPopstatic("Error en la captura de coordenadas. Por favor revise su GPS");
	 
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
		openPopstatic("Debe ingresar un identificador valido.");		
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
					openPopstatic("Marca realizada");
					
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
		$("#contenido_sesion").load(path_query, 
			{tipo:6} 
				,function(){				
					$.mobile.loading( 'hide');		
					$('#contenido_sesion').trigger('create');
					
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
	openPopstatic('<div class=div_static>Ocurrio un error al obtener coordenas. Por favor intentelo nuevamente</div>');
	$.mobile.loading( 'hide');		
}
function salir()
{
	$("#output").load(path_query, 
			{tipo:11} 
				,function(){				
					window.location="index.html";
					
				}
			);
}
function loadEnvioHistorial(tipo)
{
	$("#mypanel2").panel( "close" );
	openPopstatic('<div class=div_static>Correo Electronico<br><input type="text" class=input_form id=mail_correo name=mail_correo value="'+MK_MAIL+'"><br><input type="button" onclick="historial('+tipo+');" class="bottom_coment" value="Enviar"></div>');
	
	
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
					openPopstatic('<div class=div_static>Historial enviado</div>');				
					
				}
			);
}
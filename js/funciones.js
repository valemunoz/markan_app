var path_query="http://obvii.net/obvii/markan/query.php";
var MK_LON=0;
var MK_LAT=0;
var MK_ACUU=0;
function openPopstatic(contenido)
{
	$("#cont_static").html(contenido);
	$("#myPopup_static").popup("open");
}
function deviceListo()
{
	
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
function opcMarca()
{
	openPopstatic('<div class=div_static><strong>Seleccione:</strong><br><br><input type="button" class="bottom_coment" onclick="marcar(0);" value="Entrada"><br><input type="button" class="bottom_coment" onclick="marcar(1);" value="Salida"></div>');
	//alert("paso");
	//mensaje("prueba","myPopup");
	
}
function marcar(tipo)
{
	openPopstatic("Marca realizada");
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
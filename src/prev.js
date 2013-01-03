$(document).ready(function() {
	
	if( parseInt($.cookie("strona"))>=0 &&  parseInt($.cookie("strona"))<=parseInt($.cookie("strony")) ){
		document.close();
		load_file('./testy/'+$.cookie("nazwa")+'/'+$.cookie("strona")+'wh.css',"css");
		//console.log('./testy/'+$.cookie("nazwa")+'/'+$.cookie("strona")+'wh.css');
		
		/*$.getJSON("http://localhost/aptana/test/blestest/testy/niemam/2wh.css",
	  	function(data) {
	    	$.each(data.items, function(i,item){
	      		
	      	if ( i == 3 ) return false;
	   		});
	  	});
		*/
	}
	
	
	
	$('#previous').click(function(el) {
		
		document.body.style.cursor = "wait";
		$('#previous').css('cursor', 'wait');
		
		//zapis zmian na stronie
		{
			$ktora_strona=$.cookie("strona");
			
			//console.log("strona"+$ktora_strona);
			//console.log("strony"+$.cookie("strony"));
			if(el.which==1){
				var tablica = ['pytanie','check','radio','text']
				//console.log(el.which);
				var pozycja= $('#miejsce').position();
				$stringh = $('#miejsce').css('height').toString().substr(0, 3);
				$sumah=pozycja.top + parseInt($stringh);
				$new="1";
				$.ajax({
				   	type: "POST",
				   	url: "insert.php",
				   	data: {bool:$new,
				   		miejsce:("\n#miejsce\n{\n"
						+"width:"+$('#miejsce').css('width')+";\n"
						+"height:"+$('#miejsce').css('height')+";\n"
						+"}"),
						css:("\n#miejsce\n{\n"
						+"background-color:"+$('#miejsce').css('background-color')+";\n"
						+"background-image:"+$('#miejsce').css('background-image')+";\n"
						+"}"),
						html:("\n\<div id=\"miejsce\"\>"),
						numer_strony:($ktora_strona),
						nazwa_testu:($.cookie("nazwa"))
					},
				   	success: function(){
				    // Usuwamy wiadomość o poprawnym dodaniu użytkownika po 2 sekundach
				    setTimeout(function(){ $("div.dodano").fadeOut(200) }, 2000);
			   		}
			  	});
				$new="0";
				
				for(var z=0;z<4;z++){
					for(var i=0;i<10;i++)
					{
						var poz= $("#"+tablica[z]+i).position();
						if(poz.top< $sumah){
							//console.log($("#"+tablica[z]+i).css('width'));
							 
							//var places= $("#"+tablica[z]+i).position();
							$grad=$.cookie("#"+tablica[z]+i+"_gradient");
							if($grad==null)
								$grad="bottom, #808080 5%, #d3d3d3 53%";
							$gradient="background-image: linear-gradient("+$grad+");\n"
								+"background-image: -o-linear-gradient("+$grad+");\n"
								+"background-image: -moz-linear-gradient("+$grad+");\n"
								+"background-image: -webkit-linear-gradient("+$grad+");\n"
								+"background-image: -ms-linear-gradient("+$grad+");\n";
							
							$.ajax({
							   	type: "POST",
							   	url: "insert.php",
							   	data: {bool:$new,
							   		miejsce:("\n#"+tablica[z]+i+"\n{\n"
							   		+"position: absolute;\n"
									+"width:"+$("#"+tablica[z]+i).css('width')+";\n"
									+"height:"+$("#"+tablica[z]+i).css('height')+";\n"
									+"top:"+$("#"+tablica[z]+i).css('top')+";\n"
									+"left:"+$("#"+tablica[z]+i).css('left')+";\n"
									+"z-index:"+(((-1)*i)+10).toString()+";\n"
									+"}"),
									css:("\n#"+tablica[z]+i+"\n{\n"
									+"background-color:"+$("#"+tablica[z]+i).css('background-color')+";\n"
									+"border-width:"+$("#"+tablica[z]+i).css('border-left-width')+";\n"
									+"border-style:"+$("#"+tablica[z]+i).css('border-left-style')+";\n"
									+"border-color:"+$("#"+tablica[z]+i).css('border-left-color')+";\n"
									+"border-radius:"+$("#"+tablica[z]+i).css('border-top-left-radius')+";\n"
									+"box-shadow:"+$("#"+tablica[z]+i).css('box-shadow')+";\n"
									+$gradient
									+"}\n"),
									html:("\n \<div id=\""+tablica[z]+i+"\"\>\<div id=\""+tablica[z]+i+"_text\"\>"+$("#"+tablica[z]+i+"_text").html()+"\</div\>\</div\>\n"),
									numer_strony:($ktora_strona),
									nazwa_testu:($.cookie("nazwa"))
								},
							   	success: function(){
							    // Usuwamy wiadomość o poprawnym dodaniu użytkownika po 2 sekundach
							    setTimeout(function(){ $("div.dodano").fadeOut(200) }, 2000);
						   		}
						  	});
						  	
					  	}
					}
				}
				
				for(var z=0;z<4;z++){
					for(var i=0;i<10;i++)
					{
						var poz= $("#"+tablica[z]+i).position();
						if(poz.top< $sumah){
							//console.log($("#"+tablica[z]+i).css('width'));
							 
							$.ajax({
							   	type: "POST",
							   	url: "insert.php",
							   	data: {bool:$new,
									css:("\n#"+tablica[z]+i+"_text\n{\n"
									+"text-align:"+$("#"+tablica[z]+i+"_text").css('text-align')+";\n"
									+"line-height:"+$("#"+tablica[z]+i+"_text").css('line-height')+";\n"
									+"overflow:hidden;\n"
									+"margin-top:"+$("#"+tablica[z]+i+"_text").css('margin-top')+";\n"
									+"}\n"),
									numer_strony:($ktora_strona),
									nazwa_testu:($.cookie("nazwa"))
								},
							   	success: function(){
							    // Usuwamy wiadomość o poprawnym dodaniu użytkownika po 2 sekundach
							    setTimeout(function(){ $("div.dodano").fadeOut(200) }, 2000);
						   		}
						  	});
						  	
					  	}
					}
				}
				
				$new="2";
				$.ajax({
				   	type: "POST",
				   	url: "insert.php",
				   	data: {bool:$new,
				   		numer_strony:($ktora_strona)
				   		
					},
				   	success: function(){
				    // Usuwamy wiadomość o poprawnym dodaniu użytkownika po 2 sekundach
				    setTimeout(function(){ $("div.dodano").fadeOut(200) }, 2000);
			   		}
			  	});
			}
		}
		
		$ktora_strona=$.cookie("strona");
		$ktora_strona--;
		$.cookie("strona",$ktora_strona);
		document.close();
		//odswierzenie okna po 4 sekundach
		window.setTimeout(nowa, 4000);
	});
	
	
	
});
	
function nowa(){
	window.location = location.href ;
}
	
function load_file(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
 {
 	//sprawdzam czy plik wogole istnieje
	$.ajax({
	  	type: "GET",
	  	url: filename,
	  	success: function()
	  	{document.getElementsByTagName("head")[0].appendChild(fileref);
	  	},
	  	error: function(xhr, status, error) {
	    	if(xhr.status==404)
	      	{ /** not found! **/}
		}
	});
}
	  //document.getElementsByTagName("head")[0].appendChild(fileref)
	 
}
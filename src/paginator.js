$(document).ready(function() {
	$('#anuluj').click(function(el) {
		document.body.style.cursor = "wait";
		$('#anuluj').css('cursor', 'wait');
		window.location = location.href ;
	});
	chowaj_paginator($.cookie("strony"));
	zmiana_numerow();
	
	$('#paginator0').click(function(el) {
		document.body.style.cursor = "wait";
		$('#paginator0').css('cursor', 'wait');
		zapis_obecnej(el,'0');
	});
	
	$('#paginator1').click(function(el) {
		$nazwa_elementu='#paginator1';
		document.body.style.cursor = "wait";
		$($nazwa_elementu).css('cursor', 'wait');
		if(parseInt($.cookie("strony")) == parseInt($($nazwa_elementu+'_text').text())-2){
			$strony=parseInt($.cookie("strony"));
			$strony++;
			$.cookie("strony",$strony);
			$.cookie("strona",$strony);
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-2));
		}
		else{
			console.log(parseInt($($nazwa_elementu+'_text').text())-1);
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-1));
		}
	});
	
	$('#paginator2').click(function(el) {
		$nazwa_elementu='#paginator2';
		document.body.style.cursor = "wait";
		$($nazwa_elementu).css('cursor', 'wait');
		if(parseInt($.cookie("strony")) == parseInt($($nazwa_elementu+'_text').text())-2){
			$strony=parseInt($.cookie("strony"));
			$strony++;
			$.cookie("strony",$strony);
			$.cookie("strona",$strony);
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-2));
			
		}
		else{
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-1));
		}
	});
	
	$('#paginator3').click(function(el) {
		$nazwa_elementu='#paginator3';
		document.body.style.cursor = "wait";
		$($nazwa_elementu).css('cursor', 'wait');
		if(parseInt($.cookie("strony")) == parseInt($($nazwa_elementu+'_text').text())-2){
			$strony=parseInt($.cookie("strony"));
			$strony++;
			$.cookie("strony",$strony);
			$.cookie("strona",$strony);
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-2));
			
		}
		else{
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-1));
		}
	});
	
	$('#paginator4').click(function(el) {
		$nazwa_elementu='#paginator4';
		document.body.style.cursor = "wait";
		$($nazwa_elementu).css('cursor', 'wait');
		if(parseInt($.cookie("strony")) == parseInt($($nazwa_elementu+'_text').text())-2){
			$strony=parseInt($.cookie("strony"));
			$strony++;
			$.cookie("strony",$strony);
			$.cookie("strona",$strony);
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-2));
			
		}
		else{
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-1));
		}
	});
	
	$('#paginator5').click(function(el) {
		$nazwa_elementu='#paginator5';
		document.body.style.cursor = "wait";
		$($nazwa_elementu).css('cursor', 'wait');
		if(parseInt($.cookie("strony")) == parseInt($($nazwa_elementu+'_text').text())-2){
			$strony=parseInt($.cookie("strony"));
			$strony++;
			$.cookie("strony",$strony);
			$.cookie("strona",$strony);
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-2));
			
		}
		else{
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-1));
		}
	});
	
	$('#paginator6').click(function(el) {
		$nazwa_elementu='#paginator6';
		document.body.style.cursor = "wait";
		$($nazwa_elementu).css('cursor', 'wait');
		if(parseInt($.cookie("strony")) == parseInt($($nazwa_elementu+'_text').text())-2){
			$strony=parseInt($.cookie("strony"));
			$strony++;
			$.cookie("strony",$strony);
			$.cookie("strona",$strony);
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-2));
			
		}
		else{
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-1));
		}
	});
	
	$('#paginator7').click(function(el) {
		$nazwa_elementu='#paginator7';
		document.body.style.cursor = "wait";
		$($nazwa_elementu).css('cursor', 'wait');
		if(parseInt($.cookie("strony")) == parseInt($($nazwa_elementu+'_text').text())-2){
			$strony=parseInt($.cookie("strony"));
			$strony++;
			$.cookie("strony",$strony);
			$.cookie("strona",$strony);
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-2));
			
		}
		else{
			zapis_obecnej(el,(parseInt($($nazwa_elementu+'_text').text())-1));
		}
	});
	
	$('#paginator8').click(function(el) {
		$nazwa_elementu='#paginator8';
		document.body.style.cursor = "wait";
		$($nazwa_elementu).css('cursor', 'wait');
		if($.cookie("strony") == $($nazwa_elementu+'_text').text()-2){
			$strony=$.cookie("strony");
			$strony++;
			$.cookie("strony",$strony);
			zapis_obecnej(el,($($nazwa_elementu+'_text').text()-2));
			$.cookie("strona",$strony);
		}
		else{
			zapis_obecnej(el,($($nazwa_elementu+'_text').text()-1));
		}
	});
});

function chowaj_paginator(ilosc_stron){
	if(ilosc_stron<8){
		for ($i=8;$i-1>ilosc_stron;$i--){
			$('#paginator'+$i).css("visibility", "hidden");
		};
		$('#paginator'+$.cookie("strona")).css("background","DarkGray");
		
	}
}

function zmiana_numerow(){
	$ilosc_stron=parseInt($.cookie("strony"));
	$ktora_strona=parseInt($.cookie("strona"));
	$('#paginator8_text').text($ilosc_stron +2);
	if ($ilosc_stron>8) {
		
		if($ktora_strona>=$ilosc_stron-5){
			$z=8;
			for($i=$ilosc_stron;$i>$ilosc_stron-8;$i--){
				$('#paginator'+$z+'_text').text($i+2);
				$z--;
			}
		}
		else if($ktora_strona<$ilosc_stron-5 && $ktora_strona>=7)
		{
			$z=7
			for($i=$ktora_strona+2;$i>=$ktora_strona-4;$i--){
				$('#paginator'+$z+'_text').text($i+2);
				$z--;
			}
		}
		
		for($i=0;$i<=$ilosc_stron;$i++){
			if($('#paginator'+$i+'_text').text()== ($ktora_strona+1)){
				$('#paginator'+$i).css("background","DarkGray");
			}
		}
	};
}

function zapis_obecnej(el,strona_wczytania){
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
		$.cookie("strona",strona_wczytania);
		document.close();
		window.setTimeout(nowa, 4000);
		}
		
}

function nowa(){
	window.location = location.href ;
}

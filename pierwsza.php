
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
  	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/jquery-ui.min.js"></script>

   	<script type="text/javascript" src="jquery.cookie.js"></script>
  	<script type="text/javascript" src="pierwsza.js"></script>

	<script src="jquery.timer.js" type="text/javascript"></script>

	<link rel="stylesheet" href="pierwsza.css" />
	
</head>
<body>	
	<div id="kontener">
		<form  action="http://localhost/aptana/test/dodawanie.php">
			<div id="ustawienia" ><h3>  Ustawienia :</h3></div> 
			</br>
			
			<div id="next_previous"><div id="n_p">Wybierz rodzaj menu :</div></div>
			<div id="radio1"> <input type="radio" name="radio1" /><img src="src/mini_back/next_prev_mini.jpg" alt="boczne" /></div>
			<div id="radio11"> <input type="radio" name="radio1" /><img src="src/mini_back/dolny_np_mini.jpg" alt="dolne" /></div>
			</br>
			<div id="check1"> <input type="checkbox" id="checkbox1"  name="checkbox1" /> Uniemożliwić powrót do poprzedniego pytania ?</div>
			</br>
			<div id="check2"> <input type="checkbox" id="checkbox2"  name="checkbox2" /> Schować pasek obecnej, poprzednich i następnych stron ?</div>
			</br>
			<div id="check3"> <input type="checkbox" id="checkbox3"  name="checkbox3" /> Włączyć timer z czasem pozostałym do końca testu ?</div>	
			<div id="tekst1"> Timer : <input type="text" id="text1"  name="text1" value="01:20:00"/></div>
			<div id="tekst3"> <div id="text3w">Nazwa testu : <input type="text" id="text3"  name="text3" value="Test maturalny 2012"/><div id="text3_zajety"></div></div></div>
			<script>
			    var i = 0;
			    $("#text3").mouseleave(function(){
			      $.ajax({
				   	type: "POST",
				   	url: "start_nazwa.php",
				   	data: {
				   		nazwa:($('#text3').val())
					},
				   	success: function($zwrot){
				   		console.log($zwrot);
				   		if($zwrot.length<2){
				   			$("#text3").css("color", "black");
				   			$("#text3_zajety").text(' OK');
				   			$("#text3_zajety").css("color", "green");
				   		}
				   		else{
				   			$("#text3").css("color", "red");
				   			$("#text3_zajety").text(' Nazwa zajęta');
				   			$("#text3_zajety").css("color", "red");
				   		}
				   		
				    // Usuwamy wiadomość o poprawnym dodaniu użytkownika po 2 sekundach
				    setTimeout(function(){ $("div.dodano").fadeOut(200) }, 2000);
			   		}
			  	 });
			    });
			
			
			</script>

		</br>
			<div id="tekst2"> <div id="tekst2w"> Tagi pod jakimi będzie można znaleźć test, kolejne po przecinku :</div></div>
			<textarea id="tagi" rows="1" cols="50">geografia,matura,test,egzamin,2012</textarea>
			<div id="combobox"><div id="comboboxw"> Grupa :
					<select id="select">
				  	<option value="Polski">Polski</option>
				  	<option value="Matematyka">Matematyka</option>
				  	<option value="Historia">Historia</option>
				  	<option value="Geografia">Geografia</option>
				  	<option value="Fizyka">Fizyka</option>
				  	<option value="Biologia">Biologia</option>
				  	<option value="Chemia">Chemia</option>
				  	<option value="Angielski">Angielski</option>
				  	<option value="Niemiecki">Niemiecki</option>
				  	<option value="Wos">Wos</option>
				  	<option value="IQ">IQ</option>
					</select>
				</div>
			</div>
			</br>
			<button id="bt1" name="bt1" type="submit">Start</button>
		</form>
	</div>
	
	
</body>
</html> 
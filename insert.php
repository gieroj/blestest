<?php
  	// Konfiguracja połączenia z baza mysql
   	$baza_host=("localhost"); // Przeważnie localhost
   	$baza_login=("gieroj"); // Login do bazy
   	$baza_haslo=("gieroj1pl"); // Hasło do bazy
  	$baza_nazwa=("test"); // Nazwa bazy
  
   	// Odbieranie danych metodą post
   	$css =(trim($_POST['css']));
   	$bool = htmlspecialchars(trim($_POST['bool']));
   	$miejsce=trim($_POST['miejsce']);
    $html = trim($_POST['html']);
	$numer_strony=htmlspecialchars(trim($_POST['numer_strony']));;
	
	function poczatek_html($numer_str){
		$poczatek_html="<!DOCTYPE html>
		<html>
		<head>
			<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />
		  	<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js\"></script>
		  	<script src=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/jquery-ui.min.js\"></script>
		
			<script src=\"jquery.timer.js\" type=\"text/javascript\"></script>
			<link rel=\"stylesheet\" href=\"".$numer_str."wh.css\" />
			<link rel=\"stylesheet\" href=\"".$numer_str."c.css\" />
			
		</head>
		<body> \n";
		return $poczatek_html;
	}
	$przerwa=htmlspecialchars("\n");
	$poczatek_css="body
		{
		    width: 720px;
		    margin: 0px;
		    
		}";
	$koniec_html="\n</div>\n</body>\n</html>";
	
 	if($bool=="1"){
		$ourFileName =$numer_strony."wh.css";
		$ourFileHandle = fopen($ourFileName, 'w') or die("can't open file");
		fwrite($ourFileHandle,$poczatek_css);
		fwrite($ourFileHandle, $miejsce);
		
		fclose($ourFileHandle);
		
		$ourFName =$numer_strony.".html";
		$ourFHandle = fopen($ourFName, 'w') or die("can't open file");
		fwrite($ourFHandle, poczatek_html($numer_strony));
		fwrite($ourFHandle, $html);
		fwrite($ourFHandle, $przerwa);
		
		fclose($ourFHandle);
		
		$ourFileName = $numer_strony."c.css";
		$ourFileHandle = fopen($ourFileName, 'w') or die("can't open file");
		fwrite($ourFileHandle, $css);
		
		fclose($ourFileHandle);
	}
	else if($bool=="2"){
		$ourFName = $numer_strony.".html";
		$ourFHandle = fopen($ourFName, 'a') or die("can't open file");
		fwrite($ourFHandle, $koniec_html);

		fclose($ourFHandle);
	}
	else{
		$ourFileName = $numer_strony."wh.css";
		$ourFileHandle = fopen($ourFileName, 'a') or die("can't open file");
		fwrite($ourFileHandle, $miejsce);
		
		fclose($ourFileHandle);
		
		$ourFName = $numer_strony.".html";
		$ourFHandle = fopen($ourFName, 'a') or die("can't open file");
		fwrite($ourFHandle, $html);
		fwrite($ourFHandle, $przerwa);
		
		fclose($ourFHandle);
		
		$ourFileName = $numer_strony."c.css";
		$ourFileHandle = fopen($ourFileName, 'a') or die("can't open file");
		fwrite($ourFileHandle, $css);
		
		fclose($ourFileHandle);
	}
   
 
   // Połączenie z bazą mysql
   $polaczenie = mysql_connect($baza_host, $baza_login, $baza_haslo);
   $db = mysql_select_db($baza_nazwa);
 
   //Dodawanie rekordów do bazy mysql
   $dodaj  = "INSERT INTO uzytkownicy (imie,nazwisko) VALUES ('$css','$bool')";
   mysql_query($dodaj) or die(mysql_error());
   mysql_close($polaczenie);
?>


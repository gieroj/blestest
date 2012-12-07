<?php
	// Konfiguracja połączenia z baza mysql
   	$baza_host=("localhost"); // Przeważnie localhost
   	$baza_login=("gieroj"); // Login do bazy
   	$baza_haslo=("gieroj1pl"); // Hasło do bazy
  	$baza_nazwa=("test"); // Nazwa bazy
  	
	$nazwa= trim($_POST['nazwa']);
	$nazwa_spaces=str_replace (" ","_i_",$nazwa);
	
	$polaczenie = mysql_connect($baza_host, $baza_login, $baza_haslo);
	$db = mysql_select_db($baza_nazwa);
	$dodaj  = "SELECT * FROM testy WHERE nazwa='".$nazwa."'";
	$result =mysql_query($dodaj) or die(mysql_error());
	
	mysql_close($polaczenie);
	while($row = mysql_fetch_array($result))
  	{
	  echo $row['tagi'] . " " . $row['nazwa'];
	  echo "<br>";
	}
?>
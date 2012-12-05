<?php
  	// Konfiguracja połączenia z baza mysql
   	$baza_host=("localhost"); // Przeważnie localhost
   	$baza_login=("gieroj"); // Login do bazy
   	$baza_haslo=("gieroj1pl"); // Hasło do bazy
  	$baza_nazwa=("test"); // Nazwa bazy
	
	$bool = htmlspecialchars(trim($_POST['bool']));
	$tagi = trim($_POST['tagi']);
	$grupa = trim($_POST['grupa']);
	$nazwa= trim($_POST['nazwa']);
	$menu= trim($_POST['menu']);
	$wstecz= trim($_POST['wstecz']);
	$pasek= trim($_POST['pasek']);
	$timer= trim($_POST['timer']);
	$timer_czas= trim($_POST['timer_czas']);
	
	if($bool=="1")
	{
		$polaczenie = mysql_connect($baza_host, $baza_login, $baza_haslo);
   		$db = mysql_select_db($baza_nazwa);
		$nazwa_spaces=str_replace (" ","_",$nazwa);
		$nowa_tabela= "CREATE TABLE $nazwa_spaces(strona int, rodzaj_pytania int, poprawnosc_pytania bit, tresc_odpowiedzi text, punktacja double)";
		mysql_query($nowa_tabela) or die(mysql_error());
		$dodaj  = "INSERT INTO testy (nazwa,grupa,tagi,menu,wstecz,pasek,timer,timer_czas,pages) VALUES ('$nazwa','$grupa','$tagi','$menu','$wstecz','$pasek','$timer','$timer_czas',0)";
   		mysql_query($dodaj) or die(mysql_error());
		
   		mysql_close($polaczenie);
	}
	echo "ok";
?>
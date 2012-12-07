<?php
  	// Konfiguracja połączenia z baza mysql
   	$baza_host=("localhost"); // Przeważnie localhost
   	$baza_login=("gieroj"); // Login do bazy
   	$baza_haslo=("gieroj1pl"); // Hasło do bazy
  	$baza_nazwa1=("test"); // Nazwa bazy
  	$baza_nazwa2=("testy"); // Nazwa bazy
	
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
		$polaczenie1 = mysql_connect($baza_host, $baza_login, $baza_haslo,false);
		$db1=mysql_select_db($baza_nazwa1,$polaczenie1);
		$nazwa_spaces=str_replace (" ","_i_",$nazwa);
		$dodaj  = "INSERT INTO testy (nazwa,grupa,tagi,menu,wstecz,pasek,timer,timer_czas,pages) VALUES ('$nazwa_spaces','$grupa','$tagi','$menu','$wstecz','$pasek','$timer','$timer_czas',0)";
   		$lol=mysql_query($dodaj) or die(mysql_error());
		echo $lol;
		
		$polaczenie2 = mysql_connect($baza_host, $baza_login, $baza_haslo,true);
		$db2=mysql_select_db($baza_nazwa2,$polaczenie2);
		
		$nowa_tabela= "CREATE TABLE $nazwa_spaces(strona int, rodzaj_pytania int, poprawnosc_pytania bit, tresc_odpowiedzi text, punktacja double)";
		$lol=mysql_query($nowa_tabela) or die(mysql_error());
		echo $lol;
   		mysql_close($polaczenie1);
		mysql_close($polaczenie2);
	}
?>
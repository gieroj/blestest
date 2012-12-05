<?php
	// Konfiguracja połączenia z baza mysql
   	$baza_host=("localhost"); // Przeważnie localhost
   	$baza_login=("gieroj"); // Login do bazy
   	$baza_haslo=("gieroj1pl"); // Hasło do bazy
  	$baza_nazwa=("test"); // Nazwa bazy
	
	if($_COOKIE["menu"]==1 ){
		if($_COOKIE["wstecz"]==1 )
		echo '<div id="menu1_lewy" ></div>';
		
		echo '<div id="menu1_prawy" ></div>';
		if($_COOKIE["timer"]==1 ){
			echo '<div id="menu1_timer"><div id="menu1_czas">';
			echo $_COOKIE["timer_czas"];
			echo '</div></div>';
		}
		
		if($_COOKIE["pasek"]==1 ){
			 // Connects to your Database 
			 mysql_connect($baza_host, $baza_login, $baza_haslo) or die(mysql_error()); 
			 mysql_select_db($baza_nazwa) or die(mysql_error()); 

			 //This checks to see if there is a page number. If not, it will set it to page 1 
			 if (!(isset($pagenum))) 
			 { 
			 $pagenum = 1; 
			 } 

			 //Here we count the number of results 
			 //Edit $data to be your query 
			 $data = mysql_query("SELECT * FROM testy WHERE nazwa=="+$_COOKIE["nazwa"]) or die(mysql_error()); 
			 $rows = mysql_num_rows($data); 
	
			 //This is the number of results displayed per page 	
			 $page_rows = 4; 

			 //This tells us the page number of our last page 
			 $last = ceil($rows/$page_rows); 

			 //this makes sure the page number isn't below one, or more than our maximum pages 
			 if ($pagenum < 1) 
			 { 
			 $pagenum = 1; 
			 } 
			 elseif ($pagenum > $last) 
			 { 
			 $pagenum = $last; 
			 } 

			 //This sets the range to display in our query 
			 $max = 'limit ' .($pagenum - 1) * $page_rows .',' .$page_rows; 
				
		}
		//if($_COOKIE["pasek"]==1 )
	}
	else{
		
	}
?>
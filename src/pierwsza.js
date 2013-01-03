$(document).ready(function() {
	$('#bt1').click(function(e) {
		document.body.style.cursor = "wait";
		$('#bt1').css('cursor', 'wait');
		$menu=0,$wstecz=1,$pasek=1,$timer=0,$timer_czas="01:20:00";
		if( $('#radio1 input:radio:checked').val()=="on")
		{
			$.cookie("menu",1);
			$menu=1;
		}
		else
		{
			$.cookie("menu",0);
			$menu=0;
		}
		
		if( $('#check1 input:checkbox:checked').val()=="on")
		{
			$.cookie("wstecz",0);
			$wstecz=0;
		}
		else
		{
			$.cookie("wstecz",1);
			$wstecz=1;
		}
		
		if( $('#check2 input:checkbox:checked').val()=="on")
		{
			$.cookie("pasek",0);
			$pasek=0;
		}
		else
		{
			$.cookie("pasek",1);
			$pasek=1;
		}
		
		if( $('#check3 input:checkbox:checked').val()=="on")
		{
			$.cookie("timer",1);
			$timer=1;
			$timer_czas=$('#text1').val();
			$.cookie("timer_czas",$timer_czas);
			
		}
		else
		{
			$.cookie("timer",0);
			$timer=0;
			$timer_czas=$('#text1').val();
			$.cookie("timer_czas",$timer_czas);
		}
		
		$.cookie("tagi",$('#tagi').val());
		var str=$('#text3').val();
		var n=str.replace(" ","_i_"); 
		$.cookie("nazwa",n);
		$.cookie("strony",1);
		$.cookie("strona",1);
		$new="1";
		$poprawne=false;
		$.ajax({
		   	type: "POST",
		   	url: "start.php",
		   	data: {bool:$new,
		   		nazwa:($('#text3').val()),
		   		grupa:($('#select').val()),
		   		tagi:($('#tagi').val()),
		   		menu:$menu,
		   		wstecz:$wstecz,
		   		pasek:$pasek,
		   		timer:$timer,
		   		timer_czas:$timer_czas
			},
		   	success: function($zwrot){
		   		
		   			console.log($zwrot);
		   			if($zwrot==11)
		   				window.setTimeout(function(){location.href="http://localhost/aptana/test/blestest/dodawanie.php";}, 2100);
		   		
		    // Usuwamy wiadomość o poprawnym dodaniu użytkownika po 2 sekundach
		    setTimeout(function(){ $("div.dodano").fadeOut(200)}, 2000);
		   
	   		}
	   		
	  	});
			
		
	});
});

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
$(document).ready(function() {
	$('#bt1').click(function(e) {
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
		}
		
		$.cookie("tagi",$('#tagi').val());
		$.cookie("nazwa",$('#text3').val());
		
		$new="1";
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
		   		if($zwrot=="ok"){
		   			console.log("ok");
		   			
		   		}
		    // Usuwamy wiadomość o poprawnym dodaniu użytkownika po 2 sekundach
		    setTimeout(function(){ $("div.dodano").fadeOut(200) }, 2000);
	   		}
	  	});
		window.setTimeout(nowa, 2000);
	});
});
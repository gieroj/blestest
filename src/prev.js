$(document).ready(function() {
	$('#previous').click(function(el) {
		if($.cookie("strona")>"0")
		$.cookie("edycja","1");
		$ktora_strona=$.cookie("strona");
		$ktora_strona--;
		$.cookie("strona",$ktora_strona);
		window.location = location.href;
	});
	
	if($.cookie("edycja")=="1" && $.cookie("strona")>"0" ){
		$.getJSON("http://localhost/aptana/test/blestest/testy/oko/2c.css",
	  	{
		    tags: "mount rainier",
		    tagmode: "any",
		    format: "json"
	  	},
	  	function(data) {
	    	$.each(data.items, function(i,item){
	      		console.log("ok");
	      	if ( i == 3 ) return false;
	   		});
	  	});
		
	}
	
});
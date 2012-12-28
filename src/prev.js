$(document).ready(function() {
	
	if($.cookie("edycja")=="1" && $.cookie("strona")>"0" &&  $.cookie("strona")!=$.cookie("strony") ){
		load_file('./testy/niemam/'+$.cookie("strona")+'wh.css',"css");
		console.log('./testy/niemam/'+$.cookie("strona")+'wh.css');
		/*$.getJSON("http://localhost/aptana/test/blestest/testy/niemam/2wh.css",
	  	function(data) {
	    	$.each(data.items, function(i,item){
	      		
	      	if ( i == 3 ) return false;
	   		});
	  	});
		*/
	}
	
	
	
	$('#previous').click(function(el) {
		if($.cookie("strona")>"0")
		$.cookie("edycja","1");
		$ktora_strona=$.cookie("strona");
		$ktora_strona--;
		$.cookie("strona",$ktora_strona);
		window.location = location.href;
	});
	
	
	
});

function load_file(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 console.log("ok");
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}
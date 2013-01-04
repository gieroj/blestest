$(document).ready(function() {
	
	if( parseInt($.cookie("strona"))>=0 &&  parseInt($.cookie("strona"))<=parseInt($.cookie("strony")) ){
		document.close();
		load_file('./testy/'+$.cookie("nazwa")+'/'+$.cookie("strona")+'wh.css',"css");
		load_file('./testy/'+$.cookie("nazwa")+'/'+$.cookie("strona")+'c.css',"css");
		//console.log('./testy/'+$.cookie("nazwa")+'/'+$.cookie("strona")+'wh.css');
		
		/*$.getJSON("http://localhost/aptana/test/blestest/testy/niemam/2wh.css",
	  	function(data) {
	    	$.each(data.items, function(i,item){
	      		
	      	if ( i == 3 ) return false;
	   		});
	  	});
		*/
		
		
	}
	
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
 if (typeof fileref!="undefined")
 {
 	//sprawdzam czy plik wogole istnieje
	$.ajax({
	  	type: "GET",
	  	url: filename,
	  	success: function()
	  	{document.getElementsByTagName("head")[0].appendChild(fileref);
	  	},
	  	error: function(xhr, status, error) {
	    	if(xhr.status==404)
	      	{ /** not found! **/}
		}
	});
 }
	  //document.getElementsByTagName("head")[0].appendChild(fileref)
	 
}
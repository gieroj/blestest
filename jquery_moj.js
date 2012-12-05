$(document).ready(function() {
	$("#pytanie0").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});

	$("#pytanie1").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});
	
	$("#pytanie2").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});
	
	$("#pytanie3").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});
	
	$("#pytanie4").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});
	
	$("#pytanie5").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});
	$("#pytanie6").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});
	$("#pytanie7").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});
	$("#pytanie8").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});
	$("#pytanie9").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});
	$pamiec = 0;
	var kontrolkaCK;
	//$( '#area2' ).ckeditor(function() { /* callback code */ }, { toolbar : 'Basic'});
	
	$("#menu_text").css("visibility", "hidden").delay(1000).queue(function () { $(this).css("visibility", "hidden"); $(this).dequeue(); })
	
	$('#pytanie0_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#pytanie0_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	$('#pytanie1_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#pytanie1_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	$('#pytanie2_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#pytanie2_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	$('#pytanie3_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#pytanie3_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	$('#pytanie4_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#pytanie4_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	$('#pytanie5_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#pytanie5_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	$('#pytanie6_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#pytanie6_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	$('#pytanie7_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#pytanie7_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	$('#pytanie8_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#pytanie8_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	$('#pytanie9_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#pytanie9_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});


	$(document).click(function(e) {
		if ($("#menu_text").css('visibility') == 'visible') {
			//console.log("lolo");
			var position = $('#menu_text').position();
			if (e.pageY < position.top || e.pageX < position.left) {
				$('#menu_text').hide();
			}
			
			$stringw = $('#menu_text').css('width').toString().substr(0, 3);
			$stringh = $('#menu_text').css('height').toString().substr(0, 3);
			$sumaw=position.left + parseInt($stringw);
			$sumah=position.top + parseInt($stringh);
			//console.log(position.top + " + " + parseInt($stringh) + " = " + $sumah +" < "+ e.pageY);
			if (e.pageX > $sumaw ||e.pageY > $sumah) {
				//var riki=$("#menu_text").val();
				var content = CKEDITOR.instances.area2.getData();
				//console.log( content );// $('area2').val() );
				$(kontrolkaCK).html(content);
				$('#menu_text').hide();
			}
		}
	});

	/*
	 $('#pytanie1').bind("contextmenu", function (e) {
	 $pamiec = 0;
	 //console.log(e.pageX + " " + e.pageY);
	 var cssObj = {
	 'top': e.pageY,
	 'left': e.pageX,
	 'visibility': 'visible'
	 }
	 $("#menu_text").css(cssObj);
	 setValue("#pytanie1");
	 return false;
	 });

	 $('#pytanie1').mousedown(function (e) {
	 $pamiec = 0;
	 //console.log(e.pageX + " " + e.pageY);
	 var cssObj = {
	 'top': e.pageY,
	 'left': e.pageX,
	 'visibility': 'visible'
	 }
	 $("#menu_text").css(cssObj);
	 setValue("#pytanie1");
	 });
	 $("#menu_text").mouseout
	 */
	
	//$("#menu_text").css("visibility", "hidden");
	
	//nicEditors.allTextAreas();
/*	var myValue;
	function setValue(vall) {
		myValue = vall;
	}

	function getValue() {
		//alert(window.myValue); // yup, it's "test"
		return (myValue);
	}*/
	
	$("#check0").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});

	$('#check0_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#check0_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		console.log($(kontrolkaCK).html());
		return false;
	}); 
	$("#check1").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});

	$('#check1_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#check1_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	
	$("#check2").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});

	$('#check2_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#check2_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	
	$("#check3").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});

	$('#check3_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#check3_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	
	$("#check4").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});

	$('#check4_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#check4_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	
	$("#check5").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});

	$('#check5_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#check5_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	
	$("#check6").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});

	$('#check6_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#check6_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	
	$("#check7").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});

	$('#check7_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#check7_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	
	$("#check8").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});

	$('#check8_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#check8_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
	
	$("#check9").resizable({
		maxWidth : 720,
		maxHeight : 480,
		grid : [10, 10],
		start : function(e, ui) {
		},
		resize : function(e, ui) {
		},
		stop : function(e, ui) {
		}
	}).draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});

	$('#check9_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { /* callback code */ }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#check9_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		return false;
	});
});

$(function() {
	/**************************************************
	 * Custom Command Handler
	 **************************************************/
	$.contextMenu.types.label = function(item, opt, root) {
		if (opt.ns == ".contextMenu1") {
			// this === item.$node
			$('<ul>' + '<li class="label1" title="Black">label 1</li>' + '<li class="label2" title="Gray">label 2</li>' + '<li class="label3" title="Brown">label 3</li>' + '<li class="label4" title="Red">label 4</li>' + '<li class="label5" title="Orange">label 5</li>' + '<li class="label6" title="Yellow">label 6</li>' + '<li class="label7" title="ForestGreen">label 7</li>' + '<li class="label8" title="DodgerBlue">label 8</li>' + '<li class="label9" title="Indigo">label 9</li><br>' + '<li class="label10" title="White">label 10</li>' + '<li class="label11" title="LightGray">label 11</li>' + '<li class="label12" title="Peru">label 12</li>' + '<li class="label13" title="Pink">label 13</li>' + '<li class="label14" title="Gold">label 14</li>' + '<li class="label15" title="GreenYellow">label 15</li>' + '<li class="label16" title="LightSkyBlue">label 16</li>' + '<li class="label17" title="Thisle">label 17</li>' + '<li class="label18" title="Purple">label 18</li><br>' + '<li class="label19" title="Tulipany">label 19</li>' + '<li class="label20" title="BlueWave">label 20</li>' + '<li class="label21" title="Desert">label 21</li><br>' + '<li class="label22" title="Mountain">label 22</li>' + '<li class="label23" title="Bluebbery">label 23</li>' + '<li class="label24" title="Cofe">label 24</li><br>' + '<li class="label25" title="Mill">label 25</li>' + '<li class="label26" title="PaternX">label 26</li>' + '<li class="label27" title="PaternO">label 27</li></ul>').appendTo(this).on('click', 'li', function() {
				//console.log(opt.ns);//$trigger.attr("name"));
				// do some funky stuff
				//console.log('Clicked on ' + $(this).text());
				// hide the menu
				$element = "#" + opt.$trigger.attr("id");

				$($element).css("background-image", 'none');
				if ($(this).text() == "label 1") {
					$($element).css("background-color", "Black");
				}
				if ($(this).text() == "label 2") {
					$($element).css("background-color", "Gray");
				}
				if ($(this).text() == "label 3") {
					$($element).css("background-color", "Brown");
				}
				if ($(this).text() == "label 4") {
					$($element).css("background-color", "Red");
				}
				if ($(this).text() == "label 5") {
					$($element).css("background-color", "Orange");
				}
				if ($(this).text() == "label 6") {
					$($element).css("background-color", "Yellow");
				}
				if ($(this).text() == "label 7") {
					$($element).css("background-color", "ForestGreen");
				}
				if ($(this).text() == "label 8") {
					$($element).css("background-color", "DodgerBlue");
				}
				if ($(this).text() == "label 9") {
					$($element).css("background-color", "Indigo");
				}
				if ($(this).text() == "label 10") {
					$($element).css("background-color", "White");
				}
				if ($(this).text() == "label 11") {
					$($element).css("background-color", "LightGray");
				}
				if ($(this).text() == "label 12") {
					$($element).css("background-color", "Peru");
				}
				if ($(this).text() == "label 13") {
					$($element).css("background-color", "Pink");
				}
				if ($(this).text() == "label 14") {
					$($element).css("background-color", "Gold");
				}
				if ($(this).text() == "label 15") {
					$($element).css("background-color", "GreenYellow");
				}
				if ($(this).text() == "label 16") {
					$($element).css("background-color", "LightSkyBlue");
				}
				if ($(this).text() == "label 17") {
					$($element).css("background-color", "Thistle");
				}
				if ($(this).text() == "label 18") {
					$($element).css("background-color", "Purple");
				}
				if ($(this).text() == "label 19") {
					$($element).css("background-image", 'url("src/back/tulipany.jpg")');
				}
				if ($(this).text() == "label 20") {
					$($element).css("background-image", 'url("src/back/nice_blue.jpg")');
				}
				if ($(this).text() == "label 21") {
					$($element).css("background-image", 'url("src/back/desert.jpg")');
				}
				if ($(this).text() == "label 22") {
					$($element).css("background-image", 'url("src/back/gory.jpg")');
				}
				if ($(this).text() == "label 23") {
					$($element).css("background-image", 'url("src/back/jezyny.jpg")');
				}
				if ($(this).text() == "label 24") {
					$($element).css("background-image", 'url("src/back/kawa.jpg")');
				}
				if ($(this).text() == "label 25") {
					$($element).css("background-image", 'url("src/back/wiatrak.jpg")');
				}
				if ($(this).text() == "label 26") {
					$($element).css("background-image", 'url("src/back/patern.gif")');
				}
				if ($(this).text() == "label 27") {
					$($element).css("background-image", 'url("src/back/patern2.jpg")');
				}
				root.$menu.trigger('contextmenu:hide');
			});

			this.addClass('labels').on('contextmenu:focus', function(e) {
				// setup some awesome stuff
			}).on('contextmenu:blur', function(e) {
				// tear down whatever you did
			}).on('keydown', function(e) {
				// some funky key handling, maybe?
			});
		} else if (item.customName == "text") {
			// this === item.$node
			$('<ul>' + '<li class="label1" title="Black">label 1</li>' + '<li class="label2" title="Gray">label 2</li>' + '<li class="label3" title="Brown">label 3</li>' + '<li class="label4" title="Red">label 4</li>' + '<li class="label5" title="Orange">label 5</li>' + '<li class="label6" title="Yellow">label 6</li>' + '<li class="label7" title="ForestGreen">label 7</li>' + '<li class="label8" title="DodgerBlue">label 8</li>' + '<li class="label9" title="Indigo">label 9</li><br>' + '<li class="label10" title="White">label 10</li>' + '<li class="label11" title="LightGray">label 11</li>' + '<li class="label12" title="Peru">label 12</li>' + '<li class="label13" title="Pink">label 13</li>' + '<li class="label14" title="Gold">label 14</li>' + '<li class="label15" title="GreenYellow">label 15</li>' + '<li class="label16" title="LightSkyBlue">label 16</li>' + '<li class="label17" title="Thisle">label 17</li>' + '<li class="label18" title="Purple">label 18</li></ul>').appendTo(this).on('click', 'li', function() {
				//console.log(opt.ns);//$trigger.attr("name"));
				// do some funky stuff
				//console.log('Clicked on ' + $(this).text());
				// hide the menu
				$element = "#" + opt.$trigger.attr("id");

				$($element).css("background-image", 'none');
				if ($(this).text() == "label 1") {
					$($element).css("color", "Black");
				}
				if ($(this).text() == "label 2") {
					$($element).css("color", "Gray");
				}
				if ($(this).text() == "label 3") {
					$($element).css("color", "Brown");
				}
				if ($(this).text() == "label 4") {
					$($element).css("color", "Red");
				}
				if ($(this).text() == "label 5") {
					$($element).css("color", "Orange");
				}
				if ($(this).text() == "label 6") {
					$($element).css("color", "Yellow");
				}
				if ($(this).text() == "label 7") {
					$($element).css("color", "ForestGreen");
				}
				if ($(this).text() == "label 8") {
					$($element).css("color", "DodgerBlue");
				}
				if ($(this).text() == "label 9") {
					$($element).css("color", "Indigo");
				}
				if ($(this).text() == "label 10") {
					$($element).css("color", "White");
				}
				if ($(this).text() == "label 11") {
					$($element).css("color", "LightGray");
				}
				if ($(this).text() == "label 12") {
					$($element).css("color", "Peru");
				}
				if ($(this).text() == "label 13") {
					$($element).css("color", "Pink");
				}
				if ($(this).text() == "label 14") {
					$($element).css("color", "Gold");
				}
				if ($(this).text() == "label 15") {
					$($element).css("color", "GreenYellow");
				}
				if ($(this).text() == "label 16") {
					$($element).css("color", "LightSkyBlue");
				}
				if ($(this).text() == "label 17") {
					$($element).css("color", "Thistle");
				}
				if ($(this).text() == "label 18") {
					$($element).css("color", "Purple");
				}

				root.$menu.trigger('contextmenu:hide');
			});

			this.addClass('labels').on('contextmenu:focus', function(e) {
				// setup some awesome stuff
			}).on('contextmenu:blur', function(e) {
				// tear down whatever you did
			}).on('keydown', function(e) {
				// some funky key handling, maybe?
			});
		} else {
			// this === item.$node
			$('<ul>' + '<li class="label1" title="Black">label 1</li>' + '<li class="label2" title="Gray">label 2</li>' + '<li class="label3" title="Brown">label 3</li>' + '<li class="label4" title="Red">label 4</li>' + '<li class="label5" title="Orange">label 5</li>' + '<li class="label6" title="Yellow">label 6</li>' + '<li class="label7" title="ForestGreen">label 7</li>' + '<li class="label8" title="DodgerBlue">label 8</li>' + '<li class="label9" title="Indigo">label 9</li><br>' + '<li class="label10" title="White">label 10</li>' + '<li class="label11" title="LightGray">label 11</li>' + '<li class="label12" title="Peru">label 12</li>' + '<li class="label13" title="Pink">label 13</li>' + '<li class="label14" title="Gold">label 14</li>' + '<li class="label15" title="GreenYellow">label 15</li>' + '<li class="label16" title="LightSkyBlue">label 16</li>' + '<li class="label17" title="Thisle">label 17</li>' + '<li class="label18" title="Purple">label 18</li></ul>').appendTo(this).on('click', 'li', function() {
				//console.log(opt.ns);//$trigger.attr("name"));
				// do some funky stuff
				//console.log('Clicked on ' + $(this).text());
				// hide the menu
				$element = "#" + opt.$trigger.attr("id");

				$($element).css("background-image", 'none');
				if ($(this).text() == "label 1") {
					$($element).css("background-color", "Black");
				}
				if ($(this).text() == "label 2") {
					$($element).css("background-color", "Gray");
				}
				if ($(this).text() == "label 3") {
					$($element).css("background-color", "Brown");
				}
				if ($(this).text() == "label 4") {
					$($element).css("background-color", "Red");
				}
				if ($(this).text() == "label 5") {
					$($element).css("background-color", "Orange");
				}
				if ($(this).text() == "label 6") {
					$($element).css("background-color", "Yellow");
				}
				if ($(this).text() == "label 7") {
					$($element).css("background-color", "ForestGreen");
				}
				if ($(this).text() == "label 8") {
					$($element).css("background-color", "DodgerBlue");
				}
				if ($(this).text() == "label 9") {
					$($element).css("background-color", "Indigo");
				}
				if ($(this).text() == "label 10") {
					$($element).css("background-color", "White");
				}
				if ($(this).text() == "label 11") {
					$($element).css("background-color", "LightGray");
				}
				if ($(this).text() == "label 12") {
					$($element).css("background-color", "Peru");
				}
				if ($(this).text() == "label 13") {
					$($element).css("background-color", "Pink");
				}
				if ($(this).text() == "label 14") {
					$($element).css("background-color", "Gold");
				}
				if ($(this).text() == "label 15") {
					$($element).css("background-color", "GreenYellow");
				}
				if ($(this).text() == "label 16") {
					$($element).css("background-color", "LightSkyBlue");
				}
				if ($(this).text() == "label 17") {
					$($element).css("background-color", "Thistle");
				}
				if ($(this).text() == "label 18") {
					$($element).css("background-color", "Purple");
				}

				root.$menu.trigger('contextmenu:hide');
			});

			this.addClass('labels').on('contextmenu:focus', function(e) {
				// setup some awesome stuff
			}).on('contextmenu:blur', function(e) {
				// tear down whatever you did
			}).on('keydown', function(e) {
				// some funky key handling, maybe?
			});
		}
		;

	};
});
$(function() {
	/**************************************************
	 * Context-Menu with custom command "label"
	 **************************************************/
	function showUploadedItem(source) {
		var list = document.getElementById("#miejsce");
		//img  = document.createElement("img");
		//img.src = source;
		$sciezka = "url(src/uploads/" + source;
		$('#miejsce').css({
			"background-image" : $sciezka
			//,'backgroundRepeat': 'no-repeat',
			//	'backgroundPosition': 'top center'
		});
		//	li.appendChild(img);
		//	list.appendChild(li);
	}

	//$kolor=$(this).css("background-color");
	$.contextMenu({
		selector : '#miejsce',
		callback : function(key, options) {
			//var m = "clicked: " + options.$trigger.attr("id");
			// window.console && console.log(m) || alert(m);
		},
		items : {
			open : {
				type : "file",
				icon : "add",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							//var valued = $(this).val();
							//window.console && console.log(valued+" lol");

						}
					},
					change : function(e) {
						var file = this.files[0], fileName = file.name, fileSize = file.size;
						window.console && console.log("Uploading: " + fileName + " @ " + fileSize + "bytes");

						var i = 0, len = this.files.length, img, reader, file;

						for (; i < len; i++) {
							filed = this.files[i];

							if (!!filed.type.match(/image.*/)) {
								if (window.FileReader) {
									reader = new FileReader();
									reader.readAsDataURL(file);
								}

							}
							var date = new FormData();
							date.append("images[]", file);
						}
						$.ajax({
							url : "src/upload.php",
							type : "POST",
							data : date,
							processData : false,
							contentType : false,
							success : function(res) {
								//document.getElementById("response").innerHTML = res;
								console.log("zyje " + fileName);
								showUploadedItem(fileName);
							}
						});

						$(this).trigger('contextmenu:hide');

						//window.console && console.log(valued+" ok");
					}
				}
			},

			edit : {
				name : "HEX",
				type : 'text',
				icon : "edit",
				value : rgb2hex($('#miejsce').css("background-color")),
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued+" "+ rgb2hex($('#miejsce').css("background-color")));
							$('#miejsce').css("background-image", 'none');
							$("#miejsce").css("background-color", valued);
							$(this).trigger('contextmenu:hide');
						}
					}
				}
			},
			label : {
				type : "label"
			}

			//class: "buba", type:"file", name:"inputTypeFile"},

		},
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					edit : {
						name : "HEX",
						value : rgb2hex($('#miejsce').css("background-color"))
					}
				}
			};
		}
	});
});

function progressHandlingFunction(e) {
	if (e.lengthComputable) {
		$('progress').attr({
			value : e.loaded,
			max : e.total
		});
	}
}

function rgb2hex(rgb) {
	if (rgb.search("rgb") == -1) {
		return rgb;
	} else {
		rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
		function hex(x) {
			return ("0" + parseInt(x).toString(16)).slice(-2);
		}

		return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	}
}

function hex2rgb(hexStr) {
	// note: hexStr should be #rrggbb
	var hex = parseInt(hexStr.substring(1), 16);
	var r = (hex & 0xff0000) >> 16;
	var g = (hex & 0x00ff00) >> 8;
	var b = hex & 0x0000ff;
	return [r, g, b];
}

function all_items(itemek){
	var all= {
		
			edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek+"_text").text(valued);

						}
					}
				}
			},
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($(itemek).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek).css("background-image", 'none');
							$(itemek).css("background-color", valued);

						}
					}
				}
			},
			label : {
				type : "label",
				customName : "Kolor"
			},
			size : {
				type : 'text',
				name : "Width Height",
				value : "100px 35px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val().split(" ");
							$(itemek).css("width", valued[0]);
							$(itemek).css("height", valued[1]);
						}
					}
				}
			},
			border : {
				type : 'text',
				name : "Border: size style color",
				value : "1px solid #ff0000",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border", $(this).val());
						}
					}
				}
			},
			radius : {
				type : 'text',
				name : "Radius",
				value : "5px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border-radius", $(this).val());
						}
					}
				}
			},
			shadow : {
				type : 'text',
				name : "Shadow",
				value : "3px 3px 5px #888888",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
							} else {
								zaczarowany_shadow = $(this).val();
								$(itemek).css("box-shadow", $(this).val());
							}
						}
					}
				}
			},
			gradient : {
				type : 'text',
				name : "Gradient",
				value : "bottom, #808080 5%, #d3d3d3 53%",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("background-image", "linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-moz-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-o-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-webkit-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-ms-linear-gradient(#808080 0%, #d3d3d3 100%)");
								zaczarowany_gradient = "#808080 0%, #d3d3d3 100%";
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
							} else {
								zaczarowany_gradient = $(this).val();
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
								$(itemek).css("background-image", "linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-moz-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-o-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-webkit-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-ms-linear-gradient(" + $(this).val() + ")");
							}
						}
					}
				}
			}
		};
		return all;
}


$(function() {
	/**************************************************
	 * Context-Menu with custom command "label"
	 **************************************************/
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var itemek='#pytanie9';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items : all_items(itemek),
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var itemek='#pytanie8';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items : all_items(itemek),
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var itemek='#pytanie7';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items : all_items(itemek),
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var itemek='#pytanie6';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items : all_items(itemek),
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var itemek='#pytanie5';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items : all_items(itemek),
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var itemek='#pytanie4';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items : all_items(itemek),
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var itemek='#pytanie3';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items : all_items(itemek),
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var itemek='#pytanie2';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items : all_items(itemek),
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var itemek='#pytanie1';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items : all_items(itemek),
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	
	var itemek='#pytanie0';
	$.cookie(itemek+"_gradient", zaczarowany_gradient);
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items : all_items(itemek),
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});

function all_itemsc(itemek,bol){
	var all= {
			
			edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek+"_text").text(valued);

						}
					}
				}
			},
			checkbox: {
                name: "Prawidłowa odpowiedź", 
                type: 'checkbox', 
                selected: bol,
                events : {
					mouseup : function(e) {
						if(bol==true)
							bol=false
						else
							bol=true
					}
				}
            },
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($(itemek).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek).css("background-image", 'none');
							$(itemek).css("background-color", valued);

						}
					}
				}
			},
			label : {
				type : "label",
				customName : "Kolor"
			},
			size : {
				type : 'text',
				name : "Width Height",
				value : "100px 35px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val().split(" ");
							$(itemek).css("width", valued[0]);
							$(itemek).css("height", valued[1]);
						}
					}
				}
			},
			border : {
				type : 'text',
				name : "Border: size style color",
				value : "1px solid #ff0000",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border", $(this).val());
						}
					}
				}
			},
			radius : {
				type : 'text',
				name : "Radius",
				value : "5px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border-radius", $(this).val());
						}
					}
				}
			},
			shadow : {
				type : 'text',
				name : "Shadow",
				value : "3px 3px 5px #888888",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
							} else {
								zaczarowany_shadow = $(this).val();
								$(itemek).css("box-shadow", $(this).val());
							}
						}
					}
				}
			},
			gradient : {
				type : 'text',
				name : "Gradient",
				value : "bottom, #808080 5%, #d3d3d3 53%",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("background-image", "linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-moz-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-o-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-webkit-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-ms-linear-gradient(#808080 0%, #d3d3d3 100%)");
								zaczarowany_gradient = "#808080 0%, #d3d3d3 100%";
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
							} else {
								zaczarowany_gradient = $(this).val();
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
								$(itemek).css("background-image", "linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-moz-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-o-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-webkit-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-ms-linear-gradient(" + $(this).val() + ")");
							}
						}
					}
				}
			}
		};
		return all;
}


$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var bol;
	var itemek='#check0';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek+"_text").text(valued);

						}
					}
				}
			},
			checkbox: {
                name: "Prawidłowa odpowiedź", 
                type: 'checkbox', 
                selected: bol,
                events : {
					mouseup : function(e) {
						if(bol==true)
							bol=false;
						else
							bol=true;
					}
				}
            },
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($(itemek).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek).css("background-image", 'none');
							$(itemek).css("background-color", valued);

						}
					}
				}
			},
			label : {
				type : "label",
				customName : "Kolor"
			},
			size : {
				type : 'text',
				name : "Width Height",
				value : "100px 35px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val().split(" ");
							$(itemek).css("width", valued[0]);
							$(itemek).css("height", valued[1]);
						}
					}
				}
			},
			border : {
				type : 'text',
				name : "Border: size style color",
				value : "1px solid #ff0000",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border", $(this).val());
						}
					}
				}
			},
			radius : {
				type : 'text',
				name : "Radius",
				value : "5px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border-radius", $(this).val());
						}
					}
				}
			},
			shadow : {
				type : 'text',
				name : "Shadow",
				value : "3px 3px 5px #888888",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
							} else {
								zaczarowany_shadow = $(this).val();
								$(itemek).css("box-shadow", $(this).val());
							}
						}
					}
				}
			},
			gradient : {
				type : 'text',
				name : "Gradient",
				value : "bottom, #808080 5%, #d3d3d3 53%",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("background-image", "linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-moz-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-o-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-webkit-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-ms-linear-gradient(#808080 0%, #d3d3d3 100%)");
								zaczarowany_gradient = "#808080 0%, #d3d3d3 100%";
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
							} else {
								zaczarowany_gradient = $(this).val();
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
								$(itemek).css("background-image", "linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-moz-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-o-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-webkit-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-ms-linear-gradient(" + $(this).val() + ")");
							}
						}
					}
				}
			}
		},
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					checkbox:{
						name: "Prawidłowa odpowiedź ?",
						selected: bol
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});

$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var bol;
	var itemek='#check1';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek+"_text").text(valued);

						}
					}
				}
			},
			checkbox: {
                name: "Prawidłowa odpowiedź", 
                type: 'checkbox', 
                selected: bol,
                events : {
					mouseup : function(e) {
						if(bol==true)
							bol=false;
						else
							bol=true;
					}
				}
            },
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($(itemek).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek).css("background-image", 'none');
							$(itemek).css("background-color", valued);

						}
					}
				}
			},
			label : {
				type : "label",
				customName : "Kolor"
			},
			size : {
				type : 'text',
				name : "Width Height",
				value : "100px 35px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val().split(" ");
							$(itemek).css("width", valued[0]);
							$(itemek).css("height", valued[1]);
						}
					}
				}
			},
			border : {
				type : 'text',
				name : "Border: size style color",
				value : "1px solid #ff0000",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border", $(this).val());
						}
					}
				}
			},
			radius : {
				type : 'text',
				name : "Radius",
				value : "5px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border-radius", $(this).val());
						}
					}
				}
			},
			shadow : {
				type : 'text',
				name : "Shadow",
				value : "3px 3px 5px #888888",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
							} else {
								zaczarowany_shadow = $(this).val();
								$(itemek).css("box-shadow", $(this).val());
							}
						}
					}
				}
			},
			gradient : {
				type : 'text',
				name : "Gradient",
				value : "bottom, #808080 5%, #d3d3d3 53%",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("background-image", "linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-moz-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-o-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-webkit-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-ms-linear-gradient(#808080 0%, #d3d3d3 100%)");
								zaczarowany_gradient = "#808080 0%, #d3d3d3 100%";
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
							} else {
								zaczarowany_gradient = $(this).val();
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
								$(itemek).css("background-image", "linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-moz-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-o-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-webkit-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-ms-linear-gradient(" + $(this).val() + ")");
							}
						}
					}
				}
			}
		},
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					checkbox:{
						name: "Prawidłowa odpowiedź ?",
						selected: bol
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});

$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var bol;
	var itemek='#check2';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek+"_text").text(valued);

						}
					}
				}
			},
			checkbox: {
                name: "Prawidłowa odpowiedź", 
                type: 'checkbox', 
                selected: bol,
                events : {
					mouseup : function(e) {
						if(bol==true)
							bol=false;
						else
							bol=true;
					}
				}
            },
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($(itemek).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek).css("background-image", 'none');
							$(itemek).css("background-color", valued);

						}
					}
				}
			},
			label : {
				type : "label",
				customName : "Kolor"
			},
			size : {
				type : 'text',
				name : "Width Height",
				value : "100px 35px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val().split(" ");
							$(itemek).css("width", valued[0]);
							$(itemek).css("height", valued[1]);
						}
					}
				}
			},
			border : {
				type : 'text',
				name : "Border: size style color",
				value : "1px solid #ff0000",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border", $(this).val());
						}
					}
				}
			},
			radius : {
				type : 'text',
				name : "Radius",
				value : "5px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border-radius", $(this).val());
						}
					}
				}
			},
			shadow : {
				type : 'text',
				name : "Shadow",
				value : "3px 3px 5px #888888",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
							} else {
								zaczarowany_shadow = $(this).val();
								$(itemek).css("box-shadow", $(this).val());
							}
						}
					}
				}
			},
			gradient : {
				type : 'text',
				name : "Gradient",
				value : "bottom, #808080 5%, #d3d3d3 53%",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("background-image", "linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-moz-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-o-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-webkit-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-ms-linear-gradient(#808080 0%, #d3d3d3 100%)");
								zaczarowany_gradient = "#808080 0%, #d3d3d3 100%";
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
							} else {
								zaczarowany_gradient = $(this).val();
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
								$(itemek).css("background-image", "linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-moz-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-o-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-webkit-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-ms-linear-gradient(" + $(this).val() + ")");
							}
						}
					}
				}
			}
		},
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					checkbox:{
						name: "Prawidłowa odpowiedź ?",
						selected: bol
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});

$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var bol;
	var itemek='#check3';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek+"_text").text(valued);

						}
					}
				}
			},
			checkbox: {
                name: "Prawidłowa odpowiedź", 
                type: 'checkbox', 
                selected: bol,
                events : {
					mouseup : function(e) {
						if(bol==true)
							bol=false;
						else
							bol=true;
					}
				}
            },
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($(itemek).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek).css("background-image", 'none');
							$(itemek).css("background-color", valued);

						}
					}
				}
			},
			label : {
				type : "label",
				customName : "Kolor"
			},
			size : {
				type : 'text',
				name : "Width Height",
				value : "100px 35px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val().split(" ");
							$(itemek).css("width", valued[0]);
							$(itemek).css("height", valued[1]);
						}
					}
				}
			},
			border : {
				type : 'text',
				name : "Border: size style color",
				value : "1px solid #ff0000",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border", $(this).val());
						}
					}
				}
			},
			radius : {
				type : 'text',
				name : "Radius",
				value : "5px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border-radius", $(this).val());
						}
					}
				}
			},
			shadow : {
				type : 'text',
				name : "Shadow",
				value : "3px 3px 5px #888888",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
							} else {
								zaczarowany_shadow = $(this).val();
								$(itemek).css("box-shadow", $(this).val());
							}
						}
					}
				}
			},
			gradient : {
				type : 'text',
				name : "Gradient",
				value : "bottom, #808080 5%, #d3d3d3 53%",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("background-image", "linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-moz-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-o-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-webkit-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-ms-linear-gradient(#808080 0%, #d3d3d3 100%)");
								zaczarowany_gradient = "#808080 0%, #d3d3d3 100%";
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
							} else {
								zaczarowany_gradient = $(this).val();
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
								$(itemek).css("background-image", "linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-moz-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-o-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-webkit-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-ms-linear-gradient(" + $(this).val() + ")");
							}
						}
					}
				}
			}
		},
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					checkbox:{
						name: "Prawidłowa odpowiedź ?",
						selected: bol
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});

$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var bol;
	var itemek='#check4';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek+"_text").text(valued);

						}
					}
				}
			},
			checkbox: {
                name: "Prawidłowa odpowiedź", 
                type: 'checkbox', 
                selected: bol,
                events : {
					mouseup : function(e) {
						if(bol==true)
							bol=false;
						else
							bol=true;
					}
				}
            },
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($(itemek).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek).css("background-image", 'none');
							$(itemek).css("background-color", valued);

						}
					}
				}
			},
			label : {
				type : "label",
				customName : "Kolor"
			},
			size : {
				type : 'text',
				name : "Width Height",
				value : "100px 35px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val().split(" ");
							$(itemek).css("width", valued[0]);
							$(itemek).css("height", valued[1]);
						}
					}
				}
			},
			border : {
				type : 'text',
				name : "Border: size style color",
				value : "1px solid #ff0000",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border", $(this).val());
						}
					}
				}
			},
			radius : {
				type : 'text',
				name : "Radius",
				value : "5px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border-radius", $(this).val());
						}
					}
				}
			},
			shadow : {
				type : 'text',
				name : "Shadow",
				value : "3px 3px 5px #888888",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
							} else {
								zaczarowany_shadow = $(this).val();
								$(itemek).css("box-shadow", $(this).val());
							}
						}
					}
				}
			},
			gradient : {
				type : 'text',
				name : "Gradient",
				value : "bottom, #808080 5%, #d3d3d3 53%",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("background-image", "linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-moz-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-o-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-webkit-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-ms-linear-gradient(#808080 0%, #d3d3d3 100%)");
								zaczarowany_gradient = "#808080 0%, #d3d3d3 100%";
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
							} else {
								zaczarowany_gradient = $(this).val();
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
								$(itemek).css("background-image", "linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-moz-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-o-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-webkit-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-ms-linear-gradient(" + $(this).val() + ")");
							}
						}
					}
				}
			}
		},
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					checkbox:{
						name: "Prawidłowa odpowiedź ?",
						selected: bol
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});

$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var bol;
	var itemek='#check5';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek+"_text").text(valued);

						}
					}
				}
			},
			checkbox: {
                name: "Prawidłowa odpowiedź", 
                type: 'checkbox', 
                selected: bol,
                events : {
					mouseup : function(e) {
						if(bol==true)
							bol=false;
						else
							bol=true;
					}
				}
            },
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($(itemek).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek).css("background-image", 'none');
							$(itemek).css("background-color", valued);

						}
					}
				}
			},
			label : {
				type : "label",
				customName : "Kolor"
			},
			size : {
				type : 'text',
				name : "Width Height",
				value : "100px 35px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val().split(" ");
							$(itemek).css("width", valued[0]);
							$(itemek).css("height", valued[1]);
						}
					}
				}
			},
			border : {
				type : 'text',
				name : "Border: size style color",
				value : "1px solid #ff0000",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border", $(this).val());
						}
					}
				}
			},
			radius : {
				type : 'text',
				name : "Radius",
				value : "5px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border-radius", $(this).val());
						}
					}
				}
			},
			shadow : {
				type : 'text',
				name : "Shadow",
				value : "3px 3px 5px #888888",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
							} else {
								zaczarowany_shadow = $(this).val();
								$(itemek).css("box-shadow", $(this).val());
							}
						}
					}
				}
			},
			gradient : {
				type : 'text',
				name : "Gradient",
				value : "bottom, #808080 5%, #d3d3d3 53%",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("background-image", "linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-moz-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-o-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-webkit-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-ms-linear-gradient(#808080 0%, #d3d3d3 100%)");
								zaczarowany_gradient = "#808080 0%, #d3d3d3 100%";
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
							} else {
								zaczarowany_gradient = $(this).val();
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
								$(itemek).css("background-image", "linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-moz-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-o-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-webkit-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-ms-linear-gradient(" + $(this).val() + ")");
							}
						}
					}
				}
			}
		},
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					checkbox:{
						name: "Prawidłowa odpowiedź ?",
						selected: bol
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});

$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var bol;
	var itemek='#check6';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek+"_text").text(valued);

						}
					}
				}
			},
			checkbox: {
                name: "Prawidłowa odpowiedź", 
                type: 'checkbox', 
                selected: bol,
                events : {
					mouseup : function(e) {
						if(bol==true)
							bol=false;
						else
							bol=true;
					}
				}
            },
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($(itemek).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek).css("background-image", 'none');
							$(itemek).css("background-color", valued);

						}
					}
				}
			},
			label : {
				type : "label",
				customName : "Kolor"
			},
			size : {
				type : 'text',
				name : "Width Height",
				value : "100px 35px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val().split(" ");
							$(itemek).css("width", valued[0]);
							$(itemek).css("height", valued[1]);
						}
					}
				}
			},
			border : {
				type : 'text',
				name : "Border: size style color",
				value : "1px solid #ff0000",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border", $(this).val());
						}
					}
				}
			},
			radius : {
				type : 'text',
				name : "Radius",
				value : "5px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border-radius", $(this).val());
						}
					}
				}
			},
			shadow : {
				type : 'text',
				name : "Shadow",
				value : "3px 3px 5px #888888",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
							} else {
								zaczarowany_shadow = $(this).val();
								$(itemek).css("box-shadow", $(this).val());
							}
						}
					}
				}
			},
			gradient : {
				type : 'text',
				name : "Gradient",
				value : "bottom, #808080 5%, #d3d3d3 53%",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("background-image", "linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-moz-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-o-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-webkit-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-ms-linear-gradient(#808080 0%, #d3d3d3 100%)");
								zaczarowany_gradient = "#808080 0%, #d3d3d3 100%";
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
							} else {
								zaczarowany_gradient = $(this).val();
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
								$(itemek).css("background-image", "linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-moz-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-o-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-webkit-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-ms-linear-gradient(" + $(this).val() + ")");
							}
						}
					}
				}
			}
		},
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					checkbox:{
						name: "Prawidłowa odpowiedź ?",
						selected: bol
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});

$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var bol;
	var itemek='#check7';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek+"_text").text(valued);

						}
					}
				}
			},
			checkbox: {
                name: "Prawidłowa odpowiedź", 
                type: 'checkbox', 
                selected: bol,
                events : {
					mouseup : function(e) {
						if(bol==true)
							bol=false;
						else
							bol=true;
					}
				}
            },
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($(itemek).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek).css("background-image", 'none');
							$(itemek).css("background-color", valued);

						}
					}
				}
			},
			label : {
				type : "label",
				customName : "Kolor"
			},
			size : {
				type : 'text',
				name : "Width Height",
				value : "100px 35px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val().split(" ");
							$(itemek).css("width", valued[0]);
							$(itemek).css("height", valued[1]);
						}
					}
				}
			},
			border : {
				type : 'text',
				name : "Border: size style color",
				value : "1px solid #ff0000",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border", $(this).val());
						}
					}
				}
			},
			radius : {
				type : 'text',
				name : "Radius",
				value : "5px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border-radius", $(this).val());
						}
					}
				}
			},
			shadow : {
				type : 'text',
				name : "Shadow",
				value : "3px 3px 5px #888888",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
							} else {
								zaczarowany_shadow = $(this).val();
								$(itemek).css("box-shadow", $(this).val());
							}
						}
					}
				}
			},
			gradient : {
				type : 'text',
				name : "Gradient",
				value : "bottom, #808080 5%, #d3d3d3 53%",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("background-image", "linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-moz-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-o-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-webkit-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-ms-linear-gradient(#808080 0%, #d3d3d3 100%)");
								zaczarowany_gradient = "#808080 0%, #d3d3d3 100%";
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
							} else {
								zaczarowany_gradient = $(this).val();
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
								$(itemek).css("background-image", "linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-moz-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-o-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-webkit-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-ms-linear-gradient(" + $(this).val() + ")");
							}
						}
					}
				}
			}
		},
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					checkbox:{
						name: "Prawidłowa odpowiedź ?",
						selected: bol
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});

$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var bol;
	var itemek='#check8';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek+"_text").text(valued);

						}
					}
				}
			},
			checkbox: {
                name: "Prawidłowa odpowiedź", 
                type: 'checkbox', 
                selected: bol,
                events : {
					mouseup : function(e) {
						if(bol==true)
							bol=false;
						else
							bol=true;
					}
				}
            },
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($(itemek).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek).css("background-image", 'none');
							$(itemek).css("background-color", valued);

						}
					}
				}
			},
			label : {
				type : "label",
				customName : "Kolor"
			},
			size : {
				type : 'text',
				name : "Width Height",
				value : "100px 35px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val().split(" ");
							$(itemek).css("width", valued[0]);
							$(itemek).css("height", valued[1]);
						}
					}
				}
			},
			border : {
				type : 'text',
				name : "Border: size style color",
				value : "1px solid #ff0000",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border", $(this).val());
						}
					}
				}
			},
			radius : {
				type : 'text',
				name : "Radius",
				value : "5px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border-radius", $(this).val());
						}
					}
				}
			},
			shadow : {
				type : 'text',
				name : "Shadow",
				value : "3px 3px 5px #888888",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
							} else {
								zaczarowany_shadow = $(this).val();
								$(itemek).css("box-shadow", $(this).val());
							}
						}
					}
				}
			},
			gradient : {
				type : 'text',
				name : "Gradient",
				value : "bottom, #808080 5%, #d3d3d3 53%",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("background-image", "linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-moz-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-o-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-webkit-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-ms-linear-gradient(#808080 0%, #d3d3d3 100%)");
								zaczarowany_gradient = "#808080 0%, #d3d3d3 100%";
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
							} else {
								zaczarowany_gradient = $(this).val();
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
								$(itemek).css("background-image", "linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-moz-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-o-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-webkit-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-ms-linear-gradient(" + $(this).val() + ")");
							}
						}
					}
				}
			}
		},
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					checkbox:{
						name: "Prawidłowa odpowiedź ?",
						selected: bol
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});

$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var bol;
	var itemek='#check9';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek+"_text").text(valued);

						}
					}
				}
			},
			checkbox: {
                name: "Prawidłowa odpowiedź", 
                type: 'checkbox', 
                selected: bol,
                events : {
					mouseup : function(e) {
						if(bol==true)
							bol=false;
						else
							bol=true;
					}
				}
            },
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($(itemek).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$(itemek).css("background-image", 'none');
							$(itemek).css("background-color", valued);

						}
					}
				}
			},
			label : {
				type : "label",
				customName : "Kolor"
			},
			size : {
				type : 'text',
				name : "Width Height",
				value : "100px 35px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val().split(" ");
							$(itemek).css("width", valued[0]);
							$(itemek).css("height", valued[1]);
						}
					}
				}
			},
			border : {
				type : 'text',
				name : "Border: size style color",
				value : "1px solid #ff0000",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border", $(this).val());
						}
					}
				}
			},
			radius : {
				type : 'text',
				name : "Radius",
				value : "5px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek).css("border-radius", $(this).val());
						}
					}
				}
			},
			shadow : {
				type : 'text',
				name : "Shadow",
				value : "3px 3px 5px #888888",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
							} else {
								zaczarowany_shadow = $(this).val();
								$(itemek).css("box-shadow", $(this).val());
							}
						}
					}
				}
			},
			gradient : {
				type : 'text',
				name : "Gradient",
				value : "bottom, #808080 5%, #d3d3d3 53%",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "") {
								$(itemek).css("background-image", "linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-moz-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-o-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-webkit-linear-gradient(#808080 0%, #d3d3d3 100%)");
								$(itemek).css("background-image", "-ms-linear-gradient(#808080 0%, #d3d3d3 100%)");
								zaczarowany_gradient = "#808080 0%, #d3d3d3 100%";
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
							} else {
								zaczarowany_gradient = $(this).val();
								$.cookie(itemek+"_gradient", zaczarowany_gradient);
								$(itemek).css("background-image", "linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-moz-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-o-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-webkit-linear-gradient(" + $(this).val() + ")");
								$(itemek).css("background-image", "-ms-linear-gradient(" + $(this).val() + ")");
							}
						}
					}
				}
			}
		},
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					size : {
						name : "Width,Height",
						value : ($(itemek).css("width") + " " + $(itemek).css("height"))
					},
					edit : {
						name : "Ask",
						value : $(itemek+"_text").text()
					},
					checkbox:{
						name: "Prawidłowa odpowiedź ?",
						selected: bol
					},
					border : {
						name : "Border: size style color",
						value : ($(itemek).css("border-left-width") + " " + $(itemek).css("border-left-style") + " " + rgb2hex($(itemek).css("border-left-color")) )
					},
					radius : {
						name : "Radius",
						value : $(itemek).css("border-top-left-radius")
					},
					shadow : {
						name : "Shadow",
						value : zaczarowany_shadow
					},
					color : {
						name : "Color",
						value : rgb2hex($(itemek).css("background-color"))
					}
				}
			};
		}
	});
});

/*
$(function() {
	var selektor = 4;
	var marginn;
	$kontrolka = '#pytanie_texts';
	$.contextMenu({
		selector : $kontrolka,
		callback : function(key, options) {
			//var m = "clicked: " + key;
			// window.console && console.log(m) || alert(m);
		},
		items : {
			edit : {
				name : "Ask",
				type : 'text',
				value : "Text",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$($kontrolka).text(valued);

							$(this).trigger('contextmenu:hide');
						}
					}
				}
			},
			size : {
				name : "Font size",
				type : 'text',
				value : "16px",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$($kontrolka).css("font-size", $(this).val());
							$(this).trigger('contextmenu:hide');
						}
					}
				}
			},
			color : {
				name : "Color",
				type : 'text',
				value : rgb2hex($($kontrolka).css("background-color")),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							//window.console && console.log(valued );
							$($kontrolka).css("background-image", 'none');
							$($kontrolka).css("color", valued);
							$(this).trigger('contextmenu:hide');
						}
					}
				}
			},
			label : {
				type : "label",
				customName : "text"
			},
			select : {
				name : "Select font family",
				type : 'select',
				options : {
					1 : 'Georgia',
					2 : 'Palatino Linotype',
					3 : 'Book Antiqua',
					4 : 'Times New Roman',
					5 : 'Arial',
					6 : 'Helvetica',
					7 : 'Arial Black',
					8 : 'Impact',
					9 : 'Lucida Sans Unicode',
					10 : 'Tahoma',
					11 : 'Verdana',
					12 : 'Courier New',
					13 : 'Lucida Console'
				},
				selected : 4,
				events : {
					mouseup : function(e) {
						var valued = $(this).val();
						if (valued != selektor) {
							//console.log(valued);
							selektor = valued;
							if (valued == 1)
								$($kontrolka).css("font-family", 'Georgia');
							if (valued == 2)
								$($kontrolka).css("font-family", 'Palatino Linotype');
							if (valued == 3)
								$($kontrolka).css("font-family", 'Book Antiqua');
							if (valued == 4)
								$($kontrolka).css("font-family", 'Times New Roman');
							if (valued == 5)
								$($kontrolka).css("font-family", 'Arial');
							if (valued == 6)
								$($kontrolka).css("font-family", 'Helvetica');
							if (valued == 7)
								$($kontrolka).css("font-family", 'Arial Black');
							if (valued == 8)
								$($kontrolka).css("font-family", 'Impact');
							if (valued == 9)
								$($kontrolka).css("font-family", 'Lucida Sans Unicode');
							if (valued == 10)
								$($kontrolka).css("font-family", 'Tahoma');
							if (valued == 11)
								$($kontrolka).css("font-family", 'Verdana');
							if (valued == 12)
								$($kontrolka).css("font-family", 'Courier New');
							if (valued == 13)
								$($kontrolka).css("font-family", 'Lucida Console');
						}

						//$("#miejsce").css("background-color",valued);
					}
				}
			},
			radio1 : {
				name : "Align Left",
				type : 'radio',
				radio : 'radio',
				value : '1',
				events : {
					mouseup : function(e) {
						$($kontrolka).css("text-align", "left");
					}
				}
			},
			radio2 : {
				name : "Align Center",
				type : 'radio',
				radio : 'radio',
				value : '2',
				selected : true,
				events : {
					mouseup : function(e) {
						$($kontrolka).css("text-align", "center");
					}
				}
			},
			radio3 : {
				name : "Align Right",
				type : 'radio',
				radio : 'radio',
				value : '3',
				events : {
					mouseup : function(e) {
						$($kontrolka).css("text-align", "right");
					}
				}
			},
			margin : {
				name : "Margin: top right bottom left",
				type : 'text',
				value : "3px 0px 0px 0px",
				title : "top right bottom left",
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							var valued = $(this).val();
							if (valued != "") {
								//window.console && console.log(valued );
								$($kontrolka).css("margin", valued);
								marginn = valued;
								$(this).trigger('contextmenu:hide');
							}
						}
					}
				}
			}
		},
		build : function($trigger, e) {
			return {
				callback : function() {
				},
				items : {
					edit : {
						name : "Ask",
						value : ($($kontrolka).text())
					},
					color : {
						name : "Color",
						value : rgb2hex($($kontrolka).css("color"))
					},
					select : {
						name : "Select",
						selected : selektor
					},
					radio1 : {
						name : "Align Left",
						selected : radioo(1, $kontrolka)
					},
					radio2 : {
						name : "Align Center",
						selected : radioo(2, $kontrolka)
					},
					radio3 : {
						name : "Align Right",
						selected : radioo(3, $kontrolka)
					},
					margin : {
						name : "Margin: top right bottom left",
						value : marginn
					},
					size : {
						name : "Font size",
						value : $($kontrolka).css("font-size")
					}
				}
			};
		}
	});
});
*/
function radioo(number, pleaces) {
	if (number == 1) {
		if ($(pleaces).css("text-align") == "left")
			return (true);
		else
			return (false);
	}
	if (number == 2) {
		if ($(pleaces).css("text-align") == "center")
			return (true);
		else
			return (false);
	}
	if (number == 3) {
		if ($(pleaces).css("text-align") == "right")
			return (true);
		else
			return (false);
	}
}
$(document).ready(function() {
	/*
	var timer = $.timer(function() {
				var timm= new Date();
				var tims = timm.getHours()+':'+timm.getMinutes()+':'+timm.getSeconds();
                $("#timer0_text").text(tims);
        });

  timer.set({ time : 1000, autostart : true });
  */
	$("#play0").draggable({
		grid : [10, 10],
		containment : "parent",
		scroll : false
	});
	
	$("#timer0").resizable({
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
	
	
	$("#radio0").resizable({
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

	$('#radio0_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#radio0_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		console.log($(kontrolkaCK).html());
		return false;
	}); 
	
	$("#radio1").resizable({
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

	$('#radio1_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#radio1_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		console.log($(kontrolkaCK).html());
		return false;
	}); 
	$("#radio2").resizable({
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

	$('#radio2_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#radio2_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		console.log($(kontrolkaCK).html());
		return false;
	}); 
	$("#radio3").resizable({
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

	$('#radio3_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#radio3_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		console.log($(kontrolkaCK).html());
		return false;
	}); 
	$("#radio4").resizable({
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

	$('#radio4_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#radio4_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		console.log($(kontrolkaCK).html());
		return false;
	}); 
	$("#radio5").resizable({
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

	$('#radio5_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#radio5_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		console.log($(kontrolkaCK).html());
		return false;
	}); 
	$("#radio6").resizable({
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

	$('#radio6_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#radio6_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		console.log($(kontrolkaCK).html());
		return false;
	}); 
	$("#radio7").resizable({
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

	$('#radio7_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#radio7_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		console.log($(kontrolkaCK).html());
		return false;
	}); 
	$("#radio8").resizable({
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

	$('#radio8_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#radio8_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		console.log($(kontrolkaCK).html());
		return false;
	}); 
	$("#radio9").resizable({
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

	$('#radio9_text').bind('contextmenu', function(e) {
		var cssObj = {
			'top' : e.pageY,
			'left' : e.pageX,
			'visibility' : 'visible'
		}
		$( 'area2' ).ckeditor(function() { }, { skin : 'office2003'});
		$("#menu_text").css(cssObj).show();
		kontrolkaCK='#radio9_text';
		CKEDITOR.instances.area2.setData($(kontrolkaCK).html());
		console.log($(kontrolkaCK).html());
		return false;
	}); 
	
	
	$("#text0").resizable({
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
		scroll : false,
		handle: "#text0_text"
		
	});
	

	
	$("#text1").resizable({
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
	
	$("#text2").resizable({
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

	$("#text3").resizable({
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
	$("#text4").resizable({
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
	$("#text5").resizable({
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
	$("#text6").resizable({
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
	$("#text7").resizable({
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
	$("#text8").resizable({
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
	$("#text9").resizable({
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
	
		


});

$(function() {
	var zaczarowany_shadow;
	var zaczarowany_gradient;
	var bol;
	var itemek='#timer0';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ilość czasu do końca hh:mm:ss",
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
                name: "Wszystkie slajdy ?", 
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
						name : "Ilość czasu do końca hh:mm:ss",
						value : $(itemek+"_text").text()
					},
					checkbox:{
						name: "Wszystkie slajdy ?",
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
	var bol;
	var itemek='#text0';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'textarea',
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
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var bol;
	var itemek='#text1';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'textarea',
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
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value : $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
					}
					
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var bol;
	var itemek='#text2';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'textarea',
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
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var bol;
	var itemek='#text3';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'textarea',
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
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var bol;
	var itemek='#text4';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'textarea',
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
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var bol;
	var itemek='#text5';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'textarea',
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
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var bol;
	var itemek='#text6';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'textarea',
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
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var bol;
	var itemek='#text7';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'textarea',
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
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var bol;
	var itemek='#text8';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'textarea',
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
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
					}
				}
			};
		}
	});
});
$(function() {
	var zaczarowany_shadow;
	var bol;
	var itemek='#text9';
	$.contextMenu({
		selector : itemek,
		callback : function(key, options) {},
		items :{ 
		edit : {
				name : "Ask",
				type : 'textarea',
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
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
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
	var itemek='#radio0';
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
							if ($(this).val() == "" || $(this).val() == "0") {
								$(itemek).css("box-shadow", "0px 0px 0px #888888");
								zaczarowany_shadow = "0px 0px 0px #888888";
								console.log($(itemek).css("box-shadow"));
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
				value : $(itemek+"_gradient").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "" || $(this).val() == "0" ) {
								$(itemek+"_gradient").text("0");
								$(itemek).css("background-image","none");
							} else {
								$(itemek+"_gradient").text($(this).val());
								$(itemek).css("background-image","linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-o-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-moz-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-webkit-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-ms-linear-gradient("+$(this).val()+")");
							}
						}
					}
				}
			},
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					gradient : {
						name : "Gradient",
						value : $(itemek+"_gradient").text()
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
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
	var itemek='#radio1';
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
				value : $(itemek+"_gradient").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "" || $(this).val() == "0" ) {
								$(itemek+"_gradient").text("0");
								$(itemek).css("background-image","none");
							} else {
								$(itemek+"_gradient").text($(this).val());
								$(itemek).css("background-image","linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-o-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-moz-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-webkit-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-ms-linear-gradient("+$(this).val()+")");
							}
						}
					}
				}
			},
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					gradient : {
						name : "Gradient",
						value : $(itemek+"_gradient").text()
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
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
	var itemek='#radio2';
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
				value : $(itemek+"_gradient").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "" || $(this).val() == "0" ) {
								$(itemek+"_gradient").text("0");
								$(itemek).css("background-image","none");
							} else {
								$(itemek+"_gradient").text($(this).val());
								$(itemek).css("background-image","linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-o-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-moz-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-webkit-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-ms-linear-gradient("+$(this).val()+")");
							}
						}
					}
				}
			},
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					gradient : {
						name : "Gradient",
						value : $(itemek+"_gradient").text()
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
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
	var itemek='#radio3';
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
				value : $(itemek+"_gradient").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "" || $(this).val() == "0" ) {
								$(itemek+"_gradient").text("0");
								$(itemek).css("background-image","none");
							} else {
								$(itemek+"_gradient").text($(this).val());
								$(itemek).css("background-image","linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-o-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-moz-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-webkit-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-ms-linear-gradient("+$(this).val()+")");
							}
						}
					}
				}
			},
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					gradient : {
						name : "Gradient",
						value : $(itemek+"_gradient").text()
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
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
	var itemek='#radio4';
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
				value : $(itemek+"_gradient").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "" || $(this).val() == "0" ) {
								$(itemek+"_gradient").text("0");
								$(itemek).css("background-image","none");
							} else {
								$(itemek+"_gradient").text($(this).val());
								$(itemek).css("background-image","linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-o-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-moz-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-webkit-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-ms-linear-gradient("+$(this).val()+")");
							}
						}
					}
				}
			},
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					gradient : {
						name : "Gradient",
						value : $(itemek+"_gradient").text()
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
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
	var itemek='#radio5';
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
				value : $(itemek+"_gradient").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "" || $(this).val() == "0" ) {
								$(itemek+"_gradient").text("0");
								$(itemek).css("background-image","none");
							} else {
								$(itemek+"_gradient").text($(this).val());
								$(itemek).css("background-image","linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-o-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-moz-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-webkit-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-ms-linear-gradient("+$(this).val()+")");
							}
						}
					}
				}
			},
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					gradient : {
						name : "Gradient",
						value : $(itemek+"_gradient").text()
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
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
	var itemek='#radio6';
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
				value : $(itemek+"_gradient").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "" || $(this).val() == "0" ) {
								$(itemek+"_gradient").text("0");
								$(itemek).css("background-image","none");
							} else {
								$(itemek+"_gradient").text($(this).val());
								$(itemek).css("background-image","linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-o-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-moz-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-webkit-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-ms-linear-gradient("+$(this).val()+")");
							}
						}
					}
				}
			},
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					gradient : {
						name : "Gradient",
						value : $(itemek+"_gradient").text()
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
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
	var itemek='#radio7';
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
				value : $(itemek+"_gradient").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "" || $(this).val() == "0" ) {
								$(itemek+"_gradient").text("0");
								$(itemek).css("background-image","none");
							} else {
								$(itemek+"_gradient").text($(this).val());
								$(itemek).css("background-image","linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-o-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-moz-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-webkit-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-ms-linear-gradient("+$(this).val()+")");
							}
						}
					}
				}
			},
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					gradient : {
						name : "Gradient",
						value : $(itemek+"_gradient").text()
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
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
	var itemek='#radio8';
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
				value : $(itemek+"_gradient").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "" || $(this).val() == "0" ) {
								$(itemek+"_gradient").text("0");
								$(itemek).css("background-image","none");
							} else {
								$(itemek+"_gradient").text($(this).val());
								$(itemek).css("background-image","linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-o-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-moz-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-webkit-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-ms-linear-gradient("+$(this).val()+")");
							}
						}
					}
				}
			},
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					gradient : {
						name : "Gradient",
						value : $(itemek+"_gradient").text()
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
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
	var itemek='#radio9';
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
				value : $(itemek+"_gradient").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							if ($(this).val() == "" || $(this).val() == "0" ) {
								$(itemek+"_gradient").text("0");
								$(itemek).css("background-image","none");
							} else {
								$(itemek+"_gradient").text($(this).val());
								$(itemek).css("background-image","linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-o-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-moz-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-webkit-linear-gradient("+$(this).val()+")");
								$(itemek).css("background-image","-ms-linear-gradient("+$(this).val()+")");
							}
						}
					}
				}
			},
			punktacja : {
				type : 'text',
				name : "Punktacja",
				value :  $(itemek+"_punktacja").text(),
				icon : "edit",
				events : {
					keyup : function(e) {
						// add some fancy key handling here?
						if (e.keyCode == 13) {
							$(itemek+"_punktacja").text($(this).val());
							//console.log($(itemek+"_punktacja").text());
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
					},
					gradient : {
						name : "Gradient",
						value : $(itemek+"_gradient").text()
					},
					punktacja : {
						name : "Punktacja",
						value : $(itemek+"_punktacja").text()
					}
				}
			};
		}
	});
});
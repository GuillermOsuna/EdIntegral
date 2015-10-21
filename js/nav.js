$(document).scroll(function() {
  var dHeight = $(this).height()-$(window).height();
  var cont;
  var myWidth;
   myWidth = window.innerWidth;
	$('#prueba1').css('height', myWidth/4);

  if (dHeight >= $(this).scrollTop()) {
  $('nav').css('background', 'rgba(255, 255, 255,' + $(this).scrollTop() / $(window).height() + ')');
  $('#cabezera nav').css('box-shadow', '2px 1px 3px rgba(150,150,150,' + $(this).scrollTop() / $(window).height() + ')');

  	
  	if($(this).scrollTop() / $(window).height()>=.0 && $(this).scrollTop() / $(window).height()<=.2){
	  	$('#cabezera nav ul li a').css('color', 'rgba(255,255,255,1)');
	  	$('.navi').css('color', 'rgba(255,255,255,1)');
	  		$(function() {
			  $('.navi').hover(function() {
			    $('.navi').css('color', 'rgba(100,100,100,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('.navi').css('color', 'rgba(255,255,255,1)');
			  });
			});





	  		$(function() {
			  $('#cabezera nav ul li #1').hover(function() {
			    $('#cabezera nav ul li #1').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #1').css('color', 'rgba(255,255,255,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #2').hover(function() {
			    $('#cabezera nav ul li #2').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #2').css('color', 'rgba(255,255,255,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #3').hover(function() {
			    $('#cabezera nav ul li #3').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #3').css('color', 'rgba(255,255,255,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #4').hover(function() {
			    $('#cabezera nav ul li #4').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #4').css('color', 'rgba(255,255,255,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #5').hover(function() {
			    $('#cabezera nav ul li #5').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #5').css('color', 'rgba(255,255,255,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #6').hover(function() {
			    $('#cabezera nav ul li #6').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #6').css('color', 'rgba(255,255,255,1)');
			  });
			});
	  	  }



	  if($(this).scrollTop() / $(window).height()>=.21 && $(this).scrollTop() / $(window).height()<=.3){
	  	$('#cabezera nav ul li a').css('color', 'rgba(200,200,200,1)');
	  		$(function() {
			  $('#cabezera nav ul li #1').hover(function() {
			    $('#cabezera nav ul li #1').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #1').css('color', 'rgba(200,200,200,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #2').hover(function() {
			    $('#cabezera nav ul li #2').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #2').css('color', 'rgba(200,200,200,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #3').hover(function() {
			    $('#cabezera nav ul li #3').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #3').css('color', 'rgba(200,200,200,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #4').hover(function() {
			    $('#cabezera nav ul li #4').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #4').css('color', 'rgba(200,200,200,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #5').hover(function() {
			    $('#cabezera nav ul li #5').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #5').css('color', 'rgba(200,200,200,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #6').hover(function() {
			    $('#cabezera nav ul li #6').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #6').css('color', 'rgba(200,200,200,1)');
			  });
			});
	  	  }




	  if($(this).scrollTop() / $(window).height()>=.31 && $(this).scrollTop() / $(window).height()<=.5){
	  	$('#cabezera nav ul li a').css('color', 'rgba(120,120,120,1)');
	  		$(function() {
			  $('#cabezera nav ul li #1').hover(function() {
			    $('#cabezera nav ul li #1').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #1').css('color', 'rgba(120,120,120,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #2').hover(function() {
			    $('#cabezera nav ul li #2').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #2').css('color', 'rgba(120,120,120,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #3').hover(function() {
			    $('#cabezera nav ul li #3').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #3').css('color', 'rgba(120,120,120,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #4').hover(function() {
			    $('#cabezera nav ul li #4').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #4').css('color', 'rgba(120,120,120,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #5').hover(function() {
			    $('#cabezera nav ul li #5').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #5').css('color', 'rgba(120,120,120,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #6').hover(function() {
			    $('#cabezera nav ul li #6').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #6').css('color', 'rgba(120,120,120,1)');
			  });
			});
	  }





	  if($(this).scrollTop() / $(window).height()>=.51 && $(this).scrollTop() / $(window).height()<=.7){
	  	$('#cabezera nav ul li a').css('color', 'rgba(80,80,80,1)');
	  		$(function() {
			  $('#cabezera nav ul li #1').hover(function() {
			    $('#cabezera nav ul li #1').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #1').css('color', 'rgba(80,80,80,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #2').hover(function() {
			    $('#cabezera nav ul li #2').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #2').css('color', 'rgba(80,80,80,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #3').hover(function() {
			    $('#cabezera nav ul li #3').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #3').css('color', 'rgba(80,80,80,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #4').hover(function() {
			    $('#cabezera nav ul li #4').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #4').css('color', 'rgba(80,80,80,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #5').hover(function() {
			    $('#cabezera nav ul li #5').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #5').css('color', 'rgba(80,80,80,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #6').hover(function() {
			    $('#cabezera nav ul li #6').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #6').css('color', 'rgba(80,80,80,1)');
			  });
			});
	  }





	  if($(this).scrollTop() / $(window).height()>=.71){
	  	$('#cabezera nav ul li a').css('color', 'rgba(0,0,0,1)');
	  	$('.navi').css('color', 'rgba(0,0,0,1)');

	  	$(function() {
			  $('.navi').hover(function() {
			    $('.navi').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('.navi').css('color', 'rgba(0,0,0,1)');
			  });
			});



	  		$(function() {
			  $('#cabezera nav ul li #1').hover(function() {
			    $('#cabezera nav ul li #1').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #1').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #2').hover(function() {
			    $('#cabezera nav ul li #2').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #2').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #3').hover(function() {
			    $('#cabezera nav ul li #3').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #3').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #4').hover(function() {
			    $('#cabezera nav ul li #4').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #4').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #5').hover(function() {
			    $('#cabezera nav ul li #5').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #5').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  	$(function() {
			  $('#cabezera nav ul li #6').hover(function() {
			    $('#cabezera nav ul li #6').css('color', 'rgba(99,56,0,1)');
			  }, function() {
			    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
			    $('#cabezera nav ul li #6').css('color', 'rgba(0,0,0,1)');
			  });
			});
	  }
  }

		


});











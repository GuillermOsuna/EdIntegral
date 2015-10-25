$( document ).ready(function(){





	$("#bienvenidos").mouseover(function(){
		$('#imagenmas').show();
	});


	$("#mas1").click(function(){
		$('#menos1').show();
		$('#mas1').hide();
		$('#h21').css('text-align', 'center');
		$('#h21').css('margin-left','35%');
		$('#h21').css('color', 'white');
		$('#p1').css('display','block');
		$('#entrevista').css('color','white');
		$('#bienvenidos').css('background-color','rgba(163,75,17,1)');


	});
	$("#menos1").click(function(){
		$('#menos1').hide();
		$('#mas1').show();
		$('#h21').css('text-align', 'left');
		$('#h21').css('margin-left','-10%');
		$('#h21').css('color', 'black');

		$('#p1').hide();
		$('#bienvenidos').css('background-color','rgba(255,255,255,1)');


	});



	$("#mas2").click(function(){
		$('#menos2').show();
		$('#mas2').hide();
		$('#h22').css('text-align', 'center');
		$('#h22').css('margin-right','35%');
		$('#h22').css('color', 'white');
		$('#p2').css('display','block');
		/*$('#bienvenidos').css('background-color','rgba(163,75,17,1)');*/
		$('#bienvenidos2').css('background-color','rgba(163,75,17,1)');

	});

	$("#menos2").click(function(){
		$('#menos2').hide();
		$('#mas2').show();
		$('#h22').css('text-align', 'right');
		$('#h22').css('margin-right','-10%');
		$('#h22').css('color', 'black');

		$('#p2').hide();
		$('#bienvenidos2').css('background-color','rgba(255,255,255,1)');


	});

	$("#mas3").click(function(){
		$('#menos3').show();
		$('#mas3').hide();
		$('#h23').css('text-align', 'center');
		$('#p3').css('display','block');
		$('#h23').css('margin-left','35%');
		$('#h23').css('color', 'white');
		$('#bienvenidos3').css('background-color','rgba(163,75,17,1)');

	});




	$("#menos3").click(function(){
		$('#menos3').hide();
		$('#mas3').show();
		$('#h23').css('text-align', 'left');
		$('#h23').css('margin-left','-10%');
		$('#h23').css('color', 'black');
		$('#p3').hide();
		$('#bienvenidos3').css('background-color','rgba(255,255,255,1)');


	});




	
	$("#mas4").click(function(){
		$('#menos4').show();
		$('#mas4').hide();
		$('#h24').css('text-align', 'center');
		$('#p4').css('display','block');
		$('#h24').css('margin-right','35%');
		$('#h24').css('color', 'white');
		$('#bienvenidos4').css('background-color','rgba(163,75,17,1)');

	});
	$("#menos4").click(function(){
		$('#menos4').hide();
		$('#mas4').show();
		$('#h24').css('text-align', 'right');
		$('#h24').css('margin-right','-10%');
		$('#h24').css('color', 'black');
		$('#p4').hide();
		$('#bienvenidos4').css('background-color','rgba(255,255,255,1)');


	});
});
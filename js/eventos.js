$(document).ready(main);
$(document).ready(main_der);



var contador=1;
function main(){
$('#mas').click(function(){

		if(contador==1){

<<<<<<< HEAD
			$('#eventos_izquierda').css('background-size', '210% 100%');
			$('#cont').animate({
				right:'35%'
			});
			$('#cont').css('margin-top', '3%');
=======
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
		$('#hr1').show();
>>>>>>> 212158be2b4f53c5a18aac2a120e74fec1a620a7

		$('#mas').animate({
				right:'2%'
			});
		$('#mas').css('margin-top', '350px');
		$('#txt').css('opacity', '1');

<<<<<<< HEAD
	
			
=======
	});
	$("#menos1").click(function(){
		$('#menos1').hide();
		$('#mas1').show();
		$('#h21').css('text-align', 'left');
		$('#h21').css('margin-left','-10%');
		$('#h21').css('color', 'black');

		$('#p1').hide();
		$('#bienvenidos').css('background-color','rgba(255,255,255,1)');
		$('#hr1').hide();

>>>>>>> 212158be2b4f53c5a18aac2a120e74fec1a620a7

		
			contador=0;
		}
		else{
		
			$('#eventos_izquierda').css('background-size', '100% 100%');

			$('#cont').animate({
				right:'50%'
			});
			$('#cont').css('margin-top', '13%');

			$('#mas').css('margin-top', '185px');
			$('#mas').animate({
				right:'40%'
			});
			$('#txt').css('opacity', '0');

<<<<<<< HEAD
=======
	$("#mas2").click(function(){
		$('#menos2').show();
		$('#mas2').hide();
		$('#h22').css('text-align', 'center');
		$('#h22').css('margin-right','35%');
		$('#h22').css('color', 'white');
		$('#p2').css('display','block');
		/*$('#bienvenidos').css('background-color','rgba(163,75,17,1)');*/
		$('#bienvenidos2').css('background-color','rgba(163,75,17,1)');
		$('#hr2').show();
>>>>>>> 212158be2b4f53c5a18aac2a120e74fec1a620a7

			contador=1;
		}
	});
}

var contador_der=1;
function main_der(){
$('#mas_der').click(function(){

<<<<<<< HEAD
		if(contador_der==1){
=======
		$('#p2').hide();
		$('#bienvenidos2').css('background-color','rgba(255,255,255,1)');
		$('#hr2').hide();
>>>>>>> 212158be2b4f53c5a18aac2a120e74fec1a620a7

			$('#eventos_der').css('background-size', '210% 100%');
			$('#cont_der').animate({
				right:'35%'
			});
			$('#cont_der').css('margin-top', '3%');

<<<<<<< HEAD
		$('#mas_der').animate({
				right:'2%'
			});
		$('#mas_der').css('margin-top', '350px');
		$('#txt_der').css('opacity', '1');
=======
	});

	$("#mas3").click(function(){
		$('#menos3').show();
		$('#mas3').hide();
		$('#h23').css('text-align', 'center');
		$('#p3').css('display','block');
		$('#h23').css('margin-left','35%');
		$('#h23').css('color', 'white');
		$('#bienvenidos3').css('background-color','rgba(163,75,17,1)');
		$('#hr3').show();

	});
>>>>>>> 212158be2b4f53c5a18aac2a120e74fec1a620a7

	
			

		
			contador_der=0;
		}
		else{
		
			$('#eventos_derecha').css('background-size', '100% 100%');

			$('#cont_der').animate({
				right:'50%'
			});
			$('#cont_der').css('margin-top', '13%');

<<<<<<< HEAD
			$('#mas_der').css('margin-top', '185px');
			$('#mas_der').animate({
				right:'40%'
			});
			$('#txt_der').css('opacity', '0');
=======
	$("#menos3").click(function(){
		$('#menos3').hide();
		$('#mas3').show();
		$('#h23').css('text-align', 'left');
		$('#h23').css('margin-left','-10%');
		$('#h23').css('color', 'black');
		$('#p3').hide();
		$('#bienvenidos3').css('background-color','rgba(255,255,255,1)');
		$('#hr3').hide();
>>>>>>> 212158be2b4f53c5a18aac2a120e74fec1a620a7


			contador_der=1;
		}
	});
}







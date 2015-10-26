$(document).ready(main);
$(document).ready(main_der);



var contador=1;
var contador11=1;
function main(){
$('.mas').click(function(){

		if(contador==1){

			$('#eventos_izquierda').css('background-size', '210% 100%');
			$('#cont').animate({
				right:'35%'
			});
			$('#cont').css('margin-top', '3%');

		$('.mas').animate({
				right:'2%'
			});
		$('.mas').css('margin-top', '350px');
		$('#txt').css('opacity', '1');

	
			

		
			contador=0;
		}
		else{
		
			$('#eventos_izquierda').css('background-size', '100% 100%');

			$('#cont').animate({
				right:'50%'
			});
			$('#cont').css('margin-top', '13%');

			$('.mas').css('margin-top', '185px');
			$('.mas').animate({
				right:'40%'
			});
			$('#txt').css('opacity', '0');


			contador=1;
		}
	});
$('.mas11').click(function(){

		if(contador11==1){

			$('#eventos_izquierda11').css('background-size', '210% 100%');
			$('#cont11').animate({
				right:'35%'
			});
			$('#cont11').css('margin-top', '3%');

		$('.mas11').animate({
				right:'2%'
			});
		$('.mas11').css('margin-top', '350px');
		$('#txt11').css('opacity', '1');

	
			

		
			contador11=0;
		}
		else{
		
			$('#eventos_izquierda11').css('background-size', '100% 100%');

			$('#cont11').animate({
				right:'50%'
			});
			$('#cont11').css('margin-top', '13%');

			$('.mas11').css('margin-top', '185px');
			$('.mas11').animate({
				right:'40%'
			});
			$('#txt11').css('opacity', '0');


			contador11=1;
		}
	});
}
















var contador_der=1;
var contador_der21=1;
function main_der(){
$('#mas_der').click(function(){

		if(contador_der==1){

			$('.blancoderecha').css('left', '-52%');
			$('#cont_der').animate({
				left:'41%'
			});
			$('#cont_der').css('margin-top', '3%');

		$('#mas_der').animate({
				left:'2%'
			});
		$('#mas_der').css('margin-top', '350px');
		$('#txt20').css('opacity', '1');

	
			

		
			contador_der=0;
		}
		else{
		
			$('.blancoderecha').css('left', '0%');

			$('#cont_der').animate({
				left:'50%'
			});
			$('#cont_der').css('margin-top', '13%');

			$('#mas_der').css('margin-top', '185px');
			$('#mas_der').animate({
				left:'40%'
			});
			$('#txt20').css('opacity', '0');


			contador_der=1;
		}
	});




$('#mas_der21').click(function(){

		if(contador_der21==1){

			$('.blancoderecha21').css('left', '-52%');
			$('#cont_der21').animate({
				left:'41%'
			});
			$('#cont_der21').css('margin-top', '3%');

		$('#mas_der21').animate({
				left:'2%'
			});
		$('#mas_der21').css('margin-top', '350px');
		$('#txt21').css('opacity', '1');

	
			

		
			contador_der21=0;
		}
		else{
		
			$('.blancoderecha21').css('left', '0%');

			$('#cont_der21').animate({
				left:'50%'
			});
			$('#cont_der21').css('margin-top', '13%');

			$('#mas_der21').css('margin-top', '185px');
			$('#mas_der21').animate({
				left:'40%'
			});
			$('#txt21').css('opacity', '0');


			contador_der21=1;
		}
	});
}







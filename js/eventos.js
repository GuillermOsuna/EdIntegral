$(document).ready(main);
$(document).ready(main_der);



var contador=1;
function main(){
$('#mas').click(function(){

		if(contador==1){

			$('#eventos_izquierda').css('background-size', '210% 100%');
			$('#cont').animate({
				right:'35%'
			});
			$('#cont').css('margin-top', '3%');

		$('#mas').animate({
				right:'2%'
			});
		$('#mas').css('margin-top', '350px');
		$('#txt').css('opacity', '1');

	
			

		
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


			contador=1;
		}
	});
}

var contador_der=1;
function main_der(){
$('#mas_der').click(function(){

		if(contador_der==1){

			$('#eventos_der').css('background-size', '210% 100%');
			$('#cont_der').animate({
				right:'35%'
			});
			$('#cont_der').css('margin-top', '3%');

		$('#mas_der').animate({
				right:'2%'
			});
		$('#mas_der').css('margin-top', '350px');
		$('#txt_der').css('opacity', '1');

	
			

		
			contador_der=0;
		}
		else{
		
			$('#eventos_derecha').css('background-size', '100% 100%');

			$('#cont_der').animate({
				right:'50%'
			});
			$('#cont_der').css('margin-top', '13%');

			$('#mas_der').css('margin-top', '185px');
			$('#mas_der').animate({
				right:'40%'
			});
			$('#txt_der').css('opacity', '0');


			contador_der=1;
		}
	});
}







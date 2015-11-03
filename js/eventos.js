$(document).ready(main);



var contador=1;
function main(){

$(".mas").hover(function(){
    $('#eventos_izquierda').css("-webkit-filter", "grayscale(100%)");
    $('#eventos_izquierda').css("filter", "grayscale(100%)");
    }, function(){
    $('#eventos_izquierda').css("-webkit-filter", "grayscale(0%)");
    $('#eventos_izquierda').css("filter", "grayscale(0%)");
});

$(".mas_der").hover(function(){
    $('#eventos_derecha').css("-webkit-filter", "grayscale(100%)");
    $('#eventos_derecha').css("filter", "grayscale(100%)");
    }, function(){
    $('#eventos_derecha').css("-webkit-filter", "grayscale(0%)");
    $('#eventos_derecha').css("filter", "grayscale(0%)");
});

$('.mas').click(function(){

		if(contador==1){

			$('.flecha').css('right', '-50%');
			$('#cont').animate({
				right:'39%'
			});
			$('#cont').css('top', '930px');

		$('.mas').animate({
				right:'1%'
			});
		$('.mas').css('margin-top', '350px');
		$('#txt').css('opacity', '1');
			contador=0;
		}
		else{
		
			$('.flecha').css('right', '67%');

			$('#cont').animate({
				right:'45%'
			});
			$('#cont').css('top', '1050px');

			$('.mas').css('margin-top', '185px');
			$('.mas').animate({
				right:'35%'
			});
			$('#txt').css('opacity', '0');


			contador=1;
		}
	});




var contador_der=1;
$('.mas_der').click(function(){

		if(contador_der==1){

			$('.flecha_der').css('left', '-50%');
			$('#cont_der').animate({
				right:'39%'
			});
			$('#cont_der').css('top', '1330px');

		$('.mas_der').animate({
				right:'96%'
			});
		$('.mas_der').css('margin-top', '350px');
		$('#txt_der').css('opacity', '1');
			contador_der=0;
		}
		else{
		
			$('.flecha_der').css('left', '60%');

			$('#cont_der').animate({
				right:'20%'
			});
			$('#cont_der').css('top', '1450px');

			$('.mas_der').css('margin-top', '185px');
			$('.mas_der').animate({
				right:'55%'
			});
			$('#txt_der').css('opacity', '0');


			contador_der=1;
		}
	});
}







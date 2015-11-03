$( document ).ready(function() {

	var timer;
$(".section_rgba1").mouseenter( function(){
    timer = setTimeout(function () {
       $('.p1').show();
			$('.h31').hide();;
    }, 350);
}).mouseleave( function(){
    clearTimeout(timer);
    $('.p1').hide();
			$('.h31').show();
});
var timer;
$(".section_rgba2").mouseenter( function(){
    timer = setTimeout(function () {
       $('.p2').show();
			$('.h32').hide();;
    }, 350);
}).mouseleave( function(){
    clearTimeout(timer);
    $('.p2').hide();
			$('.h32').show();
});
var timer;
$(".section_rgba3").mouseenter( function(){
    timer = setTimeout(function () {
       $('.p3').show();
			$('.h33').hide();;
    }, 350);
}).mouseleave( function(){
    clearTimeout(timer);
    $('.p3').hide();
			$('.h33').show();
});
var timer;
$(".section_rgba4").mouseenter( function(){
    timer = setTimeout(function () {
       $('.p4').show();
			$('.h34').hide();;
    }, 350);
}).mouseleave( function(){
    clearTimeout(timer);
    $('.p4').hide();
			$('.h34').show();
});




	
});


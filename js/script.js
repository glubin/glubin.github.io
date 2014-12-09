$(document).ready(function () {

	$(window).load(function(){


$(document).mousemove(function(e){
    var $width = ($(document).width())/200;
    var $height = ($(document).height())/200;
    var $pageX = parseInt(e.pageX / $width,10) + 30;
	var $pageY = parseInt(e.pageY / $height,10) + 30;
    $("#box").css("background-color", "rgb(0,"+$pageY+","+$pageX+")");
 	console.log($pageX + ", " + $pageY);
});

		// $("#test").click(function () {
		// 	$('#box').css({"background-color":"none"});	

		// 	// var letters = '0123456789ABCDEF'.split('');
		// 	// var color = '#';
		// 	// for (var i = 0; i < 6; i++ ) {
		// 	// color += letters[Math.floor(Math.random() * 16)];}

		// 	var x = event.clientX;
		// 	console.log(x);

		// 	$('#box').css({"background-color":color});
		// });
	});

});
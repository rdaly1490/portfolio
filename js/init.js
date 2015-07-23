$(document).ready(function(){
	$('.button-collapse').sideNav();
    $('.parallax').parallax();

    var options=[
    	{selector: '#test', offset: 400, callback: Materialize.showStaggeredList("#test") }
    ];

    // Materialize.scrollFire(options);
});
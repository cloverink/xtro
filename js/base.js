var s_k = 600;

$(document).ready(function(){	
	fn__InitScreenSize();
	fn__InitMegaMenu();
});

//$(window).resize(fn__InitScreenSize);

function fn__InitScreenSize() {				

	$("#dvContainer").css("min-height",s_k + "px");		
}

function fn__InitMegaMenu() {
	$("#dvMegaMenu #dvMenu #btnMetro").click(function(){
		window.location = "metro.php";
	});		
	$("#dvMegaMenu #dvMenu #btnSilicone").click(function(){
		window.location = "silicone.php";
	});		
	$("#dvMegaMenu #dvMenu #btnPremium").click(function(){
		window.location = "premium.php";		
	});		
	$("#dvMegaMenu #dvMenu #btnLocation").click(function(){
		window.location = "location.php";
	});		
	$("#dvMegaMenu #dvMenu #btnStore").click(function(){
		window.location = "store.php";
	});		
	$("#dvMegaMenu #dvMenu #btnNeed").click(function(){
		window.location = "need2know.php";
	});		
}
	
	
	
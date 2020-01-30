//Ecouter le scroll de la fenetre => header

$(window).scroll(function(){
	
	var window_position = $(window).scrollTop(); // renvoie le nombre de pixel qui ont été scrollée dans l'élément
	console.log(window_position);
	
	//Si la fenetre est scrollée  (scrollTop > 0) alors ajouter la classe .sticky
	//Sinon retirer la classe . sticky
	
	if(window_position > 0){
		
		$('header').addClass('sticky');
		console.log('ok');
	}
	
	else{
		
		$('header').removeClass('sticky');
		console.log('non');
		
	}
	
})
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


//Apparition des sections (hors section 1)

// Au changement de la page : 
// décaler les sections (main > section) de 100px vers le bas et les rendre transparentes


$(document).ready(function(){ //Une fois que le document est pret 
	

	/*$('main > section:not(#section1)').css('opacity',0); 
	console.log('Le document est pret');
	
	$('main > section:not(#section1)').css('position','relative'); 
	$('main > section:not(#section1)').css('transform','translateY(200px)'); 
	$('main > section:not(#section1)').css('transition','all 0.6s'); */
	
	//En une seule sélection 
	$('main > section:not(#section1)').css({
		
		
		'opacity' : 0 ,
		'position' : 'relative',
		'top' : '50px',
		'transition' : 'all 0.6s'
		
	})
})

//Au scroll : Si le top d'une section est de 1/3 du bas de l'écran : apparition (opacity)	

$(window).scroll(function(){

	//Selectionner  les sections et mesurer leur top		
	$('main > section:not(#section1)').each(function(index){
		
		var top_section = $(this).position().top;
		
		//hauteur de scroll : $(window).scrollTop();
		//hauteur de la fenetre : $(window).height();
		var ecart_topSection_bottomWindow = $(window).height() - top_section + $(window).scrollTop();
		
		//Afficher dans la console l'écart
		console.log('Ecart Section '+index + ' = '+ ecart_topSection_bottomWindow);
		
		//si le haut de la section est à plus d'un tiers du bas de l'écran : apparition
		if(ecart_topSection_bottomWindow >= $(window).height() / 3){
			
			$(this).css('opacity',1);
			console.log('Changement');
			
			$(this).css('transform','none');
		}
		
	})
	
})

function showModal(){
	
	$('body').append('<div id="modal"><button onclick="closeModal()">Fermer</button></div>');
}

function closeModal(){
	
	$('#modal').remove();
}

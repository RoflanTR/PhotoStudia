var number =  document.querySelectorAll('.number-items')
const screenWidth = window.innerWidth;
if(screenWidth<520){
	for (let index = 0; index < number.length; index++) {
		number[index].textContent = "•";
		
	}
}

$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		responsive: [
    {breakpoint: 480,
      settings: {
        arrows: false,}
	}
		]
	});
	
})
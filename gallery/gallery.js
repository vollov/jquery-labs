/**
 * Slider object
 * @param name
 * @return
 */

function Slider(){
	this.scrollAmount = $('#photos_inner').width() - $('#photos').width();	

	this.nextScroll = $('#photos').width();
	this.photoInnerCurrentPosition = parseInt($('#photos_inner').css('left'));
	if(isNaN(this.photoInnerCurrentPosition)) {
		this.photoInnerCurrentPosition = 0;
	}
	this.remainingScroll = this.scrollAmount - Math.abs(this.photoInnerCurrentPosition);	
	
	this.moveToNext = function () {
		this.photoInnerCurrentPosition -= this.nextScroll;
		this.remainingScroll = this.scrollAmount - Math.abs(this.photoInnerCurrentPosition);
		//alert("moveToNext->" + this.photoInnerCurrentPosition);
	}
	
	this.moveToPrevious = function () {
		this.photoInnerCurrentPosition += this.nextScroll;
		this.remainingScroll = this.scrollAmount - Math.abs(this.photoInnerCurrentPosition);
		//alert("moveToPrevious->" + this.photoInnerCurrentPosition);
	}
}

function toggleButtons(slider){
	togglePreviousButton(slider);
	toggleNextButton(slider);
}

function togglePreviousButton(slider) {
	if(slider.photoInnerCurrentPosition == 0) {
		$('#previous').hide();
	} else {
		$('#previous').show();
	}
}

function toggleNextButton(slider) {
	if(slider.remainingScroll == 0) {
		$('#next').hide();
	} else {
		$('#next').show();
	}
}

function nextSlide(slider) {
	// Scroll left
	$('#photos_inner').animate({'left':'-=' + slider.nextScroll}, 'slow');
	slider.moveToNext();
}

function previousSlide(slider) {
	// Scroll left
	$('#photos_inner').animate({'left':'+=' + slider.nextScroll}, 'slow');
	slider.moveToPrevious();
}

function updateImage(file, code){	
	$('#detail').attr("src","../images/original/"+file+".jpg");
	$('#product_code').text(code);
}

$(document).ready(function(){
	var slider = new Slider();
	toggleButtons(slider);	
	
	$('#next').click(function(){
		nextSlide(slider);
		toggleButtons( slider);
	});	
	$('#previous').click(function(){
		previousSlide(slider);
		toggleButtons(slider);
	});	
});
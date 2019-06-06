$(document).ready(function() {
	
// shop nav

	$('.dropdown').hover(function() {
		if($(window).width() > 1200) {
			$('.dropdown-menu').css('display', 'flex');
		}
	}, function() {
		if($(window).width() > 1200) {
			$('.dropdown-menu').css('display', 'none');
		}
	});

$('.dropdown').click(function() {
	if($(window).width() <= 1200) {
		$('.dropdown-menu').toggle();
	}
});
	
// shop nav end
	
// cart popup
$('.cart-btn').click(function() {
	$('.popup').addClass('popupIn');
	$('.popupbg').addClass('popupIn');
});
$('.popupbg, .fa-times').click(function() {
	$('.popup').removeClass('popupIn').addClass('popupOut');
	$('.popupbg').removeClass('popupIn').addClass('popupOut');
	setTimeout(function(){ 
		$('.popup').removeClass('popupOut');
	$('.popupbg').removeClass('popupOut'); }, 200);
});

//cart empty
var itemNum = 0;
	
if (itemNum == 0) {
	$('.empty').show();
	$('.checkout').addClass('disable-checkout');
} else {
	$('.empty').hide();
	$('.checkout').removeClass('disable-checkout');
}
	
// click item
$('.options div').click(function() {
	
	itemNum++;
	
	if (itemNum == 0) {
		$('.empty').show();
		$('.checkout').addClass('disable-checkout');
	} else {
		$('.empty').hide();
		$('.checkout').removeClass('disable-checkout');
	}
	
	var item = $('.name').text();
	var cost = $(this).find('h5').text();
	var oz = $(this).find('.amount').text();
	var img = $(this).parent().parent().parent().find('.image').attr('src');
	
	$('.popup').append(
		'<div class="item row mt-5">' + '<div class="col-3">' + '<a href="#" class="">' + '<img src=' + img + ' alt="" class="w-100">' + '</a>' + '</div>' + '<div class="col-8">' + '<a href="#" class="item-label">' + '<p class="mb-0">' + '<strong>' + item + oz + '</strong>' + '</p>' + '</a>' + '<p class="mb-0 price">' + cost + '</p>' + '</div>' + '<i class="fas fa-times"></i>' + '</div>'
	);
	
	$('.itemNum').html(itemNum);
	
});
	
//remove item
$('body').on('click', '.item i', function() {
	
	itemNum--;
	
	if (itemNum == 0) {
		$('.empty').show();
		$('.checkout').addClass('disable-checkout');
	} else {
		$('.empty').hide();
		$('.checkout').removeClass('disable-checkout');
	}
	
	$(this).parent().remove();
	
});
});
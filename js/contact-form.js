$(document).ready(function() {
	$('.submit').click(function() {
		
		event.preventDefault();
		
		var name = $('#inputName').val();
		var email = $('#inputEmail').val();
		var message = $('#inputMessage').val();
		
		var valid = 0;
		
		if (email.length > 5 && email.includes('@') && email.includes('.')) {
			valid ++;
		} else {
			$('#inputEmail').siblings('.red').remove();
			$('#inputEmail').after('<label class="red">* Email is required</label>');
		}
		
		if (name.length > 2) {
			valid ++;
		} else {
			$('#inputName').siblings('.red').remove();
			$('#inputName').after('<label class="red">* Name is required</label>');
		}
		
		if (message.length > 2) {
			valid ++;
		} else {
			$('#inputMessage').siblings('.red').remove();
			$('#inputMessage').after('<label class="red">* Message is required</label>');
		}
		
		if (valid == 3) {
			window.location.href = '../pages/contact-form.html';
		}
		
	})
})
$(document).ready(function(){
	$('#login-btn').click(function(event){
		event.preventDefault();
		$('#signin').hide();
		$('#quiz-loader').show();
		setTimeout(function(){
			window.location.replace("./quiz.html");
		}, 3000);
	})
});


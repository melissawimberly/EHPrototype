$(document).ready(function(){
	$('#login-btn').click(function(event){
		event.preventDefault();
		$('#signin').hide();
		$('#quiz-loader').show();
		setTimeout(function(){
			$("<a href='./quiz.html'></a>").click();
		}, 3000);
	})
});


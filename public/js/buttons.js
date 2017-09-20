$(document).ready(function(){
	$(".loginInput").hide();
	$(".beginnerOrPro").hide();
	$(".loginButton").on("click", function(event){
		$(".newUserButton").hide();
		$(".loginInput").show();
		$(".newUserOrLogin").addClass("login");
		$(".login").removeClass("newUserOrLogin");
		$(".loginButton").addClass("newLoginButton");
		$(".newLoginButton").removeClass("loginButton");
		start(event);  	
	});
	
	function start(event){
		$(".newLoginButton").on("click", function(event){
			handleFormSubmit(event);
		});
	}

	var userName = $(".username");
	var gymIdField = $(".gymIdField");
	
	// var newLoginButton = $(".newLoginButton");
	// $(newLoginButton).on("submit", handleFormSubmit);



	function handleFormSubmit(event){
		console.log("Event" + event.userName);
		event.preventDefault();

		var returningUser = {
			userName: userName.val().trim(),
			gym: gymIdField.val().trim()
		}
		

		console.log(returningUser);
		submitPost(returningUser);
	}

	function submitPost(post){
		$(".newLoginButton").on("click", function(event) {
			var expertRadio = document.getElementById("expert");
			var rookieRadio = document.getElementById("rookie");
			
			if (rookieRadio.checked) {
				console.log("rookie radio checked!");
				window.location.href = "/rookie-schedule?rookie_id=" + post.userName + "&gym_id=" + post.gym;
			}
			if (expertRadio.checked) {
				console.log("expert radio checked!");
				window.location.href = "/expert-schedule?expert_id=" + post.userName + "&gym_id=" + post.gym;
			}

			if (!userName.val().trim() || !expertRadio.checked && !rookieRadio.checked) {
				alert("Please fill out all the fields.")
			}
		});
	}
})

$(".newUserButton").on("click", function(event){
	event.preventDefault();
   	$(".newUserButton").hide();
   	$(".loginButton").hide();
   	$(".beginnerOrPro").show();
});

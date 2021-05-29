$(document).ready(function() {
	const inputs = document.querySelectorAll(".input");
	function hi(){
		alert("hi")
	}

	function addcl(){
		let parent = this.parentNode.parentNode;
		parent.classList.add("focus");
	}

	function remcl(){
		let parent = this.parentNode.parentNode;
		if(this.value == ""){
			parent.classList.remove("focus");
		}
	}

	

	inputs.forEach(input => {
		input.addEventListener("focus", addcl);
		input.addEventListener("blur", remcl);
	});

	// $("#submit").click(function(){
	// 	if(false);
	// 	{
	// 		alert($("#userName").val().length)
	// 		alert("Name must contain atleast 5 characters")
	// 	}

	// })
	// function loginUser(){
	// 	alert("hi")
	// }
})
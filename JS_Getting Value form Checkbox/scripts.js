function myFunction() {

	// getting the user name once user clicks submit button
	var user_name = document.getElementById('user-name').value;

	// targeting 'custom-message' and saving to variable for use
	var divContainer = document.querySelector('#custom-message');


	// check to see if the input box contain anything
	if (user_name.length < 3) {
		// remove any class that is currently attached
		divContainer.classList.remove('success-text');

		// target the dive with id 'custom-message' and inject the following html
		document.getElementById('custom-message').innerHTML = "Dude, enter a longer name!";

		// also add a error class to the text
		divContainer.classList.add('error-text');
	}
	else {
		// remove any class that is currently attached
		divContainer.classList.remove('error-text');

		 // target the div with id of 'custom-message' and insert the following html
		document.getElementById('custom-message').innerHTML = "<h1>Hey " + user_name + " what's up?</h1>";

		// also add a style to the class
		divContainer.classList.add('success-text');
	}
}





// this is a array of quotes
var messageArray = ["Luke, I am your father",
					"Do or do not, there is no try",
					"Join the dark side"
					];
// this is for resetting
var messageIndex = 0;





function changeMessage() {

	// grabbing the quote...
	var newMessage = messageArray[messageIndex];

	// targeting the 'mainMessage' id container in html...
	var messageElement = document.getElementById("mainMessage");

	// placing the current quote into html...
	messageElement.innerHTML = newMessage;

	// increment the 'messageIndex' count
	messageIndex++;

	// check to see if 'messageIndex' has exceeded the quote array length
	if(messageIndex > messageArray.length-1) {
		// if it exceeds array length, then reset 'messageIndex' to 0 to
		// start over.
		messageIndex = 0;
	}
}




// once the DOM is all loaded up, execute the following code
window.onload = function() {
	// every 5 seconds, setInterval will trigger changeMessage
	setInterval(changeMessage, 5000)
}
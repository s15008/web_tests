var DEBUG = true;

var messageList = [ "やふー", "こなものだいすきー", "きょうじ、きょうじー", "みのり！"];
var messageNum = 0;

document.addEventListener( 'DOMContentLoaded', function( eve) {
	var messageBox = document.getElementById( 'messageBox');
	messageBox.print = function( message) {
		this.innerHTML = "<p>" + message + "</p>";
	};

	var message = document.getElementById( "message");

	messageBox.print( messageList[ messageNum]);

	messageBox.addEventListener( 'click', function( eve) {
		messageNum++;
		if( messageNum > messageList.length-1) messageNum = 0;
		this.print( messageList[ messageNum]);

	}, false);

}, false);

/* Debug comment
	debugLog( "unko"); -> unko
*/
function debugLog( obj) {
	if ( DEBUG) console.log( obj);
}

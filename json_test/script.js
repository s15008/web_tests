var DEBUG = true;

var messageNum = 0;

document.addEventListener( 'DOMContentLoaded', function( eve) {
	$.ajax({
	  url: "/charactor.json",
	  data: {
	    zipcode: 97201
	  },
	  success: function( data ) {
	    $( "#weather-temp" ).html( "<strong>" + data + "</strong> degrees" );
	  }
	});

	// charactor data
	var charctorData = '{"name" : "pierre", "message" : [ "やふー", "こなものだいすきー", "きょうじ、きょうじー", "みのり！"]}';
	var messageL = JSON.parse( charctorData);

	// Message Box
	var messageBox = document.getElementById( 'messageBox');
	// Print argument
	messageBox.print = function( message) {
		this.innerHTML = "<p>" + message + "</p>";
	};

	var message = document.getElementById( "message");

	messageBox.print( messageL[ "message"][ messageNum]);

	messageBox.addEventListener( 'click', function( eve) {
		messageNum++;
		if( messageNum > messageL[ "message"].length-1) messageNum = 0;
		this.print( messageL[ "message"][ messageNum]);

	}, false);

}, false);

// Debug comment
//	debugLog( "unko"); -> unko
function debugLog( obj) {
	if ( DEBUG) console.log( obj);
}

var DEBUG = true;

var messageNum = 0;

document.addEventListener( 'DOMContentLoaded', function( eve) {
	var charactorSrc = null;

	$.ajax({
		url: "http://127.0.1.1/charactor.json",
	}).done(function(data){ //ajaxの通信に成功した場合
		alert( "xhr success");
		charactorData = data;
	}).fail(function(data){ //ajaxの通信に失敗した場合
		alert( "xhr error");
	});

	// charactor data
	//var charctorData = '{"name" : "pierre", "message" : [ "やふー", "こなものだいすきー", "きょうじ、きょうじー", "みのり！"]}';
	var charactorData = JSON.parse( charactorSrc);

	// Message Box
	var messageBox = document.getElementById( 'messageBox');
	// Print argument
	messageBox.print = function( message) {
		this.innerHTML = "<p>" + message + "</p>";
	};

	var message = document.getElementById( "message");

	messageBox.print( charactorData[ "message"][ messageNum]);

	messageBox.addEventListener( 'click', function( eve) {
		messageNum++;
		if( messageNum > charactorData[ "message"].length-1) messageNum = 0;
		this.print( charactorData[ "message"][ messageNum]);

	}, false);

}, false);

// Debug comment
//	debugLog( "unko"); -> unko
function debugLog( obj) {
	if ( DEBUG) console.log( obj);
}

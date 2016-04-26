'use strict';

var algorithmList = {
	rot13: function( string) { return caesarStr( string, 13);},
	yogimania: function( string) { return yogimania();}
};

document.getElementById( 'btnEncrypt').addEventListener( 'click', function( e){
	var inTxt = document.getElementById( 'input').value;
	var algoOpt = document.getElementById( 'algorithm');
	var algoName =  algoOpt[ algoOpt.selectedIndex].value;

	//var outTxt = caesarStr( inTxt, 13);
	var outTxt = algorithmList[ algoName]( inTxt);
	document.getElementById( 'output').value = outTxt;
});

function caesar( char, shift) {
	//var length = 'z'.charCodeAt( 0) - 'a'.charCodeAt( 0) + 1;
	var length = 26;
	var codePoint = ( char.charCodeAt( 0) - 97 + shift) % length;
	return String.fromCharCode( codePoint + 97);
}

function caesarStr( string, shift) {
	var result = '';
	for ( var i = 0; i < string.length; i++) {
		result += caesar( string[i], shift);
	}
	return result;
}

var yogiGoroku = function() {
	var goroku = [
		'君は与儀を知っているのか？',
		'僕は与儀。 君も与儀かい？',
		"I'm a perfect Yogiman"
	];

	return goroku[ Math.floor( Math.random() * goroku.length)];
};

function yogimania( string) {
	//TODO 1919/1 I'm Yogi Genbu.
	return yogiGoroku();
}
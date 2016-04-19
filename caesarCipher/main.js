var algorithmList = {
	rot13: function( string) { caesarStr( string, 13)},
	yogimania: yogimania
};

document.getElementById( 'btnEncrypt').addEventListener( 'click', function( e){
	var inTxt = document.getElementById( 'input').value;
	var algorithm = document.getElementById( 'algorithm');

	var outTxt = caesarStr( inTxt, 13);
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

function yogimania() {
	return 'yogimania';
}
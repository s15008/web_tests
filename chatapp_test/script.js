$( function() {
	$( '#reloadBtn').on( 'click', function( eve) {
		$.ajax( {
			type: 'get',
			url: 'chatData.txt',
			contentType: 'text/plain',
			dataType: 'text'
		}).done( function(data){
			console.info( typeof data);
			$( '#chatArea').html( data);
		}).fail( function(data){
			console.error( "req error")
		});
	});

});
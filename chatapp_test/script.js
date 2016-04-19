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
			console.error( "req error");
		});
	});

	$( '#sendBtn').on( 'click', function( eve) {
		var message = $('#textInput').val();

		$.ajax( {
			type: 'post',
			url: 'input.php',
            data: message
		}).done( function(data){
			console.info( "req ok");
		}).fail( function(data){
			console.error( "req error");
		});
	});

});
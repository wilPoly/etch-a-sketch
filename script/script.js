$(document).ready(function(){

	function makeGrid(){
		var gridSize = 16;
		for (var i = 0; i < 16; i++) {
			$('#container').append(document.createElement('div'));
			$('#container').find('div').addClass('gridBlock');
			console.log('added')
		}
	}

	$('#generate').on('click', makeGrid);
	
});
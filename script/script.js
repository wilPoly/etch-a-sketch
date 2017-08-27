$(document).ready(function(){

	function makeGrid(){
		var gridSize = 16;
		for (var i = 0; i < gridSize; i++) {
			$('#container').append(document.createElement('div'));
			$('#container').find('div').addClass('gridBlock');
		}
	}

	$('#generate').on('click', makeGrid);
	
});
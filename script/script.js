function makeGrid(gridSize){
	//Create divs with 'gridBlock' class
	for (var i = 0; i < gridSize **2; i++) {
		$('<div>').appendTo('#container').addClass('gridBlock');
	}
	//Resize the divs depending on the grid-size
	var containerWidth = $('#container').width();
	var gridBlockSize =  containerWidth / gridSize;
	$('.gridBlock').css({'width': gridBlockSize, 'height': gridBlockSize});
	console.log('gridBlockSize : ' + gridBlockSize);
	console.log('Nombre de blocs : ' + gridSize **2)
}

function resetGrid(){
	var gridSize = window.prompt("How big do you want the grid?", 16);
	
}


$(document).ready(function(){

	//Calls function makeGrid(gridSize)
	makeGrid(16);

	//Draw function
	$('.gridBlock').hover(function(){
			$(this).css({'background-color': 'blue'});
	});

	//Reset grid function
	$('#generate').click('button', function(){
		window.prompt("How big do you want the grid?", 16);
	});
	
});
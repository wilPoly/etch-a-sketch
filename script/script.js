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

function draw(){
	$('.gridBlock').hover(function(){
				$(this).addClass('blue');
			});
}
 

$(document).ready(function(){

	var gridSize = 16;
	makeGrid(gridSize);
	draw();
	
	//Reset grid function
	$('#generate').click('button', function(){
		var gridSize = window.prompt("How big do you want the grid?", 16);
		$('.gridBlock').remove();
			if (gridSize === null) {
				makeGrid(16);
			}
			else {
				makeGrid(gridSize);
			}
		draw();
	});
	
});
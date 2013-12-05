jQuery( document ).ready( function ( $ ) {
	var brush_color = '#333';
	var left_down = false;
	var right_down = false;
	var mouse_position = { x: 0, y: 0 };
	var favorite_colors = new Array( '#333', 'blue', 'yellow', 'red' );;

	//functions to run on page lod
	TableResize();
	FavoriteColors( favorite_colors );

	//Action Listeners

	$(window).resize( function () { TableResize(); } );
	$('input#hex_field').keyup( function() { brush_color = $(this).val(); } );
	$('button.erase').click( function() { ChangeColor('white', $('td') ); } );
	$('div.color').click(function() { brush_color = $(this).css('background-color'); });

	////Rebinds the right-click to erase a single cell
	$('td').mousedown(function(e){ 
		if (e.ctrlKey) {
            brush_color = $(this).css('background-color');
        } else if( e.button == 2 ) { 
	    	right_down = true;
	    	ChangeColor( 'white', $(this) );
	    } else {
	    	left_down = true;
	    	ChangeColor( brush_color, $(this) );
	    }
  	});

  	$(document).mouseup(function(e) {
  		right_down = false;
  		left_down = false;
  	});

  	$(document).mousemove(function(event) {
        mouse_position.x = event.pageX;
        mouse_position.y = event.pageY;
    });

  	////Checks if is currently being hovered over while clicking; this enables to colour multiple squares at once
  	$('td').hover( function() {
  		if (left_down) {
  			ChangeColor( brush_color, $(this) );
  		} else if (right_down) {
  			ChangeColor( 'white', $(this) );
  		}
  	});

	//Helper Functions
	////Table Resize ensures that the cells are responsive and remain square shapped
	function TableResize() {
	  var size = $('td').width();
	  $('td').height(size);
	}

	////Change Color changes the color of an individual table cell
	function ChangeColor( color, td ) {
		td.css('background-color', color);
	}

	function FavoriteColors( favorite_colors ) {
		for ( var i=0; i < favorite_colors.length; i++ ) {
			$('div.quick-palette').children('.color').eq(i).css('background-color', favorite_colors[i]);
		}
	}
} );
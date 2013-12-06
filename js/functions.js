jQuery( document ).ready( function ( $ ) {
	var brush_color = '#000080';
	var left_down = false;
	var right_down = false;
	var mouse_position = { x: 0, y: 0 };

	//functions to run on page load
	TableResize();
	ChangeBrushColor( '#000080' );

	//Action Listeners

	$(window).resize( function () { TableResize(); } );
	$('button.wipe').click( function() { WipeColor( $('td') ); } );
	$('button.grid-toggle').click(function() { $('td').toggleClass('border'); });
	$('button.background-fill').click(function() { ChangeBackground( brush_color ) });

	$('button.test').ColorPicker({
		layout : 'hex',
		onChange:function( hsb, hex, rgb, fromSetColor ) {
			ChangeBrushColor('#' + hex);
		}
		});

	////Rebinds the right-click to erase a single cell
	$('td').mousedown(function(e){ 
		if (e.ctrlKey) {
			ChangeBrushColor( $(this).css('background-color') )
        } else if( e.button == 2 ) { 
	    	right_down = true;
	    	WipeColor( $(this) );
	    } else if (e.button == 0) {
	    	left_down = true;
	    	ChangeColor( brush_color, $(this) );
	    }
  	});

  	$('button.zoom').click(function() {
  		var current_width = $('table').width();
  		if ( $(this).hasClass('out') ) {
  			if (current_width > 275) {
  				$('table').css('width', current_width * 0.9);
  			}
  		} else if ( $(this).hasClass('clear') ) {
  			$('table').css('width', '50%');
  		} else {
  			if (current_width < 5000) {
  				$('table').css('width', current_width * 1.1);
  			}
  		}
  		TableResize();
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
  			WipeColor( $(this) );
  		}
  	});

	//Helper Functions
	////Table Resize ensures that the cells are responsive and remain square shapped
	function TableResize() {
	  var width = $('td').width();
	  $('td').height(width + 2);
	}

	////Change Color changes the color of an individual table cell
	function ChangeColor( color, td ) {
		td.removeClass( 'clear' );
		td.css( 'background-color', color );
	}

	function WipeColor( td ) {
		//We want the "erase" function to make the cells the "current background color" rather than empty
		var current_background_image = $('td.clear').css('background-image');
		var current_background = $('td.clear').css('background-color');
		td.addClass( 'clear' );
		//To do so we first check if the background-image has been overriden on our "clear" cells
		if (current_background_image == 'none') {
			//If so we will paint this cell the same color as our clear cells
			td.css( 'background-color', current_background );
		} else {
			//If not we will override the inline classes of background-image and background-color
			td.css( 'background-image', '' );
			td.css( 'background-color', 'none' );
		}
	}

	function ChangeBackground ( color ) {
		//Step 1 is to "wipe" the tiles that have the same colour as our desired background
		var current_background = $('td.clear').css('background-color');
		$('td').filter(function() {
		   return $(this).css('background-color') == current_background;
		}).addClass('clear');

		//Step 2 is to remove the "empty" background-image and colour in the specific tiles
		$('td.clear').css('background-image', 'none');
		$('td.clear').css('background-color', color);
	}

	function ChangeBrushColor( color ) {
		brush_color;
		brush_color = color;
		$('button.test').css( 'background-color', color );
		$('button.test').ColorPickerSetColor( color );
	}
} );
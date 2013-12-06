jQuery( document ).ready( function ( $ ) {
	//Set Variables
	////Brush Color will keep track of our main color
	var brush_color;
	////Left and Right down booleans enable click-and-drag coloring or click-and-drag erasing
	var left_down = false;
	var right_down = false;

	//Functions to run on page load
	////Instantiating the Color Picker API
	$('button.brush-color').ColorPicker({
		layout : 'hex',
		onChange:function( hsb, hex, rgb, fromSetColor ) {
			ChangeBrushColor('#' + hex);
		}
	});
	////Making sure all table cells start with an equal height and width
	TableResize();
	////Setting the brush color and the 
	ChangeBrushColor( '#F1A157' );

	//Action Listeners

	$(window).resize( function () { TableResize(); } );
	$('button.wipe').click( function() { WipeCanvas(); } );
	$('button.grid-toggle').click(function() { $('td').toggleClass('border'); });
	$('button.background-fill').click(function() { ChangeBackground( brush_color ) });

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
		}
	}

	function WipeCanvas() {
		$('td').css('background-color', 'none');
		$('td').css('background-image', '');
		$('td').addClass('clear');
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
		$('button.brush-color').css( 'background-color', color );
		$('button.brush-color').ColorPickerSetColor( color );
	}
} );
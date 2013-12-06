jQuery( document ).ready( function ( $ ) {

	/*
	Comments legend
	"//" = Category
	"////" = Details about the following function
	"//// -- " = Details about the current function
	"//// -n-" = Note 

	Good luck, and enjoy!
	*/

	//Set Variables
	////Brush Color will keep track of our main color
	var brush_color;

	////Table Size keeps tabs on the dimensions of the table
	var table_size;

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

	////Instantiating the Color Box (lightbox) API for the Help Button
	$('.lightbox-link').colorbox({
		inline	: true,
		width	: 800,
		fixed   : true
	});

	////Instantiate the table with an ajax call (see function for further details)
	CreateTable();

	////Setting the brush color to its default value
	ChangeBrushColor( '#F1A157' );


	//Action Listeners
	
	////Resizing cells with window resize
	$(window).resize( function () { TableResize(); } );
	
	////Wiping canvas clean 
	$('button.wipe').click( function() { WipeCanvas(); } );
	
	////Toggling the "grid" view
	$('button.grid-toggle').click(function() { 
		$('td').toggleClass('border'); 
		TableResize(); 
	});
	
	////Coloring in the background
	$('button.background-fill').click(function() { ChangeBackground() });

	////Action Listeners - Brush Related

	$('div.collapse').click(function() {

		//// -- The trigged for the Grooveshark music player
		//// -n- While a 'Slide' effect animation would've been more esthetically pleasing,
		//		 I ran into issues with the SWF object's reaction to being hidden - TODO
		$(this).next('object.grooveshark-player').toggleClass('down');
		$(this).toggleClass('down');
	});

	$('div.grid').on('mousedown', 'td', function(e){ 
		var prev_color = $(this).css('background-color');
		var cell = $(this);

		//// -- If the shift key is currently held down: next action affects entire row
		if (e.ctrlKey) {
			ChangeBrushColor( prev_color );

		//// -- If Right Click - call the Erase function and set right boolean to true (for click and drag)
        } else if( e.button == 2 ) { 
	    	right_down = true;
	    	WipeColor( cell );

	    //// -- If Left Click - call the Draw function and set left boolean to true
	    } else if (e.button == 0) {
	    	left_down = true;
	    	ChangeColor( brush_color, cell );
	    }
  	});

	//// -- If the user stops clicking, reset both booleans to false
  	$(document).mouseup(function(e) {
  		right_down = false;
  		left_down = false;
  	});


  	//// -- Checks if is currently being hovered over while clicking
  	$('div.grid').on('mouseover', 'td', function() {

  		//// -- If Left Click and Hover - call the Draw function
  		if (left_down) {
  			ChangeColor( brush_color, $(this) );

  		//// -- If Right Click and Hover - call the Erase function
  		} else if (right_down) {
  			WipeColor( $(this) );
  		}
  	});

  	$('div.resize button').click(function() {
  		$('div.resize button').removeClass('current');
		$(this).addClass('current');
  		CreateTable( $(this).attr('id') );
  	});

  	////Action Listeners - Zoom Related
  	//// -- Note: I opted to have a common class for the zoom buttons to be able to manage them more simply
  	$('button.zoom').click(function() {

  		//// -- Users are sneaky people, to avoid their trying to break or bug their own interface, we've set a max and min size
  		var min_size = 275;
  		var max_size = 5000;
  		var current_width = $('table').width();

  		//// -- On click of Zoom Out, if the size isn't smaller than the minimum, reduce size of table by 10%;
  		if ( $(this).hasClass('out') ) {
  			if (current_width > min_size) {
  				$('table').css('width', current_width * 0.9);
  			}

  		//// -- Wipes the in-line CSS resetting the table size to the default
  		} else if ( $(this).hasClass('clear') ) {
  			$('table').css('width', '');

  		//// -- Same as Zoom Out except increases size by 10%
  		} else {
  			if (current_width < max_size) {
  				$('table').css('width', current_width * 1.1);
  			}
  		}

  		//// -- After resizing the table we must resize the cells to ensure that they're square
  		TableResize();
  	});


	//Helper Functions
	////Table Resize ensures that the cells are responsive and remain square shapped
	function TableResize() {

		//// -- Reset individual cell's heigh and width
		var width = $('td').width();
		var offset;

		//// -- Compensate for the border to avoid having rectangles
		if ( $('td').hasClass('border') ) {
			offset = 4;
		} else {
			offset = 2;
		}

		$('td').height(width + offset);

		//// -- Set a minimum height so that the table doesn't bleed out under the header
		$('div.table-wrapper').css('min-height', $('table').css('height'));
	}

	////Change Color changes the color of an individual table cell
	function ChangeColor( color, td ) {

		//// -- The clear class indicates an empty cell
		td.removeClass( 'clear' );
		td.css( 'background-color', color );
	}

	////Erase function
	function WipeColor( td ) {
		
		//// -- We want the "erase" function to make the cells the "current background color" rather than empty
		var current_background_image = $('td.clear').css('background-image');
		var current_background = $('td.clear').css('background-color');
		td.addClass( 'clear' );
		
		//// -- First check if the background-image has been overriden on our "clear" cells
		if ( current_background_image == 'none' ) {
			
			//// -- If so we will paint this cell the same color as our clear cells
			td.css( 'background-image', 'none' );
			td.css( 'background-color', current_background );
		} else {

			//// -- If not we will override the inline classes of background-image and background-color
			td.css( 'background-image', '' );
			td.css( 'background-color', current_background );
		}
	}

	////Reset our entire canvas
	function WipeCanvas() {
		//// -- Override the cell's inline CSS (put there by our JS functions)
		$('td').css('background-color', 'none');
		$('td').css('background-image', '');

		//// -- Make sure they are labeled as empty
		$('td').addClass('clear');
	}

	////Change the color of our background
	function ChangeBackground() {
		brush_color;
		//// -- First "wipe" the tiles that have the same colour as our desired background
		//// -n- I decided to do this because it makes the experience much simpler this is also a major performance booster
		var current_background = $('td.clear').css('background-color');

		$('td').filter(function() {
		   return $(this).css('background-color') == current_background;
		}).addClass('clear');

		//// -- Secondly is to remove the "empty" background-image and colour in the specific tiles
		$('td.clear').css('background-image', 'none');
		$('td.clear').css('background-color', brush_color);
	}

	////Change the color of our brush
	function ChangeBrushColor( color ) {
		brush_color;
		brush_color = color;

		//// -- We want our brush-color button to display this color
		$('button.brush-color').css( 'background-color', color );

		//// -- We also want our Color Picker to set it as its current color
		$('button.brush-color').ColorPickerSetColor( color );
	}

	function SetTableSize() {
		table_size = $('div.table-wrapper').data('dimension');
	}

	////Instantiate a table
	function CreateTable( data ) {

		//// -- Three sizes are allowed, the default value is 32 * 32
		if (data == 'small') {
			size = 16;
		} else if (data == 'large') {
			size = 64;
		} else {
			size = 32;
		}

		//// -- Serialize the data before sending it off to table.php
		post_data = { 'size' : size };
		serialized_data = $.param(post_data);

		//// -- Standard post call, resize the table on arrival to make it look nice and purty
		$.post('table.php', serialized_data, function( output ) {
			$('div.grid').html( output );
			TableResize();
			SetTableSize();
		});
	}
} );
jQuery( document ).ready( function ( $ ) {
	var brush_color = '#333';

	//functions to run on page lod
	TableResize();

	//Action Listeners

	$(window).resize( function () { TableResize(); } );
	$('input#hex_field').keyup( function() { brush_color = $(this).val(); } );
	$('button.erase').click( function() { ChangeColor('white', $('td') ); } );

	////Rebinds the right-click to erase a single cell
	$('td').mousedown(function(e){ 
		if (e.ctrlKey) {
            brush_color = $(this).css('background-color');
        }
	    if( e.button == 2 ) { 
	    	ChangeColor( 'white', $(this) );
	    } else {
	    	ChangeColor( brush_color, $(this) );
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
} );
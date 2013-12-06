<?php 
if (!$_POST) {
	$size = 32;
} else {
	$accepted_sizes = array( 16, 32, 64 );
	if ( null != $_POST['size'] && in_array( $_POST['size'], $accepted_sizes ) ) {
		$size = $_POST['size'];
	} else {
		echo '<h1>Invalid size input, stop playing with my JS!</h1>';
		die();
	}
}
define('TABLE_DIMENSIONS', $size, TRUE);
?>
	<div class="table-wrapper">
		<table cellspacing="0">
			<?php for ($i=0; $i<TABLE_DIMENSIONS; $i+=1) : ?>
				<tr>
				<?php for ($j=0; $j<TABLE_DIMENSIONS; $j+=1) : ?>
					<td class="clear" title="x: <?= $j ?>; y: <?= $i ?>"></td>
				<?php endfor; ?>
				</tr>
			<?php endfor; ?>
		</table>
	</div>
<?php
die();
?>
<?php define('TABLE_DIMENSIONS', 32, TRUE); ?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href='http://fonts.googleapis.com/css?family=Electrolize' rel='stylesheet' type='text/css'>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
	<script src="js/functions.js"></script>
</head>
<body oncontextmenu="return false;">
	<div class="header">
		<h1>Pixel Art</h1>
		<div class="quick-palette">
			<div class="color"></div>
			<div class="color"></div>
			<div class="color"></div>
			<div class="color"></div>
			<div class="other">Other</div>
			<input type="text" value="#333" id="hex_field">
			<button class="erase">Wipe Canvas</button>
			<button class="zoom out"></button>
			<button class="zoom in"></button>
			<button class="zoom clear"></button>
		</div>
	</div>
	<div class="grid">
		<table cellspacing="0">
			<?php for ($i=0; $i<TABLE_DIMENSIONS; $i+=1) : ?>
				<tr>
				<?php for ($j=0; $j<TABLE_DIMENSIONS; $j+=1) : ?>
					<td class="clear"></td>
				<?php endfor; ?>
				</tr>
			<?php endfor; ?>
		</table>
	</div>

	<div class="sidebar">
		<h2>Quick Guide</h2>
		<ul>
			<li>
				To start drawing, click on a pixel to color
			</li>
			<li>
				Right-click on a single pixel to wipe it
			</li>
			<li>
				Control-click on a pixel to get its color
			</li>
			<li>
				Click and drag to color multiple squares at once.
			</li>
		</ul>
	</div>
</body>
</html>
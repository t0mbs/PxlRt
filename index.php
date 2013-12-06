<?php define('TABLE_DIMENSIONS', 32, TRUE); ?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href='http://fonts.googleapis.com/css?family=Electrolize' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" media="screen" type="text/css" href="css/colorpicker.css" />
	<link rel="stylesheet" type="text/css" href="css/colorbox.css" />
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
	<script type="text/javascript" src="js/colorpicker.js"></script>
	<script type="text/javascript" src="js/jquery.colorbox.js"></script>
	<script type="text/javascript" src="js/functions.js"></script>
</head>
<body oncontextmenu="return false;">
	<div class="header">
		<p class="stamp">Pxl Rt</p>
		<div class="quick-palette">
			<a title="Wipe Canvas"><button class="wipe"></button></a>
			<a title="Toggle Grid"><button class="grid-toggle"></button></a>
			<a title="Zoom Out (max width is 5000px)"><button class="zoom out"></button></a>
			<a title="Zoom Out (min width is 275px)"><button class="zoom in"></button></a>
			<a title="Reset Zoom"><button class="zoom clear"></button></a>
			<a title="Fill Background"><button class="background-fill"></button></a>
			<a title="Brush Color"><button class="brush-color"></button></a>
			<a title="HELP ME!" class="lightbox-link" href="#help-message"><button class="help"></button></a>

		</div>
	</div>
	<div class="hidden">
		<div class="colorbox-content" id="help-message">
			<h1>Controls</h1>
			<ul>
				<li>To erase simply right-click on the pertinant pixel</li>
				<li>To select a color from a pixel, control-click on that pixel</li>
				<li>Click and drag to color or erase multiple pixels at once</li>
				<li>Shift and click to paint / erase a row</li>
			</ul>
		</div>
	</div>
	<div class="grid border">
		<div class="table-wrapper">
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
	</div>
</body>
</html>
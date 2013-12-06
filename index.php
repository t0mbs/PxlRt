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
			<a title="Zoom In (min width is 275px)"><button class="zoom in"></button></a>
			<a title="Reset Zoom"><button class="zoom clear"></button></a>
			<a title="Fill Background"><button class="background-fill"></button></a>
			<a title="Brush Color"><button class="brush-color"></button></a>
			<a title="HELP ME!" class="lightbox-link" href="#help-message"><button class="help"></button></a>

		</div>
	</div>
	<div class="resize">
		<button id="small">16x16</button>
		<button id="medium" class="current">32x32</button>
		<button id="large">64x64</button>
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
		<!-- TABLE WILL GO HERE (Called with AJAX) -->
	</div>
</body>
</html>
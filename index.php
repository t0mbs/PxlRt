<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href='http://fonts.googleapis.com/css?family=Electrolize' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" media="screen" type="text/css" href="css/colorpicker.css" />
	<link rel="stylesheet" type="text/css" href="css/colorbox.css" />
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js">
	</script>
	<script type="text/javascript" src="js/colorpicker.js">
	</script>
	<script type="text/javascript" src="js/jquery.colorbox.js">
	</script>
	<script type="text/javascript" src="js/functions.js">
	</script>
</head>
<body oncontextmenu="return false;">
	<div class="header">
		<p class="stamp">Pxl Rt</p>
		<div class="quick-palette">
			<a title="Wipe Canvas">
				<button class="wipe">
				</button>
			</a>
			<a title="Toggle Grid">
				<button class="grid-toggle">
				</button>
			</a>
			<a title="Zoom Out (max width is 5000px)">
				<button class="zoom out">
				</button>
			</a>
			<a title="Zoom In (min width is 275px)">
				<button class="zoom in">
				</button>
			</a>
			<a title="Reset Zoom">
				<button class="zoom clear">
				</button>
			</a>
			<a title="Fill Background">
				<button class="background-fill">
				</button>
			</a>
			<a title="Brush Color">
				<button class="brush-color">
				</button>
			</a>
			<a title="HELP ME!" class="lightbox-link" href="#help-message">
				<button class="help">
				</button>
			</a>
		</div>
	</div>
	<div class="resize">
		<button id="small">16x16</button>
		<button id="medium" class="current">32x32</button>
		<button id="large">64x64</button>
	</div>
	<div class="playlist">
		<div class="collapse down">Mayhaps an easter egg?</div>
		<!-- This is just a Grooveshark embed link, it made my QA testing more enjoyable and it will hopefully make yours as well -->
		<object class="grooveshark-player" class="down" width="200" height="140" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="gsPlaylist5763147798" name="gsPlaylist5763147798">
			<param name="movie" value="http://grooveshark.com/widget.swf" />
			<param name="wmode" value="window" />
			<param name="allowScriptAccess" value="always" />
			<param name="flashvars" value="hostname=grooveshark.com&playlistID=57631477&p=0&bbg=000000&bth=000000&pfg=000000&lfg=000000&bt=ffffff&pbg=ffffff&pfgh=ffffff&si=ffffff&lbg=ffffff&lfgh=ffffff&sb=ffffff&bfg=666666&pbgh=666666&lbgh=666666&sbh=666666" />
			<object type="application/x-shockwave-flash" data="http://grooveshark.com/widget.swf" width="200" height="140">
				<param name="wmode" value="window" />
				<param name="allowScriptAccess" value="always" />
				<param name="flashvars" value="hostname=grooveshark.com&playlistID=57631477&p=0&bbg=000000&bth=000000&pfg=000000&lfg=000000&bt=ffffff&pbg=ffffff&pfgh=ffffff&si=ffffff&lbg=ffffff&lfgh=ffffff&sb=ffffff&bfg=666666&pbgh=666666&lbgh=666666&sbh=666666" />
				<span>
					<a href="http://grooveshark.com/search/playlist?q=SNES%20%20%20jordi%20more" title="SNES   by jordi more on Grooveshark">SNES   by jordi more on Grooveshark</a>
				</span>
			</object>
		</object>
	</div>
	<div class="hidden">
		<div class="colorbox-content" id="help-message">
			<h1>Controls</h1>
			<ul>
				<li>To erase simply right-click on the pertinant pixel</li>
				<li>To select a color from a pixel, control-click on that pixel</li>
				<li>Click and drag to color or erase multiple pixels at once</li>
			</ul>
			<h1>Note to grader</h1>
			<p>There are a few known bugs with the Color Picker API however due to time constraints I was unable to code my own color-picker and thought this would be an acceptable compromise</p>
		</div>
	</div>
	<div class="grid border">
		<!-- TABLE WILL GO HERE (Called with AJAX) -->
	</div>
</body>
</html>
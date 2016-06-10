var system = require('system');
if (system.args.length === 1) {
    console.log('Try to pass some args when invoking this script!');
} else {
            console.log('Trying to open ' + system.args[1] + '...');
			var siteName = system.args[1];
			var pictureName = system.args[2];
}

var page = require('webpage').create();
page.viewportSize = { width: 1980, height: 1200 };
page.open(siteName, function (status) {

if (status !== 'success') 
{
    console.log('Network Problem');
} 

else 
{
	var clipRect = page.evaluate(function () {
	return document.querySelector('div.stat.mB6.players-rank').getBoundingClientRect();
	            });
	page.clipRect = 
	{
		top:    clipRect.top,
		left:   clipRect.left,
		width:  clipRect.width,
		height: clipRect.height
	};
	//console.log(data);
	//page.render('screen_' + Date.now() + '.jpg');
	page.render('stat.png');
}
phantom.exit();
});

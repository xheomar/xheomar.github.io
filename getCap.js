var page = require('webpage').create();
var system = require('system');

// Route "console.log()" calls from within the Page context to the main Phantom context (i.e. current "this")
page.onConsoleMessage = function(msg) {
    console.log(msg);
};

if (system.args.length === 1) 
{
	console.log('Try to pass some args when invoking this script!');
} 
else 
{
	//console.log('Trying to open ' + system.args[1] + '...');
	var siteName = system.args[1];
	var playerName = system.args[2];
}

page.open(siteName, function (status) 
{
	if (status !== 'success') 
	{
		console.log('Network Problem');
	} 
	else 
	{
		var data = page.evaluate(function () 
		{
			var debug_on = true;
			var points = 0;
			var players = 0;
			
			// CAPITAN
			var capitan = document.querySelectorAll('i.ico.c');
			console.log(capitan[0].innerText);
			
			// OTHERS
			var others_points = [], others_names = [], others_logos = [];
			
			// FORWARDS
			var min_forwards = 1, need_forwards = 0;
			var forward_points = [], forward_names = [], forward_logos = [];
			var forwards_p = document.querySelectorAll('div.forward-container ins.player.hold.player-base span.pl-descr i.ico.point');
			var forwards_n = document.querySelectorAll('div.forward-container ins.player.hold.player-base span.name');
			var forwards_l = document.querySelectorAll('div.forward-container ins.player.hold.player-base img.t-shirt');
			for (var i = 0; i < forwards_p.length; i++) {
				if (forwards_p[i].innerText != "-")
				{
					forward_points.push(forwards_p[i].innerText);
					forward_names.push(forwards_n[i].innerText);
					forward_logos.push(forwards_l[i].getAttribute('src'));
					points += parseInt(forwards_p[i].innerText);
					players++;
				}
				else
				{
					others_points.push(forwards_p[i].innerText);
					others_names.push(forwards_n[i].innerText);
					others_logos.push(forwards_l[i].getAttribute('src'));
				}
			}	
				
			return points;
		});
	}
	phantom.exit();
});

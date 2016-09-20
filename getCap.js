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
	console.log('Trying to open ' + system.args[1] + '...');
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
			//var capitan = document.querySelectorAll('i.ico.c');
			//console.log(capitan[0].innerText);
			
			// OTHERS
			var others_points = [], others_names = [], others_logos = [];
			

			//var cap_c = document.querySelectorAll('ins.player.hold.player-base i.ico.c');
			//var cap_n = document.querySelectorAll('ins.player.hold.player-base span.name');
			
			//for (var i = 0; i < cap_n.length; i++) {
				//console.log(cap_n[i].innerText);
				//if (cap_c[i].innerText != null)
					//console.log(cap_c[i]);
			//}	
			
			var cap_i = document.querySelectorAll('ins.player.hold.player-base');
			for (i = 0; i < cap_i.length; i++) {
				console.log(cap_i[i].querySelector('span.name').innerText);
				if (cap_i[i].querySelector('i.ico.c') != 'null' && cap_i[i].querySelector('i.ico.c') != null) 
				{
					console.log("CAPTAIN");
				}
					
			}
				
			return points;
		});
	}
	phantom.exit();
});

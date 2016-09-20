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
			var debug_on = false;
			var points = 0;
			var players = 0;
			var CAPTAIN = "";
			
			// FIND the captain of the team
			var cap_i = document.querySelectorAll('ins.player.hold.player-base');
			for (i = 0; i < cap_i.length; i++) {
				//console.log(cap_i[i].querySelector('span.name').innerText);
				if (cap_i[i].querySelector('i.ico.c') != 'null' && cap_i[i].querySelector('i.ico.c') != null) 
				{
					CAPTAIN = cap_i[i].querySelector('span.name').innerText;
				}
			}
			
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
					if (forwards_n[i].innerText == CAPTAIN) 
						forward_names.push("bold_start" + forwards_n[i].innerText + "bold_end");
					else 
						forward_names.push(forwards_n[i].innerText);
					forward_logos.push(forwards_l[i].getAttribute('src'));
					points += parseInt(forwards_p[i].innerText);
					players++;
				}
				else
				{
					others_points.push(forwards_p[i].innerText);
					if (forwards_n[i].innerText == CAPTAIN)
						others_names.push("bold_start" + forwards_n[i].innerText + "bold_end");
					else
						others_names.push(forwards_n[i].innerText);
					others_logos.push(forwards_l[i].getAttribute('src'));
				}
			}
			if (debug_on == true) console.log("The points of forwards: " + forward_points);
			if (forward_points.length < min_defenders)
			{
				need_forwards = min_forwards - forward_points.length;
				if (debug_on == true) console.log("We need " + need_forwards + " more forwards!");
			}		
			
			// HALFBACKS
			var min_halfbacks = 2, need_halfbacks = 0;
			var halfback_points = [], halfback_names = [], halfback_logos = [];
			var halfbacks_p = document.querySelectorAll('div.halfback-container ins.player.hold.player-base span.pl-descr i.ico.point');
			var halfbacks_n = document.querySelectorAll('div.halfback-container ins.player.hold.player-base span.name');
			var halfbacks_l = document.querySelectorAll('div.halfback-container ins.player.hold.player-base img.t-shirt');
			for (var i = 0; i < halfbacks_p.length; i++) {
				if (halfbacks_p[i].innerText != "-")
				{
					halfback_points.push(halfbacks_p[i].innerText);
					if (halfbacks_n[i].innerText == CAPTAIN)
						halfback_names.push("bold_start" + halfbacks_n[i].innerText + "bold_end");
					else
						halfback_names.push(halfbacks_n[i].innerText);
					halfback_logos.push(halfbacks_l[i].getAttribute('src'));
					points += parseInt(halfbacks_p[i].innerText);
					players++;
				}
				else
				{
					others_points.push(halfbacks_p[i].innerText);
					if (halfbacks_n[i].innerText == CAPTAIN)
						others_names.push("bold_start" + halfbacks_n[i].innerText + "bold_end");
					else
						others_names.push(halfbacks_n[i].innerText);
					others_logos.push(halfbacks_l[i].getAttribute('src'));
				}
			}
			if (debug_on == true) console.log("The points of halfbacks: " + halfback_points);
			if (halfback_points.length < min_halfbacks)
			{
				need_halfbacks = min_halfbacks - halfback_points.length;
				if (debug_on == true) console.log("We need " + need_halfbacks + " more halfbacks!");
			}
			
			// DEFENDERS
			var min_defenders = 3, need_defenders = 0;
			var defender_points = [], defender_names = [], defender_logos = [];
			var defenders_p = document.querySelectorAll('div.defender-container ins.player.hold.player-base span.pl-descr i.ico.point');
			var defenders_n = document.querySelectorAll('div.defender-container ins.player.hold.player-base span.name');
			var defenders_l = document.querySelectorAll('div.defender-container ins.player.hold.player-base img.t-shirt');
			for (var i = 0; i < defenders_p.length; i++) {
				if (defenders_p[i].innerText != "-")
				{
					defender_points.push(defenders_p[i].innerText);
					if (defenders_n[i].innerText == CAPTAIN)
						defender_names.push("bold_start" + defenders_n[i].innerText + "bold_end");
					else
						defender_names.push(defenders_n[i].innerText);
					defender_logos.push(defenders_l[i].getAttribute('src'));
					points += parseInt(defenders_p[i].innerText);
					players++;
				}
				else
				{
					others_points.push(defenders_p[i].innerText);
					if (defenders_n[i].innerText == CAPTAIN)
						others_names.push("bold_start" + defenders_n[i].innerText + "bold_end");
					else
						others_names.push(defenders_n[i].innerText);
					others_logos.push(defenders_l[i].getAttribute('src'));
				}				
			}
			if (debug_on == true) console.log("The points of defenders: " + defender_points);
			if (defender_points.length < min_defenders)
			{
				need_defenders = min_defenders - defender_points.length;
				if (debug_on == true) console.log("We need " + need_defenders + " more defenders!");
			}
			
			// GOALKEEPER
			var min_goalkeepers = 1, need_goalkeepers = 0;
			var goalkeeper_points = [], goalkeeper_names = [], goalkeeper_logos = [];
			var goalkeepers_p = document.querySelectorAll('div.goalkeeper-container ins.player.hold.player-base span.pl-descr i.ico.point');
			var goalkeepers_n = document.querySelectorAll('div.goalkeeper-container ins.player.hold.player-base span.name');
			var goalkeepers_l = document.querySelectorAll('div.goalkeeper-container ins.player.hold.player-base img.t-shirt');
			for (var i = 0; i < goalkeepers_p.length; i++) {
				if (goalkeepers_p[i].innerText != "-")
				{
					goalkeeper_points.push(goalkeepers_p[i].innerText);
					if (goalkeepers_n[i].innerText == CAPTAIN)
						goalkeeper_names.push("bold_start" + goalkeepers_n[i].innerText + "bold_end");
					else
						goalkeeper_names.push(goalkeepers_n[i].innerText);
					goalkeeper_logos.push(goalkeepers_l[i].getAttribute('src'));
					points += parseInt(goalkeepers_p[i].innerText);
					players++;
				}
				else
				{
					others_points.push(goalkeepers_p[i].innerText);
					if (goalkeepers_n[i].innerText == CAPTAIN)
						others_names.push("bold_start" + goalkeepers_n[i].innerText + "bold_end");
					else
						others_names.push(goalkeepers_n[i].innerText);
					others_logos.push(goalkeepers_l[i].getAttribute('src'));
				}	
			}
			if (debug_on == true) console.log("The points of goalkeepers: " + goalkeeper_points);
			if (goalkeeper_points.length < min_goalkeepers)
			{
				need_goalkeepers = min_goalkeepers - goalkeeper_points.length;
				if (debug_on == true) console.log("We need " + need_goalkeepers + " more goalkeepers!");
			}
			
			// RESERVE
			var reserve_points = [];
			var reserve_position = [];
			var reserve_names = [];
			var reserve_logos = [];
			var reserve_used = [];
			var reserves_1 = document.querySelectorAll('div.reserve-container ins.player.hold.player-reserve span.pl-descr i.ico.point');
			var reserves_2 = document.querySelectorAll('div.reserve-container ins.player.hold.player-reserve span.role');
			var reserves_3 = document.querySelectorAll('div.reserve-container ins.player.hold.player-reserve span.name');
			var reserves_4 = document.querySelectorAll('div.reserve-container ins.player.hold.player-reserve img.t-shirt');
			for (var i = 0; i < reserves_1.length; i++) {
				if (reserves_1[i].innerText != "-")
				{
					reserve_points.push(reserves_1[i].innerText);
					reserve_position.push(reserves_2[i].innerText);
					reserve_names.push("italic_start" + reserves_3[i].innerText + "italic_end");
					reserve_logos.push(reserves_4[i].getAttribute('src'));
					reserve_used.push("false");
				}
				else // Collect zero-points reserved players
				{
					others_points.push(reserves_1[i].innerText);
					others_names.push("italic_start" + reserves_3[i].innerText + "italic_end");
					others_logos.push(reserves_4[i].getAttribute('src'));
				}
			}
			if (debug_on == true) console.log("The points of reserves: " + reserve_points);
			if (debug_on == true) console.log("The positions of reserves: " + reserve_position);
			
			var position = 0;
			for (var g = 0; g < need_goalkeepers; g++) {
				position = reserve_position.indexOf("Вр", position);
				if (position != -1) {
					if (debug_on == true) console.log("We are going to add " + reserve_points[position] + " points for goalkeepers");
					points += parseInt(reserve_points[position]);
					reserve_used[position] = "true";
					position++;
					players++;
				} else {
					if (debug_on == true) console.log("No more goalkeepers were found");
					break;
				}
			}
			
			position = 0;
			for (var d = 0; d < need_defenders; d++) {
				position = reserve_position.indexOf("Защ", position);
				if (position != -1) {
					if (debug_on == true) console.log("We are going to add " + reserve_points[position] + " points for defenders");
					points += parseInt(reserve_points[position]);
					reserve_used[position] = "true";
					position++;
					players++;
				} else {
					if (debug_on == true) console.log("No more defenders were found");
					break;
				}
			}
			
			position = 0;
			for (var h = 0; h < need_halfbacks; h++) {
				position = reserve_position.indexOf("Пз", position);
				if (position != -1) {
					if (debug_on == true) console.log("We are going to add " + reserve_points[position] + " points for halfbacks");
					points += parseInt(reserve_points[position]);
					reserve_used[position] = "true";
					position++;
					players++;
				} else {
					if (debug_on == true) console.log("No more halfbacks were found");
					break;
				}
			}
			
			position = 0;
			for (var f = 0; f < need_forwards; f++) {
				position = reserve_position.indexOf("Нап", position);
				if (position != -1) {
					if (debug_on == true) console.log("We are going to add " + reserve_points[position] + " points for forwards");
					points += parseInt(reserve_points[position]);
					reserve_used[position] = "true";
					position++;
					players++;
				} else {
					if (debug_on == true) console.log("No more forwards were found");
					break;
				}
			}
			
			// The last update 
			var p = 0;
			if (reserve_points.length > 0) {
				for (var l = players, i = 0; l < 11 && i < reserve_points.length; l++, i++) {
					if (reserve_used[p] != "true" && reserve_position[p] != "Вр")
					{
						if (debug_on == true) console.log("We are going to add " + reserve_points[p] + " points");
						points += parseInt(reserve_points[p]);
						reserve_used[p] = "true";
						p++;
					}					
				}
			}
			
			if (debug_on == true) console.log("The overall points: " + points);
			if (debug_on == true) console.log("--------------------");
			// Print all names
			console.log("====================");
			for (var i = 0; i < forward_names.length; i++) {
				console.log(forward_names[i] + "+" + forward_points[i] + ":" + forward_logos[i]);
			}
			for (var i = 0; i < halfback_names.length; i++) {
				console.log(halfback_names[i] + "+" + halfback_points[i] + ":" + halfback_logos[i]);
			}
			for (var i = 0; i < defender_names.length; i++) {
				console.log(defender_names[i] + "+" + defender_points[i] + ":" + defender_logos[i]);
			}
			for (var i = 0; i < goalkeeper_names.length; i++) {
				console.log(goalkeeper_names[i] + "+" + goalkeeper_points[i] + ":" + goalkeeper_logos[i]);
			}
			for (var i = 0; i < reserve_used.length; i++) {
				if (reserve_used[i] != "false") {
					console.log(reserve_names[i] + "+" + reserve_points[i] + ":" + reserve_logos[i]);
				}
			}
			console.log("--------------------");			
			for (var i = 0; i < others_names.length; i++) {
				console.log(others_names[i] + "+" + others_points[i] + ":" + others_logos[i]);
			}
			for (var i = 0; i < reserve_used.length; i++) {
				if (reserve_used[i] == "false") {
					console.log(reserve_names[i] + "+" + reserve_points[i] + ":" + reserve_logos[i]);
				}
			}
			
			return points;
		});
		console.log("++++++++++++++++++++");
		console.log(data);
	}
	phantom.exit();
});

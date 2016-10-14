var teams = [{userId: "1756677", name: "xheo"},
			 {userId: "1756645", name: "cron314"},
			 {userId: "1756596", name: "pr-positive"},
			 {userId: "1756613", name: "busotir"},
			 {userId: "1765524", name: "PrincipessaMilana"},
			 {userId: "1756537", name: "ymat"}];
var ids = 0;
var count = 0;
var contents = [];
//var SportsRuUrlTemplate = "http://www.sports.ru/fantasy/football/team/points/";
var SportsRuUrlTemplate = "https://crossorigin.me/http://www.sports.ru/fantasy/football/team/points/";
var JsonUrlTemplate = "/7574.json";
var global_points = ["0","0","0","0","0","0"];
var points_count = 0;

a();

function a(){
	for (ids = 0; ids < teams.length; ids++)
	{
		var json_url = SportsRuUrlTemplate + teams[ids].userId + JsonUrlTemplate;
		$.getJSON( json_url, 
	   function( response ) 
	   {
	   	var json = response;
	    
	    var MIN_GOALKEEPER_COUNT = 1;
		var MIN_DEFENDER_COUNT = 3;
		var MIN_HALFBACK_COUNT = 2;
		var MIN_FORWARD_COUNT = 1;
	
		var Goalkeepers = [];
		var Defenders = [];
		var Halfbacks = [];
		var Forwards = [];
		var Other = [];
		var Bench = [];
	
		var need_goalkeepers = 0;
		var need_defenders = 0;
		var need_halfbacks = 0;
		var need_forwards = 0;
		
		var Positions = [Goalkeepers, Defenders, Halfbacks, Forwards, Bench, Other];
		var PositionsHTML = ["Вр", "Защ", "Пз", "Нап", "Зап", "n/a"];
	
		for (var i = 0; i < json.players.length; i++) 
		{
			if (json.players[i].points != '-') 
				if (json.players[i].row != 0)
					Positions[Number(json.players[i].amplua)-1].push(json.players[i]);
				else
					Positions[4].push(json.players[i]);
			else 
				Positions[5].push(json.players[i]);
		}
		
		
		if (Goalkeepers.length < MIN_GOALKEEPER_COUNT) need_goalkeepers = MIN_GOALKEEPER_COUNT - Goalkeepers.length;
		if (Defenders.length < MIN_DEFENDER_COUNT) need_defenders = MIN_DEFENDER_COUNT - Defenders.length;
		if (Halfbacks.length < MIN_HALFBACK_COUNT) need_halfbacks = MIN_HALFBACK_COUNT - Halfbacks.length;
		if (Forwards.length < MIN_FORWARD_COUNT) need_forwards = MIN_FORWARD_COUNT - Forwards.length;
		
		// К примеру, need_defenders = 2 означает, что нам необходимо найти в массиве Bench
		// 2 защитника, у которых не "-" количество очков
		
		var needings = [need_goalkeepers, need_defenders, need_halfbacks, need_forwards];
		
		for (var need = 0; need < needings.length; need++)
		{
			if (needings[need] > 0)
			{
				for (i = 0; i < Bench.length; i++)
				{
					if (Bench[i].amplua == 1)
					{
						if (needings[need] > 0)
						{
							Positions[need].push(Bench[i]);
							Bench.splice(i, 1);
							needings[need]--;
						}
					}
				}
			}
		}
		
		// Допустим, чисто технически замены не нужны, но в команде некомплект
		// Нужно накинуть столько игроков, сколько не хватает до 11ти
		// из тех, кто остался на скамейке
		
		
		var need_to_be_completed = 11 - (Goalkeepers.length + Defenders.length + Halfbacks.length + Forwards.length);
		
		if (need_to_be_completed > 0 && need_defenders == 0 && need_halfbacks == 0 && need_forwards == 0)
		{
			for (i = 0; i < Bench.length; i++)
			{
				if (Bench[i].amplua != 1) // Это не должен быть вратарь
				{
					if (need_to_be_completed > 0)
					{
						if (Bench[i].amplua == 2) Defenders.push(Bench[i]);
						else if (Bench[i].amplua == 3) Halfbacks.push(Bench[i]);
						else if (Bench[i].amplua == 4) Forwards.push(Bench[i]);
						Bench.splice(i, 1);
						need_to_be_completed--;
					}
				}
			}
		}
	
		var points = 0;
		var tr_class;
		var teamName = teams[count].name;	
		var content = '<div class="container"><div class=' +teamName+' id=sorting points="0" data-sort="0"><h3 class="spoiler-title" id="' + teamName + '">' + teamName + "    ...loading..." + '</h3>'
		content += '<div class="spoiler-body" id="'+teamName+ '">';
		content += '<table ';
		content += " border='1'><tr><th>Клуб</th><th>Фамилия</th><th>Позиция</th><th>Очки</th><th>Голы</th><th>Пасы</th><th>Мин</th><th>ЖК</th><th>КК</th></tr>";
		//content += "<caption>" + teams[id].name + "</caption>";
		for (var pos = 0; pos < Positions.length; pos++)
		{
			for (i = 0; i < Positions[pos].length; i++)
			{
				if (Positions[pos] != Bench && Positions[pos] != Other)
				{
					points += parseInt(Positions[pos][i].points);
					var tr_class = "in_a_row";
				}
				else
				{
					var tr_class = "not_in_a_row";
				}
					
				content += '<tr class="'
				if (Number(Positions[pos][i].isCaptain) != 0) 
					content += 'capitan '; 
				if (Number(Positions[pos][i].is_disqual) != 0) 
					content += 'disqual '; 
				if (Number(Positions[pos][i].is_injured) != 0) 
					content += 'injured '; 
				content += tr_class + '">'
				content += '<td>';
				content += '<img ';
				if (Positions[pos][i].is_star == 1) content += 'class=starr';
				content += ' src="' + Positions[pos][i].img + '"></td>';
				content += '<td class="name">' + Positions[pos][i].name + '</td>';
				content += '<td>' + PositionsHTML[Number(Positions[pos][i].amplua)-1] + '</td>';
				content += '<td>' + Positions[pos][i].points + '</td>';
				if (Number(Positions[pos][i].amplua) == 1)
					content += '<td>' + Number(Positions[pos][i].thru)*(-1) + '</td>';
				else	
					content += '<td>' + Positions[pos][i].goals + '</td>';
				content += '<td>' + Positions[pos][i].pass + '</td>';
				content += '<td>' + Positions[pos][i].min + '</td>';
				content += '<td>' + Positions[pos][i].ycard + '</td>';
				content += '<td>' + Positions[pos][i].rcard + '</td>';
				content += '</tr>';
			}
		}
		global_points[count] = points;
		console.log(teamName + " " + points);
		count += 1;
		content += "</table></div></div></div>";
		contents.push(content);
		$('#tables').append(content);
	   }
	 )
	 .done(function (){
	 	console.log("json loaded");
	 	$('#' + teams[points_count].name).text(teams[points_count].name + " = " + global_points[points_count]);
		console.log(points_count + " " + teams[points_count].name + " " + global_points[points_count]);
	 	$('#sorting.'+teams[points_count].name).attr("data-sort", global_points[points_count]);	 	
	 		var sortedDivs = $("div#sorting").toArray().sort(sorter);
			console.log(sortedDivs);
			$("div.container").remove();
			$.each(sortedDivs, function (index, value) {
			    $('#tables').append(value);
			});
		$('.spoiler-body'  + '#' + teams[points_count].name).hide();
		$('.spoiler-title' + '#' + teams[points_count].name).click(function(){
			    $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
	   			});	
		points_count++;
	 });
	}
}

function sorter(a, b) {
    return b.getAttribute('data-sort') - a.getAttribute('data-sort');
};


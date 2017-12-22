var teams = 
   [{userId: "1890113", name: "xheo", result: 0}, 
	{userId: "1892071", name: "pr-positive", result: 0},
	{userId: "1895810", name: "busotir", result: 0},
	{userId: "1889520", name: "Евгений", result: 0},
	{userId: "1892171", name: "PrincipessaMilana", result: 0},
	{userId: "1892280", name: "ymat", result: 0}];
var ids = 0;
// var SportsRuUrlTemplate = "https://cors.io/?https://www.sports.ru/fantasy/football/team/points/";
var SportsRuUrlTemplate = "https://www.sports.ru/fantasy/football/team/points/";
var JsonUrlTemplate = "/8333.json";

a();

function a(){
	for (ids = 0; ids < teams.length; ids++) 
	{
	   (function(ids) {
		var json_url = SportsRuUrlTemplate + teams[ids].userId + JsonUrlTemplate;
		$.getJSON('http://cors-proxy.htmldriven.com/?url=' + encodeURIComponent(json_url), function(response){
			
			var json = JSON.parse(response.body);
			
			var MIN_GOALKEEPER_COUNT = 1, MIN_DEFENDER_COUNT = 3, MIN_HALFBACK_COUNT = 2, MIN_FORWARD_COUNT = 1;

			var Goalkeepers = [], Defenders = [], Halfbacks = [], Forwards = [], Other = [], Bench = [];
	
			var need_goalkeepers = 0, need_defenders = 0, need_halfbacks = 0, need_forwards = 0;
		
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
						if (Bench[i].amplua != 1)
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
			console.log("Need To be completed: " + need_to_be_completed + ": for " + teams[ids].name + 
			    + Number(Goalkeepers.length) + Number(Defenders.length) +
			    Number(Halfbacks.length) + Number(Forwards.length));
			if (need_to_be_completed > 0 && (need_defenders == 0 || need_halfbacks == 0 || need_forwards == 0))
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
			var teamName = teams[ids].name;	
			var res = teams[ids].result;
			var content = '<div class="container"><div class=' +teamName+' id=sorting points="0" data-sort="0"><h3 class="spoiler-title" id="' + teamName + '">' + teamName + "    ...loading..." + '</h3>'
			content += '<div class="spoiler-body" id="'+teamName+ '">';
			content += '<table ';
			content += " border='1'><tr><th>Клуб</th><th>Фамилия</th><th>Позиция</th><th>Очки</th><th>Голы</th><th>Пасы</th><th>Мин</th><th>ЖК</th><th>КК</th></tr>";
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
					if (Number(Positions[pos][i].row) == 0) 
						content += 'italic '; 
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
			
			content += "</table></div></div></div>";
			$("#animation_"+teamName).hide();
			$('#tables').append(content);
			$('.spoiler-title' + '#' + teamName).text(teamName + " = " + points + " (" + Number(Number(res)+Number(points)) + ")");
			console.log(ids + " " + teamName + " " + points);
			
			// Сортировка DIV'ов
			$('#sorting.'+teamName).attr("data-sort", points);	 	
			var sortedDivs = $("div#sorting").toArray().sort(sorter);
			//console.log(sortedDivs);
			$("div.container").remove();
			$.each(sortedDivs, function (index, value) {
				$('#tables').append(value);
			});
			
			// Анимация спойлера	
			$('.spoiler-body'  + '#' + teamName).hide();
			$('.spoiler-title' + '#' + teamName).click(function(){
				$(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
			});
			if (ids == (teams.length - 1))
				$(".cssload-jumping").fadeOut(300);	

			}
        );
	})(ids);
  }
}

function sorter(a, b) {
    return b.getAttribute('data-sort') - a.getAttribute('data-sort');
};

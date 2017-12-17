var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
console.log(today);



$('#runGameButton').click(function() {
    getGames();
});

function getGames() {

    var countryName = $("#country :selected").text();
    console.log(countryName);

    $(".container").remove();

    $.getJSON('https://cors.io/?http://www.sofascore.com/football//' +
        today + '/json',
        function(response) {
            var arr = [];

            var tournaments = response.sportItem.tournaments;
            //console.log(response.sportItem);
            for (var i = 0; i < tournaments.length; i++) {
                //console.log(tournaments[i].category.name);
                if (tournaments[i].category.name == countryName) { //} && tournaments[i].tournament.name == "Serie A") {
                    //console.log(tournaments[i]);
                    //console.log(tournaments[i].tournament.name);
                    var events = tournaments[i].events;
                    for (var j = 0; j < events.length; j++) {
                        //console.log(events[j]);

                        // data for event
                        var customId = events[j].customId;
                        var homeTeamName = events[j].homeTeam.name;
                        var homeTeamId = events[j].homeTeam.id;
                        var awayTeamName = events[j].awayTeam.name;
                        var awayTeamId = events[j].awayTeam.id;
                        var startTime = events[j].startTime;
                        var startDate = events[j].formatedStartDate;
                        var status = events[j].status.type;
                        var confirmedLineups = events[j].confirmedLineups;
                        var hasLineupsList = events[j].hasLineupsList;
                        var gameId = events[j].id;

                        // common data for tournament
                        var tournamentId = tournaments[i].tournament.uniqueId;
                        var seasonId = tournaments[i].season.id;

                        var homeScoreCurrent = events[j].homeScore.current;
                        var awayScoreCurrent = events[j].awayScore.current;
                        var score = " ";

                        arr[customId] = {
                            key: customId,
                            gameId: gameId,
                            homeTeamName: homeTeamName,
                            homeTeamId: homeTeamId,
                            awayTeamName: awayTeamName,
                            awayTeamId: awayTeamId,
                            confirmedLineups: confirmedLineups,
                            hasLineupsList: hasLineupsList,
                            status: status,
                            tournamentId: tournamentId,
                            seasonId: seasonId
                        };

                        var content = '<div class="container"><div class=' + customId + ' id=sorting points="0" data-sort="0"><h3 class="spoiler-title" id="' + customId + '">' + customId + "    ...loading..." + '</h3>'
                        content += '<div class="spoiler-body" id="' + customId + '">';

                        content += "</div></div></div>";
                        $('#tables').append(content);

                        if (status == "finished") {
                            $('.spoiler-title' + '#' + customId).css('color', 'black');
                            score = " " + homeScoreCurrent + " : " + awayScoreCurrent + " ";
                        } else if (status == "inprogress") {
                            $('.spoiler-title' + '#' + customId).css('color', 'green');
                            score = " " + homeScoreCurrent + " : " + awayScoreCurrent + " ";
                        } else if (status == "canceled")
                            $('.spoiler-title' + '#' + customId).css('color', 'red');
                        else if (status == "notstarted")
                            $('.spoiler-title' + '#' + customId).css('color', 'blue');

                        $('.spoiler-title' + '#' + customId)
                            .text("[" + tournaments[i].tournament.name + "] " +
                                homeTeamName + " - " + awayTeamName + score + "(" + startDate + " " + startTime + ")");

                        if (confirmedLineups || hasLineupsList) {
                            $('.spoiler-title' + '#' + customId).css('text-decoration', 'underline');
                        }

                        $('.spoiler-title' + '#' + customId).click(function() {
                            var id = $(this).attr('id');
                            //console.log(id);
                            //console.log(arr[id]);

                            if ((arr[id].confirmedLineups || arr[id].hasLineupsList) &&
                                $('.spoiler-body' + '#' + arr[id].key).attr('ready') != "true") {
                                /*console.log(" confirmed lineups = " + arr[id].confirmedLineups +
                                    " status = " + arr[id].status +
                                    " id = " + arr[id].gameId);*/

                                var homeTeamStatsUrl = "https://cors.io/?http://www.sofascore.com/tournament/stats/" +
                                    arr[id].tournamentId +
                                    "/" +
                                    arr[id].seasonId +
                                    "/json?fields=goals%2Cassists%2CyellowCards%2Cappearances%2CmatchesStarted%2Crating&order=-appearances&filters=team.EQ." +
                                    arr[id].homeTeamId;
                                console.log("homeTeamStatsUrl = " + homeTeamStatsUrl);

                                var awayTeamStatsUrl = "https://cors.io/?http://www.sofascore.com/tournament/stats/" +
                                    arr[id].tournamentId +
                                    "/" +
                                    arr[id].seasonId +
                                    "/json?fields=goals%2Cassists%2CyellowCards%2Cappearances%2CmatchesStarted%2Crating&order=-appearances&filters=team.EQ." +
                                    arr[id].awayTeamId;
                                console.log("awayTeamStatsUrl = " + awayTeamStatsUrl);
                                var whileNot = true;
                                var array = ["", "&offset=10", "&offset=20"];

                                var homeTeamPlayers = [];
                                //setTimeout(function(){
                                for (var i = 0; i < array.length; i++) {
                                    (function(i) {
                                        $.getJSON(homeTeamStatsUrl + array[i], function(homeStats) {
                                            //console.log("homeStats[i] = " + homeStats);
                                            var playerArray = homeStats.results;
                                            for (var res = 0; res < playerArray.length; res++) {
                                                homeTeamPlayers[playerArray[res].player.id] = {
                                                    key: playerArray[res].player.id,
                                                    name: playerArray[res].player.name,
                                                    rating: playerArray[res].rating,
                                                    appearance: playerArray[res].appearances,
                                                    matchesStarted: playerArray[res].matchesStarted,
                                                    minutesPlayed: playerArray[res].minutesPlayed,
                                                    goals: playerArray[res].goals,
                                                    assists: playerArray[res].assists,
                                                    yellowCards: playerArray[res].yellowCards
                                                };
                                            }
                                        });
                                        if (i == 3) whileNot = false;
                                    })(i);
                                }
                                //console.log(homeTeamPlayers);
                                //}, 3000);
                                var awayTeamPlayers = [];

                                for (var i = 0; i < array.length; i++) {
                                    (function(i) {
                                        $.getJSON(awayTeamStatsUrl + array[i], function(awayStats) {
                                            //console.log("awayStats[i] = " + awayStats);
                                            var playerArray = awayStats.results;
                                            for (var res = 0; res < playerArray.length; res++) {
                                                awayTeamPlayers[playerArray[res].player.id] = {
                                                    key: playerArray[res].player.id,
                                                    name: playerArray[res].player.name,
                                                    rating: playerArray[res].rating,
                                                    appearance: playerArray[res].appearances,
                                                    matchesStarted: playerArray[res].matchesStarted,
                                                    minutesPlayed: playerArray[res].minutesPlayed,
                                                    goals: playerArray[res].goals,
                                                    assists: playerArray[res].assists,
                                                    yellowCards: playerArray[res].yellowCards
                                                };
                                            }
                                        });
                                        if (i == 3) whileNot = false;
                                    })(i);
                                }
                                //console.log(awayTeamPlayers);

                                /*
                                function sleep(ms) {
                                    return new Promise(resolve => setTimeout(resolve, ms));
                                }
                                async function demo() {
                                    console.log('Taking a break...');
                                    await sleep(5000);
                                    console.log('Two second later');
                                }
                                demo();
                                */

                                /*while (whileNot)
                                  {
                                    
                                  }*/
                                $.getJSON('https://cors.io/?http://www.sofascore.com/event/' +
                                    arr[id].gameId + '/lineups/json',
                                    function(lineups) {
                                        setTimeout(function() {
                                            console.log(lineups);
                                            var content = "";
                                            content += '<table ';
                                            content += " border='2'>";
                                            if (arr[id].confirmedLineups)
                                                content += "<caption>Confirmed lineups</caption>";
                                            else
                                                content += "<caption>Non-confirmed lineups</caption>";
                                            content += "<tr>" +
                                                "<th>team</th><th>#</th><th>name</th><th>pos</th>" +
                                                "<th>app</th><th>start</th><th>min</th><th>rat</th><th>g</th><th>a</th><th>y</th>" +
                                                "<th>team</th><th>#</th><th>name</th><th>pos</th>" +
                                                "<th>app</th><th>start</th><th>min</th><th>rat</th><th>g</th><th>a</th><th>y</th>" +
                                                "</tr>";
                                            content += "\n";
                                            var homeTeam = lineups.homeTeam.lineupsSorted;
                                            var awayTeam = lineups.awayTeam.lineupsSorted;
                                            //console.log(awayTeam);
                                            for (var pos = 0; pos < homeTeam.length; pos++) {

                                                if (pos < homeTeam.length &&
                                                    typeof homeTeam[pos].player !== 'undefined') {
                                                    if (lineups.homeTeam.formation.length != 0) {
                                                        if (typeof homeTeam[pos].position !== 'undefined') {
                                                            content += '<tr class = "in_a_row">';
                                                        } else {
                                                            content += '<tr class = "not_in_a_row">';
                                                        }
                                                    } else {
                                                        if (!homeTeam[pos].substitute) {
                                                            content += '<tr class = "in_a_row">';
                                                        } else {
                                                            content += '<tr class = "not_in_a_row">';
                                                        }
                                                    }



                                                    content += '<td>' + arr[id].homeTeamName + '</td>';
                                                    //content += '<td>' + homeTeam[pos].shirtNumber + '</td>';	
                                                    content += '<td>' + "" + '</td>';
                                                    content += '<td class="name">' + homeTeam[pos].player.shortName + '</td>';
                                                    content += '<td>' + homeTeam[pos].positionNameshort + '</td>';

                                                    var idPl = homeTeam[pos].player.id;
                                                    //console.log(idPl);
                                                    if (typeof homeTeamPlayers[idPl] !== 'undefined') {
                                                        //console.log(idPl + " = " + homeTeamPlayers[idPl].name);
                                                        content += '<td>' + homeTeamPlayers[idPl].appearance + '</td>';
                                                        content += '<td>' + homeTeamPlayers[idPl].matchesStarted + '</td>';
                                                        content += '<td>' + homeTeamPlayers[idPl].minutesPlayed + '</td>';
                                                        content += '<td>' + homeTeamPlayers[idPl].rating + '</td>';
                                                        content += '<td>' + homeTeamPlayers[idPl].goals + '</td>';
                                                        content += '<td>' + homeTeamPlayers[idPl].assists + '</td>';
                                                        content += '<td>' + homeTeamPlayers[idPl].yellowCards + '</td>';
                                                    } else {
                                                        content += '<td>' + "-" + '</td>';
                                                        content += '<td>' + "-" + '</td>';
                                                        content += '<td>' + "-" + '</td>';
                                                        content += '<td>' + "-" + '</td>';
                                                        content += '<td>' + "-" + '</td>';
                                                        content += '<td>' + "-" + '</td>';
                                                        content += '<td>' + "-" + '</td>';
                                                    }
                                                }


                                                if (pos < awayTeam.length &&
                                                    typeof awayTeam[pos].player !== 'undefined') {
                                                    content += '<td>' + arr[id].awayTeamName + '</td>';
                                                    //content += '<td>' + awayTeam[pos].shirtNumber + '</td>';	
                                                    content += '<td>' + "" + '</td>';
                                                    content += '<td class="name">' + awayTeam[pos].player.shortName + '</td>';
                                                    content += '<td>' + awayTeam[pos].positionNameshort + '</td>';

                                                    var idPl = awayTeam[pos].player.id;
                                                    //console.log(idPl);
                                                    if (typeof awayTeamPlayers[idPl] !== 'undefined') {
                                                        //console.log(idPl + " = " + awayTeamPlayers[idPl].name);
                                                        content += '<td>' + awayTeamPlayers[idPl].appearance + '</td>';
                                                        content += '<td>' + awayTeamPlayers[idPl].matchesStarted + '</td>';
                                                        content += '<td>' + awayTeamPlayers[idPl].minutesPlayed + '</td>';
                                                        content += '<td>' + awayTeamPlayers[idPl].rating + '</td>';
                                                        content += '<td>' + awayTeamPlayers[idPl].goals + '</td>';
                                                        content += '<td>' + awayTeamPlayers[idPl].assists + '</td>';
                                                        content += '<td>' + awayTeamPlayers[idPl].yellowCards + '</td>';
                                                    } else {
                                                        content += '<td>' + "-" + '</td>';
                                                        content += '<td>' + "-" + '</td>';
                                                        content += '<td>' + "-" + '</td>';
                                                        content += '<td>' + "-" + '</td>';
                                                        content += '<td>' + "-" + '</td>';
                                                        content += '<td>' + "-" + '</td>';
                                                        content += '<td>' + "-" + '</td>';
                                                    }
                                                }

                                                content += '</tr>';
                                                content += "\n";
                                            }
                                            content += "</table>";
                                            //console.log(content);
                                            //console.log('.spoiler-body'  + '#' + arr[id].key);
                                            $('.spoiler-body' + '#' + arr[id].key).append(content);
                                        }, 100);
                                        $('.spoiler-body' + '#' + arr[id].key).attr('ready', 'true');
                                        $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
                                    })
                            } else {
                                $('.spoiler-body' + '#' + arr[id].key).find('table').remove();
                                //$('.spoiler-body'  + '#' + arr[id].key).hide();
                                $('.spoiler-body' + '#' + arr[id].key).attr('ready', 'false');
                            }
                        });
                    }
                    //console.log(arr);
                }
            }
        });
}
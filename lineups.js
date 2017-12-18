$.YQL = function(query, callback) {

    if (!query || !callback) {
        throw new Error('$.YQL(): Parameters may be undefined');
    }

    var encodedQuery = encodeURIComponent(query.toLowerCase()),
        url = 'https://query.yahooapis.com/v1/public/yql?q=' +
        encodedQuery + '&format=json&callback=?';

    $.getJSON(url, callback);

};

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

var liveUrl = "http://www.sofascore.com/football/livescore/json";
var todayUrl = 'http://www.sofascore.com/football//' + today + '/json';

$.YQL("SELECT * FROM json WHERE url='" + todayUrl + "' LIMIT 1", function(data) {
    var response = data.query.results.json;
    console.log(response);
    var tournaments = response.sportItem.tournaments;
    if (typeof tournaments.length === 'undefined') {
        var temptournaments = tournaments;
        tournaments = new Array(1);
        tournaments[0] = temptournaments;
    }
    $("#country")
        .empty()
        .append('<option selected="selected" value="Live">Live</option>')
        .append('<option selected="selected" value="All">All</option>');
    var countries = [];
    for (var i = 0; i < tournaments.length; i++) {
        countries.push(tournaments[i].category.name);
    }

    var uniqueNames = [];
    $.each(countries, function(i, el) {
        if ($.inArray(el, uniqueNames) === -1) {
            uniqueNames.push(el);
            $("#country")
                .append('<option value="whatever">' + el + '</option>');
        }
    });


});

$('#runGameButton').click(function() {
    getGames();
});

function getGames() {

    var countryName = $("#country :selected").text();
    var isLive = false;
    console.log(countryName);

    var url = "";
    if (countryName == "Live") {
        url = liveUrl;
        isLive = true;
    } else if (countryName == "All") {
        url = todayUrl;
        isLive = true;
    } else {
        url = todayUrl;
        isLive = false;
    }

    $(".container").remove();

    $.YQL("SELECT * FROM json WHERE url='" + url + "' LIMIT 1", function(data) {
        console.log(data);
        //console.log(url);
        var response = data.query.results.json;
        var arr = [];
        var tournaments = response.sportItem.tournaments;
        //console.log(response.sportItem);

        if (typeof tournaments.length === 'undefined') {
            var temptournaments = tournaments;
            tournaments = new Array(1);
            tournaments[0] = temptournaments;
        }

        for (var i = 0; i < tournaments.length; i++) {
            console.log(tournaments[i].category.name);
            if (!isLive && tournaments[i].category.name != countryName) {
                console.log("Nothing will be get");
                continue;
            } {
                console.log(tournaments[i]);
                //console.log(tournaments[i].tournament.name);
                var events = tournaments[i].events;

                if (typeof events.length === 'undefined') {
                    var tempEvents = events;
                    events = new Array(1);
                    events[0] = tempEvents;
                }

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

                    var homeScoreCurrent = events[j].homeScore !== null ?
                        events[j].homeScore.current :
                        "-";
                    var awayScoreCurrent = events[j].awayScore !== null ?
                        events[j].awayScore.current :
                        "-";
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
                        .text("[" + tournaments[i].category.name + ", " +
                            tournaments[i].tournament.name + "] " +
                            homeTeamName + " - " + awayTeamName + score + "(" + startDate + " " + startTime + ")");

                    console.log("confirmedLineups = " + confirmedLineups);
                    console.log("hasLineupsList = " + hasLineupsList);
                    if (confirmedLineups == "true" || hasLineupsList == "true") {
                        $('.spoiler-title' + '#' + customId).css('text-decoration', 'underline');
                    }

                    $('.spoiler-title' + '#' + customId).click(function() {
                        var id = $(this).attr('id');
                        //console.log(id);
                        //console.log(arr[id]);

                        if ((arr[id].confirmedLineups || arr[id].hasLineupsList) &&
                            $('.spoiler-body' + '#' + arr[id].key).attr('ready') != "true") {

                            var homeTeamStatsUrl = "http://www.sofascore.com/tournament/stats/" +
                                arr[id].tournamentId +
                                "/" +
                                arr[id].seasonId +
                                "/json?fields=goals%2Cassists%2CyellowCards%2Cappearances%2CmatchesStarted%2Crating&order=-appearances&filters=team.EQ." +
                                arr[id].homeTeamId;
                            console.log("homeTeamStatsUrl = " + homeTeamStatsUrl);

                            var awayTeamStatsUrl = "http://www.sofascore.com/tournament/stats/" +
                                arr[id].tournamentId +
                                "/" +
                                arr[id].seasonId +
                                "/json?fields=goals%2Cassists%2CyellowCards%2Cappearances%2CmatchesStarted%2Crating&order=-appearances&filters=team.EQ." +
                                arr[id].awayTeamId;
                            console.log("awayTeamStatsUrl = " + awayTeamStatsUrl);
                            var whileNot = true;
                            var array = ["", "&offset=10", "&offset=20"];

                            $.YQL("SELECT * FROM json WHERE url='" + "http://www.sofascore.com/event/" + arr[id].gameId + "/lineups/json" + "' LIMIT 1",
                                function(data) {
                                    var lineups = data.query.results.json;
                                    console.log(lineups);
                                    var content = "";
                                    content += '<table ';
                                    content += " border='2'>";
                                    if (arr[id].confirmedLineups)
                                        content += "<caption><b>" + arr[id].homeTeamName + "</b> : Confirmed lineups</caption>";
                                    else
                                        content += "<caption><b>" + arr[id].homeTeamName + "</b> : Non-confirmed lineups</caption>";
                                    content += "<tr>" +
                                        "<th>#</th><th>name</th><th>pos</th>" +
                                        "<th> App </th><th> Start </th><th> Min </th><th> Rat </th><th> Goals </th><th> Assists </th><th> Yellow </th>" +
                                        "</tr>";
                                    content += "\n";
                                    var homeTeam = lineups.homeTeam.lineupsSorted;

                                    for (var pos = 0; pos < homeTeam.length; pos++) {

                                        if (pos < homeTeam.length &&
                                            typeof homeTeam[pos].player !== 'undefined') {
                                            if (typeof lineups.homeTeam.formation !== 'undefined') {
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

                                            if (typeof homeTeam[pos].shirtNumber !== 'undefined') {
                                                content += '<td>' + homeTeam[pos].shirtNumber + '</td>';
                                            } else {
                                                content += '<td>' + "" + '</td>';
                                            }

                                            content += '<td class="name">' + homeTeam[pos].player.name + '</td>';
                                            content += '<td>' + homeTeam[pos].positionNameshort + '</td>';

                                            var playerId = homeTeam[pos].player.id;
                                            content += '<td id="appearance_' + playerId + '">' + '-' + '</td>';
                                            content += '<td id="matchesStarted_' + playerId + '">' + '-' + '</td>';
                                            content += '<td id="minutesPlayed_' + playerId + '">' + '-' + '</td>';
                                            content += '<td id="rating_' + playerId + '">' + '-' + '</td>';
                                            content += '<td id="goals_' + playerId + '">' + '-' + '</td>';
                                            content += '<td id="assists_' + playerId + '">' + '-' + '</td>';
                                            content += '<td id="yellowCards_' + playerId + '">' + '-' + '</td>';
                                        }

                                        content += '</tr>';
                                        content += "\n";
                                    }
                                    content += "</table>";

                                    /*content += '<table ';
                                    content += " border='1'>";
                                    content += "<tr>&nbsp</tr>"
                                    content += "</table>";*/

                                    content += '<table ';
                                    content += " border='2'>";
                                    if (arr[id].confirmedLineups)
                                        content += "<caption><b>" + arr[id].awayTeamName + "</b> : Confirmed lineups</caption>";
                                    else
                                        content += "<caption><b>" + arr[id].awayTeamName + "</b> : Non-confirmed lineups</caption>";
                                    content += "<tr>" +
                                        "<th>#</th><th>name</th><th>pos</th>" +
                                        "<th> App </th><th> Start </th><th> Min </th><th> Rat </th><th> Goals </th><th> Assists </th><th> Yellow </th>" +
                                        "</tr>";
                                    content += "\n";

                                    var awayTeam = lineups.awayTeam.lineupsSorted;

                                    for (var pos = 0; pos < awayTeam.length; pos++) {

                                        if (pos < awayTeam.length &&
                                            typeof awayTeam[pos].player !== 'undefined') {
                                            if (typeof lineups.awayTeam.formation !== 'undefined') {
                                                if (typeof awayTeam[pos].position !== 'undefined') {
                                                    content += '<tr class = "in_a_row">';
                                                } else {
                                                    content += '<tr class = "not_in_a_row">';
                                                }
                                            } else {
                                                if (!awayTeam[pos].substitute) {
                                                    content += '<tr class = "in_a_row">';
                                                } else {
                                                    content += '<tr class = "not_in_a_row">';
                                                }
                                            }

                                            if (typeof awayTeam[pos].shirtNumber !== 'undefined') {
                                                content += '<td>' + awayTeam[pos].shirtNumber + '</td>';
                                            } else {
                                                content += '<td>' + "" + '</td>';
                                            }
                                            content += '<td class="name">' + awayTeam[pos].player.name + '</td>';
                                            content += '<td>' + awayTeam[pos].positionNameshort + '</td>';

                                            var playerId = awayTeam[pos].player.id;
                                            content += '<td id="appearance_' + playerId + '">' + '-' + '</td>';
                                            content += '<td id="matchesStarted_' + playerId + '">' + '-' + '</td>';
                                            content += '<td id="minutesPlayed_' + playerId + '">' + '-' + '</td>';
                                            content += '<td id="rating_' + playerId + '">' + '-' + '</td>';
                                            content += '<td id="goals_' + playerId + '">' + '-' + '</td>';
                                            content += '<td id="assists_' + playerId + '">' + '-' + '</td>';
                                            content += '<td id="yellowCards_' + playerId + '">' + '-' + '</td>';

                                        }


                                        content += '</tr>';
                                        content += "\n";
                                    }
                                    content += "</table>";

                                    $('.spoiler-body' + '#' + arr[id].key).append(content);


                                    $('.spoiler-body' + '#' + arr[id].key).attr('ready', 'true');
                                    $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();




                                    var homeTeamPlayers = [];
                                    for (var i = 0; i < array.length; i++) {
                                        (function(i) {
                                            $.YQL("SELECT * FROM json WHERE url='" + homeTeamStatsUrl + array[i] + "' LIMIT 1", function(data) {
                                                var homeStats = data.query.results.json;
                                                //console.log(homeStats);
                                                var playerArray = homeStats.results;
                                                for (var res = 0; res < playerArray.length; res++) {

                                                    $('td#matchesStarted_' + playerArray[res].player.id).text(playerArray[res].matchesstarted);
                                                    $('td#minutesPlayed_' + playerArray[res].player.id).text(playerArray[res].minutesPlayed);
                                                    $('td#rating_' + playerArray[res].player.id).text(playerArray[res].rating);
                                                    $('td#goals_' + playerArray[res].player.id).text(playerArray[res].goals);
                                                    $('td#assists_' + playerArray[res].player.id).text(playerArray[res].assists);
                                                    $('td#yellowCards_' + playerArray[res].player.id).text(playerArray[res].yellowcards);
                                                    $('td#appearance_' + playerArray[res].player.id).text(playerArray[res].appearances);

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
                                        })(i);
                                    }

                                    var awayTeamPlayers = [];
                                    for (var i = 0; i < array.length; i++) {
                                        (function(i) {
                                            $.YQL("SELECT * FROM json WHERE url='" + awayTeamStatsUrl + array[i] + "' LIMIT 1", function(data) {
                                                var awayStats = data.query.results.json;
                                                var playerArray = awayStats.results;
                                                for (var res = 0; res < playerArray.length; res++) {

                                                    $('td#matchesStarted_' + playerArray[res].player.id).text(playerArray[res].matchesstarted);
                                                    $('td#minutesPlayed_' + playerArray[res].player.id).text(playerArray[res].minutesPlayed);
                                                    $('td#rating_' + playerArray[res].player.id).text(playerArray[res].rating);
                                                    $('td#goals_' + playerArray[res].player.id).text(playerArray[res].goals);
                                                    $('td#assists_' + playerArray[res].player.id).text(playerArray[res].assists);
                                                    $('td#yellowCards_' + playerArray[res].player.id).text(playerArray[res].yellowcards);
                                                    $('td#appearance_' + playerArray[res].player.id).text(playerArray[res].appearances);

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
                                        })(i);
                                    }




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
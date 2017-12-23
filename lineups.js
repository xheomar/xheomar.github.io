function getUnixTs() {
    var ts = Math.round((new Date()).getTime() / 1000).toString();
    ts = ts.slice(0, -1);
    return ts;
}

console.log(getUnixTs());

$.YQL = function(query, callback) {

    if (!query || !callback) {
        throw new Error('$.YQL(): Parameters may be undefined');
    }

    var encodedQuery = encodeURIComponent(query.toLowerCase()),
        url = 'https://query.yahooapis.com/v1/public/yql?q=' +
        encodedQuery + '&format=json&callback=?';
  
        
        
        //if (url.indexOf("position.eq.f") != -1)
  url = url.replace("position.eq.g", "position.eq.G");
  url = url.replace("position.eq.d", "position.eq.D");
  url = url.replace("position.eq.m", "position.eq.M");
  url = url.replace("position.eq.f", "position.eq.F");
  
        //console.log(url);

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
//todayUrl = 'http://www.sofascore.com/football//' + '2017-12-19' + '/json';


// Testing team.EQ.2672%2C position.EQ.G%2C
/*
var urlEncoded = "https://www.sofascore.com/tournament/stats/8/13662/json?fields=goals,rating&filters=age.GT.30,position.EQ.F,team.EQ.2829";
console.log(urlEncoded);

$.YQL("SELECT * FROM json WHERE url='" + urlEncoded + "' LIMIT 1", function(data) {
      console.log(data);
  });*/


$.YQL("SELECT * FROM json WHERE url='" + todayUrl + '?_=' + getUnixTs() + "' LIMIT 1", function(data) {
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
    //console.log(countryName);

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

    $.YQL("SELECT * FROM json WHERE url='" + url + '?_=' + getUnixTs() + "' LIMIT 1", function(data) {
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
            //console.log(tournaments[i].category.name);
            if (!isLive && tournaments[i].category.name != countryName) {
                //console.log("Nothing will be get");
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
                    var hasLineups = events[j].hasLineups;
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
                        hasLineups: hasLineups,
                        status: status,
                        tournamentId: tournamentId,
                        seasonId: seasonId
                    };

                    var content = '<div class="container"><div class=' + customId +
                        ' id=sorting points="0" data-sort="0">' +
                        '<div class="spoiler-title" id="' +
                        customId + '">' + '</div>'
                    
                    content += '<div class="spoiler-body" id="' + customId + '"></div>';

                    content += "</div></div>";
                    $('#tables').append(content);

                    var gameTr = "<tr id='" + customId + "'>";

                    //gameTr += "<td>" + startDate + "</td>";
                    gameTr += "<td width='35px'>" + startTime + "</td>";
                  
                    if (confirmedLineups == "true" || hasLineupsList == "true" || hasLineups == "true") {
                        //$('.spoiler-title' + '#' + customId).css('text-decoration', 'underline');
                        //$("tr#" + customId).css('text-decoration', 'underline');
                        gameTr += "<td width='45px' id='" + customId + "'>" + "lineups" + "</td>";                        
                    }
                    else {
                      gameTr += "<td width='45px'>" + " " + "</td>";
                    }

                    if (status == "finished") {
                        gameTr += "<td width='80px'>" + "finished" + "</td>";
                        //$('.spoiler-title' + '#' + customId).css('color', 'black');
                        //score = " " + homeScoreCurrent + " : " + awayScoreCurrent + " ";
                    } else if (status == "inprogress") {
                        gameTr += "<td width='80px'>" + "inprogress" + "</td>";
                        //$('.spoiler-title' + '#' + customId).css('color', 'green');
                        //score = " " + homeScoreCurrent + " : " + awayScoreCurrent + " ";
                    } else if (status == "canceled") {
                        gameTr += "<td width='80px'>" + "canceled" + "</td>";
                        //$('.spoiler-title' + '#' + customId).css('color', 'red');
                    } else if (status == "notstarted") {
                        gameTr += "<td width='80px'>" + "notstarted" + "</td>";
                        //$('.spoiler-title' + '#' + customId).css('color', 'blue');
                    }

                    gameTr += "<td>" + homeTeamName + "</td>";
                    gameTr += "<td width='20px'>" + homeScoreCurrent + "</td>";
                    gameTr += "<td width='20px'>" + awayScoreCurrent + "</td>";
                    gameTr += "<td>" + awayTeamName + "</td>";
                    gameTr += "</tr>";
                  
                    //gameTr += '<tr><td>' + '<div class="spoiler-body" id="' + customId + '"></div>' + '</td></tr>';

                    /*$('.spoiler-title' + '#' + customId)
                        .text("[" + tournaments[i].category.name + ", " +
                            tournaments[i].tournament.name + "] " +
                            homeTeamName + " - " + awayTeamName + score + 
                            "(" + startDate + " " + startTime + ")");*/

                    if ($('table.newtable#table_' + tournamentId).length) {
                        $('table.newtable#table_' + tournamentId).append(gameTr);
                    } else {
                        var leagueTable = "<table border=2 class='newtable' id='table_" + tournamentId + "'>";
                        leagueTable += "<caption><b>" + tournaments[i].category.name + "</b> : " +
                            tournaments[i].tournament.name + "<caption>";
                        leagueTable += "</table>";
                        $('.spoiler-title' + '#' + customId).append(leagueTable);
                        $('table.newtable#table_' + tournamentId).append(gameTr);
                    }
                    

                    $("td#" + customId).css('text-decoration', 'underline');
                    $("td#" + customId).css('cursor', 'pointer');
                  
                    
                    // ВЕШАЕМ НА СТРОКУ ОТКРЫТИЕ ПОПАПА ПО КЛИКУ
                    if (confirmedLineups == "true" || hasLineupsList == "true" || hasLineups == "true")
                        //$('.spoiler-title' + '#' + customId)
                        $("td#" + customId).click(function() {
                            if ($('.spoiler-body').length) {
                              $('.spoiler-body').find('table').remove();
                            }
                            var id = $(this).attr('id');
                            //console.log(id);
                            //console.log(arr[id]);

                            if ((arr[id].confirmedLineups || arr[id].hasLineupsList) &&
                                $('.spoiler-body' + '#' + arr[id].key).attr('ready') != "true") {

                                var sofaStatsUrl = "http://www.sofascore.com/tournament/stats/";
                                var sofaStatsFields = "/json?fields=" +
                                    "goals" + "," +
                                    "assists" + "," +
                                    "yellowCards" + "," +
                                    "appearances" + "," +
                                    "matchesStarted" + "," +
                                    "rating" + "," +
                                    "tackles" + "," +
                                    "accuratePassesPercentage" + "," +
                                    "keyPasses" + "," +
                                    "cleanSheet" + "," +
                                    "redCards" +
                                    "&order=-appearances";
                                var sofaStatsFlters = "&filters=team.EQ.";


                                var homeTeamStatsUrl = sofaStatsUrl +
                                    arr[id].tournamentId +
                                    "/" +
                                    arr[id].seasonId +
                                    sofaStatsFields + sofaStatsFlters +
                                    arr[id].homeTeamId;
                                console.log("homeTeamStatsUrl = " + homeTeamStatsUrl);

                                var awayTeamStatsUrl = "http://www.sofascore.com/tournament/stats/" +
                                    arr[id].tournamentId +
                                    "/" +
                                    arr[id].seasonId +
                                    "/json?fields=" +
                                    "goals" + "%2C" +
                                    "assists" + "%2C" +
                                    "yellowCards" + "%2C" +
                                    "appearances" + "%2C" +
                                    "matchesStarted" + "%2C" +
                                    "rating" + "%2C" +
                                    "tackles" + "%2C" +
                                    "accuratePassesPercentage" + "%2C" +
                                    "keyPasses" + "%2C" +
                                    "cleanSheet" + "%2C" +
                                    "redCards" +
                                    "&order=-appearances&filters=team.EQ." +
                                    arr[id].awayTeamId;
                                console.log("awayTeamStatsUrl = " + awayTeamStatsUrl);

                                var homeTeamTournamentsUrl = "https://www.sofascore.com/team/" + arr[id].homeTeamId + "/tournaments/json";
                                var awayTeamTournamentsUrl = "https://www.sofascore.com/team/" + arr[id].awayTeamId + "/tournaments/json";



                                $.YQL("SELECT * FROM json WHERE url='" + "http://www.sofascore.com/event/" +
                                    arr[id].gameId + "/lineups/json" + '?_=' + getUnixTs() + "' LIMIT 1",
                                    function(data) {
                                        var lineups = data.query.results.json;
                                        console.log(lineups);
                                        var content = "";
                                        content += '<table id="team_' + arr[id].homeTeamId + '"';
                                        content += " border='2'>";
                                        if (arr[id].confirmedLineups == "true")
                                            content += "<caption class='popup'><b>" + arr[id].homeTeamName + "</b> : Confirmed lineups</caption>";
                                        else
                                            content += "<caption class='popup'><b>" + arr[id].homeTeamName + "</b> : Non-confirmed lineups</caption>";
                                        content += "<tr>" +
                                            "<th>#</th><th>name</th><th>pos</th>" +
                                            "<th> App </th>" +
                                            "<th> Start </th>" +
                                            "<th> Min </th>" +
                                            "<th> Goals </th>" +
                                            "<th> Assists </th>" +
                                            "<th> Tack </th>" +
                                            "<th> AP% </th>" +
                                            "<th> KeyP </th>" +
                                            "<th> Clean </th>" +
                                            "<th> Yellows </th>" +
                                            "<th> Reds </th>" +
                                            "<th> Rat </th>" +
                                            "</tr>";
                                        content += "\n";
                                        var homeTeam = lineups.homeTeam.lineupsSorted;
                                        if (homeTeam.length)
                                            for (var pos = 0; pos < homeTeam.length; pos++) {
                                                content += '<tr id="player_' + homeTeam[pos].player.id + '" ';
                                                if (pos < homeTeam.length &&
                                                    typeof homeTeam[pos].player !== 'undefined') {
                                                    if (typeof lineups.homeTeam.formation !== 'undefined') {
                                                        if (typeof homeTeam[pos].position !== 'undefined') {
                                                            content += 'class="in_a_row">';
                                                        } else {
                                                            content += 'class="not_in_a_row">';
                                                        }
                                                    } else {
                                                        if (homeTeam[pos].substitute == "false") {
                                                            content += 'class = "in_a_row">';
                                                        } else {
                                                            content += 'class = "not_in_a_row">';
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
                                                    content += '<td id="goals_' + playerId + '">' + '-' + '</td>';
                                                    content += '<td id="assists_' + playerId + '">' + '-' + '</td>';
                                                    content += '<td id="tackles_' + playerId + '">' + '-' + '</td>';
                                                    content += '<td id="accuratePassesPercentage_' + playerId + '">' + '-' + '</td>';
                                                    content += '<td id="keyPasses_' + playerId + '">' + '-' + '</td>';
                                                    content += '<td id="cleanSheet_' + playerId + '">' + '-' + '</td>';
                                                    content += '<td id="yellowCards_' + playerId + '">' + '-' + '</td>';
                                                    content += '<td id="redCards_' + playerId + '">' + '-' + '</td>';
                                                    content += '<td id="rating_' + playerId + '">' + '-' + '</td>';
                                                }

                                                content += '</tr>';
                                                content += "\n";
                                            }
                                        content += "</table>";

                                        content += '<table ';
                                        content += " border='1'>";
                                        content += "<tr> vs </tr>"
                                        content += "</table>";

                                        content += '<table id="team_' + arr[id].awayTeamId + '"';
                                        content += " border='2'>";
                                        if (arr[id].confirmedLineups == "true")
                                            content += "<caption class='popup'><b>" + arr[id].awayTeamName + "</b> : Confirmed lineups</caption>";
                                        else
                                            content += "<caption class='popup'><b>" + arr[id].awayTeamName + "</b> : Non-confirmed lineups</caption>";
                                        content += "<tr>" +
                                            "<th>#</th><th>name</th><th>pos</th>" +
                                            "<th> App </th>" +
                                            "<th> Start </th>" +
                                            "<th> Min </th>" +
                                            "<th> Goals </th>" +
                                            "<th> Assists </th>" +
                                            "<th> Tack </th>" +
                                            "<th> AP% </th>" +
                                            "<th> KeyP </th>" +
                                            "<th> Clean </th>" +
                                            "<th> Yellows </th>" +
                                            "<th> Reds </th>" +
                                            "<th> Rat </th>" +
                                            "</tr>";
                                        content += "\n";

                                        var awayTeam = lineups.awayTeam.lineupsSorted;

                                        for (var pos = 0; pos < awayTeam.length; pos++) {
                                            content += '<tr id="player_' + awayTeam[pos].player.id + '" ';
                                            if (pos < awayTeam.length &&
                                                typeof awayTeam[pos].player !== 'undefined') {
                                                if (typeof lineups.awayTeam.formation !== 'undefined') {
                                                    if (typeof awayTeam[pos].position !== 'undefined') {
                                                        content += 'class = "in_a_row">';
                                                    } else {
                                                        content += 'class = "not_in_a_row">';
                                                    }
                                                } else {
                                                    if (awayTeam[pos].substitute == "false") {
                                                        content += 'class = "in_a_row">';
                                                    } else {
                                                        content += 'class = "not_in_a_row">';
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
                                                content += '<td id="goals_' + playerId + '">' + '-' + '</td>';
                                                content += '<td id="assists_' + playerId + '">' + '-' + '</td>';
                                                content += '<td id="tackles_' + playerId + '">' + '-' + '</td>';
                                                content += '<td id="accuratePassesPercentage_' + playerId + '">' + '-' + '</td>';
                                                content += '<td id="keyPasses_' + playerId + '">' + '-' + '</td>';
                                                content += '<td id="cleanSheet_' + playerId + '">' + '-' + '</td>';
                                                content += '<td id="yellowCards_' + playerId + '">' + '-' + '</td>';
                                                content += '<td id="redCards_' + playerId + '">' + '-' + '</td>';
                                                content += '<td id="rating_' + playerId + '">' + '-' + '</td>';
                                            }


                                            content += '</tr>';
                                            content += "\n";
                                        }
                                        content += "</table>";

                                        $('.spoiler-body' + '#' + arr[id].key).append(content);


                                        //$('.spoiler-body' + '#' + arr[id].key).attr('ready', 'true');
                                  
                                        $('.spoiler-body' + '#' + arr[id].key).bPopup();
                                        //$(this).toggleClass('opened').toggleClass('closed').next().slideToggle();

                                        var array = ["", "&offset=10", "&offset=20"];

                                        

                                        var homTeamTournamentsId = [arr[id].tournamentId];
                                        var homTeamSeasonsId = [arr[id].seasonId];

                                        // Вывести список турниров домашней команды                                    
                                        /*$.YQL("SELECT * FROM json WHERE url='" + homeTeamTournamentsUrl + '?_=' + getUnixTs() + "' LIMIT 1", function(data) {
                                            var homeTeamTournaments = data.query.results.json.json;
                                            for (var i = 0; i < homeTeamTournaments.length; i++) {
                                                var season = homeTeamTournaments[i];
                                                //console.log(season);
                                                if (season.season.year.indexOf("17/18") != -1 || season.season.year.indexOf("2017") != -1) {
                                                    console.log(season.season.id);
                                                    console.log(season.tournament.uniqueId);
                                                    if (season.season.id != arr[id].seasonId) {
                                                        homTeamTournamentsId.push(season.tournament.uniqueId);
                                                        homTeamSeasonsId.push(season.season.id);
                                                        console.log("homTeamTournamentsId: ");
                                                        console.log(homTeamTournamentsId);
                                                        console.log("homTeamSeasonsId: ");
                                                        console.log(homTeamSeasonsId);
                                                    }
                                                }
                                            }
                                        });*/

                                        array = ["G", "D", "M", "F"];


                                        for (var i = 0; i < array.length; i++) {
                                            (function(i) {
                                                homeTeamStatsUrl = sofaStatsUrl +
                                                    // homTeamTournamentsId[j] + 
                                                    arr[id].tournamentId +
                                                    "/" +
                                                    // homTeamSeasonsId[j] + 
                                                    arr[id].seasonId +
                                                    sofaStatsFields +
                                                    sofaStatsFlters +
                                                    arr[id].homeTeamId + 
                                                    "," + "position.EQ." + array[i];

                                                console.log(homeTeamStatsUrl);
                                                $.YQL("SELECT * FROM json WHERE url='" + homeTeamStatsUrl + '?_=' + getUnixTs() + "' LIMIT 1", function(data) {
                                                    
                                                    var homeStats = data.query.results.json;
  
                                                    var playerArray = homeStats.results;
                                                    if (typeof playerArray.length === 'undefined') {
                                                      console.log("UNDEFINED!");
                                                      var tempPlayerArray = playerArray;
                                                      playerArray = new Array(1);
                                                      playerArray[0] = tempPlayerArray;
                                                    }
                                                    //if (typeof playerArray !== 'undefined')
                                                        for (var res = 0; res < playerArray.length; res++) {
                                                            if ($('tr#player_' + playerArray[res].player.id).length) {
                                                                $('td#matchesStarted_' + playerArray[res].player.id).text(playerArray[res].matchesstarted);
                                                                $('td#minutesPlayed_' + playerArray[res].player.id).text(playerArray[res].minutesPlayed);
                                                                $('td#rating_' + playerArray[res].player.id).text(playerArray[res].rating);
                                                                $('td#goals_' + playerArray[res].player.id).text(playerArray[res].goals);
                                                                $('td#assists_' + playerArray[res].player.id).text(playerArray[res].assists);
                                                                $('td#yellowCards_' + playerArray[res].player.id).text(playerArray[res].yellowcards);
                                                                $('td#appearance_' + playerArray[res].player.id).text(playerArray[res].appearances);
                                                                $('td#tackles_' + playerArray[res].player.id).text(playerArray[res].tackles);
                                                                $('td#accuratePassesPercentage_' + playerArray[res].player.id).text(playerArray[res].accuratepassespercentage);
                                                                $('td#keyPasses_' + playerArray[res].player.id).text(playerArray[res].keypasses);
                                                                $('td#cleanSheet_' + playerArray[res].player.id).text(playerArray[res].cleansheet);
                                                                $('td#redCards_' + playerArray[res].player.id).text(playerArray[res].redcards);
                                                            } else {
                                                                var newTr = "";
                                                                var playerId = playerArray[res].player.id;
                                                                newTr += '<tr id="player_' + playerId + '" class="stayed_home">';
                                                                newTr += '<td id="number_' + playerId + '">' + '-' + '</td>';
                                                                newTr += '<td class="name" id="name_' + playerId + '">' + playerArray[res].player.name + '</td>';
                                                                //newTr += '<td id="pos_' + playerId + '">' + '-' + '</td>';
                                                                newTr += '<td id="pos_' + playerId + '">' + array[i] + '</td>';
                                                                newTr += '<td id="appearance_' + playerId + '">' + playerArray[res].appearances + '</td>';
                                                                newTr += '<td id="matchesStarted_' + playerId + '">' + playerArray[res].matchesstarted + '</td>';
                                                                newTr += '<td id="minutesPlayed_' + playerId + '">' + playerArray[res].minutesPlayed + '</td>';
                                                                newTr += '<td id="goals_' + playerId + '">' + playerArray[res].goals + '</td>';
                                                                newTr += '<td id="assists_' + playerId + '">' + playerArray[res].assists + '</td>';
                                                                newTr += '<td id="tackles_' + playerId + '">' + playerArray[res].tackles + '</td>';
                                                                newTr += '<td id="accuratePassesPercentage_' + playerId + '">' + playerArray[res].accuratepassespercentage + '</td>';
                                                                newTr += '<td id="keyPasses_' + playerId + '">' + playerArray[res].keypasses + '</td>';
                                                                newTr += '<td id="cleanSheet_' + playerId + '">' + playerArray[res].cleansheet + '</td>';
                                                                newTr += '<td id="yellowCards_' + playerId + '">' + playerArray[res].yellowcards + '</td>';
                                                                newTr += '<td id="redCards_' + playerId + '">' + playerArray[res].redcards + '</td>';
                                                                newTr += '<td id="rating_' + playerId + '">' + playerArray[res].rating + '</td>';
                                                                newTr += '</tr>';
                                                                $("table#team_" + arr[id].homeTeamId).append(newTr);
                                                            }
                                                        }
                                                });
                                            })(i);
                                        }



                                        for (var i = 0; i < array.length; i++) {
                                            (function(i) {
                                                awayTeamStatsUrl = sofaStatsUrl +
                                                    // homTeamTournamentsId[j] + 
                                                    arr[id].tournamentId +
                                                    "/" +
                                                    // homTeamSeasonsId[j] + 
                                                    arr[id].seasonId +
                                                    sofaStatsFields +
                                                    sofaStatsFlters +
                                                    arr[id].awayTeamId + 
                                                    "," + "position.EQ." + array[i];

                                                console.log(awayTeamStatsUrl);
                                                $.YQL("SELECT * FROM json WHERE url='" + awayTeamStatsUrl + '?_=' + getUnixTs() + "' LIMIT 1", function(data) {
                                                    
                                                    var awayStats = data.query.results.json;
  
                                                    var playerArray = awayStats.results;
                                                    if (typeof playerArray.length === 'undefined') {
                                                      console.log("UNDEFINED!");
                                                      var tempPlayerArray = playerArray;
                                                      playerArray = new Array(1);
                                                      playerArray[0] = tempPlayerArray;
                                                    }
                                                    //if (typeof playerArray !== 'undefined')
                                                        for (var res = 0; res < playerArray.length; res++) {
                                                            if ($('tr#player_' + playerArray[res].player.id).length) {
                                                                $('td#matchesStarted_' + playerArray[res].player.id).text(playerArray[res].matchesstarted);
                                                                $('td#minutesPlayed_' + playerArray[res].player.id).text(playerArray[res].minutesPlayed);
                                                                $('td#rating_' + playerArray[res].player.id).text(playerArray[res].rating);
                                                                $('td#goals_' + playerArray[res].player.id).text(playerArray[res].goals);
                                                                $('td#assists_' + playerArray[res].player.id).text(playerArray[res].assists);
                                                                $('td#yellowCards_' + playerArray[res].player.id).text(playerArray[res].yellowcards);
                                                                $('td#appearance_' + playerArray[res].player.id).text(playerArray[res].appearances);
                                                                $('td#tackles_' + playerArray[res].player.id).text(playerArray[res].tackles);
                                                                $('td#accuratePassesPercentage_' + playerArray[res].player.id).text(playerArray[res].accuratepassespercentage);
                                                                $('td#keyPasses_' + playerArray[res].player.id).text(playerArray[res].keypasses);
                                                                $('td#cleanSheet_' + playerArray[res].player.id).text(playerArray[res].cleansheet);
                                                                $('td#redCards_' + playerArray[res].player.id).text(playerArray[res].redcards);
                                                            } else {
                                                                var newTr = "";
                                                                var playerId = playerArray[res].player.id;
                                                                newTr += '<tr id="player_' + playerId + '" class="stayed_home">';
                                                                newTr += '<td id="number_' + playerId + '">' + '-' + '</td>';
                                                                newTr += '<td class="name" id="name_' + playerId + '">' + playerArray[res].player.name + '</td>';
                                                                //newTr += '<td id="pos_' + playerId + '">' + '-' + '</td>';
                                                                newTr += '<td id="pos_' + playerId + '">' + array[i] + '</td>';
                                                                newTr += '<td id="appearance_' + playerId + '">' + playerArray[res].appearances + '</td>';
                                                                newTr += '<td id="matchesStarted_' + playerId + '">' + playerArray[res].matchesstarted + '</td>';
                                                                newTr += '<td id="minutesPlayed_' + playerId + '">' + playerArray[res].minutesPlayed + '</td>';
                                                                newTr += '<td id="goals_' + playerId + '">' + playerArray[res].goals + '</td>';
                                                                newTr += '<td id="assists_' + playerId + '">' + playerArray[res].assists + '</td>';
                                                                newTr += '<td id="tackles_' + playerId + '">' + playerArray[res].tackles + '</td>';
                                                                newTr += '<td id="accuratePassesPercentage_' + playerId + '">' + playerArray[res].accuratepassespercentage + '</td>';
                                                                newTr += '<td id="keyPasses_' + playerId + '">' + playerArray[res].keypasses + '</td>';
                                                                newTr += '<td id="cleanSheet_' + playerId + '">' + playerArray[res].cleansheet + '</td>';
                                                                newTr += '<td id="yellowCards_' + playerId + '">' + playerArray[res].yellowcards + '</td>';
                                                                newTr += '<td id="redCards_' + playerId + '">' + playerArray[res].redcards + '</td>';
                                                                newTr += '<td id="rating_' + playerId + '">' + playerArray[res].rating + '</td>';
                                                                newTr += '</tr>';
                                                                $("table#team_" + arr[id].awayTeamId).append(newTr);
                                                            }
                                                        }
                                                });
                                            })(i);
                                        }
                                  
                                  

                                    })
                            } else {
                                $('.spoiler-body' + '#' + arr[id].key).find('table').remove();
                                $('.spoiler-body' + '#' + arr[id].key).attr('ready', 'false');
                            }
                        });
                }
                //console.log(arr);
            }
        }
    });
}

/*================================================================================
 * @name: bPopup - if you can't get it up, use bPopup
 * @author: (c)Bjoern Klinggaard (twitter@bklinggaard)
 * @demo: http://dinbror.dk/bpopup
 * @version: 0.11.0.min
 ================================================================================*/
(function(c) {
    c.fn.bPopup = function(A, E) {
        function L() {
            a.contentContainer = c(a.contentContainer || b);
            switch (a.content) {
                case "iframe":
                    var d = c('<iframe class="b-iframe" ' + a.iframeAttr + "></iframe>");
                    d.appendTo(a.contentContainer);
                    t = b.outerHeight(!0);
                    u = b.outerWidth(!0);
                    B();
                    d.attr("src", a.loadUrl);
                    l(a.loadCallback);
                    break;
                case "image":
                    B();
                    c("<img />").load(function() {
                        l(a.loadCallback);
                        F(c(this))
                    }).attr("src", a.loadUrl).hide().appendTo(a.contentContainer);
                    break;
                default:
                    B(), c('<div class="b-ajax-wrapper"></div>').load(a.loadUrl, a.loadData, function(d, b, e) {
                        l(a.loadCallback, b);
                        F(c(this))
                    }).hide().appendTo(a.contentContainer)
            }
        }

        function B() {
            a.modal && c('<div class="b-modal ' + e + '"></div>').css({
                backgroundColor: a.modalColor,
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0,
                zIndex: a.zIndex + v
            }).appendTo(a.appendTo).fadeTo(a.speed, a.opacity);
            C();
            b.data("bPopup", a).data("id", e).css({
                left: "slideIn" == a.transition || "slideBack" == a.transition ? "slideBack" == a.transition ? f.scrollLeft() + w : -1 * (x + u) : m(!(!a.follow[0] && n || g)),
                position: a.positionStyle || "absolute",
                top: "slideDown" == a.transition || "slideUp" == a.transition ? "slideUp" == a.transition ? f.scrollTop() + y : z + -1 * t : p(!(!a.follow[1] && q || g)),
                "z-index": a.zIndex + v + 1
            }).each(function() {
                a.appending && c(this).appendTo(a.appendTo)
            });
            G(!0)
        }

        function r() {
            a.modal && c(".b-modal." + b.data("id")).fadeTo(a.speed, 0, function() {
                c(this).remove()
            });
            a.scrollBar || c("html").css("overflow", "auto");
            c(".b-modal." + e).unbind("click");
            f.unbind("keydown." + e);
            k.unbind("." + e).data("bPopup", 0 < k.data("bPopup") - 1 ? k.data("bPopup") - 1 : null);
            b.undelegate(".bClose, ." + a.closeClass, "click." + e, r).data("bPopup", null);
            clearTimeout(H);
            G();
            return !1
        }

        function I(d) {
            y = k.height();
            w = k.width();
            h = D();
            if (h.x || h.y) clearTimeout(J), J = setTimeout(function() {
                C();
                d = d || a.followSpeed;
                var e = {};
                h.x && (e.left = a.follow[0] ? m(!0) : "auto");
                h.y && (e.top = a.follow[1] ? p(!0) : "auto");
                b.dequeue().each(function() {
                    g ? c(this).css({
                        left: x,
                        top: z
                    }) : c(this).animate(e, d, a.followEasing)
                })
            }, 50)
        }

        function F(d) {
            var c = d.width(),
                e = d.height(),
                f = {};
            a.contentContainer.css({
                height: e,
                width: c
            });
            e >= b.height() && (f.height = b.height());
            c >= b.width() && (f.width = b.width());
            t = b.outerHeight(!0);
            u = b.outerWidth(!0);
            C();
            a.contentContainer.css({
                height: "auto",
                width: "auto"
            });
            f.left = m(!(!a.follow[0] && n || g));
            f.top = p(!(!a.follow[1] && q || g));
            b.animate(f, 250, function() {
                d.show();
                h = D()
            })
        }

        function M() {
            k.data("bPopup", v);
            b.delegate(".bClose, ." + a.closeClass, "click." + e, r);
            a.modalClose && c(".b-modal." + e).css("cursor", "pointer").bind("click", r);
            N || !a.follow[0] && !a.follow[1] || k.bind("scroll." + e, function() {
                if (h.x || h.y) {
                    var d = {};
                    h.x && (d.left = a.follow[0] ? m(!g) : "auto");
                    h.y && (d.top = a.follow[1] ? p(!g) : "auto");
                    b.dequeue().animate(d, a.followSpeed, a.followEasing)
                }
            }).bind("resize." + e, function() {
                I()
            });
            a.escClose && f.bind("keydown." + e, function(a) {
                27 == a.which && r()
            })
        }

        function G(d) {
            function c(e) {
                b.css({
                    display: "block",
                    opacity: 1
                }).animate(e, a.speed, a.easing, function() {
                    K(d)
                })
            }
            switch (d ? a.transition : a.transitionClose || a.transition) {
                case "slideIn":
                    c({
                        left: d ? m(!(!a.follow[0] && n || g)) : f.scrollLeft() - (u || b.outerWidth(!0)) - 200
                    });
                    break;
                case "slideBack":
                    c({
                        left: d ? m(!(!a.follow[0] && n || g)) : f.scrollLeft() + w + 200
                    });
                    break;
                case "slideDown":
                    c({
                        top: d ? p(!(!a.follow[1] && q || g)) : f.scrollTop() - (t || b.outerHeight(!0)) - 200
                    });
                    break;
                case "slideUp":
                    c({
                        top: d ? p(!(!a.follow[1] && q || g)) : f.scrollTop() + y + 200
                    });
                    break;
                default:
                    b.stop().fadeTo(a.speed, d ? 1 : 0, function() {
                        K(d)
                    })
            }
        }

        function K(d) {
            d ? (M(), l(E), a.autoClose && (H = setTimeout(r, a.autoClose))) : (b.hide(), l(a.onClose), a.loadUrl && (a.contentContainer.empty(), b.css({
                height: "auto",
                width: "auto"
            })))
        }

        function m(a) {
            return a ? x + f.scrollLeft() : x
        }

        function p(a) {
            return a ? z + f.scrollTop() : z
        }

        function l(a, e) {
            c.isFunction(a) && a.call(b, e)
        }

        function C() {
            z = q ? a.position[1] : Math.max(0, (y - b.outerHeight(!0)) / 2 - a.amsl);
            x = n ? a.position[0] : (w - b.outerWidth(!0)) / 2;
            h = D()
        }

        function D() {
            return {
                x: w > b.outerWidth(!0),
                y: y > b.outerHeight(!0)
            }
        }
        c.isFunction(A) && (E = A, A = null);
        var a = c.extend({}, c.fn.bPopup.defaults, A);
        a.scrollBar || c("html").css("overflow", "hidden");
        var b = this,
            f = c(document),
            k = c(window),
            y = k.height(),
            w = k.width(),
            N = /OS 6(_\d)+/i.test(navigator.userAgent),
            v = 0,
            e, h, q, n, g, z, x, t, u, J, H;
        b.close = function() {
            r()
        };
        b.reposition = function(a) {
            I(a)
        };
        return b.each(function() {
            c(this).data("bPopup") || (l(a.onOpen), v = (k.data("bPopup") || 0) + 1, e = "__b-popup" + v + "__", q = "auto" !== a.position[1], n = "auto" !== a.position[0], g = "fixed" === a.positionStyle, t = b.outerHeight(!0), u = b.outerWidth(!0), a.loadUrl ? L() : B())
        })
    };
    c.fn.bPopup.defaults = {
        amsl: 50,
        appending: !0,
        appendTo: "body",
        autoClose: !1,
        closeClass: "b-close",
        content: "ajax",
        contentContainer: !1,
        easing: "swing",
        escClose: !0,
        follow: [!0, !0],
        followEasing: "swing",
        followSpeed: 500,
        iframeAttr: 'scrolling="no" frameborder="0"',
        loadCallback: !1,
        loadData: !1,
        loadUrl: !1,
        modal: !0,
        modalClose: !0,
        modalColor: "#000",
        onClose: !1,
        onOpen: !1,
        opacity: .7,
        position: ["auto", "auto"],
        positionStyle: "absolute",
        scrollBar: !0,
        speed: 250,
        transition: "fadeIn",
        transitionClose: !1,
        zIndex: 9997
    }
})(jQuery);
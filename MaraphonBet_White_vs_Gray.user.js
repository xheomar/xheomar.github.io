// ==UserScript==
// @name         MaraphonBet_White_vs_Gray
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  find AnyOtherScore on the page and click on it!
// @author       xheomar
// @match        https://www.marathonbet.by/su/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var isSelectAll = confirm("OK - выбрать все ЛДС на странице, Cancel - перейти к выбору чёт/нечет");
    if ( isSelectAll )
    {
        // Выбираем все строчки со ставками на ЛДС
        setTimeout(function(){
            $(".event-more-view").click();
                setTimeout(function(){
                    $("tr td:contains('Любой другой счёт')").filter(".height-column-with-price").click();
                    setTimeout(function(){
                        $(".event-more-view").click();}, 3000);
                }, 1500);
        }, 1500);
    }
    else
    {
        var isWhite = confirm("OK - белые линии, Cancel - перейти к выбору серых");
        if ( isWhite )
        {
            // Выбираем белые строчки со ставками на ЛДС
            setTimeout(function(){
                $(".event-more-view").click();
                setTimeout(function(){
                    $(".bg .event-more-view").click();
                    setTimeout(function(){
                        $("tr td:contains('Любой другой счёт')").filter(".height-column-with-price").click();
                        setTimeout(function(){
                            $(".bg .event-more-view").click();
                            setTimeout(function(){$(".event-more-view").click();}, 2000);
                        }, 3000);
                    }, 1500);
                }, 1500);
            }, 1500);
        }
        else
        {
            var isGray = confirm("OK - серые линии, Cancel - отмена");
            if ( isGray )
            {
                // Выбираем серые строчки со ставками на ЛДС
                setTimeout(function(){
                    $(".bg .event-more-view").click();
                    setTimeout(function(){
                        $("tr td:contains('Любой другой счёт')").filter(".height-column-with-price").click();
                        setTimeout(function(){
                            $(".bg .event-more-view").click();}, 3000);
                    }, 1500);
                }, 1500);
            }
        }
    }
})();
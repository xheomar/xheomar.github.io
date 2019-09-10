// ==UserScript==
// @name         VirtualBrestPictureEnabler
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Find all blocked picture and enable access for them
// @author       xheomar
// @match        https://virtualbrest.by/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('p').find('img').each(function() {
        var $img = $(this);
        var imgSrcOld = $img.attr('src');
        var imgSrcNew ='https://cdn.tribuna.com/fetch/?url=' + imgSrcOld;
        $img.attr('src',imgSrcNew);
});
})();

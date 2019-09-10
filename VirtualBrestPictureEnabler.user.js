// ==UserScript==
// @name         VirtualBrestPictureEnabler
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Find all blocked pictures and enable access for them
// @author       xheo
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
    })
})();

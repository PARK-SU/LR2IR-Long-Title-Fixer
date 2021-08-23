// ==UserScript==
// @name         LR2IR long title fixer (crude)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  lr2ir long title fix code
// @author       nothing (that) created me
// @match        http://www.dream-pro.info/~lavalse/LR2IR/search.cgi*
// @grant        none
// ==/UserScript==
window.onload = function () {
var songTitle = document.getElementsByTagName("a");
for (var i = 0; i < songTitle.length; i++) {
    var targetHtml = songTitle[i].innerHTML;
    var targetText = songTitle[i].innerText;
    if (targetHtml.length >= 140) {
        var replaceString = targetHtml.replace(targetText, targetText.slice(0, 8) + "..." + targetText.slice(-16));
        songTitle[i].innerHTML = replaceString;
    }
}}();
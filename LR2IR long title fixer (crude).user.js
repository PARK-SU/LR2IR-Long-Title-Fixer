// ==UserScript==
// @name         LR2IR long title fixer (crude)
// @namespace    https://github.com/PARK-SU/LR2IR-Long-Title-Fixer
// @version      0.2
// @description  lr2ir long title fix code
// @author       nothing (that) created me
// @match        http://www.dream-pro.info/~lavalse/LR2IR/search.cgi*
// @grant        none
// ==/UserScript==
window.onload = function () {
    var songTitle = document.querySelectorAll("td, a, h1");
    for (var i = 0; i < songTitle.length; i++) {
        var targetHtml = songTitle[i].innerHTML,
            targetText = songTitle[i].innerText,
            stringList = targetHtml.split(" ");
        if (targetHtml.slice(0, 7) != "<a href") {
            for (var j = 0; j < stringList.length; j++) {
                if (stringList[j].length >= 36) {
                    var replaceString = targetText.replace(stringList[j], stringList[j].slice(0, 8) + "..." + stringList[j].slice(-8));
                    songTitle[i].innerHTML = replaceString;
                }
            }
        }
    }
    console.log('Long title fixed.');
}();

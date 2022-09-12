// ==UserScript==
// @name        Adjustments for imgur.com
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://imgur.com/*
// @version     2022.2
// @description Adjustments for imgur.com
// @run-at      document-idle
// @grant       none
// @author      William Jackson
// ==/UserScript==

function adjustPage() {
    'use strict';
    const selectorsToRemove = [
        'div.ad-slot',
        'div#primisPlayerContainerDiv'
    ]
    selectorsToRemove.map(s => {
        document.querySelectorAll(s).forEach((el) => {
            el.remove();
        });
    });
}

(function () {
    adjustPage();
    setInterval(adjustPage, 10000);
})();

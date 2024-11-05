// ==UserScript==
// @name        Adjustments for reddit.com
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://www.reddit.com/*
// @version     2024.0
// @description Adjustments for www.reddit.com
// @run-at      document-idle
// @grant       none
// @author      William Jackson
// ==/UserScript==

function adjustPage() {
    'use strict';
    const selectorsToRemove = [
        'a.premium-banner-outer',
        'div.promoted'
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

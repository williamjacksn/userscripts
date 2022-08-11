// ==UserScript==
// @name        Adjustments for mail.yahoo.com
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://mail.yahoo.com/*
// @version     2022.1
// @description Adjustments for mail.yahoo.com
// @run-at      document-idle
// @grant       none
// @author      William Jackson
// ==/UserScript==

function adjustPage() {
    'use strict';
    const selectorsToRemove = [
        'div[data-test-id="right-rail-ad"]',
        'div[data-test-id="video-container"]'
    ];
    selectorsToRemove.map(s => document.querySelectorAll(s).forEach(el => el.remove()));
}

(function() {
    adjustPage();
    setInterval(adjustPage, 10000);
})();

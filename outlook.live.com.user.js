// ==UserScript==
// @name        Adjustments for outlook.live.com
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://outlook.live.com/*
// @version     2022.5
// @description Adjustments for outlook.live.com
// @run-at      document-idle
// @grant       none
// @author      William Jackson
// ==/UserScript==

function adjustPage() {
    'use strict';
    document.querySelectorAll('div#owaadbar0').forEach((el) => {
        el.parentNode.parentNode.parentNode.remove();
    });
    const selectorsToRemove = [
        'div.pBKjVBVDRKIDHWS0A95I',
        'div.VPtFl',
        'div.VPtFloqixpkkqJNcOv2T'
    ];
    selectorsToRemove.map(s => document.querySelectorAll(s).forEach(el => el.remove()));
}

(function() {
    adjustPage();
    setInterval(adjustPage, 10000);
})();

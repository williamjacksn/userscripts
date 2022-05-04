// ==UserScript==
// @name        Adjustments for outlook.live.com
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://outlook.live.com/*
// @version     2022.3
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
    document.querySelectorAll('div.VPtFloqixpkkqJNcOv2T').forEach((el) => {
        el.remove();
    });
}

(function() {
    adjustPage();
    setInterval(adjustPage, 10000);
})();

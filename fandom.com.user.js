// ==UserScript==
// @name        Adjustments for fandom.com
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://*.fandom.com/*
// @version     2022.1
// @description Adjustments for fandom.com
// @run-at      document-idle
// @grant       none
// @author      William Jackson
// ==/UserScript==

function adjustPage() {
    'use strict';
    document.querySelectorAll('div.featured-video__wrapper').forEach((el) => {
        el.remove();
    });
    document.querySelectorAll('div.top-ads-container').forEach((el) => {
        el.remove();
    });
    document.querySelectorAll('div#WikiaBar').forEach((el) => {
        el.remove();
    });
}

(function() {
    adjustPage();
    setInterval(adjustPage, 10000);
})();

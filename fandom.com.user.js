// ==UserScript==
// @name        Adjustments for fandom.com
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://*.fandom.com/*
// @version     2022.4
// @description Adjustments for fandom.com
// @run-at      document-idle
// @grant       none
// @author      William Jackson
// ==/UserScript==

function adjustPage() {
    'use strict';
    const selectorsToRemove = [
        'div.ad-slot',
        'div.bottom-ads-container',
        'div.featured-video__wrapper',
        'div.top-ads-container',
        'div#WikiaBar',
        'div#mixed-content-footer',
        'div#rail-boxad-wrapper'
    ]
    selectorsToRemove.map(s => {
        document.querySelectorAll(s).forEach((el) => {
            el.remove();
        });
    });
}

(function() {
    adjustPage();
    setInterval(adjustPage, 10000);
})();

// ==UserScript==
// @name        Remove IICS CLAIRE panels
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://na1.dm-us.informaticacloud.com/*
// @version     2021.1
// @description Remove IICS CLAIRE panels
// @run-at      document-idle
// @grant       none
// @author      William Jackson
// ==/UserScript==

function removeClairePanels() {
    'use strict';
    document.querySelectorAll('div.clairePanel').forEach((el) => {
        el.remove();
    });
}

(function() {
    removeClairePanels();
    setInterval(removeClairePanels, 10000);
})();

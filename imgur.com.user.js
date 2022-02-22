// ==UserScript==
// @name        Adjustments for imgur.com
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://imgur.com/*
// @version     2022.1
// @description Adjustments for imgur.com
// @run-at      document-idle
// @grant       none
// @author      William Jackson
// ==/UserScript==

function adjustImgurCom() {
    'use strict';
    document.querySelectorAll('div#primisPlayerContainerDiv').forEach((el) => {
        el.remove();
    });
}

(function() {
    adjustImgurCom();
    setInterval(adjustImgurCom, 10000);
})();

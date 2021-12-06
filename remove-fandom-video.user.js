// ==UserScript==
// @name        Remove Fandom video
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://*.fandom.com/*
// @version     2021.1
// @description Remove Fandom video
// @run-at      document-idle
// @grant       none
// @author      William Jackson
// ==/UserScript==

function removeFandomVideo() {
    'user strict';
    document.querySelectorAll('div.featured-video__wrapper').forEach((el) => {
        el.remove();
    });
}

(function() {
    removeFandomVideo();
    setInterval(removeFandomVideo, 10000);
})();

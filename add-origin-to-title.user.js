// ==UserScript==
// @name        Add origin to title
// @namespace   https://github.com/williamjacksn/userscripts
// @match       http*://*/*
// @version     2021.1
// @description Add origin to title
// @run-at      document-idle
// @grant       none
// @author      William Jackson
// ==/UserScript==

function addOriginToTitle() {
    'use strict';
    let tag = `[ ${location.origin} ]`;
    if (document.title.includes(tag)) {
        // pass
    } else {
        document.title = `${document.title} ${tag}`;
    }
}

(function() {
    addOriginToTitle();
    setInterval(addOriginToTitle, 10000);
})();

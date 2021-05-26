// ==UserScript==
// @name         Add origin to title
// @version      0.8.1
// @description  Add origin to title
// @author       William Jackson
// @match        http://*/*
// @match        https://*/*
// ==/UserScript==

function addOriginToTitle() {
    "use strict";
    let tag = "[ " + location.origin + " ]";
    if (document.title.includes(tag)) {
        // pass
    } else {
        document.title = document.title + " " + tag;
    }
}

(function() {
    addOriginToTitle();
    setInterval(addOriginToTitle, 10000);
})();

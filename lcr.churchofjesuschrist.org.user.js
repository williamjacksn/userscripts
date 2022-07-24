// ==UserScript==
// @name        Adjustments for lcr.churchofjesuschrist.org
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://lcr.churchofjesuschrist.org/records/member-list
// @grant       none
// @version     2022.0
// @author      William Jackson
// @description Adjustments for lcr.churchofjesuschrist.org
// ==/UserScript==


function adjustPage() {
    'use strict';
    const memberRows = document.querySelector('table.member-list tbody tr');
    memberRows.forEach((row) => {
        row.querySelector('td').forEach((td) => {
            console.log(`${td.innerText}`);
        });
    });
}

(function() {
    adjustPage();
})();

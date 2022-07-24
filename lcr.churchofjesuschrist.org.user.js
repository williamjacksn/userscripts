// ==UserScript==
// @name        Adjustments for lcr.churchofjesuschrist.org
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://lcr.churchofjesuschrist.org/records/member-list
// @grant       none
// @version     2022.4
// @author      William Jackson
// @description Adjustments for lcr.churchofjesuschrist.org
// ==/UserScript==

const buttonId = 'williamjacksn-userscript-button'

function adjustPage() {
    const t = document.querySelector('table.member-list');
    if (t) {
        let b = document.getElementById(buttonId);
        if (b === null) {
            b = document.createElement('button');
            b.id = buttonId;
            b.classList.add('btn');
            b.innerText = 'Do a thing';
            b.addEventListener('click', logMembers);
            t.after(b);
        }
    }
}

function logMembers() {
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
    setInterval(adjustPage, 10000);
})();

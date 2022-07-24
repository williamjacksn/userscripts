// ==UserScript==
// @name        Adjustments for lcr.churchofjesuschrist.org
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://lcr.churchofjesuschrist.org/records/member-list
// @grant       none
// @version     2022.6
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
    let csvContent = 'data:text/csv;charset=utf-8,name,gender,age,birth_date,address,phone_number,email\n';
    const memberRows = document.querySelectorAll('table.member-list tbody tr');
    memberRows.forEach((row) => {
        const dataFields = row.getElementsByTagName('td');
        const memberName = JSON.stringify(dataFields[1].innerText);
        const memberGender = JSON.stringify(dataFields[3].innerText);
        const memberAge = JSON.stringify(dataFields[4].innerText);
        const memberBirthDate = JSON.stringify(dataFields[5].innerText);
        const memberAddress = JSON.stringify(dataFields[6].innerText);
        const memberPhoneNumber = JSON.stringify(dataFields[7].innerText);
        const memberEmail = JSON.stringify(dataFields[8].innerText);
        csvContent += `${memberName},${memberGender},${memberAge},${memberBirthDate},${memberAddress},${memberPhoneNumber},${memberEmail}\n`;
    });
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'member-list.csv');
    document.body.appendChild(link);
    link.click();
}

(function() {
    adjustPage();
    setInterval(adjustPage, 10000);
})();

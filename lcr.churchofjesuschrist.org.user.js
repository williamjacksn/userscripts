// ==UserScript==
// @name        Adjustments for lcr.churchofjesuschrist.org
// @namespace   https://github.com/williamjacksn/userscripts
// @match       https://lcr.churchofjesuschrist.org/records/member-list
// @grant       none
// @version     2022.2
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
            b.innerText = 'Download CSV';
            b.addEventListener('click', logMembers);
            t.after(b);
        }
    }
}

function logMembers() {
    let csvContent = 'name,gender,age,birth_date,address,phone_number,email\n';
    const memberRows = document.querySelectorAll('table.member-list tbody tr');
    memberRows.forEach((row) => {
        const dataFields = row.getElementsByTagName('td');
        const memberName = JSON.stringify(dataFields[1].innerText);
        const memberGender = JSON.stringify(dataFields[3].innerText);
        const memberAge = JSON.stringify(dataFields[4].innerText);
        const memberBirthDate = JSON.stringify(dataFields[5].innerText);
        const memberAddress = JSON.stringify(dataFields[6].innerHTML.replaceAll('<br>', ', '));
        const memberPhoneNumber = JSON.stringify(dataFields[7].innerText);
        const memberEmail = JSON.stringify(dataFields[8].innerText);
        csvContent += `${memberName},${memberGender},${memberAge},${memberBirthDate},${memberAddress},${memberPhoneNumber},${memberEmail}\n`;
    });
    const blob = new Blob([csvContent], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    let link = document.createElement('a');
    document.body.appendChild(link);
    link.style = 'display: none';
    link.href = url;
    link.download = 'member-list.csv';
    link.click();
}

(function() {
    adjustPage();
    setInterval(adjustPage, 10000);
})();

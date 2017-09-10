/*
* @param {HTMLDivElement} sourceDiv object with the source elements for the exercise
* See more about HTMLDivElement in :
* (Spanish) https://developer.mozilla.org/es/docs/Web/API/HTMLDivElement
* (English) https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement
* @param {HTMLDivElement} resultDiv object where will add the result of the exercise
* @returns {Function} implementation that solves the exercise.
*/

export default function(sourceDiv, resultDiv) {
    //////////////////// EXERCISE 2 ////////////////////////////////////////
    const data = JSON.parse(sourceDiv.textContent);
    const columNames = Object.keys(data.people[0]);
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    columNames.forEach((columnName) => {
        const th = document.createElement('th');
        th.textContent = columnName;
        thead.appendChild(th);
    })
    table.appendChild(thead);

    data.people.forEach((person) => {
        const tr = document.createElement('tr');
        columNames.forEach((columnName) => {
            const td = document.createElement('td');
            td.textContent = person[columnName];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    })
    table.appendChild(tbody);

    resultDiv.appendChild(table);
    //////////////////// END EXERCISE 2 ////////////////////////////////////////
}

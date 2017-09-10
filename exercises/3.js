/*
* @param {HTMLDivElement} sourceDiv object with the source elements for the exercise
* See more about HTMLDivElement in :
*    - (Spanish) https://developer.mozilla.org/es/docs/Web/API/HTMLDivElement
*    - (English) https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement
* @param {HTMLDivElement} resultDiv object where will add the result of the exercise
* @param {Function} generateRandomColor util function that generate a random color
*/

export default function(sourceDiv, resultDiv, generateRandomColor) {
    //////////////////// EXERCISE 3 ////////////////////////////////////////
    const table = document.querySelector('#exercise-result-2').cloneNode(true);
    const rows = table.querySelectorAll('tr');
    const button = sourceDiv.querySelector('#start-stop-button');
    const buttonTextInit = button.textContent;

    let intervalFunction = null;
    let running = false;
    let randomRow = null;

    const applyColorToRow = () => {
        randomRow = rows[ Math.random() * rows.length | 0 ];
        randomRow.style.backgroundColor = generateRandomColor();
    }

    button.addEventListener('click', () => {
        if(running && intervalFunction) {
            button.textContent = buttonTextInit;
            running = false;
            clearInterval(intervalFunction);
        } else {
            button.textContent = 'Detener';
            running = true;
            intervalFunction = setInterval(applyColorToRow, 2000);
        }
    })
    resultDiv.appendChild(table);
    //////////////////// END EXERCISE 3 ////////////////////////////////////////
}

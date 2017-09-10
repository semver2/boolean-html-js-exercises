/*
* @param {HTMLDivElement} sourceDiv object with the source elements for the exercise
* See more about HTMLDivElement in :
* (Spanish) https://developer.mozilla.org/es/docs/Web/API/HTMLDivElement
* (English) https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement
* @param {HTMLDivElement} resultDiv object where will add the result of the exercise
* @returns {Function} implementation that solves the exercise.
*/

export default function(sourceDiv, resultDiv) {
    //////////////////// EXERCISE 1 ////////////////////////////////////////
    const text = sourceDiv.textContent.trim();
    let fontSize = 12;
    let augmentSize = true;
    for(let i = 0; i < text.length; i++) {
        if(text[i]) {
            const span = document.createElement("span");
            span.textContent = text[i];
            span.style.fontSize = `${fontSize}px`;
            resultDiv.appendChild(span);

            if(i % 6 === 0 && i !== 0) {
                augmentSize = !augmentSize;
            }
            fontSize = augmentSize ? fontSize + 6 : fontSize - 6;
        }
    }
    //////////////////// END EXERCISE 1 ////////////////////////////////////////
}

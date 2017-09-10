/*
* @param {HTMLDivElement} sourceDiv object with the source elements for the exercise
* See more about HTMLDivElement in :
*    - (Spanish) https://developer.mozilla.org/es/docs/Web/API/HTMLDivElement
*    - (English) https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement
* @param {HTMLDivElement} resultDiv object where will add the result of the exercise
*/

export default function(sourceDiv, resultDiv) {
    //////////////////// EXERCISE 1 ////////////////////////////////////////
    var numberchars = sourceDiv.innerHTML.replace(/\s+/g, '');
    var fontsize = 12;

    fontsize = fontsize + parseInt(numberchars.length / 6)
    resultDiv.setAttribute("style", "font-size: " + fontsize + "px;");
    console.log(sourceDiv.constructor);
    //////////////////// END EXERCISE 1 ////////////////////////////////////////
}

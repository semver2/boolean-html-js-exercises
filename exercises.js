document.addEventListener("DOMContentLoaded", () => {
    const exercisePrefix = "exercise";
    const exerciseResultPrefix = `${exercisePrefix}-result`;

    const getExerciseElements = (exerciseNumber) => (
        [
            document.getElementById(`${exercisePrefix}-${exerciseNumber}`),
            document.getElementById(`${exerciseResultPrefix}-${exerciseNumber}`)
         ]
    );

    ((sourceDiv, resultDiv) => {
        //////////////////// EXERCISE 1 ////////////////////////////////////////

        //////////////////// END EXERCISE 1 ////////////////////////////////////////
    })( ...getExerciseElements(1) );

    ((sourceDiv, resultDiv) => {
        ///////////////////// EXERCISE 2 ////////////////////////////////////////

        ///////////////////// END EXERCISE 2 ////////////////////////////////////////
    })( ...getExerciseElements(2) );

    ((sourceDiv, resultDiv) => {
        ///////////////////// EXERCISE 3 ////////////////////////////////////////
        const availableColors = ['red','orange','yellow','green','blue','purple'];
        const triggerButton = sourceDiv.querySelector('#start-stop-button');
        const originalButtonText = button.textContent;

        let active = false;
        let intervalFunction = null;

        const generateRandomColor = () => availableColors[Math.random() * availableColors.length | 0];
        ///////////////////// END EXERCISE 3 ////////////////////////////////////////
    })( ...getExerciseElements(3) );
});

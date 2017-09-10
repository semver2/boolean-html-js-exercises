export default class ExercisesEvaluator {
    exercisesList = [];
    exercisePrefix = 'exercise';
    exerciseResultPrefix = `${this.exercisePrefix}-result`;

    constructor(exercisesList) {
        this.exercisesList = exercisesList;
    }
    generateRandomColor() {
        const availableColors = [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'purple'
        ];
        return availableColors[ Math.random() * availableColors.length | 0 ];
    }
    evaluate() {
        this.exercisesList.forEach((execerciseExecutor, exerciseIndex) => {
            const sourceDivId = `${this.exercisePrefix}-${exerciseIndex + 1}`;
            const resultDivId = `${this.exerciseResultPrefix}-${exerciseIndex + 1}`;
            const mainParams = [ sourceDivId, resultDivId ].map(selector => document.getElementById(selector));

            switch (exerciseIndex) {
                case 0:
                case 1:
                    execerciseExecutor(...mainParams);
                    break;
                case 2:
                    execerciseExecutor(...mainParams, this.generateRandomColor);
                    break;
            }
        })
    }
}

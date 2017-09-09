export default class ExercisesEvaluator {
    exercisesList = [];

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
            const exercisePrefix = 'exercise';
            const exerciseResultPrefix = `${exercisePrefix}-result`;

            switch (exerciseIndex) {
                case 0:
                case 1:
                    execerciseExecutor(
                        document.getElementById(`${exercisePrefix}-${exerciseIndex + 1}`),
                        document.getElementById(`${exerciseResultPrefix}-${exerciseIndex + 1}`)
                    )
                    break;
                case 2:
                    execerciseExecutor(
                        document.getElementById(`${exercisePrefix}-${exerciseIndex + 1}`),
                        document.getElementById(`${exerciseResultPrefix}-${exerciseIndex + 1}`),
                        this.generateRandomColor
                    )
                    break;
            }
        })
    }
}

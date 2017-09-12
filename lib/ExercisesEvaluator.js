import exercise1Template from '../templates/1.md'
import exercise2Template from '../templates/2.md'
import exercise3Template from '../templates/3.md'

export default class ExercisesEvaluator {
    exercisesList = []
    exercisePrefix = 'exercise'
    exerciseResultPrefix = `${this.exercisePrefix}-result`

    constructor(exercisesList) {
        this.exercisesList = exercisesList
        this.exercisesTemplates = [
            exercise1Template,
            exercise2Template,
            exercise3Template
        ]
        this.initialize()
    }
    initialize() {
        this.exercisesTemplates
            .forEach((template, exerciseNumber) => {
                const selector = `exercise-${exerciseNumber + 1}-statement`
                document.getElementById(selector).innerHTML = template
            })
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
        return availableColors[ Math.random() * availableColors.length | 0 ]
    }
    evaluate() {
        this.exercisesList.forEach((execerciseExecutor, exerciseIndex) => {
            const sourceDivId = `${this.exercisePrefix}-${exerciseIndex + 1}`
            const resultDivId = `${this.exerciseResultPrefix}-${exerciseIndex + 1}`
            const mainParams = [ sourceDivId, resultDivId ].map(selector => document.getElementById(selector))

            switch (exerciseIndex) {
                case 0:
                case 1:
                    execerciseExecutor(...mainParams)
                    break
                case 2:
                    execerciseExecutor(...mainParams, this.generateRandomColor)
                    break
            }
        })
    }
}

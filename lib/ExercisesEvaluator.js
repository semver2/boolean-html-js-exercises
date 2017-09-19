import exercise1Template from '../templates/exercise-1-statement.md'
import exercise2Template from '../templates/exercise-2-statement.md'
import exercise3Template from '../templates/exercise-3-statement.md'

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
                if(this.exercisesList[exerciseNumber]) {
                    const selector = `exercise-${exerciseNumber + 1}-statement`
                    document.getElementById(selector).innerHTML = template
                }
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
        ]
        return availableColors[ Math.trunc(Math.random() * availableColors.length) ]
    }
    evaluate() {
        this.exercisesList
            .filter((execerciseExecutor) => execerciseExecutor)
            .forEach((execerciseExecutor, exerciseIndex) => {
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

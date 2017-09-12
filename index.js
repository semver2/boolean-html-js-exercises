import ExercisesEvaluator from './lib/ExercisesEvaluator.js'

import exercise1 from './exercises/1'
import exercise1Template from './templates/1.md'

import exercise2 from './exercises/2'
import exercise2Template from './templates/2.md'

import exercise3 from './exercises/3'
import exercise3Template from './templates/3.md'

const exercisesList = [
    exercise1,
    exercise2,
    exercise3
]
const exercisesTemplate = [
    exercise1Template,
    exercise2Template,
    exercise3Template
]

const exerciseEvaluator = new ExercisesEvaluator(exercisesList)
exerciseEvaluator.evaluate();

[1,2,3].forEach((exerciseNumber, index) => {
    document.getElementById(`exercise-${exerciseNumber}-statement`).innerHTML = exercisesTemplate[index]
})

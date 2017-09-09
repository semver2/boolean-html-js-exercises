import ExercisesEvaluator from './lib/ExercisesEvaluator.js';
import exercise1 from './exercises/1'
import exercise2 from './exercises/2'
import exercise3 from './exercises/3'

const ExercisesList = [
    exercise1,
    exercise2,
    exercise3
]
const exerciseEvaluator = new ExercisesEvaluator(ExercisesList);

exerciseEvaluator.evaluate();

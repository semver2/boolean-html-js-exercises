import sinon from 'sinon'
import ExercisesEvaluator from '../../lib/ExercisesEvaluator'

describe("ExercisesEvaluator Class", () => {
    let exercisesEvaluator

    beforeEach(() => {
        sinon.stub(global.document, 'getElementById').returns({
            innerHTML: ""
        })
        exercisesEvaluator = new ExercisesEvaluator()
    })

    it("should be defined", () => {
        expect(exercisesEvaluator).toBeDefined()
    })
})

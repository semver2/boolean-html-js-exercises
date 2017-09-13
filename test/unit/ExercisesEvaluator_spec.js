import sinon from 'sinon'
import ExercisesEvaluator from '../../lib/ExercisesEvaluator'

describe("ExercisesEvaluator Class", () => {
    let exercisesEvaluator

    beforeEach(() => {
        sinon.stub(global.document, 'getElementById').returns({
            innerHTML: ""
        })
        exercisesEvaluator = new ExercisesEvaluator()
        global.document.getElementById.restore()
    })

    it("should be defined", () => {
        expect(exercisesEvaluator).toBeDefined()
    })
    it("should set the innerHTML in the right div given the template exercises in evaluator instance", () => {
        const divs = [
            {
                selector: "exercise-1-statement",
                innerHTML: ""
            },
            {
                selector: "exercise-2-statement",
                innerHTML: ""
            }
        ]
        const templates = [
            "<h1>Exercise1</h1>",
            "<h2>Exercise2</h2>"
        ]
        const documentMock = sinon.stub(global.document, 'getElementById')

        documentMock.withArgs(divs[0].selector).returns(divs[0])
        documentMock.withArgs(divs[1].selector).returns(divs[1])

        exercisesEvaluator.exercisesTemplates = templates;
        exercisesEvaluator.initialize()

        templates.forEach((template, index) => {
            expect(divs[index].innerHTML).toEqual(template)
        })
        global.document.getElementById.restore()
    })
})

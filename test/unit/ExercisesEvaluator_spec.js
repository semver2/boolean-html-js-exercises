import ExercisesEvaluator from '../../lib/ExercisesEvaluator'

describe("ExercisesEvaluator Class", () => {
    let exercisesEvaluator

    beforeEach(() => {
        const htmlDivMock = {
            innerHTML: ""
        }
        jest.spyOn(global.document, 'getElementById')
            .mockImplementation(() => htmlDivMock)

        exercisesEvaluator = new ExercisesEvaluator()
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
        jest.spyOn(global.document, 'getElementById')
            .mockReturnValueOnce(divs[0])
            .mockReturnValueOnce(divs[1])

        exercisesEvaluator.exercisesTemplates = templates;
        exercisesEvaluator.initialize()

        templates.forEach((template, index) => {
            expect(global.document.getElementById).toHaveBeenCalledWith(divs[index].selector)
            expect(divs[index].innerHTML).toEqual(template)
        })
    })
})

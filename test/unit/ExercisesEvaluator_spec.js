import ExercisesEvaluator from '../../lib/ExercisesEvaluator'

describe("ExercisesEvaluator Class", () => {
    let exercisesEvaluator

    beforeEach(() => {
        const htmlDivMock = {
            innerHTML: ""
        }
        const exercisesImplementationsArray = [
            jest.fn(),
            jest.fn(),
            jest.fn()
        ]
        jest.spyOn(global.document, 'getElementById')
            .mockImplementation(() => htmlDivMock)

        exercisesEvaluator = new ExercisesEvaluator(exercisesImplementationsArray)
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
    it("should return a random color on method generateRandomColor", () => {
        jest.spyOn(global.Math, 'random')
            .mockReturnValueOnce(0.1)
            .mockReturnValueOnce(0.6)

        expect(exercisesEvaluator.generateRandomColor()).toEqual("red")
        expect(exercisesEvaluator.generateRandomColor()).toEqual("green")
    })
    it("should evaluate the function from exercises list and pass the right params", () => {
        const divs = [
            {
                innerHTML: ""
            },
            {
                innerHTML: ""
            }
        ]
        jest.spyOn(global.document, 'getElementById')
            .mockReturnValueOnce(divs[0])
            .mockReturnValueOnce(divs[1])
            .mockReturnValueOnce(divs[0])
            .mockReturnValueOnce(divs[1])
            .mockReturnValueOnce(divs[0])
            .mockReturnValueOnce(divs[1])

        exercisesEvaluator.evaluate()

        exercisesEvaluator.exercisesList.forEach((exerciseImplementation, index) => {
            if (index === 2) {
                expect(exerciseImplementation).toHaveBeenCalledWith(...divs, exercisesEvaluator.generateRandomColor)
            } else {
                expect(exerciseImplementation).toHaveBeenCalledWith(...divs)
            }
        })
    })

})

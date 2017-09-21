import ExercisesEvaluator from '../../lib/ExercisesEvaluator'

describe("ExercisesEvaluator Class", () => {
    let exercisesEvaluator
    const exercisesInjector = (exercisesImplementations) => {
        const htmlDivMock = {
            innerHTML: ""
        }
        const exercisesImplementationsDefaults = exercisesImplementations || [
            jest.fn(),
            jest.fn(),
            jest.fn()
        ]

        jest.spyOn(global.document, 'getElementById')
            .mockReturnValue(htmlDivMock)

        exercisesEvaluator = new ExercisesEvaluator(exercisesImplementationsDefaults)
    }

    beforeEach(() => {
        exercisesInjector()
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
    it("should evaluate only if exist defined exercises in the exercises list", () => {
        const exercises = [ null, jest.fn(), null]
        //this will be that the exercisesEvaluator instance will be refreshed
        exercisesInjector(exercises)

        expect(() => {
            exercisesEvaluator.evaluate()
            expect(exercises[1]).toBeCalled()
        }).not.toThrow()
    })
    it("should evaluate the templates only if exists defined exercises in the exercises list in the initialization", () => {
        const exercises = [ null, jest.fn(), null]
        //this will be that the exercisesEvaluator instance will be refreshed
        exercisesInjector(exercises)
        //the exercisesInjector method call initialize method,
        //therefore the global.document.getElementById it's "dirty".
        //let's clean the mock calls
        global.document.getElementById.mockClear()

        jest.spyOn(global.document, 'getElementById')

        exercisesEvaluator.initialize()

        expect(global.document.getElementById).toHaveBeenCalledWith("exercise-2-statement")
        expect(global.document.getElementById).not.toHaveBeenCalledWith("exercise-1-statement")
        expect(global.document.getElementById).not.toHaveBeenCalledWith("exercise-3-statement")
    })
    it("should remove the source and result divs on the non-provided exercises in the initialization", () => {
        const exercises = [ null, jest.fn(), null]
        const divs = [
            {
                selector: "exercise-1-statement",
                innerHTML: ""
            },
            {
                selector: "exercise-2-statement",
                innerHTML: ""
            },
            {
                selector: "exercise-3-statement",
                innerHTML: ""
            }
        ]
        const templates = [
            "<h1>Exercise1</h1>",
            "<h2>Exercise2</h2>",
            "<h2>Exercise3</h2>"
        ]
        //this will be that the exercisesEvaluator instance will be refreshed
        exercisesInjector(exercises)
        //the exercisesInjector method call initialize method,
        //therefore the global.document.getElementById it's "dirty".
        //let's clean the mock calls
        global.document.getElementById.mockClear()

        jest.spyOn(global.document, 'getElementById')
            .mockReturnValueOnce(divs[0])
            .mockReturnValueOnce(divs[1])
            .mockReturnValueOnce(divs[2])

        exercisesEvaluator.exercisesTemplates = templates;
        exercisesEvaluator.initialize()

        exercises.forEach((execerciseExecutor, exerciseIndex) => {
            if(execerciseExecutor) {
                expect(global.document.getElementById).not.toHaveBeenCalledWith(`exercise-${exerciseIndex + 1 }-area`)
                expect(divs[exerciseIndex].innerHTML).toEqual(templates[exerciseIndex])
            } else {
                expect(global.document.getElementById).toHaveBeenCalledWith(`exercise-${exerciseIndex + 1 }-area`)
                expect(divs[exerciseIndex].innerHTML).toEqual("")
            }
        })
    })

})

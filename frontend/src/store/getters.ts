import Question from "../types/questionType"

export default {
    /**
     * @description    Find question depending on search key.
     * @param          state 
     * @param          payload A search key for the question / answer.
     */
    searchQuestion: (state: any) => (payload: string) : Question[] => {
        const newQuestions: Question[] = []

        state.questions.forEach((question: Question) => {
            if (question.question.toLowerCase().includes(payload.toLowerCase()) || question.answer.toLowerCase().includes(payload.toLowerCase())) {
                newQuestions.push(question)
            }
        })

        return newQuestions
    }
}
interface Question {
    id: number | string,
    question: string,
    answer: string,
    links?: string,
    images?: unknown
}

export default Question
export interface Answer {
    answer: string;
    isCorrect: boolean
}

export interface Question {
    question: string;
    answers: Answer[];
}

export interface Quiz {
    id?: number;
    name: string;
    description: string;
    questions: Question[]
}

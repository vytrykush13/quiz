export interface QuestionData{
    title: string
    answers: answer[]
    correctAnswerIndex: number 
    id: string;
    isDisable: boolean
    result: 'wrong' | 'correct' | '';
}

interface answer{
    value: string
    variant: 'wrong' | 'correct' | ''
}
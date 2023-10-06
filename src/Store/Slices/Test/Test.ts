import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionData } from './type';

interface InitialState {
  title: string;
  questions: QuestionData[];
  correctAnsewrs: number;
  currentQuestionIndex: number;
  testSatus: 'finished' | 'in progres';
}

const initialState: InitialState = {
  correctAnsewrs: 0,
  questions: [
    {
      title: 'question 1',
      answers: [
        { value: 'answer 1', variant: '' },
        { value: 'answer 2', variant: '' },
        { value: 'answer 3', variant: '' },
        { value: 'answer 4', variant: '' },
      ],
      correctAnswerIndex: 2,
      id: '1',
      isDisable: false,
      result: '',
    },
    {
      title: 'question 2',
      answers: [
        { value: 'answer 1', variant: '' },
        { value: 'answer 2', variant: '' },
        { value: 'answer 3', variant: '' },
        { value: 'answer 4', variant: '' },
      ],
      correctAnswerIndex: 2,
      id: '2',
      isDisable: false,
      result: '',
    },
    {
      title: 'question 3',
      answers: [
        { value: 'answer 1', variant: '' },
        { value: 'answer 2', variant: '' },
        { value: 'answer 3', variant: '' },
        { value: 'answer 4', variant: '' },
      ],
      correctAnswerIndex: 2,
      id: '3',
      isDisable: false,
      result: '',
    },
  ],
  title: 'Test Name',
  currentQuestionIndex: 0,
  testSatus: 'in progres',
};

export const Test = createSlice({
  name: 'Test',
  initialState: initialState,
  reducers: {
    setTestData(state, action: PayloadAction<{ questions: QuestionData[]; title: string }>) {
      const { questions, title } = action.payload;
      state.title = title;
      state.questions = questions;
      state.currentQuestionIndex = 0;
      state.testSatus = 'in progres';
    },

    checkAnswer(state, action: PayloadAction<{ questionId: string; answerIndex: number }>) {
      const { answerIndex, questionId } = action.payload;
      const question: QuestionData[] = state.questions.filter((item) => item.id === questionId);

      if (question[0].correctAnswerIndex === answerIndex) {
        question[0].answers[answerIndex].variant = 'correct';
        state.correctAnsewrs++;
        question[0].result = 'correct';
      } else {
        question[0].answers[answerIndex].variant = 'wrong';
        question[0].answers[question[0].correctAnswerIndex].variant = 'correct';
        question[0].result = 'wrong';
      }
    },

    setDisable(state, action: PayloadAction<{ questionId: string }>) {
      const question = state.questions.filter((item) => item.id === action.payload.questionId);

      question[0].isDisable = true;
    },

    setCurrentQuestionIndex(state, action: PayloadAction<{ questionIndex: number | boolean }>) {
      if (typeof action.payload.questionIndex === 'number') {
        state.currentQuestionIndex = action.payload.questionIndex;
      } else {
        state.testSatus = 'finished';
      }
    },
  },
});

export const { setTestData, checkAnswer, setDisable, setCurrentQuestionIndex } = Test.actions;

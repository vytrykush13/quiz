import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionData } from './type';
import { uid } from 'uid';

interface InitialState {
  title: string;
  questions: QuestionData[];
  errors: string[];
}

const initialState: InitialState = {
  title: '',
  questions: [],
  errors: []
};

export const CreationTest = createSlice({
  name: 'CreationTest',
  initialState: initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },

    addQuestion(state) {
      state.questions.push({
        title: '',
        answers: [
          { value: '', variant: '' },
          { value: '', variant: '' },
          { value: '', variant: '' },
          { value: '', variant: '' },
        ],
        correctAnswerIndex: 0,
        id: uid(5),
        isDisable: false,
        result: '',
      });
    },

    setQuestionTitle(state, action: PayloadAction<{ id: string; value: string }>) {
      const { id, value } = action.payload;
      state.questions.forEach((item, i) => {
        if (item.id == id) state.questions[i].title = value;
      });
    },

    setAnswerValue(state, action: PayloadAction<{ id: string; index: number; value: string }>) {
      const { id, index, value } = action.payload;
      state.questions.forEach((item, i) => {
        if (item.id == id) state.questions[i].answers[index].value = value;
      });
    },

    setCorrectAnswer(state, action: PayloadAction<{ id: string; index: number }>) {
      const { id, index } = action.payload;
      state.questions.forEach((item, i) => {
        if (item.id == id) state.questions[i].correctAnswerIndex = index;
      });
    },

    deleteQuestion(state, action: PayloadAction<{ id: string }>) {
      state.questions = state.questions.filter((item) => item.id !== action.payload.id);
    },

    addError(state, action: PayloadAction<string>) {
      state.errors.push(action.payload);
    },

    deleteError(state, action: PayloadAction<number>) {
      state.errors = state.errors.filter((item, index) => index !== action.payload);
    },

    clearInputs(state) {
      state.title = '';
      state.questions = []
    }
  },
});

export const {
  setTitle,
  addQuestion,
  setQuestionTitle,
  setAnswerValue,
  setCorrectAnswer,
  deleteQuestion,
  addError,
  deleteError,
  clearInputs
} = CreationTest.actions;

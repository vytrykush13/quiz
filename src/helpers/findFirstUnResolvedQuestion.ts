import { QuestionData } from '../Store/Slices/Test/type';

export const findFirstUnResolvedQuestion = (questions: QuestionData[]) => {
  if (questions.findIndex((item) => !item.result) > -1) {
    return questions.findIndex((item) => !item.result);
  } else {
    return false;
  }
};

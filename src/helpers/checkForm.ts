import { QuestionData } from '../Store/Slices/CreationTest/type';

export const checkForm = (test: { title: string; questions: QuestionData[] }) => {
  let res: string | boolean = true;
  if (test.title.length < 1) {
    res = 'Error: You have to fill title of The test ';
  }

  test.questions.forEach((item, index) => {
    if (item.title.length < 1) {
      res = `Error: fill The title in ${index + 1} question`;
    }

    item.answers.forEach((item) => {
      if (item.value.length < 1) {
        res = `Error fill all answers in ${index + 1} question`;
      }
    });
  });

  return res;
};

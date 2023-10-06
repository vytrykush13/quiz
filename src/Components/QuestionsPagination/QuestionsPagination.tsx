import React from 'react';
import css from './QuestionsPagination.module.scss';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { debug } from 'console';
import { setCurrentQuestionIndex } from '../../Store/Slices/Test/Test';

const QuestionsPagination = () => {
  const { questions, currentQuestionIndex } = useAppSelector((state) => state.Test);
  const dispatch = useAppDispatch();

  return (
    <div className={css.pagination}>
      {questions.map((item, index) => (
        <div
          className={`${css.item} ${css[item.result]} ${
            css[currentQuestionIndex === index ? 'selected' : '']
          }`}
          onClick={() => dispatch(setCurrentQuestionIndex({questionIndex: index}))}>
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default QuestionsPagination;

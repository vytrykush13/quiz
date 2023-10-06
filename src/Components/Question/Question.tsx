import React, { useEffect, useState } from 'react';
import css from './Question.module.scss';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { checkAnswer, setCurrentQuestionIndex, setDisable } from '../../Store/Slices/Test/Test';
import ModalTestResult from '../ModalTestResult/ModalTestResult';
import { findFirstUnResolvedQuestion } from '../../helpers/findFirstUnResolvedQuestion';

const Question = () => {
  const { correctAnsewrs, questions, currentQuestionIndex, testSatus } = useAppSelector(
    (state) => state.Test,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        setCurrentQuestionIndex({
          questionIndex: findFirstUnResolvedQuestion(questions),
        }),
      );
    }, 800);
  }, [questions])

  return (
    <div className={css.question}>
      <h2 className={css.title}>{questions[currentQuestionIndex].title}</h2>

      <div className={css.line}></div>
      <div className={css.answers}>
        {questions[currentQuestionIndex].answers.map((item, i) => (
          <h3
            className={`${css.answer} ${css[item.variant]}`}
            onClick={() => {
              !questions[currentQuestionIndex].isDisable &&
                dispatch(
                  checkAnswer({ answerIndex: i, questionId: questions[currentQuestionIndex].id }),
                );
              

              dispatch(setDisable({ questionId: questions[currentQuestionIndex].id }));
            }}>
            {item.value}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Question;

import React, { useState } from 'react';
import css from './Test.module.scss';
import { useAppSelector, useAppDispatch } from '../../Store/hooks';
import ButtonJump from '../../Ui/ButtonJump/ButtonJump';
import Question from '../../Components/Question/Question';
import { Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import QuestionsPagination from '../../Components/QuestionsPagination/QuestionsPagination';
import { setCurrentQuestionIndex } from '../../Store/Slices/Test/Test';
import ModalTestResult from '../../Components/ModalTestResult/ModalTestResult';
import { ButtonPrimary } from '../../Ui/ButtonPrimary/ButtonPrimary';

const Test = () => {
  const { questions, title, currentQuestionIndex, testSatus } = useAppSelector(
    (state) => state.Test,
  );
  const dispatch = useAppDispatch();
  const [hideModal, setHideModal] = useState<boolean>(false);

  return (
    <div className={css.wrapper}>
      
      {testSatus === 'finished' && !hideModal && <ModalTestResult onClose={() => setHideModal(true)}/>}

      <div className={css.button__Create_Test}>
        <Link to={'/create-test'}>
          <ButtonPrimary value="Create Test" />
        </Link>
      </div>

      <div className={css.test}>
        <h1 className={css.title}>{title}</h1>

        <QuestionsPagination />

        <div className={css.question}>
          <Question />
        </div>

        <div className={css.jumpButtons}>
          <ButtonJump
            onClick={() => {
              currentQuestionIndex > 0 &&
                dispatch(setCurrentQuestionIndex({ questionIndex: currentQuestionIndex - 1 }));
            }}
            value="Prev"
          />
          <ButtonJump
            onClick={() => {
              currentQuestionIndex < questions.length - 1 &&
                dispatch(setCurrentQuestionIndex({ questionIndex: currentQuestionIndex + 1 }));
            }}
            value="Next"
          />
        </div>
      </div>
    </div>
  );
};

export default Test;

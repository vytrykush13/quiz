import React, { useEffect } from 'react';
import Input from '../../Ui/Input/Input';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { addError, addQuestion, clearInputs, setTitle } from '../../Store/Slices/CreationTest/CreationTest';
import css from './FormTest.module.scss';
import { ButtonPrimary } from '../../Ui/ButtonPrimary/ButtonPrimary';
import Question from './FormQuestion/FormQuestion';
import { checkAnswer, setTestData } from '../../Store/Slices/Test/Test';
import { Link, useNavigate } from 'react-router-dom';
import { checkForm } from '../../helpers/checkForm';
import { setFirstLetterBig } from '../../helpers/setFirstLetterBig';


const FormTest = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { title, questions } = useAppSelector((state) => state.CreationTest);

  const handleCreateTest = () => {
    let res = checkForm({ title: title, questions: questions });

    if (res === true) {
      
      dispatch(setTestData({ questions, title }));
      dispatch(clearInputs());
      navigate('/');
    } else {
      dispatch(addError(res));
    }
  };

  return (
    <div>
      <div className={css.input}>
        <Input value={title} maxLength={25} onChange={(value) => dispatch(setTitle(value))} />
      </div>

      <ButtonPrimary value="Add Question" onClick={() => dispatch(addQuestion())} />

      <div className={css.Questions}>
        {questions.map((item) => (
          <Question data={item} key={item.id} />
        ))}
      </div>

      {questions.length > 0 && (
        <div className={css.buttonCreateTest} onClick={handleCreateTest}>
          <ButtonPrimary value="CreateTest" />
        </div>
      )}
    </div>
  );
};

export default FormTest;

import React from 'react';
import css from './FormQuestion.module.scss';
import Input from '../../../Ui/Input/Input';
import QuestionInput from '../../../Ui/QuestionInput/QuestionInput';
import AnswerInput from '../../../Ui/AnswerInput/AnswerInput';
import { QuestionData } from '../../../Store/Slices/CreationTest/type';
import { deleteQuestion, setAnswerValue, setCorrectAnswer, setQuestionTitle } from '../../../Store/Slices/CreationTest/CreationTest';
import { useAppDispatch } from '../../../Store/hooks';
import DeleteQuestionButton from '../../../Ui/DeleteQuestionButton/DeleteQuestionButton';


interface IProps {
  data: QuestionData;
}

const FormQuestion: React.FC<IProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={css.question}>
      <div className={css.title}>
        <QuestionInput maxLenght={20} value={data.title} onChange={(value) => dispatch(setQuestionTitle({id: data.id, value}))} />
      </div>

      <div className={css.answers}>
        {data.answers.map(( item, index) => (
          <div className={css.answer}>
            <AnswerInput  onChange={(value) => dispatch(setAnswerValue({id: data.id, index: index, value}))}/>
            <input className={css.checkBox} type="checkbox" onChange={() => dispatch(setCorrectAnswer({id: data.id, index: index}))} checked={data.correctAnswerIndex === index ? true : false} name="" id="" />
          </div>
        ))}
      </div>

      <div className={css.wrapper} onClick={() => dispatch(deleteQuestion({id: data.id}))}>
        <DeleteQuestionButton />
      </div>
    </div>
  )
};

export default FormQuestion;

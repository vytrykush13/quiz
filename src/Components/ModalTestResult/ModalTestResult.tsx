import React from 'react';
import css from './ModalTestResult.module.scss';
import { useAppSelector } from '../../Store/hooks';
import Arrow from '../../Icons/Arrow/Arrow';

interface IProps{
    onClose?: () => void;
}

const ModalTestResult: React.FC<IProps> = ({onClose}) => {
  const { questions, correctAnsewrs, title } = useAppSelector((state) => state.Test);

  return (
    <div className={css.wrapper}>
      <div className={css.modal}>
        <h1 className={css.title}>{title}</h1>
        <p className={css.result}>
          Your Result is {correctAnsewrs} / {questions.length}
        </p>
        <div className={css.arrow} onClick={onClose}>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default ModalTestResult;

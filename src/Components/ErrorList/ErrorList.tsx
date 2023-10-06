import React from 'react';
import css from './ErrorList.module.scss';
import { useAppSelector } from '../../Store/hooks';
import ErrorWindow from '../ErrorWindow/ErrorWindow';

const ErrorList = () => {
  const { errors } = useAppSelector((state) => state.CreationTest);
  return (
    <div className={css.wrapper}>
      {errors.map((item, index) => (
        <div className={css.item}>
          <ErrorWindow errorMsg={item} index={index} />
        </div>
      ))}
    </div>
  );
};

export default ErrorList;

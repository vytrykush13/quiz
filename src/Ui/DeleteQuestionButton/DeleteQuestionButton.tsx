import React from 'react';
import css from './DeleteQuestionButton.module.scss';

const DeleteQuestionButton = () => {
  return (
    <div className={css.button}>
      <div className={css.arrov}></div>
    </div>
  );
};

export default DeleteQuestionButton;

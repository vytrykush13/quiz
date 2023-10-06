import React from 'react';
import css from './ButtonPrimary.module.scss';

interface IProps {
  value: string;
  onClick?: () => void;
}

export const ButtonPrimary: React.FC<IProps> = ({ onClick, value }) => {
  return (
    <button className={css.button} onClick={onClick}>
      {value}
    </button>
  );
};

import React from 'react';
import css from './ButtonJump.module.scss';

interface IProps {
  value: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ButtonJump: React.FC<IProps> = ({ value, onClick }) => {
  return (
    <div className={css.wrapper}>
      <button onClick={(e) => onClick!(e)}>{value}</button>
    </div>
  );
};

export default ButtonJump;

import { type } from 'os';
import React from 'react';
import css from './Input.module.scss';

interface IProps{
    value?: string
    type?: number | string
    onChange?: (value: string) => void;
    width?: string;
    maxLenght?: number;
}

const Input:React.FC<IProps> = ({value, onChange, width, maxLenght}) => {
    return (
        <div className={css.wrapper}>
            <input maxLength={maxLenght} style={{width: width}} value={value!} onChange={(e) => onChange!(e.target.value)}/>
        </div>
    );
};

export default Input;
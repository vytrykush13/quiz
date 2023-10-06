import React from 'react';
import css from './AnswerInput.module.scss';

interface IProps{
    value?: string
    type?: number | string
    onChange?: (value: string) => void;
}

const AnswerInput: React.FC<IProps> = ({onChange, type, value}) => {
    return (
        <div className={css.wrapper}>
            <input maxLength={15} type="text" value={value} onChange={(e) => onChange && onChange(e.target.value)}/>
        </div>
    );
};

export default AnswerInput;
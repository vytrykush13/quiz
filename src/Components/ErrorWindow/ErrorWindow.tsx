import React from 'react';
import css from './ErrorWindow.module.scss'
import Error  from '../../Icons/Error/Error';
import DeleteErrorButton from '../../Ui/DeleteErrorButton/DeleteErrorButton';
import { useAppDispatch } from '../../Store/hooks';
import { deleteError } from '../../Store/Slices/CreationTest/CreationTest';

interface IProps{
    errorMsg: string
    index: number
}

const ErrorWindow: React.FC<IProps> = ({errorMsg, index}) => {
    const dispatch = useAppDispatch();

    return (
        <div className={css.wrapper}>
            <div className={css.error}>
                <div>
                    <Error/>
                </div>
                <p>
                    Error
                </p>
            </div>
            <div className={css.error__msg}>
                {errorMsg}
            </div>

            <div className={css.button} onClick={() => dispatch(deleteError(index))}>
                <DeleteErrorButton/>
            </div>
        </div>
    );
};

export default ErrorWindow;
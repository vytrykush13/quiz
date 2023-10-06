import React, { useState } from 'react';
import Input from '../../Ui/Input/Input';
import css from './CreationTest.module.scss';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { setTitle } from '../../Store/Slices/CreationTest/CreationTest';
import FormTest from '../../Components/FormTest/FormTest';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../../Ui/ButtonPrimary/ButtonPrimary';
import ErrorList from '../../Components/ErrorList/ErrorList';

const CreationTest = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.button__back_to_the_test}>
          <Link to={'/'}>
            <ButtonPrimary value="Back to the test" />
          </Link>
        </div>
        <FormTest />
      </div>

      <ErrorList/>
    </div>
  );
};

export default CreationTest;

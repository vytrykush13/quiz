import React from 'react';
import CreationTest from './Pages/CreationTest/CreationTest';
import './App.scss';
import Test from './Pages/Test/Test';
import {Routes, Route} from 'react-router-dom';
import Error from './Icons/Error/Error';

const App = () => {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Test/>}/>
        <Route path='/create-test' element={<CreationTest/>}/>
      </Routes>
    </div>
  );
};

export default App;

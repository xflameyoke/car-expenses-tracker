import React from 'react';
import SignUpPage from './pages/signUpPage/signUpPage';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<SignUpPage />} />
    </Routes>
  </>
);

export default App;

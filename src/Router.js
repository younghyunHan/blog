import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Nav from './components/Nav/Nav';

import SignIn from './SignIn/SignIn';
import Main from './Main';

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

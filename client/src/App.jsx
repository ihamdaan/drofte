import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from './Pages/SignIn.page';
import SignUp from './Pages/SignUp.page';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
};

export default App;

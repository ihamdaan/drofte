import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from './components/Loader/Loader';
import SignIn from './Pages/SignIn.page';
import SignUp from './Pages/SignUp.page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;

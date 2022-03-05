import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from './components/Loader/Loader';
import SignIn from './Pages/SignIn.page';
import SignUp from './Pages/SignUp.page';
import ForgetPass from './Pages/ForgetPass.page';
import NewPass from './Pages/NewPass.page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password/forget" element={<ForgetPass />} />
        <Route path="/password/create-new" element={<NewPass />} />
      </Routes>
    </Router>
  );
};

export default App;

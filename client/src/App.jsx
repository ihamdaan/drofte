import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from './components/Loader/Loader';
import SignIn from './Pages/SignIn.page';
import SignUp from './Pages/SignUp.page';
import ForgetPass from './Pages/ForgetPass.page';
import NewPass from './Pages/NewPass.page';
import HomePage from './Pages/Home.page';
import { loadUser } from "./Redux/Action/userActions"
import { useDispatch } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password/forget" element={<ForgetPass />} />
        <Route exact path="/api/v1/resetPassword/:token" element={<NewPass />} />
        <Route exact path="/question/:id" element={<Loader />} />
        {/* Logged in user routes */}
        <Route element={<ProtectedRoute />}>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

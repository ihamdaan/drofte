import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from './Pages/SignIn.page';
import SignUp from './Pages/SignUp.page';
import ForgetPass from './Pages/ForgetPass.page';
import NewPass from './Pages/NewPass.page';
import HomePage from './Pages/Home.page';
import { loadUser } from "./Redux/Action/userActions"
import { useDispatch } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';
import HomeSidebar from './components/Navbar/homePageSidebar.component';
import ProfilePage from './Pages/Profile.page';
import EditProfilePage from './Pages/EditProfile.page';
import ChangePass from './Pages/ChangePass.page';

import YourQueries from './Pages/YourQueries.page';
import YourRemarks from './Pages/YourRemarks.page';
import AskQuestion from './Pages/AskQuestion.page';
import ViewQuestion from './Pages/ViewQuestion.page';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password/forget" element={<ForgetPass />} />
        <Route exact path="/api/v1/resetPassword/:token" element={<NewPass />} />
        <Route exact path="/question/:id" element={<ViewQuestion />} />

        {/* Logged in user routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/settings" element={<HomeSidebar />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/password/change" element={<ChangePass />} />
          <Route path="/queries" element={<YourQueries />} />
          <Route path="/remarks" element={<YourRemarks />} />
          <Route path="/question/new" element={<AskQuestion />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;

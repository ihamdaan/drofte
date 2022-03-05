import React from 'react';
import SignNavbar from '../components/Navbar/signPageNavbar.component';
import ForgetPassPage from '../components/AuthPages/forgetPassPage.component';


function ForgetPass() {
  return (
    <div className="ForgetPass">
      <SignNavbar />
      <ForgetPassPage />
    </div>
  );
}

export default ForgetPass;

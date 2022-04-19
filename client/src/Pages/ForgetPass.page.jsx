import React from 'react';
import SignNavbar from '../components/Navbar/signPageNavbar.component';
import ForgetPassPage from '../components/AuthPages/forgetPassPage.component';
import { Helmet } from 'react-helmet';


function ForgetPass() {
  return (
    <div className="ForgetPass bg-gray-50 min-h-screen">
      <Helmet>
        <title>Forgot Password? | DROFTE</title>
      </Helmet>
      <SignNavbar />
      <ForgetPassPage />
    </div>
  );
}

export default ForgetPass;

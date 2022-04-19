import React from 'react';
import SignNavbar from '../components/Navbar/signPageNavbar.component';
import SignInPageBody from '../components/AuthPages/signInPage.component';
import { Helmet } from 'react-helmet';


function SignIn() {
  return (
    <div className="SignIn bg-gray-50 min-h-screen">
      <Helmet>
        <title>SignIn | DROFTE</title>
      </Helmet>
      <SignNavbar />
      <SignInPageBody />
    </div>
  );
}

export default SignIn;

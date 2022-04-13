import React from 'react';
import SignNavbar from '../components/Navbar/signPageNavbar.component';
import SignUpPageBody from '../components/AuthPages/signUpPage.component';
import { Helmet } from 'react-helmet';


function SignUp() {
  return (
    <div className="SignUp">
      <Helmet>
        <title>SignUp | DROFTE</title>
      </Helmet>
      <SignNavbar />
      <SignUpPageBody />
    </div>
  );
}

export default SignUp;

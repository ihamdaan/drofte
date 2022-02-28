import React from 'react';
import SignNavbar from '../components/Navbar/signPageNavbar.component';
import SignUpPageBody from '../components/SignInUp/signUpPage.component';


function SignUp() {
  return (
    <div className="SignUp">
      <SignNavbar />
      <SignUpPageBody />
    </div>
  );
}

export default SignUp;

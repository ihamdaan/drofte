import React from 'react';
import SignNavbar from '../components/Navbar/signPageNavbar.component';
import SignInPageBody from '../components/SignInUp/signInPage.component';


function SignIn() {
  return (
    <div className="SignIn">
      <SignNavbar />
      <SignInPageBody />
    </div>
  );
}

export default SignIn;

import React from 'react';
import HomeSidebar from '../components/Navbar/homePageSidebar.component'
import SignUpPageBody from '../components/AuthPages/signUpPage.component';
import { Helmet } from 'react-helmet';


function SignUp() {
  return (
    <div className="SignUp max-h-screen flex max-w-7xl mx-auto">
      <HomeSidebar />
      <SignUpPageBody />
    </div>
  );
}

export default SignUp;

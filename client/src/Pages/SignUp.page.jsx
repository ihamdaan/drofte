import React from 'react';
import HomeSidebar from '../components/Navbar/homePageSidebar.component'
import SignUpPageBody from '../components/AuthPages/signUpPage.component';


function SignUp() {
  return (
    <div className="SignUp flex">
      <HomeSidebar />
      <SignUpPageBody />
    </div>
  );
}

export default SignUp;

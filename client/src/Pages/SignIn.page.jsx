import React from 'react';
import SignInPageBody from '../components/AuthPages/signInPage.component';
import HomeSidebar from '../components/Navbar/homePageSidebar.component'


function SignIn() {
  return (
    <div className="SignIn flex">
      <HomeSidebar />
      <SignInPageBody />
    </div>
  );
}

export default SignIn;

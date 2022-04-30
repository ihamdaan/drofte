import React from 'react';
import SignInPageBody from '../components/AuthPages/signInPage.component';
import HomeSidebar from '../components/Navbar/homePageSidebar.component'


function SignIn() {
  return (
    <>
      <div className="SignIn max-h-screen flex max-w-7xl mx-auto">
        {/*Large Screen*/}
        <HomeSidebar />
        <SignInPageBody />
      </div>
    </>
  );
}

export default SignIn;

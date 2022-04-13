import React from 'react';
import SignNavbar from '../components/Navbar/signPageNavbar.component';
import CreateNewPassPage from '../components/AuthPages/createNewPassPage.component';
import { Helmet } from 'react-helmet';


function NewPass() {
  return (
    <div className="NewPass">
      <Helmet>
        <title>Password Reset | DROFTE</title>
      </Helmet>
      <SignNavbar />
      <CreateNewPassPage />
    </div>
  );
}

export default NewPass;

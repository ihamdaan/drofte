import React from 'react';
import SignNavbar from '../components/Navbar/signPageNavbar.component';
import CreateNewPassPage from '../components/AuthPages/createNewPassPage.component';


function NewPass() {
  return (
    <div className="NewPass">
      <SignNavbar />
      <CreateNewPassPage />
    </div>
  );
}

export default NewPass;

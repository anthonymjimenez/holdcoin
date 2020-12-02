import React from 'react';
import { Redirect } from 'react-router';

function Logout({handleLogout}) {

  return (
    <>
      <h2>Logging out now...</h2>
      {handleLogout()}
      { <Redirect to="/" />}
    </>
  );
}

export default Logout;

import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
function LandPage({ handleLogIn, handleSignUp }) {
  let [toggleForms, setToggle] = useState(false);

  const renderForm = () =>
    toggleForms ? (
      <LoginForm handleLogIn={handleLogIn} />
    ) : (
      <SignupForm handleSignUp={handleSignUp} />
    );

  return (
    <li>
      <a className="ui a" href="#" onClick={() => setToggle(!toggleForms)}>
        {" "}
        {toggleForms ? <h2>Sign In</h2> : <h2>Log In</h2>}
      </a>
      {renderForm()}
    </li>
  );
}

export default LandPage;

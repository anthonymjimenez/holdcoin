import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { useAuth } from "./context/use-auth";
function LandPage() {
  
  let [toggleForms, setToggle] = useState(false);

  const auth = useAuth();

  const renderForm = () =>
    toggleForms ? (
      <LoginForm handleLogIn={auth.signin} />
    ) : (
      <SignupForm handleSignUp={auth.signup} />
    );

  return (
    <li>
      <a className="ui a" href="#" onClick={() => setToggle(!toggleForms)}>
        {toggleForms ? <h2>Sign In</h2> : <h2>Log In</h2>}
      </a>
      {renderForm()}
      {console.log(auth.user)}
      <button onClick={() => auth.signout()}>Signout</button>
    </li>
  );
}

export default LandPage;

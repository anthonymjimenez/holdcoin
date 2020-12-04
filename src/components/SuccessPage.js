import { NavLink } from "react-router-dom";

function SuccessPage() {
  return (
    <>
    <h1>You're all set!</h1>
    <p>
      We like your cut G
      If you have any questions, please email
      <a href="mailto:holdcoin@example.com">holdcoin@example.com</a>.
    </p>
    <NavLink to={{pathname: `/`}}>
        <p>Return to home page</p> 
      </NavLink>
    </>
  );
}

export default SuccessPage;

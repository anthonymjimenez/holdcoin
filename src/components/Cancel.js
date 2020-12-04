import { NavLink } from "react-router-dom";

function Cancel() {
  return (
    <>
    <h1>Oops! Something went wrong</h1>
    <p>
      You might be broke. Try again later
      If you have any questions, please email
      <a href="mailto:holdcoin@example.com">holdcoin@example.com</a>.
    </p>
    <NavLink to={{pathname: `/`}}>
        <p>Return to home page</p> 
      </NavLink>
    </>
  );
}

export default Cancel;

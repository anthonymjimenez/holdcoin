import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...

// ... available to any child component that calls useAuth().

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...

// ... and re-render when it changes.

export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state

function useProvideAuth() {
  const [user, setUser] = useState(null);
const [auth, setAuth] = useState(false)
  // Wrap any Firebase methods we want to use making sure ...

  // ... to save the user to state.

  const signin = (state) => {
    fetch(`http://localhost:3000/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: state }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        
        setAuth(true)

        localStorage.setItem("token", data.jwt);
        setUser(data)
      })
      .catch(console.error);
  };

  const signup = (state) => {
    fetch(`http://localhost:3000/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: state }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setAuth(true)
        localStorage.setItem("token", data.jwt);
        setUser(data.user)
      })
      .catch(console.error);
  }; //appendUserInfo

  const signInFromToken = async () => {
    const token = localStorage.getItem("token"); // set user with token if(token & user=dne) <- that means token was set and page has been reset, in that case use token to fetch user
    // use auth routes to restrict all routes before token is set, then use token to render user
    if (token) {
      let resp = await fetch(`http://localhost:3000/api/v1/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = await resp.json();
      setAuth(true)
      console.log(data)
      setUser(await data)
    }
  };
  const signout = () => {
    localStorage.clear();
    setUser(false);
    setAuth(false)
  };

  // Subscribe to user on mount

  // Because this sets state in the callback it will cause any ...

  // ... component that utilizes this hook to re-render with the ...

  // ... latest auth object.

  useEffect(() => {
   (() => (user ? setUser(user) : setUser(false)))();
  }, []);

  // Return the user object and auth methods

  return {
    user,
    auth,
    signin,
    signup,
    signout,
    signInFromToken,
  };
}

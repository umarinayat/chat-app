import { createContext, useState } from "react";
import React from "react";
import { loginWithGoogle } from "../services/firebase";

const AuthContext = createContext();
const AuthProvider = (props) => {
  const [user, setUser] = useState();

  const login = async () => {
    const user = await loginWithGoogle();

    if (!user) {
      alert("No user Found");
    }

    setUser(user);
  };

  const value = { user, login };

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };

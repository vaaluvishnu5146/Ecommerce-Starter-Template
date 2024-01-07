import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useJwt } from "react-jwt";

export const AuthContext = createContext({
  isLoggedIn: [],
  setIsLoggedIn: () => {},
  userData: {},
  setUser: () => {},
  tk: {},
});

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [tk, setTk] = useState({});
  const { decodedToken, isExpired } = useJwt(sessionStorage.getItem("_tk"));

  useEffect(() => {
    if (decodedToken) {
      setIsLoggedIn(true);
      setTk(decodedToken);
    }
    if (isExpired) {
      setIsLoggedIn(false);
      setTk({});
    }
  }, [decodedToken, isExpired]);

  const AuthContextValue = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn,
    userData: user,
    setUser: setUser,
    tk: tk,
  };

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: [PropTypes.node].isRequired,
};

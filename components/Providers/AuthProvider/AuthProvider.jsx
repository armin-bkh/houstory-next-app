import { AuthContext } from "context/AuthContext";
import { useCookies } from "hooks/useCookies";
import { useState, useContext, useEffect } from "react";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const cookies = useCookies();

  useEffect(() => {
    if (cookies && cookies.houstory) {
      console.log(1);
    }
  }, [cookies]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);

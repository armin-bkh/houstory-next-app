import { AuthContext } from "context/AuthContext";
import { getCookies } from "utils/getCookies";
import { useState, useContext, useEffect } from "react";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const cookies = getCookies();
    if (cookies.houstoryUser) {
      setAuth(JSON.parse(cookies.houstoryUser));
    }
  }, []);

  useEffect(() => {
    document.cookie = `houstoryUser=${JSON.stringify(auth)}`;
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);

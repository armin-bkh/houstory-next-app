import { AuthContext } from "context/AuthContext";
import { useCookies } from "hooks/useCookies";
import { useState, useContext, useEffect } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const cookies = useCookies();
  useEffect(() => {
    if (cookies && cookies.houstory) {
      console.log(1);
    }
  }, [cookies]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);

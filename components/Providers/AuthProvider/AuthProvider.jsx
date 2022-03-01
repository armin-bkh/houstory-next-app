import { AuthContext } from "context/AuthContext";
import { useState, useContext } from "react";
import { useContext } from "react/cjs/react.production.min";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserProvider;

export const useAuth = () => useContext(AuthContext);

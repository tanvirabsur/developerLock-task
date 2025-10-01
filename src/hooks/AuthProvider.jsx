import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("site", token);
    } else {
      localStorage.removeItem("site");
    }
  }, [token]);

  const login = async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      if (email === "test@example.com" && password === "password") {
        const newToken = "dummy-token"; // In a real app, this would come from the API
        setToken(newToken);
        setUser({ email });
        resolve();
      } else {
        reject(new Error("Invalid credentials"));
      }
    });
  };

  const signup = async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      // In a real app, you'd check if user already exists and create a new one
      if (email && password) {
        const newToken = "dummy-token-signup"; // In a real app, this would come from the API
        setToken(newToken);
        setUser({ email });
        resolve();
      } else {
        reject(new Error("Signup failed"));
      }
    });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const contextValue = {
    user,
    token,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user from API or check local storage
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/auth/me');
        setUser(res.data);
      } catch (err) {
        console.error('Error fetching user', err);
      }
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    // Implement login
  };

  const signup = async (username, email, password) => {
    // Implement signup
  };

  const logout = () => {
    // Implement logout
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

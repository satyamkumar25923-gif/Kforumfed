import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        // Handle "Offline Demo Mode" Token
        if (token === 'dummy-demo-token') {
          console.log('Restoring Demo User Session...');
          setUser({
            _id: 'dummy_id_fallback',
            name: 'Demo User (Offline Mode)',
            email: 'dummy@kiit.ac.in',
            role: 'student',
            studentId: '9999999',
            year: 4,
            branch: 'CSE',
            isVerified: true,
            reputation: 0,
            id: 'dummy_id_fallback'
          });
          setLoading(false);
          return;
        }

        try {
          // Verify token is valid and get user data
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_API || 'http://localhost:5001'}/api/auth/me`);
          setUser({ ...response.data, id: response.data._id });
        } catch (error) {
          console.error("Auth check failed:", error);
          localStorage.removeItem('token');
          setToken(null);
          setUser(null);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, [token]);

  const login = (userData, authToken) => {
    localStorage.setItem('token', authToken);
    setToken(authToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
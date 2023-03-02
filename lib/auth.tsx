'use client';

import { useState, useEffect, createContext, useContext } from 'react';

import { firebase } from './firebaseClient';
// import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const AuthContext = createContext<{ user: firebase.User | null; loadingUser: boolean }>({
  user: null,
  loadingUser: true
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async user => {
      if (!user) {
        setUser(null);
        setLoadingUser(false);
        return;
      }
      setUser(user);
      setLoadingUser(false);
    });
  }, []);

  return (<AuthContext.Provider value={{ user, loadingUser }}>{children}</AuthContext.Provider>);
};

export const useAuth = () => useContext(AuthContext);
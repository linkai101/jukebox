'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import nookies from 'nookies';

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
    // return firebase.auth().onAuthStateChanged(async user => {
      return firebase.auth().onIdTokenChanged(async user => {
      if (!user) {
        setUser(null);
        setLoadingUser(false);
        nookies.set(undefined, 'token', '', { path: '/' });
        return;
      }
      const token = await user.getIdToken();
      setUser(user);
      setLoadingUser(false);
      nookies.set(undefined, 'token', token, { path: '/' });
    });
  }, []);

  return (<AuthContext.Provider value={{ user, loadingUser }}>{children}</AuthContext.Provider>);
};

export const useAuth = () => useContext(AuthContext);
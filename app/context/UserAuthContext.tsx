import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  Auth,
  UserCredential,
  Unsubscribe
} from "firebase/auth";

import { auth } from './firebaseConfig';

interface User {
  uid: string;
  email: string | null;
}

interface UserAuthContextType {
  user: User;
  logIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}

const userAuthContext = createContext<UserAuthContextType>({
  user: { uid: '', email: null },
  logIn: async () => { },
  signUp: async () => { },
  logOut: async () => { }
});

export function UserAuthContextProvider({ children }: { children: React.ReactNode }) {

  const [user, setUser] = useState<User>({ uid: '', email: null });

  async function logIn(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setUser({ uid: userCredential.user.uid, email: userCredential.user.email });
  }

  async function signUp(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    setUser({ uid: userCredential.user.uid, email: userCredential.user.email });
  }

  async function logOut() {
    await signOut(auth);
    setUser({ uid: '', email: null });
  }

  useEffect(() => {
    let unsubscribe: Unsubscribe;

    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth", currentUser);
      if (currentUser) {
        setUser({ uid: currentUser.uid, email: currentUser.email });
      } else {
        setUser({ uid: '', email: null });
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

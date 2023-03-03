'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { firebase } from 'lib/firebaseClient';
import {
  signInWithEmailAndPassword,
  // signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  GoogleAuthProvider,
  // sendPasswordResetEmail
} from "firebase/auth";

import { FcGoogle } from 'react-icons/fc';

import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

export default function AuthSection() {
  const router = useRouter();
  
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  async function login(email:string, password:string) {
    await signInWithEmailAndPassword(firebase.auth(), email, password)
    .then((u) => { // u.user.uid
      // logged in
      console.log("Login success: ", u.user.uid);
      setLoginModalOpen(false)

      router.refresh(); // reload page
    })
    .catch(function(err) {
      console.error(err.message + " (" + err.code + ")");
    });
  }

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(firebase.auth(), provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      // console.log("Credential: ", credential);
      // console.log("Token: ", token);
      // console.log("User: ", user);
      
      router.refresh(); // reload page
    })
    .catch((err) => {
      console.error(err.message + " (" + err.code + ")");
      // const errorCode = err.code;
      // const errorMessage = err.message;
      // const email = err.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(err);
    });
  }

  async function signup(name: string, email:string, password:string) {
    await createUserWithEmailAndPassword(firebase.auth(), email, password)
    .then(async (u) => {
      // u.user.uid
      // u.user.email
      // u.user.emailVerified
      // u.user.isAnonymous
      // u.user.providerData
      // u.user.tenantId
      // u.user.metadata
      // u.user.phoneNumber
      // u.user.photoURL
      // u.user.displayName
      // u.user.refreshToken
      // u.user.getIdToken()
      // u.user.getIdTokenResult()
      // u.user.linkWithCredential()
      // u.user.linkWithPhoneNumber()

      await updateProfile(u.user, {
        displayName: name,
        photoURL: `https://api.dicebear.com/5.x/thumbs/svg?seed=${name.replace(/\s/g, '')}` // generates random avatar from https://www.dicebear.com
      });
      await sendEmailVerification(u.user);
      setSignupModalOpen(false);
      
      router.refresh(); // reload page
    })
    .catch(function(err) {
      console.error(err.message + " (" + err.code + ")");
    });
  }


  return <>
    <div className="p-4 max-w-xs">
      <h2 className="text-xl font-bold">
        New to Jukebox?
      </h2>
      <p className="text-xs mt-1">
        Create an account to start jamming with your friends.
      </p>

      <div className="flex flex-col gap-2 mt-4">
        <button
          className="px-4 py-2 rounded-full text-sm text-theme-onSurface bg-theme-surface/25 font-medium border-2 border-theme-surface"
          onClick={() => signInWithGoogle()}
        >
          <FcGoogle className="text-xl inline-block mr-2"/>
          Sign up with Google
        </button>
        <button
          className="px-4 py-2 rounded-full text-sm text-theme-onSurface font-medium bg-theme-surface"
          onClick={() => setSignupModalOpen(true)}
        >
          Create account
        </button>

        <p className="py-1 text-center text-xs text-theme-onBackground/50">
          — or —
        </p>

        <button
          className="px-4 py-2 rounded-full text-sm text-theme-onSurface font-medium border-2 border-theme-surface"
          onClick={() => setLoginModalOpen(true)}
        >
          Log in
        </button>
      </div>
    </div>

    <LoginModal
      open={loginModalOpen}
      setOpen={setLoginModalOpen}
      login={login}
      signInWithGoogle={signInWithGoogle}
    />

    <SignupModal
      open={signupModalOpen}
      setOpen={setSignupModalOpen}
      signup={signup}
      signInWithGoogle={signInWithGoogle}
    />
  </>;
}

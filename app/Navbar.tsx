import React from 'react';

import { firebase } from 'lib/firebaseClient';
import {
  signOut
} from "firebase/auth";

export default function Navbar({ user, loadingUser }: { user: firebase.User | null, loadingUser: boolean }) {

  async function handleSignOut() {
    await signOut(firebase.auth()).then(() => {
      // Sign-out successful.
    }).catch(err => {
      console.error(err.message + " (" + err.code + ")");
    });
  }

  return (
    <nav className="sticky top-0 h-screen pl-6 pr-10 py-4 flex flex-col justify-between gap-8 border-r border-theme-surface">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-extrabold">Jukebox</h1>

        <ul className="flex flex-col gap-3 text-lg">
          <li>
            Home
          </li>
          <li>
            Profile
          </li>
        </ul>
      </div>
      
      {user && <div>
        <p className="text-sm">
          Logged in as:
        </p>
        <p className="text-sm font-bold">
          {user.displayName}
        </p>

        <button
          className="px-2 py-0.5 text-sm font-bold bg-theme-onBackground text-theme-background rounded-md mt-2"
          onClick={handleSignOut}
        >
          Logout
        </button>
      </div>}
    </nav>
  )
}

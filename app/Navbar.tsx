"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

import { firebase } from 'lib/firebaseClient';
import {
  signOut
} from "firebase/auth";

import { FiLogOut } from 'react-icons/fi';

import User from 'types/User';

export default function Navbar({ user }: { user: User | null }) {
  const router = useRouter();

  async function handleSignOut() {
    await signOut(firebase.auth()).then(() => {
      // Sign-out successful.
      router.refresh(); // reload page
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
      
      {user && <div className="flex items-center gap-2">
        <img
          src={user.photoURL || ''}
          className="w-12 h-12 rounded-full"
        />

        <button
          className="p-2 text-sm rounded-full hover:bg-theme-surface duration-300"
          onClick={handleSignOut}
        >
          <FiLogOut className='text-xl stroke-[3px]'/>
        </button>
      </div>}
    </nav>
  )
}

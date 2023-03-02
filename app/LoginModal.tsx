import React from 'react';

import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

interface LoginModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  login: (email: string, password: string) => void;
  signInWithGoogle: () => void;
}

export default function LoginModal({ open, setOpen, login, signInWithGoogle }: LoginModalProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(email, password);
  }

  function handleModalClose() {
    setOpen(false);
    setEmail('');
    setPassword('');
  }

  return <>
    {open && <>
      <motion.div
        className="px-4 pb-12 pt-36 fixed inset-0 bg-theme-surface/20 overflow-y-auto z-40"
        // onClick={() => handleModalClose()} {/* Closes modal when clicking outside */}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <section
          className="container max-w-xl relative z-40"
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-theme-background backdrop-blur-sm drop-shadow-md rounded-xl overflow-hidden">
            <div className="container max-w-sm p-8">
              <h2 className="text-2xl font-semibold">
                Login to Jukebox
              </h2>

              <div className="flex flex-col gap-2 mt-6">
                <button
                  className="px-4 py-2 rounded-full text-sm text-theme-onSurface bg-theme-surface/25 font-medium border-2 border-theme-surface"
                  onClick={() => signInWithGoogle()}
                >
                  <FcGoogle className="text-xl inline-block mr-2"/>
                  Sign in with Google
                </button>

                <p className="py-1 text-center text-xs text-theme-onBackground/50">
                  — or —
                </p>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input
                      name="email" type="text"
                      className="px-3 py-1.5 rounded-md bg-theme-surface/50"
                      value={email} onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-sm">Password</label>
                    <input
                      name="password" type="password"
                      className="px-3 py-1.5 rounded-md bg-theme-surface/50"
                      value={password} onChange={e => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    className="px-4 py-2 text-sm font-bold text-theme-onSurface bg-theme-primary/25 border-theme-primary border-2 rounded-full mt-2"
                  >
                    Log in
                  </button>
                </form>
              </div>
            </div>
          </div>

          <button
            className="p-2 absolute -top-14 right-0 text-theme-onBackground/50 hover:text-theme-onBackground bg-theme-background hover:bg-theme-background/75 rounded-full z-50 transition ease-in-out duration-300"
            onClick={() => handleModalClose()}
          >
            <FiX size="1.5rem" className="stroke-[2.5px]"/>
          </button>
        </section>
      </motion.div>
      
      <style jsx global>{`
      body {
        overflow: hidden;
      }
      `}</style>
    </>}
  </>;
}

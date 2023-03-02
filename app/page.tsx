'use client';

import { useAuth } from 'lib/auth';

import Navbar from './Navbar';
import Timeline from './Timeline';
import AuthPanel from './AuthPanel';

export default function Home() {
  const { user, loadingUser } = useAuth();

  return <>
    <div className="container max-w-6xl flex">
      <Navbar
        user={user}
        loadingUser={loadingUser}
      />

      <main className="flex-1 h-[3000px] border-x border-theme-surface">
        <Timeline/>
      </main>

      <div className="sticky top-0 h-screen">
        {loadingUser ?
          // <div className="p-4 max-w-xs">Loading...</div>
          <></>
        : user ?
          <div className="w-64"></div>
        :
          <AuthPanel/>
        }
      </div>
    </div>

    <footer>
    </footer>
  </>;
}
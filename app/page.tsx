import { cookies } from 'next/headers';

import Navbar from './Navbar';
import Landing from './Landing';
import Timeline from './Timeline';
import AuthPanel from './AuthPanel';

import User from 'types/User';

async function fetchUser() {
  try {
    const token = cookies().get('token');

    if (!token?.value) {
      return null;
    }
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
      method: 'GET',
      headers: {
        token: token?.value
      }
    });
    return await res.json();
  } catch(e) {
    console.error(e);
    return null;
  }
}

export default async function Home() {
  const user:User|null = await fetchUser();

  return <>
    <div className="container max-w-6xl flex">
      <Navbar
        user={user}
        // loadingUser={loadingUser}
      />

      <main className="flex-1 border-x border-theme-surface">
        {user ?
          <Timeline/>
        :
          <Landing/>
        }
      </main>

      <div className="sticky top-0 h-screen">
        {user ?
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
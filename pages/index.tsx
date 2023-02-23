import Head from 'next/head';

import Timeline from '../components/Timeline';
import AuthSection from '../components/AuthSection';

export default function Home() {
  return <>
    <Head>
      <title>Jukebox</title>
      <meta name="description" content="" />
    </Head>

    <div className="container max-w-6xl flex">
      <nav className="sticky top-0 h-screen pl-6 pr-10 py-4 flex flex-col gap-8">
        <h1 className="text-2xl font-extrabold">Jukebox</h1>

        <ul className="flex flex-col gap-3 text-lg">
          <li>
            Timeline
          </li>
          <li>
            Timeline
          </li>
        </ul>
      </nav>

      <main className="flex-1 h-[3000px] border-x border-theme-surface">
        <Timeline/>
      </main>

      <div className="sticky top-0">
        <AuthSection/>
      </div>
    </div>

    <footer>
    </footer>
  </>;
}
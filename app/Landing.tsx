import React from 'react';

export default function Landing() {
  return (
    <div className="py-16">
      <h1 className="text-5xl text-theme-onBackground/25 font-extrabold text-center">
        Rediscover your music.
      </h1>
      <p className="text-xl text-center font-thin mt-12">
        Welcome to Jukebox 🎧
      </p>
      <p className="text-sm text-center underline underline-offset-2 decoration-2 decoration-theme-primary font-medium mt-1">
        Sign in to get started →
      </p>
    </div>
  );
}

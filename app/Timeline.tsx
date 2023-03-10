import React from 'react';

import { MdQueueMusic } from 'react-icons/md';
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';

const recommendations = [
  {
    id: 0,
    title: 'Nosedive',
    artist: 'BoyWithUke',
    album: 'Antisocial',
    albumCover: 'https://i.scdn.co/image/ab67616d0000b273e8c9cda4cd19b51ec290d7dd',
  },
  {
    id: 1,
    title: 'Late Night Talking',
    artist: 'Harry Styles',
    album: "Harry's House",
    albumCover: 'https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0',
  },
  {
    id: 2,
    title: 'I Was Never There',
    artist: 'The Weeknd, Gesaffelstein',
    album: 'My Dear Melancholy,',
    albumCover: 'https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730',
  },
];

export default function Timeline() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      {recommendations.map(song =>
        <div className="p-8 h-screen snap-start snap-always flex items-center justify-center" key={song.id}>
          <div className="container max-w-md flex flex-col gap-8">
            <div className="aspect-[16/9] bg-theme-surface/25 rounded-xl"/> {/* Video */}

            <div className="flex gap-4 items-end">
              {/* Album cover */}
              <img
                src={song.albumCover}
                className="h-16 aspect-square rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-lg font-medium leading-6">
                  {song.title}
                </h3>
                <p className="text-xs text-neutral-500">
                  {song.artist}
                </p>
              </div>

              <div className="flex gap-1">
                <div className="p-2 rounded-full hover:bg-theme-surface/50 duration-300">
                  <AiOutlineLike className="text-xl"/>
                  {/* <AiTwotoneLike className="text-xl"/> */}
                </div>
                <div className="p-1.5 rounded-full hover:bg-theme-surface/50 duration-300">
                  <MdQueueMusic className="text-2xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

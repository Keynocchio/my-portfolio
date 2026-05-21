"use client";

import { useEffect, useState } from "react";

export default function LatestVideo() {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    async function fetchVideo() {
      const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const CHANNEL_ID = "YOUR_CHANNEL_ID_HERE";

      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&maxResults=1&type=video`
      );

      const data = await res.json();
      setVideo(data.items?.[0]);
    }

    fetchVideo();
  }, []);

  if (!video) return null;

  const videoId = video.id.videoId;

  return (
    <section className="text-center py-24 px-6">
      <h2 className="uppercase text-white/50 text-xs mb-6">
        Latest Video
      </h2>

      <div className="max-w-3xl mx-auto bg-black/40 rounded-xl overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          className="w-full h-[320px] object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl mb-4">Latest Upload</h3>

          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            className="px-6 py-3 bg-white text-black rounded-full inline-block"
          >
            Watch
          </a>
        </div>
      </div>
    </section>
  );
}
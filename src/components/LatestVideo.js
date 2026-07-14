"use client";

import { useEffect, useState } from "react";

export default function LatestVideo() {
  const [video, setVideo] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function fetchVideo() {
      const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "YOUR_CHANNEL_ID_HERE";

      if (!API_KEY || CHANNEL_ID === "YOUR_CHANNEL_ID_HERE") {
        setReady(true);
        return;
      }

      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&maxResults=1&type=video`
        );

        const data = await res.json();
        setVideo(data.items?.[0] || null);
      } catch {
        setVideo(null);
      } finally {
        setReady(true);
      }
    }

    fetchVideo();
  }, []);

  if (!ready) return null;

  const videoId = video?.id?.videoId;

  return (
    <section id="videos" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl rounded-[1.5rem] border border-white/10 bg-black/40 p-6 shadow-xl shadow-black/20 backdrop-blur sm:p-8">
        <div className="mb-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
            Latest video
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            Recent work and updates
          </h2>
        </div>

        {videoId ? (
          <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/40">
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Latest video thumbnail"
              className="h-[280px] w-full object-cover sm:h-[360px]"
            />

            <div className="p-6 text-center">
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        ) : (
          <div className="rounded-[1.25rem] border border-dashed border-white/15 bg-white/5 p-8 text-center text-sm text-white/70">
            The latest video will appear here once the YouTube feed is connected.
          </div>
        )}
      </div>
    </section>
  );
}
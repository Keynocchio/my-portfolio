"use client";

import { useEffect, useState } from "react";

export default function LatestVideo() {
  const [video, setVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        const CHANNEL_ID = "UCrE8HoSrpfVdN58-Ifm3GJA";

        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&maxResults=1&type=video`
        );

        const data = await res.json();
        setVideo(data.items?.[0] ?? null);
      } catch (error) {
        console.error("Failed to load latest video", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVideo();
  }, []);

  const videoId = video?.id?.videoId;
  const title = video?.snippet?.title || "Latest video";

  return (
    <section className="px-6 py-20">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 p-8 text-left sm:flex-row sm:items-center sm:gap-8 sm:p-10">
        <div className="flex-1">
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-white/50">
            Latest video
          </p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            {isLoading ? "Loading latest upload..." : "Watch my newest upload"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
            {isLoading ? "Pulling in my most recent work." : title}
          </p>
        </div>

        <div className="w-full shrink-0 sm:w-[320px]">
          {videoId ? (
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                className="h-48 w-full object-cover sm:h-56"
              />
            </a>
          ) : (
            <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-white/15 bg-black/20 text-sm text-white/60">
              {isLoading ? "Loading..." : "Video coming soon"}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
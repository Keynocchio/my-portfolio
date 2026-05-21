"use client";

import { useEffect, useState } from "react";

export default function InfiniteBanner() {
  const [artworks, setArtworks] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch("/images/display-artwork/list.json")
      .then((res) => res.json())
      .then(async (data) => {
        setArtworks(data);

        // preload images first
        await Promise.all(
          data.map((file) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = `/images/display-artwork/${file}`;
              img.onload = resolve;
              img.onerror = resolve;
            });
          })
        );

        // wait one frame before enabling animation
        requestAnimationFrame(() => {
          setReady(true);
        });
      });
  }, []);

  const looped = [...artworks, ...artworks];

  return (
    <section className="overflow-hidden py-10">
      <div className={`banner-track ${ready ? "running" : ""}`}>
        {looped.map((file, i) => (
          <img
            key={i}
            src={`/images/display-artwork/${file}`}
            className="banner-item"
            draggable="false"
            alt=""
          />
        ))}
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";

export default function InfiniteBanner() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("/images/display-artwork/list.json")
      .then((res) => res.json())
      .then(setArtworks);
  }, []);

  const looped = [...artworks, ...artworks];

  return (
    <section className="overflow-hidden py-10">
      <div className="banner-track">
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
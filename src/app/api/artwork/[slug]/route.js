import { NextResponse } from 'next/server';

const artworkMap = {
  aurora: {
    title: 'Aurora Drift',
    palette: ['#8b5cf6', '#38bdf8', '#f59e0b'],
  },
  pulse: {
    title: 'Pulse Frame',
    palette: ['#f43f5e', '#fb923c', '#fde68a'],
  },
  echo: {
    title: 'Echo Chamber',
    palette: ['#1d4ed8', '#22c55e', '#a855f7'],
  },
};

export async function GET(request, { params }) {
  const { slug } = await params;
  const artwork = artworkMap[slug];

  if (!artwork) {
    return new NextResponse('Artwork not found', { status: 404 });
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">
      <rect width="1200" height="1500" fill="#060606" />
      <rect x="60" y="60" width="1080" height="1380" rx="42" fill="#111111" stroke="rgba(255,255,255,0.14)" stroke-width="4" />
      <circle cx="360" cy="520" r="280" fill="${artwork.palette[0]}" opacity="0.9" />
      <circle cx="760" cy="620" r="320" fill="${artwork.palette[1]}" opacity="0.72" />
      <circle cx="620" cy="420" r="220" fill="${artwork.palette[2]}" opacity="0.55" />
      <path d="M180 1160C320 980 500 900 680 960C840 1014 970 1102 1040 1240" stroke="rgba(255,255,255,0.24)" stroke-width="22" fill="none" stroke-linecap="round" />
      <rect x="150" y="1260" width="900" height="140" rx="70" fill="rgba(255,255,255,0.06)" />
      <text x="600" y="1340" text-anchor="middle" font-family="Arial, sans-serif" font-size="56" font-weight="700" fill="white">${artwork.title}</text>
      <text x="600" y="1408" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" letter-spacing="6" fill="rgba(255,255,255,0.66)">PROTECTED PREVIEW</text>
      <g opacity="0.3" transform="rotate(-24 600 750)">
        <text x="300" y="750" font-family="Arial, sans-serif" font-size="84" font-weight="700" fill="white">© KEYNOCCHIO</text>
      </g>
    </svg>
  `;

  const response = new NextResponse(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });

  return response;
}

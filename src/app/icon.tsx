import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        {/* Render Grafis Logo Jamur Mini khusus Tab Browser */}
        <svg viewBox="0 0 200 200" width="32" height="32" fill="none">
          <path d="M 143 145 A 72 72 0 1 1 120 42 A 64 64 0 1 0 143 145" fill="#AA7C11" />
          <path d="M 92 110 L 86 160 C 86 165, 114 165, 114 160 L 108 110 Z" fill="#AA7C11" />
          <path d="M 45 112 C 45 62, 155 62, 155 112 C 140 114, 60 114, 45 112 Z" fill="#E63946" />
          <circle cx="78" cy="98" r="9" fill="#FFFFFF" />
          <circle cx="100" cy="80" r="7" fill="#FFFFFF" />
          <circle cx="130" cy="95" r="8" fill="#FFFFFF" />
          <circle cx="70" cy="74" r="5" fill="#FFFFFF" />
          <circle cx="124" cy="73" r="4" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
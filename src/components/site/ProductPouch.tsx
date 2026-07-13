import type { Product } from "@/lib/products";

// Deterministic kernel layout for the bowl of makhana (x, y, radius).
const kernels: Array<[number, number, number]> = [
  [72, 216, 6.5], [85, 210, 7], [99, 207, 7.5], [113, 210, 7], [126, 216, 6.5],
  [79, 222, 6], [93, 218, 6.5], [107, 218, 6.5], [120, 222, 6],
  [88, 227, 5.5], [101, 228, 6], [113, 227, 5.5],
];

// Split the product name (minus its grade prefix) into at most two short lines.
function nameLines(name: string): string[] {
  const words = name.split(" ").slice(1);
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    const next = current ? `${current} ${w}` : w;
    if (next.length > 15 && current) {
      lines.push(current);
      current = w;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 2);
}

export default function ProductPouch({ product, className }: { product: Product; className?: string }) {
  const { from, to, dark } = product.pouch;
  const ink = dark ? "#5b3a1e" : "#e9c46a";
  const inkSoft = dark ? "#7a5230" : "#f4e3b2";
  const gradId = `mgm-pouch-${product.rank}`;
  const lines = nameLines(product.name);

  return (
    <svg
      viewBox="0 0 200 270"
      className={className}
      role="img"
      aria-label={`${product.name} package`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>

      {/* Pouch body (stand-up doypack) */}
      <path
        d="M32 34 Q32 22 44 22 H156 Q168 22 168 34 L172 230 Q173 252 152 252 H48 Q27 252 28 230 Z"
        fill={`url(#${gradId})`}
        stroke={dark ? "#c9a86b" : "#00000055"}
        strokeWidth="1"
      />
      {/* Top crimp seal */}
      <rect x="34" y="24" width="132" height="12" fill={ink} opacity="0.16" />
      {[...Array(12)].map((_, i) => (
        <line key={i} x1={40 + i * 11} y1="24" x2={40 + i * 11} y2="36" stroke={ink} strokeWidth="1" opacity="0.35" />
      ))}
      {/* Sheen */}
      <path d="M44 24 L76 24 L58 252 L38 250 Z" fill="#ffffff" opacity={dark ? 0.18 : 0.06} />

      {/* Gold frame */}
      <rect x="42" y="46" width="116" height="196" rx="10" fill="none" stroke={ink} strokeWidth="1.4" opacity="0.85" />

      {/* MGM roundel */}
      <circle cx="100" cy="70" r="13" fill="none" stroke={ink} strokeWidth="1.4" />
      <text x="100" y="74" textAnchor="middle" fontSize="9" fontWeight="700" fill={ink} letterSpacing="0.5">MGM</text>

      {/* Grade numeral */}
      <text
        x="100" y="128" textAnchor="middle" fontSize="42" fontWeight="800" fill={ink}
        fontFamily="Georgia, 'Times New Roman', serif"
      >
        {product.grade}
      </text>

      {/* Product name */}
      {lines.map((line, i) => (
        <text
          key={line}
          x="100" y={148 + i * 13} textAnchor="middle" fontSize="10.5" fontWeight="600"
          fill={inkSoft} letterSpacing="0.6"
        >
          {line.toUpperCase()}
        </text>
      ))}

      {/* Pick type */}
      <text x="100" y={lines.length > 1 ? 180 : 170} textAnchor="middle" fontSize="7.5" fill={inkSoft} letterSpacing="2" opacity="0.9">
        {product.type.toUpperCase()}
      </text>

      {/* Bowl of makhana */}
      <path d="M62 224 Q64 244 100 246 Q136 244 138 224 Z" fill="#33241a" />
      <ellipse cx="100" cy="224" rx="38" ry="9" fill="#241811" />
      {kernels.map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} fill="#f6eddd" stroke="#e0cfae" strokeWidth="0.6" />
          <circle cx={x - r / 3} cy={y - r / 4} r="0.8" fill="#a9825d" />
          <circle cx={x + r / 3} cy={y + r / 5} r="0.6" fill="#bd9772" />
        </g>
      ))}
    </svg>
  );
}

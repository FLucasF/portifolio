/**
 * Gera public/og.png, a imagem que aparece quando o link é compartilhado.
 *
 * Rode com `npm run og` depois de mudar nome, cargo ou cores. O resultado é
 * versionado, então a build no CI não precisa de fonte instalada.
 */
import { Buffer } from "node:buffer";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(HERE, "..", "public", "og.png");

const W = 1200;
const H = 630;

const PAPER = "#e9e1ce";
const INK = "#17140f";
const ANIL = "#1b4a87";
const MUTED = "#6b6250";

/* ---- Bloco do sol, com a mesma geometria do componente Woodcut ---------- */

const CX = 950;
const CY = 315;
const DISC = 96;
const RAY_INNER = 101;
const RAY_COUNT = 20;

const lengths = [174, 140, 163, 147, 179, 135, 168, 143, 160, 152, 176, 137, 165, 149, 172, 142, 161, 154, 167, 139];
const widths = [5.4, 3.4, 4.8, 3.8, 5.6, 3.2, 5.0, 3.6, 4.6, 4.0, 5.2, 3.3, 4.9, 3.9, 5.5, 3.5, 4.7, 4.1, 5.1, 3.7];
const skews = [0.7, -0.5, 0.4, -0.8, 0.6, -0.3, 0.9, -0.6, 0.3, -0.4, 0.8, -0.7, 0.5, -0.35, 0.75, -0.55, 0.45, -0.65, 0.85, -0.45];

const polar = (r, deg) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)];
};

const rays = Array.from({ length: RAY_COUNT }, (_, i) => {
  const angle = (360 / RAY_COUNT) * i;
  const w = widths[i];
  const [ax, ay] = polar(RAY_INNER, angle - w);
  const [bx, by] = polar(RAY_INNER, angle + w);
  if (i % 2 === 0) {
    const [tx, ty] = polar(lengths[i], angle + skews[i]);
    return `${ax.toFixed(1)},${ay.toFixed(1)} ${tx.toFixed(1)},${ty.toFixed(1)} ${bx.toFixed(1)},${by.toFixed(1)}`;
  }
  const [c1x, c1y] = polar(lengths[i], angle - w * 0.42 + skews[i]);
  const [c2x, c2y] = polar(lengths[i], angle + w * 0.42 + skews[i]);
  return `${ax.toFixed(1)},${ay.toFixed(1)} ${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${bx.toFixed(1)},${by.toFixed(1)}`;
});

const CARVE_R = 80;
const fills = [0.94, 0.78, 0.99, 0.62, 0.88, 0.97, 0.71, 0.93, 0.55, 0.9, 0.83, 0.68];
const gaps = new Set([4, 9]);

const carves = Array.from({ length: 13 }, (_, i) => {
  const y = CY - 69 + i * 11.5;
  const half = Math.sqrt(Math.max(CARVE_R * CARVE_R - (y - CY) ** 2, 0));
  if (half < 12 || gaps.has(i)) return null;
  const x1 = CX - half;
  return `<line x1="${x1.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x1 + half * 2 * fills[i % fills.length]).toFixed(1)}" y2="${y.toFixed(1)}"/>`;
}).filter(Boolean);

const sunBlock = `${rays.map((p) => `<polygon points="${p}"/>`).join("")}<circle cx="${CX}" cy="${CY}" r="${DISC}"/>`;

/* ---- Ornamento e moldura ------------------------------------------------ */

const lozenges = Array.from({ length: 14 }, (_, i) => {
  const x = 80 + i * 30;
  return `<path d="M${x} 412 L${x + 6} 418 L${x} 424 L${x - 6} 418 Z"/>`;
}).join("");

/* A pilha condensada tenta a fonte do site e cai para as estreitas do sistema. */
const DISPLAY = "'Big Shoulders Display','Arial Narrow','Haettenschweiler','Impact',sans-serif";
const MONO = "'JetBrains Mono','Consolas','Courier New',monospace";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${PAPER}"/>

  <rect x="32" y="32" width="${W - 64}" height="${H - 64}" fill="none" stroke="${INK}" stroke-width="4"/>
  <rect x="42" y="42" width="${W - 84}" height="${H - 84}" fill="none" stroke="${INK}" stroke-width="2"/>

  <rect x="368" y="16" width="464" height="32" fill="${PAPER}"/>
  <text x="600" y="40" text-anchor="middle" font-family="${MONO}" font-size="17" letter-spacing="2.6" fill="${MUTED}">FOLHETO 01 · PARAÍBA, BRASIL</text>

  <g transform="translate(5 6)" fill="${ANIL}" opacity="0.85">${sunBlock}</g>
  <g fill="${INK}">${sunBlock}</g>
  <g stroke="${PAPER}" stroke-width="6">${carves.join("")}</g>

  <text x="80" y="152" font-family="${MONO}" font-size="19" letter-spacing="3.4" fill="${MUTED}">CIÊNCIA DA COMPUTAÇÃO · UFPB CAMPUS IV</text>

  <text x="76" y="272" font-family="${DISPLAY}" font-size="132" font-weight="900" letter-spacing="-1" fill="${INK}">LUCAS</text>
  <text x="76" y="384" font-family="${DISPLAY}" font-size="132" font-weight="900" letter-spacing="-1" fill="${ANIL}">FELIPE</text>

  <g fill="${ANIL}">${lozenges}</g>

  <text x="76" y="478" font-family="${DISPLAY}" font-size="52" font-weight="700" letter-spacing="1" fill="${INK}">DESENVOLVEDOR FULL STACK</text>

  <text x="80" y="532" font-family="${MONO}" font-size="20" letter-spacing="1.4" fill="${MUTED}">Java · Spring Boot · TypeScript · React · Angular</text>
  <text x="80" y="568" font-family="${MONO}" font-size="20" letter-spacing="1.4" fill="${MUTED}">github.com/FLucasF</text>
</svg>`;

await mkdir(dirname(OUT), { recursive: true });
await sharp(Buffer.from(svg)).png().toFile(OUT);
console.log(`og.png escrito em ${OUT}`);

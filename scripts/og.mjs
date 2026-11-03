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
const INDIGO = "#1b4a87";
const MUTED = "#6b6250";

/* A ilustração é composta por cima deste fundo; a posição dela está no
   composite lá embaixo. */
const FIG_CX = 916;

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


  <text x="80" y="152" font-family="${MONO}" font-size="19" letter-spacing="3.4" fill="${MUTED}">CIÊNCIA DA COMPUTAÇÃO · UFPB CAMPUS IV</text>

  <text x="76" y="272" font-family="${DISPLAY}" font-size="132" font-weight="900" letter-spacing="-1" fill="${INK}">LUCAS</text>
  <text x="76" y="384" font-family="${DISPLAY}" font-size="132" font-weight="900" letter-spacing="-1" fill="${INDIGO}">FELIPE</text>

  <g fill="${INDIGO}">${lozenges}</g>

  <text x="76" y="478" font-family="${DISPLAY}" font-size="52" font-weight="700" letter-spacing="1" fill="${INK}">DESENVOLVEDOR FULL STACK</text>

  <text x="80" y="532" font-family="${MONO}" font-size="20" letter-spacing="1.4" fill="${MUTED}">Java · Spring Boot · TypeScript · React · Angular</text>
  <text x="80" y="568" font-family="${MONO}" font-size="20" letter-spacing="1.4" fill="${MUTED}">github.com/FLucasF</text>
</svg>`;

const FIG = resolve(HERE, "..", "src", "assets", "lucas-waving.png");
const figure = await sharp(FIG).resize({ height: 548 }).toBuffer();
const figMeta = await sharp(figure).metadata();

await mkdir(dirname(OUT), { recursive: true });
await sharp(Buffer.from(svg))
  .composite([{ input: figure, left: Math.round(FIG_CX - figMeta.width * 0.478), top: 60 }])
  .png()
  .toFile(OUT);
console.log(`og.png escrito em ${OUT}`);

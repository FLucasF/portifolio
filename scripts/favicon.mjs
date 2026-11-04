/**
 * Gera os ícones de aba a partir da ilustração da capa.
 *
 * Rode com `npm run favicon` depois de trocar a ilustração. Os PNGs são
 * versionados, então a build não depende deste script.
 *
 * O recorte é o rosto: num quadrado de 16 px a figura sentada inteira vira
 * borrão. O fundo em papel kraft é chapado de propósito — com fundo
 * transparente o cabelo escuro some na aba de um navegador em tema escuro.
 */
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE = resolve(HERE, "..", "src", "assets", "lucas-waving.png");
const PUBLIC_DIR = resolve(HERE, "..", "public");

const PAPER = { r: 0xe9, g: 0xe1, b: 0xce, alpha: 1 };

/* Enquadramento do rosto na arte de 802x1021, medido a partir do alfa. */
const CROP = { left: 192, top: 0, width: 354, height: 354 };

/** Uma borda de papel em volta, para o cabelo não encostar no limite. */
const MARGIN = 34;

const SIZES = [
  { name: "favicon-32.png", px: 32 },
  { name: "favicon-192.png", px: 192 },
  { name: "apple-touch-icon.png", px: 180 },
];

const face = await sharp(SOURCE)
  .extract(CROP)
  .resize({
    width: CROP.width - MARGIN * 2,
    height: CROP.height - MARGIN * 2,
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .toBuffer();

const base = await sharp({
  create: {
    width: CROP.width,
    height: CROP.height,
    channels: 4,
    background: PAPER,
  },
})
  .composite([{ input: face, left: MARGIN, top: MARGIN }])
  .png()
  .toBuffer();

await mkdir(PUBLIC_DIR, { recursive: true });

for (const { name, px } of SIZES) {
  const target = resolve(PUBLIC_DIR, name);
  await sharp(base).resize(px, px, { kernel: "lanczos3" }).png().toFile(target);
  console.log(`${name} (${px}px)`);
}

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
const ORIGEM = resolve(HERE, "..", "src", "assets", "lucas-acenando.png");
const PUBLICO = resolve(HERE, "..", "public");

const PAPEL = { r: 0xe9, g: 0xe1, b: 0xce, alpha: 1 };

/* Enquadramento do rosto na arte de 900x1189, medido a partir do alfa. */
const CORTE = { left: 202, top: 0, width: 432, height: 432 };

/** Uma borda de papel em volta, para o cabelo não encostar no limite. */
const MARGEM = 34;

const TAMANHOS = [
  { nome: "favicon-32.png", px: 32 },
  { nome: "favicon-192.png", px: 192 },
  { nome: "apple-touch-icon.png", px: 180 },
];

const rosto = await sharp(ORIGEM)
  .extract(CORTE)
  .resize({
    width: CORTE.width - MARGEM * 2,
    height: CORTE.height - MARGEM * 2,
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .toBuffer();

const base = await sharp({
  create: {
    width: CORTE.width,
    height: CORTE.height,
    channels: 4,
    background: PAPEL,
  },
})
  .composite([{ input: rosto, left: MARGEM, top: MARGEM }])
  .png()
  .toBuffer();

await mkdir(PUBLICO, { recursive: true });

for (const { nome, px } of TAMANHOS) {
  const destino = resolve(PUBLICO, nome);
  await sharp(base).resize(px, px, { kernel: "lanczos3" }).png().toFile(destino);
  console.log(`${nome} (${px}px)`);
}

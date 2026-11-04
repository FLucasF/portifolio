/**
 * Baixa a capa de cada livro listado em src/data/site.ts.
 *
 * Rode com `npm run covers` depois de acrescentar um livro. As capas ficam
 * versionadas em src/assets/books, então o site não depende da Amazon estar
 * no ar: ela é consultada uma vez, aqui, e nunca pelo visitante.
 *
 * O ISBN-10 monta a URL de origem, e o arquivo leva o `coverName` do livro.
 */
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA = resolve(HERE, "..", "src", "data", "site.ts");
const TARGET = resolve(HERE, "..", "src", "assets", "books");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36";

const coverUrl = (isbn) =>
  `https://images-na.ssl-images-amazon.com/images/P/${isbn}.01.LZZZZZZZ.jpg`;

const exists = (path) =>
  access(path).then(
    () => true,
    () => false,
  );

const source = await readFile(DATA, "utf8");

/* Os livros saem do próprio arquivo de conteúdo, para não existir uma segunda
   lista aqui que possa divergir daquela. */
const entries = [...source.matchAll(/isbn:\s*"([0-9Xx]{10})",\s*coverName:\s*"([^"]+)"/g)].map((m) => ({
  isbn: m[1],
  coverName: m[2],
}));

if (entries.length === 0) {
  console.log("Nenhum livro em src/data/site.ts.");
  process.exit(0);
}

await mkdir(TARGET, { recursive: true });

let downloaded = 0;

for (const { isbn, coverName } of entries) {
  const file = resolve(TARGET, `${coverName}.jpg`);

  if (await exists(file)) {
    console.log(`${isbn}  já estava aqui`);
    continue;
  }

  const response = await fetch(coverUrl(isbn), { headers: { "User-Agent": UA } });

  if (!response.ok) {
    console.error(`${isbn}  falhou: HTTP ${response.status}`);
    continue;
  }

  const bytes = Buffer.from(await response.arrayBuffer());

  /* A Amazon devolve 200 com um GIF de 1x1 quando não tem a capa do ISBN. */
  if (bytes.length < 2000) {
    console.error(`${isbn}  sem capa na origem (${bytes.length} bytes)`);
    continue;
  }

  await writeFile(file, bytes);
  console.log(`${isbn}  baixada, ${(bytes.length / 1024).toFixed(0)} KB`);
  downloaded += 1;
}

console.log(`\n${entries.length} livro(s), ${downloaded} capa(s) nova(s).`);

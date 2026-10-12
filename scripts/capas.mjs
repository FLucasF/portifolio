/**
 * Baixa a capa de cada livro listado em src/data/site.ts.
 *
 * Rode com `npm run capas` depois de acrescentar um livro. As capas ficam
 * versionadas em src/assets/livros, então o site não depende da Amazon estar
 * no ar: ela é consultada uma vez, aqui, e nunca pelo visitante.
 *
 * O nome do arquivo é o ISBN-10, que é também o que monta a URL de origem.
 */
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const DADOS = resolve(HERE, "..", "src", "data", "site.ts");
const DESTINO = resolve(HERE, "..", "src", "assets", "livros");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36";

const urlDaCapa = (isbn) =>
  `https://images-na.ssl-images-amazon.com/images/P/${isbn}.01.LZZZZZZZ.jpg`;

const existe = (caminho) =>
  access(caminho).then(
    () => true,
    () => false,
  );

const fonte = await readFile(DADOS, "utf8");

/* Os ISBNs saem do próprio arquivo de conteúdo, para não existir uma segunda
   lista aqui que possa divergir daquela. */
const isbns = [...fonte.matchAll(/isbn:\s*"([0-9Xx]{10})"/g)].map((m) => m[1]);

if (isbns.length === 0) {
  console.log("Nenhum livro em src/data/site.ts.");
  process.exit(0);
}

await mkdir(DESTINO, { recursive: true });

let baixadas = 0;

for (const isbn of isbns) {
  const arquivo = resolve(DESTINO, `${isbn}.jpg`);

  if (await existe(arquivo)) {
    console.log(`${isbn}  já estava aqui`);
    continue;
  }

  const resposta = await fetch(urlDaCapa(isbn), { headers: { "User-Agent": UA } });

  if (!resposta.ok) {
    console.error(`${isbn}  falhou: HTTP ${resposta.status}`);
    continue;
  }

  const bytes = Buffer.from(await resposta.arrayBuffer());

  /* A Amazon devolve 200 com um GIF de 1x1 quando não tem a capa do ISBN. */
  if (bytes.length < 2000) {
    console.error(`${isbn}  sem capa na origem (${bytes.length} bytes)`);
    continue;
  }

  await writeFile(arquivo, bytes);
  console.log(`${isbn}  baixada, ${(bytes.length / 1024).toFixed(0)} KB`);
  baixadas += 1;
}

console.log(`\n${isbns.length} livro(s), ${baixadas} capa(s) nova(s).`);

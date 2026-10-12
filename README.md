# Portfólio — Lucas Felipe

Site pessoal de uma página, em português e inglês, construído com Astro e
Tailwind CSS. Sai como HTML estático: nenhum JavaScript de framework chega ao
navegador, só dois scripts curtos para o tema e para a animação de entrada.

## Rodar

```bash
npm install
npm run dev
```

O site sobe em <http://localhost:4321>. A versão em inglês fica em `/en/`.

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com recarga automática |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve o `dist/` para conferir antes de publicar |
| `npm run og` | Regera `public/og.png`, a imagem de compartilhamento |
| `npm run favicon` | Regera os ícones de aba a partir da ilustração |
| `npm run capas` | Baixa a capa dos livros que ainda não têm arquivo |

## Onde mexer

Quase tudo que você vai querer mudar está em um arquivo só:

**[`src/data/site.ts`](src/data/site.ts)** — nome, contatos, textos da capa e de
todas as seções, na ordem em que aparecem: Sobre, Experiência, Projetos,
Ferramentas, Certificados e Contato. Cada texto é um par `{ pt, en }`. Se você
editar um lado, edite o outro.

As durações de cargo ("1 ano 5 meses") não são escritas à mão: cada entrada de
`experience` guarda só `inicio` e `fim` no formato `AAAA-MM`, e
[`src/lib/tempo.ts`](src/lib/tempo.ts) calcula o texto na build. Um cargo sem
`fim` conta até hoje. Por isso o workflow também roda no dia 1º de cada mês:
sem essa reconstrução, o número congelaria na data do último push.

Três coisas para preencher assim que puder:

1. `person.email` está vazio. Enquanto estiver vazio, o e-mail não aparece na
   seção de contato. Preencha com o endereço que você quer publicar.
2. `now` tem uma data em `note`. Atualize junto com o conteúdo, senão a seção
   diz que é recente quando não é.
3. `cover.edition` traz o ano. Vale revisar em janeiro.

Outros pontos:

- **Cores e fontes** — [`src/styles/global.css`](src/styles/global.css), no topo.
  Os tokens `--paper`, `--ink`, `--anil` e `--sol` definem os dois temas.
- **Textos de navegação e rodapé** — [`src/i18n/ui.ts`](src/i18n/ui.ts).
- **Ilustração da capa** — [`src/assets/lucas-acenando.png`](src/assets/lucas-acenando.png).
  Para trocar, substitua o arquivo mantendo o fundo transparente. O Astro gera
  os WebP responsivos sozinho na build. Depois rode `npm run favicon` e
  `npm run og`, que recortam dela o ícone de aba e a imagem de compartilhamento.
- **Livros** — acrescente o livro em `books.items` com o **ISBN-10** e rode
  `npm run capas`. A capa é baixada uma vez para `src/assets/livros/<isbn>.jpg`
  e versionada, então o site não depende de serviço externo no ar: o visitante
  nunca fala com a Amazon. Se a origem não tiver a capa daquele ISBN, o script
  avisa e o livro aparece sem imagem, sem quebrar a página.
- **Ícone de aba** — [`scripts/favicon.mjs`](scripts/favicon.mjs). Ele recorta o
  rosto da ilustração; se você trocar o desenho, ajuste `CORTE` para o novo
  enquadramento.
- **Imagem de compartilhamento** — [`scripts/og.mjs`](scripts/og.mjs). Ela compõe
  a mesma ilustração sobre o fundo. Depois de trocar a ilustração, o nome ou o
  cargo, rode `npm run og` e faça commit do PNG novo.

## Publicação

O site está no ar em **<https://flucasf.github.io/portifolio/>** (inglês em
`/en/`). O workflow em [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
publica a cada push na `main` e também no dia 1º de cada mês, para que as
durações de cargo não congelem.

Como o site mora numa subpasta, e não na raiz do domínio, o endereço e o
prefixo vêm de duas variáveis de repositório já configuradas em *Settings →
Secrets and variables → Actions → Variables*:

| Nome | Valor |
| --- | --- |
| `SITE_URL` | `https://flucasf.github.io` |
| `BASE_PATH` | `/portifolio` |

Sem elas o site publica em subpasta mas monta os links como se estivesse na
raiz, e o CSS não carrega.

Para conferir localmente como fica em subpasta, no PowerShell:

```bash
$env:BASE_PATH="/portifolio"; npm run build; Remove-Item Env:BASE_PATH
```

No Git Bash, prefixe com `MSYS_NO_PATHCONV=1`, senão ele transforma
`/portifolio` num caminho do Windows antes de o Astro ver:

```bash
MSYS_NO_PATHCONV=1 BASE_PATH=/portifolio npm run build
```

### Mudar para o endereço limpo

Se um dia você criar o repositório `FLucasF.github.io`, o site passa a
responder em `flucasf.github.io` sem subpasta. Nesse caso basta apagar as duas
variáveis: os padrões do workflow (`https://flucasf.github.io` e `/`) já
servem.

## Estrutura

```
src/
  data/site.ts        conteúdo bilíngue, tipado
  i18n/ui.ts          textos de interface e ajudantes de idioma
  lib/tempo.ts        duração e período dos cargos, calculados na build
  layouts/Base.astro  <head>, tema sem piscar, observador da animação
  components/
    Cover.astro       a capa: moldura, nome e ilustração
    Personagem.astro  a ilustração, otimizada pelo <Image> do Astro
    Section.astro     cabeçalho de seção reaproveitado pelas quatro seguintes
    Header.astro      barra fixa e o índice de bolso abaixo de 900px
    Experience.astro  cargos, com a duração vinda de lib/tempo.ts
    Certificates.astro  credenciais
    Work.astro  Stack.astro  About.astro  Contact.astro
    Header.astro  Footer.astro  Page.astro
  pages/
    index.astro       português, na raiz
    en/index.astro    inglês
```

## Notas de acessibilidade

- Contraste de texto acima de 4.5:1 nos dois temas.
- Foco visível em todo elemento navegável por teclado, e um link "ir para o
  conteúdo" no início da página.
- `prefers-reduced-motion` desliga a animação de entrada e o pulso do marcador.
- Sem JavaScript, a página continua completa e legível.

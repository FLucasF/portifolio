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

## Onde mexer

Quase tudo que você vai querer mudar está em um arquivo só:

**[`src/data/site.ts`](src/data/site.ts)** — nome, contatos, textos da capa, a
seção "Agora", a lista de projetos, as ferramentas e o texto do "Sobre". Cada
texto é um par `{ pt, en }`. Se você editar um lado, edite o outro.

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
  os WebP responsivos sozinho na build.
- **Imagem de compartilhamento** — [`scripts/og.mjs`](scripts/og.mjs). Ela compõe
  a mesma ilustração sobre o fundo. Depois de trocar a ilustração, o nome ou o
  cargo, rode `npm run og` e faça commit do PNG novo.

## Publicar no GitHub Pages

O workflow em [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
publica a cada push na `main`. Falta escolher entre dois endereços.

### Endereço limpo: `flucasf.github.io`

Crie um repositório chamado exatamente **`FLucasF.github.io`** e mande este
projeto para lá. Em *Settings → Pages*, ponha **Source: GitHub Actions**. Não
precisa configurar mais nada — os valores padrão do workflow já servem.

### Em subpasta: `flucasf.github.io/portfolio`

Use um repositório com outro nome, por exemplo `portfolio`. Além de *Settings →
Pages → Source: GitHub Actions*, vá em *Settings → Secrets and variables →
Actions → Variables* e crie duas variáveis de repositório:

| Nome | Valor |
| --- | --- |
| `SITE_URL` | `https://flucasf.github.io` |
| `BASE_PATH` | `/portfolio` |

Sem essas duas, o site publica em subpasta mas monta os links como se estivesse
na raiz, e o CSS não carrega.

Para conferir localmente como fica em subpasta, no PowerShell:

```bash
$env:BASE_PATH="/portfolio"; npm run build; Remove-Item Env:BASE_PATH
```

No Git Bash, prefixe com `MSYS_NO_PATHCONV=1`, senão ele transforma
`/portfolio` num caminho do Windows antes de o Astro ver:

```bash
MSYS_NO_PATHCONV=1 BASE_PATH=/portfolio npm run build
```

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
    Experience.astro  cargos, com a duração vinda de lib/tempo.ts
    Certificates.astro  credenciais, no fim da seção Ferramentas
    Now.astro  Work.astro  Stack.astro  About.astro  Contact.astro
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

# Telas dos projetos

Cada projeto tem a sua pasta aqui, com o `slug` dele em `src/data/site.ts`:

    ordo  ol-dcx  coranil  nutriplan  ayty  minio  embaralhado  evite-o-golpe

Coloque a imagem na pasta do projeto (crie a pasta se ainda não existir). O
botão de telas aparece sozinho na build. Formatos: png, jpg, jpeg e webp.

As telas seguem a ordem do nome do arquivo, então numere: `01-inicio.png`,
`02-lista.png`.

A legenda é opcional. Para ter uma, adicione ao projeto em `site.ts`:

    legendas: {
      "01-inicio.png": { pt: "Tela inicial", en: "Home screen" },
    },

import type { Lang } from "../data/site";

/** Textos da moldura do site: navegação, botões e rodapé. */
export const ui = {
  nav: {
    experience: { pt: "Experiência", en: "Experience" },
    work: { pt: "Projetos", en: "Projects" },
    tools: { pt: "Ferramentas", en: "Tools" },
    about: { pt: "Sobre", en: "About" },
    contact: { pt: "Contato", en: "Contact" },
    certificates: { pt: "Certificados", en: "Certificates" },
    /** Rótulo do próprio menu, para quem navega por leitor de tela. */
    sections: { pt: "Seções do site", en: "Site sections" },
    index: { pt: "Índice", en: "Index" },
    openIndex: { pt: "Abrir o índice das seções", en: "Open the section index" },
    closeIndex: { pt: "Fechar o índice", en: "Close the index" },
  },
  theme: {
    toLight: { pt: "Usar tema claro", en: "Switch to light theme" },
    toDark: { pt: "Usar tema escuro", en: "Switch to dark theme" },
  },
  lang: {
    label: { pt: "Escolher idioma", en: "Choose language" },
  },
  skip: { pt: "Ir para o conteúdo", en: "Skip to content" },
  rights: {
    pt: "Feito com Astro",
    en: "Built with Astro",
  },
  meta: {
    description: {
      pt: "Lucas Felipe, desenvolvedor full stack da Paraíba. Java e Spring Boot no servidor, React e Angular na tela, com foco em software de impacto social.",
      en: "Lucas Felipe, a full stack developer from Paraíba, Brazil. Java and Spring Boot on the server, React and Angular on the screen, with a focus on social-impact software.",
    },
  },
} as const;

/** Resolve um par { pt, en } para a língua da página. */
export function t(entry: Record<Lang, string>, lang: Lang): string {
  return entry[lang];
}

/** Caminho absoluto respeitando o `base` configurado e a língua da página. */
export function href(path: string, lang: Lang, base: string): string {
  const root = base.endsWith("/") ? base : `${base}/`;
  const prefix = lang === "pt" ? root : `${root}en/`;
  const clean = path.replace(/^\//, "");
  return `${prefix}${clean}`;
}

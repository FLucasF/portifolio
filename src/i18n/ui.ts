import type { Lang } from "../data/site";

/** Textos da moldura do site: navegação, botões e rodapé. */
export const ui = {
  nav: {
    now: { pt: "Agora", en: "Now" },
    experience: { pt: "Experiência", en: "Experience" },
    work: { pt: "Projetos", en: "Projects" },
    tools: { pt: "Ferramentas", en: "Tools" },
    about: { pt: "Sobre", en: "About" },
    contact: { pt: "Contato", en: "Contact" },
  },
  theme: {
    toLight: { pt: "Usar tema claro", en: "Switch to light theme" },
    toDark: { pt: "Usar tema escuro", en: "Switch to dark theme" },
  },
  lang: {
    switchTo: { pt: "Read in English", en: "Ler em português" },
  },
  skip: { pt: "Ir para o conteúdo", en: "Skip to content" },
  rights: {
    pt: "Feito com Astro. Código aberto no GitHub.",
    en: "Built with Astro. Source on GitHub.",
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

export const otherLang = (lang: Lang): Lang => (lang === "pt" ? "en" : "pt");

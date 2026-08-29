export type Lang = "pt" | "en";

/** Um texto que existe nas duas línguas do site. */
export type Bi = Record<Lang, string>;

export const LANGS: Lang[] = ["pt", "en"];

/* -------------------------------------------------------------------------- */
/*  Identidade                                                                */
/* -------------------------------------------------------------------------- */

export const person = {
  name: "Lucas Felipe",
  fullName: "Lucas Felipe Gomes Pedrosa",
  /** Preencha com o e-mail que você quer publicar. Vazio esconde o link. */
  email: "",
  github: "https://github.com/FLucasF",
  githubHandle: "FLucasF",
  linkedin: "https://www.linkedin.com/in/lucas-felipe-gomes-pedrosa-a96a0825a/",
  place: { pt: "Paraíba, Brasil", en: "Paraíba, Brazil" } satisfies Bi,
  role: {
    pt: "Desenvolvedor full stack",
    en: "Full stack developer",
  } satisfies Bi,
  school: {
    pt: "Ciência da Computação — UFPB Campus IV",
    en: "Computer Science — UFPB Campus IV",
  } satisfies Bi,
  /** Onde ele está hoje. Aparece na tarja da capa, ao lado do marcador aceso. */
  current: {
    pt: "Projeto Phoebus · Laboratório AYTY · UFPB Campus IV",
    en: "Phoebus project · AYTY Lab · UFPB Campus IV",
  } satisfies Bi,
};

/* -------------------------------------------------------------------------- */
/*  Capa                                                                      */
/* -------------------------------------------------------------------------- */

export const cover = {
  /** Linha de crédito da moldura, no estilo da lombada de um folheto. */
  edition: {
    pt: "Folheto nº 01 · Paraíba, Brasil · 2026",
    en: "Chapbook no. 01 · Paraíba, Brazil · 2026",
  } satisfies Bi,
  lede: {
    pt: "Java e Spring Boot no servidor, React e Angular na tela. Hoje trabalho com pagamento eletrônico no laboratório AYTY, da UFPB. Antes disso, quase tudo que construí foi software de impacto social: jogo de língua indígena, educação contra golpes e gestão escolar.",
    en: "Java and Spring Boot on the server, React and Angular on the screen. Today I work on electronic payments at UFPB's AYTY lab. Before that, nearly everything I built was social-impact software: an indigenous-language game, scam-awareness education, and school management.",
  } satisfies Bi,
  ctaWork: { pt: "Ver os trabalhos", en: "See the work" } satisfies Bi,
  ctaContact: { pt: "Falar comigo", en: "Get in touch" } satisfies Bi,
};

/* -------------------------------------------------------------------------- */
/*  Agora                                                                     */
/* -------------------------------------------------------------------------- */

export type NowItem = { label: Bi; title: Bi; body: Bi };

export const now = {
  heading: { pt: "Agora", en: "Now" } satisfies Bi,
  note: {
    pt: "Atualizado em agosto de 2026",
    en: "Updated August 2026",
  } satisfies Bi,
  items: [
    {
      label: { pt: "Trabalhando", en: "Working on" },
      title: {
        pt: "Projeto Phoebus, no laboratório AYTY",
        en: "The Phoebus project, at the AYTY lab",
      },
      body: {
        pt: "O AYTY é o laboratório de engenharia de software aplicada da UFPB Campus IV, em Rio Tinto. O projeto com a Phoebus Tecnologia existe desde 2017 e trabalha com pagamento eletrônico: e-commerce, PoS inteligente e dívida técnica.",
        en: "AYTY is the applied software engineering lab at UFPB Campus IV, in Rio Tinto, Brazil. Its project with Phoebus Tecnologia has run since 2017 and works on electronic payments: e-commerce, smart PoS, and technical debt.",
      },
    },
    {
      label: { pt: "Construindo", en: "Building" },
      title: {
        pt: "NutriPlan, meu trabalho de conclusão de curso",
        en: "NutriPlan, my final-year project",
      },
      body: {
        pt: "Software de gestão para nutricionistas: agenda, prontuário, plano alimentar e exportação em PDF. Spring Boot 3.4 sobre Java 21 no servidor, React 18 com TypeScript e Vite na tela.",
        en: "Practice-management software for nutritionists: scheduling, patient charts, meal plans, and PDF export. Spring Boot 3.4 on Java 21 for the server, React 18 with TypeScript and Vite for the screen.",
      },
    },
    {
      label: { pt: "Estudando", en: "Studying" },
      title: {
        pt: "Arquitetura de backend e teste automatizado",
        en: "Backend architecture and automated testing",
      },
      body: {
        pt: "Modelagem de domínio, separação de camadas e cobertura de testes em Java. Do lado da interface, Cypress para teste de ponta a ponta.",
        en: "Domain modelling, layer separation, and test coverage in Java. On the interface side, Cypress for end-to-end testing.",
      },
    },
  ] satisfies NowItem[],
};

/* -------------------------------------------------------------------------- */
/*  Trabalhos                                                                 */
/* -------------------------------------------------------------------------- */

export type Project = {
  slug: string;
  year: string;
  title: Bi;
  kind: Bi;
  body: Bi;
  stack: string[];
  repos: { label: Bi; url: string }[];
  live?: string;
};

const CODE: Bi = { pt: "Código", en: "Code" };
const FRONT: Bi = { pt: "Interface", en: "Frontend" };
const BACK: Bi = { pt: "Servidor", en: "Backend" };

export const work = {
  heading: { pt: "Trabalhos", en: "Work" } satisfies Bi,
  lede: {
    pt: "Os projetos que dizem mais sobre como eu trabalho, do mais recente ao mais antigo.",
    en: "The projects that say the most about how I work, newest first.",
  } satisfies Bi,
  all: { pt: "Todos os repositórios", en: "All repositories" } satisfies Bi,
  live: { pt: "No ar", en: "Live" } satisfies Bi,
  projects: [
    {
      slug: "nutriplan",
      year: "2026",
      title: { pt: "NutriPlan", en: "NutriPlan" },
      kind: {
        pt: "Trabalho de conclusão de curso",
        en: "Final-year project",
      },
      body: {
        pt: "Sistema de gestão para consultório de nutrição: cadastro de paciente, agendamento, prontuário, montagem de plano alimentar e exportação em PDF. Autenticação por JWT e uma camada de domínio que não conhece a camada web.",
        en: "Practice-management system for a nutrition clinic: patient records, scheduling, charting, meal-plan building, and PDF export. JWT authentication, and a domain layer that knows nothing about the web layer.",
      },
      stack: ["Java 21", "Spring Boot 3.4", "JWT", "React 18", "TypeScript", "Vite"],
      repos: [{ label: CODE, url: "https://github.com/FLucasF/Job-Manager" }],
    },
    {
      slug: "ayty",
      year: "2025",
      title: {
        pt: "Gerenciador Escolar AYTY",
        en: "AYTY School Manager",
      },
      kind: { pt: "Laboratório AYTY · UFPB", en: "AYTY Lab · UFPB" },
      body: {
        pt: "Gestão de turmas, alunos e registros de uma escola. Construí a interface em Angular 19 com TypeScript e a API em Java, o que me obrigou a desenhar o contrato entre as duas antes de escrever qualquer tela.",
        en: "Class, student, and record management for a school. I built the Angular 19 interface in TypeScript and the Java API, which forced me to design the contract between them before writing a single screen.",
      },
      stack: ["Angular 19", "TypeScript", "Java", "Spring Boot"],
      repos: [
        { label: FRONT, url: "https://github.com/FLucasF/AYTY_gerenciador-escolar-front" },
        { label: BACK, url: "https://github.com/FLucasF/AYTY_gerenciador-escolar-back" },
      ],
    },
    {
      slug: "embaralhado",
      year: "2024",
      title: {
        pt: "Embaralhado Indígena",
        en: "Embaralhado Indígena",
      },
      kind: { pt: "Apps4Society · UFPB", en: "Apps4Society · UFPB" },
      body: {
        pt: "Jogo de embaralhar palavras para ensinar vocabulário indígena. A interface em Angular guarda as listas de palavras e uma API em Spring Boot registra cada resposta, então cada partida também vira dado de pesquisa.",
        en: "A word-scramble game for teaching indigenous vocabulary. The Angular interface holds the word lists and a Spring Boot API records every answer, so each round doubles as research data.",
      },
      stack: ["Angular 17", "TypeScript", "SCSS", "Java", "Spring Boot"],
      repos: [
        { label: FRONT, url: "https://github.com/FLucasF/EmbaralhaWEB" },
        { label: BACK, url: "https://github.com/FLucasF/embaralhado_back_API" },
      ],
      live: "https://embaralhadoindigena.a4s.dev.br/",
    },
    {
      slug: "evite-o-golpe",
      year: "2024",
      title: { pt: "Evite o Golpe", en: "Evite o Golpe" },
      kind: { pt: "Apps4Society · UFPB", en: "Apps4Society · UFPB" },
      body: {
        pt: "Aplicação que ensina a reconhecer golpes comuns antes de cair neles. O público não é técnico, então a tela precisou ser curta, grande e sem jargão. Foi o projeto que mais me ensinou sobre interface.",
        en: "An application that teaches people to recognise common scams before falling for one. The audience is non-technical, so the screen had to be short, large, and free of jargon. It taught me more about interface work than anything else.",
      },
      stack: ["React", "JavaScript", "Vite"],
      repos: [{ label: CODE, url: "https://github.com/FLucasF/EviteOgolpeWEB" }],
      live: "https://eviteogolpe.a4s.dev.br/EviteOgolpeWEB/",
    },
    {
      slug: "minio",
      year: "2025",
      title: {
        pt: "Armazenamento de arquivos com MinIO",
        en: "File storage with MinIO",
      },
      kind: { pt: "Infraestrutura", en: "Infrastructure" },
      body: {
        pt: "Integração de armazenamento de objetos com MinIO em serviços Spring Boot, para tirar os arquivos enviados pelo usuário do disco da aplicação e deixar o deploy descartável.",
        en: "Object-storage integration with MinIO in Spring Boot services, to move user uploads off the application disk and make the deployment disposable.",
      },
      stack: ["Java", "Spring Boot", "MinIO", "Docker"],
      repos: [
        { label: { pt: "Apps4Society", en: "Apps4Society" }, url: "https://github.com/FLucasF/minIO_apps4society" },
        { label: { pt: "Spring Boot", en: "Spring Boot" }, url: "https://github.com/FLucasF/MinIO" },
      ],
    },
  ] satisfies Project[],
};

/* -------------------------------------------------------------------------- */
/*  Ferramentas                                                               */
/* -------------------------------------------------------------------------- */

export const stack = {
  heading: { pt: "Ferramentas", en: "Tools" } satisfies Bi,
  lede: {
    pt: "O que eu uso hoje, agrupado por onde roda.",
    en: "What I reach for today, grouped by where it runs.",
  } satisfies Bi,
  groups: [
    {
      title: { pt: "No servidor", en: "On the server" } satisfies Bi,
      items: ["Java", "Spring Boot", "Javalin", "PostgreSQL", "JWT", "MinIO", "Maven"],
    },
    {
      title: { pt: "Na tela", en: "On the screen" } satisfies Bi,
      items: ["TypeScript", "React", "Angular", "Astro", "Tailwind CSS", "SCSS", "Vite"],
    },
    {
      title: { pt: "Na oficina", en: "In the workshop" } satisfies Bi,
      items: ["Git", "Docker", "Cypress", "JUnit", "Thymeleaf", "Python"],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Sobre e contato                                                           */
/* -------------------------------------------------------------------------- */

export const about = {
  heading: { pt: "Sobre", en: "About" } satisfies Bi,
  body: {
    pt: [
      "Estudo Ciência da Computação na UFPB, Campus IV, no interior da Paraíba. Comecei a programar em 2022 e o que me prendeu foi o backend: modelar o domínio direito, deixar as regras num lugar só e não espalhar lógica pela tela.",
      "Boa parte do que construí nasceu dentro de laboratório da universidade. No Apps4Society, que faz software para demanda real de comunidade, aprendi a pensar interface de outro jeito: quando o usuário é uma pessoa idosa aprendendo a reconhecer um golpe, ou uma criança aprendendo palavras em língua indígena, não sobra espaço para tela confusa. Hoje estou no AYTY, o laboratório de engenharia de software aplicada do Campus IV, no projeto com a Phoebus Tecnologia.",
      "Hoje divido o tempo entre o projeto Phoebus, no laboratório AYTY, e o NutriPlan, que fecha o curso.",
    ],
    en: [
      "I study Computer Science at UFPB, Campus IV, in the interior of Paraíba, Brazil. I started programming in 2022, and what held me was the backend: modelling the domain properly, keeping the rules in one place, and not scattering logic across the screen.",
      "Much of what I have built began inside a university lab. At Apps4Society, which builds software for real community needs, I learned to think about interfaces differently: when your user is an older person learning to spot a scam, or a child learning words in an indigenous language, there is no room left for a confusing screen. Today I am at AYTY, the applied software engineering lab at Campus IV, on the Phoebus Tecnologia project.",
      "Today I split my time between the Phoebus project at the AYTY lab and NutriPlan, which closes out my degree.",
    ],
  } as Record<Lang, string[]>,
};

export const contact = {
  heading: { pt: "Contato", en: "Contact" } satisfies Bi,
  lede: {
    pt: "Para falar sobre um projeto ou trocar ideia sobre código, estou nestes dois lugares.",
    en: "To talk about a project, or just talk shop, I am in these two places.",
  } satisfies Bi,
};

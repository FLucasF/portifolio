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
        pt: "Bolsista full stack, 30 horas por semana, remoto. Atuo nas duas pontas conforme a demanda aparece: componentes de back-end, interfaces de front-end e a documentação técnica que mantém o software sustentável.",
        en: "Full stack research fellow, 30 hours a week, remote. I work at both ends as demand comes up: back-end components, front-end interfaces, and the technical documentation that keeps the software maintainable.",
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
/*  Experiência                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Os períodos guardam só o mês de início e o de fim. A duração em texto é
 * calculada na build por `src/lib/tempo.ts`, então nada aqui precisa ser
 * reescrito conforme o tempo passa.
 */
export type Cargo = {
  slug: string;
  role: Bi;
  org: string;
  /** Vínculo e regime, como "Meio período · Remoto". */
  mode: Bi;
  place: Bi;
  inicio: string;
  /** Ausente quando o cargo está em andamento. */
  fim?: string;
  body: Bi;
  skills: string[];
};

export const experience = {
  heading: { pt: "Experiência", en: "Experience" } satisfies Bi,
  lede: {
    pt: "Bolsa, estágio e monitoria, todos dentro da UFPB Campus IV ou em projeto que ela mantém com empresa.",
    en: "Research fellowships, an internship, and a teaching assistantship, all inside UFPB Campus IV or in projects it runs with companies.",
  } satisfies Bi,
  roles: [
    {
      slug: "phoebus",
      role: {
        pt: "Bolsista desenvolvedor full stack",
        en: "Full stack research fellow",
      },
      org: "Phoebus · Projeto AYTY",
      mode: { pt: "Meio período · 30h · Remoto", en: "Part time · 30h · Remote" },
      place: { pt: "Paraíba, Brasil", en: "Paraíba, Brazil" },
      inicio: "2025-04",
      body: {
        pt: "O projeto AYTY é uma colaboração entre a UFPB Campus IV e a Phoebus. Atuo de forma versátil na solução de demandas: desenvolvo e mantenho componentes de back-end, implemento interfaces de front-end e escrevo a documentação técnica que garante a qualidade e a manutenção do software.",
        en: "The AYTY project is a partnership between UFPB Campus IV and Phoebus. I work across whatever a demand needs: building and maintaining back-end components, implementing front-end interfaces, and writing the technical documentation that keeps the software correct and maintainable.",
      },
      skills: ["Java", "Spring Boot", "TypeScript", "Documentação técnica"],
    },
    {
      slug: "a4s-embaralhado",
      role: { pt: "Desenvolvedor de software", en: "Software developer" },
      org: "apps4society",
      mode: { pt: "Estágio · Remoto", en: "Internship · Remote" },
      place: { pt: "Rio Tinto, Paraíba", en: "Rio Tinto, Paraíba, Brazil" },
      inicio: "2024-08",
      fim: "2025-04",
      body: {
        pt: "Construí o Embaralhado Indígena, a versão web do aplicativo Android criado no TCC de João Fidelis Freire de Oliveira. Fiz a interface em Angular com TypeScript e um microsserviço em Spring Boot com MySQL e MinIO para guardar as imagens. Tirar o jogo do Android e levá-lo para a web acabou com a exigência de instalar qualquer coisa, e esse era o ponto: ele ensina alfabetização com palavras da cultura indígena.",
        en: "I built Embaralhado Indígena, the web version of an Android app created in the final-year project of João Fidelis Freire de Oliveira. I wrote the Angular and TypeScript interface and a Spring Boot microservice with MySQL and MinIO to hold the images. Moving the game off Android and onto the web removed the need to install anything, which was the point: it teaches literacy through words from indigenous culture.",
      },
      skills: ["Angular", "TypeScript", "Spring Boot", "MySQL", "MinIO", "Scrum", "Kanban"],
    },
    {
      slug: "monitoria-java",
      role: { pt: "Monitor de programação em Java", en: "Java teaching assistant" },
      org: "Universidade Federal da Paraíba",
      mode: { pt: "Bolsa · Híbrido", en: "Fellowship · Hybrid" },
      place: { pt: "Rio Tinto, Paraíba", en: "Rio Tinto, Paraíba, Brazil" },
      inicio: "2024-03",
      fim: "2024-08",
      body: {
        pt: "Corrigi atividades, apoiei as aulas práticas presenciais e a distância e gravei videoaulas sobre Git e GitHub, com os slides que as acompanham. Ajudei a organizar os horários de monitoria entre os monitores, participei dos testes do sistema githubclass para o semestre seguinte e apresentei a experiência no ENID.",
        en: "I graded coursework, supported practical classes on-site and online, and recorded video lessons on Git and GitHub with the slides that go with them. I helped schedule tutoring hours across the assistants, tested the githubclass system for the following term, and presented the experience at ENID.",
      },
      skills: ["Java", "POO", "Git", "GitHub"],
    },
    {
      slug: "a4s-golpe",
      role: { pt: "Desenvolvedor de software", en: "Software developer" },
      org: "apps4society",
      mode: { pt: "Bolsa", en: "Fellowship" },
      place: { pt: "Rio Tinto, Paraíba", en: "Rio Tinto, Paraíba, Brazil" },
      inicio: "2024-02",
      fim: "2024-08",
      body: {
        pt: "Trabalhei no Evite o Golpe, que ensina a reconhecer fraude online. O aplicativo tinha nascido no MIT App Inventor e virou web em React, para rodar em celular e computador sem download. Corrigi bugs, implementei a randomização das perguntas e o retorno visual, e montei o formulário de avaliação. Testamos com estudantes e pessoas idosas, e o que voltou desses testes guiou as mudanças.",
        en: "I worked on Evite o Golpe, which teaches people to recognise online fraud. The app had started in MIT App Inventor and moved to the web in React, so it runs on phones and computers with no download. I fixed bugs, implemented question randomisation and visual feedback, and built the feedback form. We tested with students and older people, and what came back from those sessions drove the changes.",
      },
      skills: ["React", "JavaScript", "MIT App Inventor"],
    },
    {
      slug: "pensamento-computacional",
      role: { pt: "Instrutor", en: "Instructor" },
      org: "Universidade Federal da Paraíba",
      mode: { pt: "Extensão", en: "Outreach" },
      place: { pt: "Rio Tinto, Paraíba", en: "Rio Tinto, Paraíba, Brazil" },
      inicio: "2023-06",
      fim: "2023-12",
      body: {
        pt: "Oficinas e cursos de pensamento computacional para estudantes da educação básica de Rio Tinto, construindo aplicativos no MIT App Inventor 2. O alvo eram as habilidades por trás da programação: decompor um problema, reconhecer padrões, abstrair e montar o algoritmo. Ensinar isso foi o que mais me obrigou a entender o que eu achava que já sabia.",
        en: "Workshops and short courses on computational thinking for basic-education students in Rio Tinto, building apps in MIT App Inventor 2. The target was the thinking behind programming: breaking a problem apart, spotting patterns, abstracting, and assembling an algorithm. Teaching it is what forced me to actually understand what I thought I already knew.",
      },
      skills: ["MIT App Inventor 2", "Ensino"],
    },
  ] satisfies Cargo[],
};

/* -------------------------------------------------------------------------- */
/*  Certificados                                                              */
/* -------------------------------------------------------------------------- */

export type Certificado = {
  title: string;
  issuer: string;
  code: string;
  url: string;
  date?: Bi;
};

export const certificates = {
  heading: { pt: "Certificados", en: "Certificates" } satisfies Bi,
  verify: { pt: "Ver credencial", en: "View credential" } satisfies Bi,
  items: [
    {
      title: "Java COMPLETO: Programação Orientada a Objetos + Projetos",
      issuer: "Udemy",
      code: "UC-266b61cc-8ef2-4198-91d2-ce03b4a18af0",
      url: "https://www.udemy.com/certificate/UC-266b61cc-8ef2-4198-91d2-ce03b4a18af0/",
    },
    {
      title: "Formação Front-end: HTML, CSS, JavaScript, React e mais",
      issuer: "Udemy",
      code: "UC-44258552-37f6-48de-90aa-97ee380c7ca9",
      url: "https://www.udemy.com/certificate/UC-44258552-37f6-48de-90aa-97ee380c7ca9/",
    },
    {
      title: "Teste de aplicações modernas com Cypress",
      issuer: "Udemy",
      code: "UC-d2316daf-ccfb-45fe-bce1-b9f5dad386fc",
      url: "https://www.udemy.com/certificate/UC-d2316daf-ccfb-45fe-bce1-b9f5dad386fc/",
      date: { pt: "jun de 2024", en: "Jun 2024" },
    },
  ] satisfies Certificado[],
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

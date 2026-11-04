export type Lang = "pt" | "en";

/** Um texto que existe nas duas línguas do site. */
export type Bi = Record<Lang, string>;

export const LANGS: Lang[] = ["pt", "en"];

/* -------------------------------------------------------------------------- */
/*  Identidade                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Contagem privada de visitas, no painel do GoatCounter: nada aparece na página.
 * Preencha com o código da conta (o `seucodigo` de seucodigo.goatcounter.com).
 * Vazio não carrega script nenhum.
 */
export const goatCounterCode = "flucasf";

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
  /** O nome grande da capa. Nome próprio não se traduz, então é uma string só. */
  headline: "Lucas",
  /** Linha de crédito da moldura, no estilo da lombada de um folheto. */
  edition: {
    pt: "Paraíba, Brasil",
    en: "Paraíba, Brazil",
  } satisfies Bi,
  lede: {
    pt: "Java e Spring Boot no servidor, React e Angular na tela. Hoje trabalho com pagamento eletrônico no laboratório AYTY, da UFPB. Antes disso, quase tudo que construí foi software de impacto social: jogo de língua indígena, educação contra golpes e gestão escolar.",
    en: "Java and Spring Boot on the server, React and Angular on the screen. Today I work on electronic payments at UFPB's AYTY lab. Before that, nearly everything I built was social-impact software: an indigenous-language game, scam-awareness education, and school management.",
  } satisfies Bi,
  ctaWork: { pt: "Ver os projetos", en: "See the projects" } satisfies Bi,
  ctaContact: { pt: "Falar comigo", en: "Get in touch" } satisfies Bi,
};

/* -------------------------------------------------------------------------- */
/*  Experiência                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Os períodos guardam só o mês de início e o de fim. A duração em texto é
 * calculada na build por `src/lib/time.ts`, então nada aqui precisa ser
 * reescrito conforme o tempo passa.
 */
export type Role = {
  slug: string;
  role: Bi;
  /** Quem estava por trás. Cada parte leva o seu link, quando há um público. */
  orgs: { name: string; url?: string }[];
  /** Vínculo e regime, como "Meio período · Remoto". */
  mode: Bi;
  place: Bi;
  start: string;
  /** Ausente quando o cargo está em andamento. */
  end?: string;
  body: Bi;
  skills: string[];
};

export const experience = {
  heading: { pt: "Experiência", en: "Experience" } satisfies Bi,
  roles: [
    {
      slug: "phoebus",
      role: {
        pt: "Bolsista desenvolvedor full stack",
        en: "Full stack research fellow",
      },
      orgs: [
        { name: "Phoebus", url: "https://www.phoebus.com.br/" },
        { name: "Projeto AYTY", url: "https://ayty.org/" },
      ],
      mode: { pt: "Meio período · 30h · Remoto", en: "Part time · 30h · Remote" },
      place: { pt: "Paraíba, Brasil", en: "Paraíba, Brazil" },
      start: "2025-04",
      body: {
        pt: "O projeto AYTY é uma colaboração entre a UFPB Campus IV e a Phoebus. Atuo de forma versátil na solução de demandas: desenvolvo e mantenho componentes de back-end, implemento interfaces de front-end e escrevo a documentação técnica que garante a qualidade e a manutenção do software.",
        en: "The AYTY project is a partnership between UFPB Campus IV and Phoebus. I work across whatever a demand needs: building and maintaining back-end components, implementing front-end interfaces, and writing the technical documentation that keeps the software correct and maintainable.",
      },
      skills: ["Java", "Spring Boot", "TypeScript", "Documentação técnica"],
    },
    {
      slug: "a4s-embaralhado",
      role: { pt: "Desenvolvedor de software", en: "Software developer" },
      orgs: [{ name: "Apps4Society", url: "https://a4s.dev.br/" }],
      mode: {
        pt: "Projeto de Extensão · Bolsista · UFPB · Remoto",
        en: "Outreach project · Fellow · UFPB · Remote",
      },
      place: { pt: "Rio Tinto, Paraíba", en: "Rio Tinto, Paraíba, Brazil" },
      start: "2024-08",
      end: "2025-04",
      body: {
        pt: "Portei o Embaralhado Indígena do Android para a web e cuidei das duas pontas: a interface em Angular com TypeScript e um microsserviço em Spring Boot, com MySQL e MinIO para as imagens. O aplicativo original saiu do trabalho de conclusão de João Fidelis Freire de Oliveira.",
        en: "I ported Embaralhado Indígena from Android to the web and handled both ends: the Angular and TypeScript interface, and a Spring Boot microservice with MySQL and MinIO for the images. The original app came out of João Fidelis Freire de Oliveira's final-year project.",
      },
      skills: ["Angular", "TypeScript", "Spring Boot", "MySQL", "MinIO", "Scrum", "Kanban"],
    },
    {
      slug: "java-teaching-assistant",
      role: { pt: "Monitor de programação em Java", en: "Java teaching assistant" },
      orgs: [{ name: "Universidade Federal da Paraíba" }],
      mode: {
        pt: "Monitoria · Bolsista · Híbrido",
        en: "Teaching assistantship · Fellow · Hybrid",
      },
      place: { pt: "Rio Tinto, Paraíba", en: "Rio Tinto, Paraíba, Brazil" },
      start: "2024-03",
      end: "2024-08",
      body: {
        pt: "Corrigi atividades, apoiei as aulas práticas presenciais e a distância e gravei videoaulas sobre Git e GitHub, com os slides que as acompanham. Ajudei a organizar os horários de monitoria entre os monitores, participei dos testes do sistema githubclass para o semestre seguinte e apresentei a experiência no ENID.",
        en: "I graded coursework, supported practical classes on-site and online, and recorded video lessons on Git and GitHub with the slides that go with them. I helped schedule tutoring hours across the assistants, tested the githubclass system for the following term, and presented the experience at ENID.",
      },
      skills: ["Java", "POO", "Git", "GitHub"],
    },
    {
      slug: "a4s-golpe",
      role: { pt: "Desenvolvedor de software", en: "Software developer" },
      orgs: [{ name: "Apps4Society", url: "https://a4s.dev.br/" }],
      mode: {
        pt: "Projeto de Extensão · Voluntário · UFPB",
        en: "Outreach project · Volunteer · UFPB",
      },
      place: { pt: "Rio Tinto, Paraíba", en: "Rio Tinto, Paraíba, Brazil" },
      start: "2024-02",
      end: "2024-08",
      body: {
        pt: "Ajudei a tirar o Evite o Golpe do MIT App Inventor e refazê-lo em React. Corrigi bugs, implementei a randomização das perguntas e o retorno visual, e montei o formulário de avaliação. Testamos com estudantes e pessoas idosas, e o que voltou desses testes guiou as mudanças.",
        en: "I helped move Evite o Golpe off MIT App Inventor and rebuild it in React. I fixed bugs, implemented question randomisation and visual feedback, and built the feedback form. We tested with students and older people, and what came back from those sessions drove the changes.",
      },
      skills: ["React", "JavaScript", "MIT App Inventor"],
    },
    {
      slug: "computational-thinking",
      role: { pt: "Instrutor", en: "Instructor" },
      orgs: [{ name: "A4SMaker", url: "https://sites.google.com/dcx.ufpb.br/a4smaker" }],
      mode: {
        pt: "Projeto de Extensão · Voluntário · UFPB",
        en: "Outreach project · Volunteer · UFPB",
      },
      place: { pt: "Rio Tinto, Paraíba", en: "Rio Tinto, Paraíba, Brazil" },
      start: "2023-06",
      end: "2023-12",
      body: {
        pt: "Oficinas e cursos de pensamento computacional para estudantes da educação básica de Rio Tinto, construindo aplicativos no MIT App Inventor 2. O alvo eram as habilidades por trás da programação: decompor um problema, reconhecer padrões, abstrair e montar o algoritmo. Ensinar isso foi o que mais me obrigou a entender o que eu achava que já sabia.",
        en: "Workshops and short courses on computational thinking for basic-education students in Rio Tinto, building apps in MIT App Inventor 2. The target was the thinking behind programming: breaking a problem apart, spotting patterns, abstracting, and assembling an algorithm. Teaching it is what forced me to actually understand what I thought I already knew.",
      },
      skills: ["MIT App Inventor 2", "Ensino"],
    },
  ] satisfies Role[] as Role[],
};

/* -------------------------------------------------------------------------- */
/*  Certificados                                                              */
/* -------------------------------------------------------------------------- */

export type Certificate = {
  title: string;
  issuer: string;
  /** Só monta a URL. O código não aparece na tela: ninguém lê um UUID. */
  code: string;
  url: string;
  date?: Bi;
};

export const certificates = {
  heading: { pt: "Certificados", en: "Certificates" } satisfies Bi,
  lede: {
    pt: "Cursos que fiz por fora da graduação. Cada um abre a credencial na Udemy.",
    en: "Courses I took outside my degree. Each one opens its credential on Udemy.",
  } satisfies Bi,
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
  ] satisfies Certificate[],
};

/* -------------------------------------------------------------------------- */
/*  Projetos                                                                  */
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
  /** Página de download, para o que se instala em vez de abrir no navegador. */
  download?: string;
  /** Ressalva sobre o endereço no ar, como demora de primeira carga. */
  liveNote?: Bi;
  /** Ainda em desenvolvimento: acende o mesmo marcador âmbar da experiência. */
  inProgress?: boolean;
  /**
   * Legenda opcional de cada captura, pelo nome do arquivo. As capturas em si
   * vêm sozinhas de src/assets/screens/<slug>/ e não precisam de cadastro aqui.
   */
  captions?: Record<string, Bi>;
};

const CODE: Bi = { pt: "Código", en: "Code" };
const FRONT: Bi = { pt: "Front-end", en: "Frontend" };
const BACK: Bi = { pt: "Back-end", en: "Backend" };

export const work = {
  heading: { pt: "Projetos", en: "Projects" } satisfies Bi,
  lede: {
    pt: "Os projetos que dizem mais sobre como eu trabalho, do mais recente ao mais antigo.",
    en: "The projects that say the most about how I work, newest first.",
  } satisfies Bi,
  all: { pt: "Todos os repositórios", en: "All repositories" } satisfies Bi,
  live: { pt: "No ar", en: "Live" } satisfies Bi,
  building: { pt: "Em construção", en: "In progress" } satisfies Bi,
  download: { pt: "Baixar", en: "Download" } satisfies Bi,
  projects: [    {
      slug: "ordo",
      captions: {
        "01-today-tasks.png": { pt: "Tarefas de hoje, com listas, atrasadas e hábitos", en: "Today's tasks, with lists, overdue items and habits" },
        "02-inbox-task-details.png": { pt: "Caixa de entrada com o detalhe da tarefa", en: "Inbox with the task details" },
        "03-next-7-days.png": { pt: "Tarefas dos próximos 7 dias", en: "Tasks for the next 7 days" },
        "04-kanban-board.png": { pt: "Lista em quadro kanban", en: "List as a kanban board" },
        "05-timeline.png": { pt: "Lista em linha do tempo", en: "List as a timeline" },
        "06-eisenhower-matrix.png": { pt: "Matriz de Eisenhower", en: "Eisenhower matrix" },
        "07-calendar-month.png": { pt: "Calendário por mês", en: "Monthly calendar" },
        "08-calendar-week.png": { pt: "Calendário por semana", en: "Weekly calendar" },
        "09-calendar-day.png": { pt: "Calendário por dia", en: "Daily calendar" },
        "10-calendar-agenda.png": { pt: "Calendário em formato de agenda", en: "Calendar as an agenda" },
        "11-calendar-year.png": { pt: "Calendário por ano", en: "Yearly calendar" },
        "12-habit-details.png": { pt: "Detalhe de um hábito", en: "Habit details" },
        "13-pomodoro-timer.png": { pt: "Temporizador Pomodoro", en: "Pomodoro timer" },
        "14-focus-timers.png": { pt: "Temporizadores de foco", en: "Focus timers" },
        "15-countdowns.png": { pt: "Contagens regressivas", en: "Countdowns" },
        "16-finance-entries.png": { pt: "Finanças: lançamentos do mês", en: "Finances: monthly entries" },
        "17-finance-cards.png": { pt: "Finanças: cartões, com fatura e parcelas", en: "Finances: cards, with statements and instalments" },
        "18-finance-recurring-bills.png": { pt: "Finanças: contas fixas", en: "Finances: recurring bills" },
        "19-finance-loans.png": { pt: "Finanças: empréstimos", en: "Finances: loans" },
        "20-finance-report.png": { pt: "Finanças: relatório do mês", en: "Finances: monthly report" },
        "21-finance-categories.png": { pt: "Finanças: categorias de gastos e receitas", en: "Finances: spending and income categories" },
        "22-diet-diary.png": { pt: "Diário de dieta", en: "Diet diary" },
        "23-taco-food-table.png": { pt: "Alimentos da tabela TACO", en: "Foods from the TACO table" },
        "24-journal-day.png": { pt: "Diário: humor, energia e notas do dia", en: "Journal: the day's mood, energy and notes" },
        "25-journal-timeline.png": { pt: "Diário: linha do tempo com os dias anteriores", en: "Journal: timeline of past days" },
        "26-journal-mood-calendar.png": { pt: "Diário: calendário e evolução de humor e energia", en: "Journal: calendar and trend of mood and energy" },
        "27-period-summary.png": { pt: "Resumo do período", en: "Period summary" },
        "28-statistics-overview.png": { pt: "Estatísticas gerais", en: "Overall statistics" },
        "29-task-statistics.png": { pt: "Estatísticas de tarefas", en: "Task statistics" },
        "30-task-search.png": { pt: "Busca de tarefas", en: "Task search" },
        "31-command-palette.png": { pt: "Paleta de comandos", en: "Command palette" },
        "32-appearance-settings.png": { pt: "Configurações de aparência", en: "Appearance settings" },
        "33-feature-settings.png": { pt: "Funcionalidades que podem ser ligadas", en: "Features that can be toggled" },
        "50-calendar-week-phone.png": { pt: "Calendário por semana (celular)", en: "Weekly calendar (phone)" },
        "51-eisenhower-matrix-phone.png": { pt: "Matriz de Eisenhower (celular)", en: "Eisenhower matrix (phone)" },
        "52-pomodoro-timer-phone.png": { pt: "Temporizador Pomodoro (celular)", en: "Pomodoro timer (phone)" },
        "53-finance-report-phone.png": { pt: "Finanças: relatório do mês (celular)", en: "Finances: monthly report (phone)" },
        "54-diet-diary-phone.png": { pt: "Diário de dieta (celular)", en: "Diet diary (phone)" },
        "55-journal-day-phone.png": { pt: "Diário: humor, energia e notas do dia (celular)", en: "Journal: the day's mood, energy and notes (phone)" },
      },
      year: "2026",
      title: { pt: "Ordo", en: "Ordo" },
      kind: { pt: "Projeto pessoal", en: "Personal project" },
      body: {
        pt: "App de produtividade para Windows e Android. Tarefas com áreas, sublistas e adição por linguagem natural, calendário, matriz de Eisenhower, Pomodoro, hábitos, finanças com cartão e parcela, dieta ligada à tabela TACO, diário e estatísticas. Roda sem conta, sem login e sem servidor: os dados ficam no aparelho, e a troca entre aparelhos vai por Wi-Fi ou backup. Testado com flutter_test e integration_test, nas mesmas camadas do código.",
        en: "A productivity app for Windows and Android. Tasks with areas, sublists and natural-language entry, a calendar, an Eisenhower matrix, Pomodoro, habits, finances with cards and instalments, diet wired to the Brazilian TACO food table, a diary, and statistics. It runs with no account, no login and no server: the data stays on the device, and moving between devices goes over Wi-Fi or a backup. Tested with flutter_test and integration_test, along the same layers as the code.",
      },
      stack: ["Flutter", "Dart", "Riverpod", "Drift", "SQLite"],
      repos: [],
      download: "https://github.com/FLucasF/Ordo/releases",
    },
    {
      slug: "ol-dcx",
      captions: {
        "01-catalogue.png": { pt: "Catálogo com busca e categorias", en: "Catalogue with search and categories" },
        "02-catalogue-filters.png": { pt: "Filtros do catálogo", en: "Catalogue filters" },
        "03-listing-page.png": { pt: "Página do anúncio", en: "Listing page" },
        "04-seller-profile.png": { pt: "Perfil de quem anuncia", en: "Seller profile" },
        "05-following-feed.png": { pt: "Feed de quem você segue", en: "Feed of people you follow" },
        "06-favourite-listings.png": { pt: "Anúncios favoritos", en: "Favourite listings" },
        "07-conversation-list.png": { pt: "Lista de conversas", en: "Conversation list" },
        "08-conversation.png": { pt: "Conversa entre quem vende e quem compra", en: "Chat between seller and buyer" },
        "09-notifications.png": { pt: "Avisos, sem nada novo", en: "Notifications, with nothing new" },
        "10-publish-listing.png": { pt: "Formulário para publicar um anúncio", en: "Form to publish a listing" },
        "11-my-listings.png": { pt: "Meus anúncios", en: "My listings" },
        "12-edit-listing.png": { pt: "Edição de anúncio", en: "Editing a listing" },
        "13-moderation-panel.png": { pt: "Painel de moderação, sem denúncias", en: "Moderation panel, with no reports" },
        "14-first-sign-in.png": { pt: "Primeiro acesso: escolha do nome", en: "First sign-in: choosing a name" },
        "15-sign-in.png": { pt: "Entrada com e-mail do departamento", en: "Sign-in with a department e-mail" },
        "50-catalogue-phone.png": { pt: "Catálogo (celular)", en: "Catalogue (phone)" },
        "51-listing-page-phone.png": { pt: "Página do anúncio (celular)", en: "Listing page (phone)" },
        "52-conversation-phone.png": { pt: "Conversa entre quem vende e quem compra (celular)", en: "Chat between seller and buyer (phone)" },
        "53-publish-listing-phone.png": { pt: "Formulário para publicar um anúncio (celular)", en: "Form to publish a listing (phone)" },
      },
      year: "2026",
      title: { pt: "OL DCX", en: "OL DCX" },
      kind: { pt: "Projeto pessoal", en: "Personal project" },
      body: {
        pt: "Classificados fechado para a comunidade do DCX, inspirado na OLX e sem pagamento dentro do site: doação, item usado, livro de disciplina, geladinho e brigadeiro. Substitui a lista de e-mails do Mercado DCX por um catálogo buscável com chat, e o acordo segue entre as pessoas. Comecei rápido e sem método, só para aprender a conduzir a IA, e recomecei com contrato para entender na prática o que um harness muda no desenvolvimento: hierarquia de autoridade entre os documentos, spec aprovada antes de qualquer código e dois agentes revisores separados de quem implementa.",
        en: "A classifieds board closed to the DCX community, modelled on OLX and with no payment inside the site: donations, used items, course books, ice pops and brigadeiros. It replaces the Mercado DCX mailing list with a searchable catalogue and chat, and the deal stays between the people involved. I started fast and without method, just to learn how to drive the AI, then started over with a contract to see first-hand what a harness changes in development: an authority hierarchy between documents, a spec approved before any code, and two review agents kept apart from the one that implements.",
      },
      stack: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Zod", "Tailwind CSS", "Playwright"],
      repos: [],
    },
    {
      slug: "coranil",
      captions: {
        "01-home-colour-chart.png": { pt: "Início, com a cartela de cores", en: "Home, with the colour chart" },
        "02-product-catalogue.png": { pt: "Catálogo de produtos", en: "Product catalogue" },
        "03-brands-in-stock.png": { pt: "Marcas em estoque", en: "Brands in stock" },
        "04-about-the-shop.png": { pt: "Sobre a loja", en: "About the shop" },
        "05-customer-reviews.png": { pt: "Avaliações de clientes", en: "Customer reviews" },
        "06-quote-request.png": { pt: "Pedido de orçamento pelo WhatsApp", en: "Quote request through WhatsApp" },
        "07-footer.png": { pt: "Rodapé com endereço e contatos", en: "Footer with address and contacts" },
        "50-home-colour-chart-phone.png": { pt: "Início, com a cartela de cores (celular)", en: "Home, with the colour chart (phone)" },
        "51-product-catalogue-phone.png": { pt: "Catálogo de produtos (celular)", en: "Product catalogue (phone)" },
        "52-quote-request-phone.png": { pt: "Pedido de orçamento pelo WhatsApp (celular)", en: "Quote request through WhatsApp (phone)" },
      },
      year: "2026",
      title: { pt: "Tintas Coranil", en: "Tintas Coranil" },
      kind: { pt: "Site para cliente", en: "Client website" },
      body: {
        pt: "Site de uma loja de tintas em João Pessoa que vende direto da fábrica. Catálogo de produtos e marcas, cartela de cores para escolher na tela e pedido de orçamento que sai pelo WhatsApp, que é por onde a loja atende de verdade.",
        en: "Website for a paint shop in João Pessoa that sells factory-direct. Product and brand catalogue, an on-screen colour chart, and a quote request that leaves through WhatsApp, which is how the shop actually takes orders.",
      },
      stack: ["React", "Vite", "Tailwind CSS"],
      repos: [],
      live: "https://flucasf.github.io/Loja-tinta/",
    },
    {
      slug: "nutriplan",
      captions: {
        "01-patient-list.png": { pt: "Lista de pacientes", en: "Patient list" },
        "02-patient-record.png": { pt: "Ficha do paciente", en: "Patient record" },
        "03-patient-anamneses.png": { pt: "Anamneses do paciente", en: "Patient anamneses" },
        "04-energy-calculation.png": { pt: "Cálculo energético", en: "Energy calculation" },
        "05-anthropometric-assessment.png": { pt: "Avaliação antropométrica", en: "Anthropometric assessment" },
        "06-lab-tests.png": { pt: "Exames e evolução", en: "Lab tests and progress" },
        "07-practice-schedule.png": { pt: "Agenda do consultório", en: "Practice schedule" },
        "08-prescription-list.png": { pt: "Lista de prescrições", en: "Prescription list" },
        "09-meal-plan-editor.png": { pt: "Editor de cardápio, com metas e nutrientes", en: "Meal plan editor, with targets and nutrients" },
        "10-food-database.png": { pt: "Acervo de alimentos", en: "Food database" },
        "11-food-details.png": { pt: "Detalhe de um alimento", en: "Food details" },
        "12-recipe-editor.png": { pt: "Editor de receita", en: "Recipe editor" },
        "13-patient-handouts.png": { pt: "Orientações ao paciente", en: "Patient handouts" },
        "14-questionnaire-templates.png": { pt: "Modelos de questionário", en: "Questionnaire templates" },
        "15-saved-meals-and-lab-panels.png": { pt: "Refeições salvas e painéis de exames favoritos", en: "Saved meals and favourite lab test panels" },
        "16-practice-finances.png": { pt: "Financeiro do consultório", en: "Practice finances" },
        "17-practice-statistics.png": { pt: "Estatísticas do consultório", en: "Practice statistics" },
        "18-partners-and-referrals.png": { pt: "Parceiros e relatório de indicações", en: "Partners and referral report" },
        "19-care-packages.png": { pt: "Pacotes de atendimento", en: "Care packages" },
        "20-practice-team.png": { pt: "Equipe do consultório", en: "Practice team" },
        "21-patient-meal-plan.png": { pt: "O plano como o paciente recebe", en: "The plan as the patient receives it" },
        "22-patient-questionnaire.png": { pt: "Questionário respondido pelo paciente", en: "Questionnaire answered by the patient" },
        "23-sign-in.png": { pt: "Tela de acesso", en: "Sign-in screen" },
        "24-sign-up.png": { pt: "Criação de conta", en: "Account creation" },
        "50-patient-list-phone.png": { pt: "Lista de pacientes (celular)", en: "Patient list (phone)" },
        "51-patient-record-phone.png": { pt: "Ficha do paciente (celular)", en: "Patient record (phone)" },
        "52-practice-schedule-phone.png": { pt: "Agenda do consultório (celular)", en: "Practice schedule (phone)" },
        "53-meal-plan-editor-phone.png": { pt: "Editor de cardápio (celular)", en: "Meal plan editor (phone)" },
        "54-patient-meal-plan-phone.png": { pt: "O plano como o paciente recebe (celular)", en: "The plan as the patient receives it (phone)" },
        "55-practice-finances-phone.png": { pt: "Financeiro do consultório (celular)", en: "Practice finances (phone)" },
      },
      year: "2026",
      title: { pt: "NutriPlan", en: "NutriPlan" },
      kind: {
        pt: "Projeto pessoal",
        en: "Personal project",
      },
      inProgress: true,
      body: {
        pt: "Sistema de gestão para consultório de nutrição: cadastro de paciente, agendamento, prontuário, montagem de plano alimentar e exportação em PDF. Autenticação por JWT e uma camada de domínio que não conhece a camada web. Construí com IA, mas sob método: requisitos, modelo de dados e cenários BDD escritos antes do código, testes de servidor com JUnit e Spring Boot Test, e Playwright cobrindo os fluxos de ponta a ponta.",
        en: "Practice-management system for a nutrition clinic: patient records, scheduling, charting, meal-plan building, and PDF export. JWT authentication, and a domain layer that knows nothing about the web layer. I built it with AI, but under method: requirements, data model, and BDD scenarios written before the code, server tests with JUnit and Spring Boot Test, and Playwright covering the flows end to end.",
      },
      stack: ["Java 21", "Spring Boot 3.4", "JWT", "React 18", "TypeScript", "Vite"],
      /* Sem link de código: o repositório do NutriPlan não é para mostrar. */
      repos: [],
      live: "https://nutri-o57k.onrender.com/",
      liveNote: {
        pt: "Hospedado em plano gratuito que hiberna sem uso. A primeira abertura leva cerca de um minuto enquanto o servidor sobe; depois disso responde normal.",
        en: "Hosted on a free tier that sleeps when idle. The first load takes about a minute while the server wakes up; after that it responds normally.",
      },
    },    {
      slug: "ayty",
      captions: {
        "01-login.png": { pt: "Tela de acesso", en: "Sign-in screen" },
        "02-registered-users.png": { pt: "Usuários cadastrados", en: "Registered users" },
        "03-user-registration.png": { pt: "Cadastro de usuário", en: "User registration" },
        "04-class-management.png": { pt: "Gerenciamento de turmas", en: "Class management" },
        "05-class-enrolment.png": { pt: "Matrículas de alunos na turma", en: "Student enrolment in a class" },
        "06-teacher-classes.png": { pt: "Turmas da professora", en: "The teacher's classes" },
        "07-class-details.png": { pt: "Turma, com os alunos matriculados", en: "Class, with enrolled students" },
        "08-class-board.png": { pt: "Mural da turma, com os avisos da professora", en: "Class board, with the teacher's notices" },
        "09-board-notice-opened.png": { pt: "Aviso do mural aberto", en: "Board notice opened" },
        "50-login-phone.png": { pt: "Tela de acesso (celular)", en: "Sign-in screen (phone)" },
        "51-class-management-phone.png": { pt: "Gerenciamento de turmas (celular)", en: "Class management (phone)" },
        "52-teacher-classes-phone.png": { pt: "Turmas da professora (celular)", en: "The teacher's classes (phone)" },
        "53-class-board-phone.png": { pt: "Mural da turma (celular)", en: "Class board (phone)" },
      },
      year: "2025",
      title: {
        pt: "Gerenciador Escolar AYTY",
        en: "AYTY School Manager",
      },
      kind: { pt: "Seleção do laboratório AYTY", en: "AYTY lab selection" },
      body: {
        pt: "Gestão de turmas, alunos e registros de uma escola. Construí a interface em Angular 19 com TypeScript e a API em Java, o que me obrigou a desenhar o contrato entre as duas antes de escrever qualquer tela. Foi com ele que passei na seleção do laboratório AYTY.",
        en: "Class, student, and record management for a school. I built the Angular 19 interface in TypeScript and the Java API, which forced me to design the contract between them before writing a single screen. It is the project that got me into the AYTY lab.",
      },
      stack: ["Angular 19", "TypeScript", "Java", "Spring Boot"],
      repos: [
        { label: FRONT, url: "https://github.com/FLucasF/AYTY_gerenciador-escolar-front" },
        { label: BACK, url: "https://github.com/FLucasF/AYTY_gerenciador-escolar-back" },
      ],
    },    {
      slug: "minio",
      year: "2025",
      title: {
        pt: "Armazenamento de arquivos com MinIO",
        en: "File storage with MinIO",
      },
      kind: { pt: "Apps4Society · UFPB", en: "Apps4Society · UFPB" },
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
    {
      slug: "embaralhado",
      captions: {
        "01-game-home.png": { pt: "Tela inicial do jogo", en: "Game home screen" },
        "02-word-contexts.png": { pt: "Escolha do contexto das palavras", en: "Choosing the word context" },
        "03-game-tutorial.png": { pt: "Tutorial do jogo", en: "Game tutorial" },
        "04-gameplay.png": { pt: "A partida: montar a palavra a partir da imagem", en: "Gameplay: building the word from the picture" },
        "05-correct-word.png": { pt: "Palavra montada corretamente", en: "Word built correctly" },
        "06-enter-name.png": { pt: "Nome para finalizar a partida", en: "Name to finish the game" },
        "07-final-score.png": { pt: "Fim da partida: todas certas e 5 estrelas", en: "End of the game: all correct and 5 stars" },
        "50-game-home-phone.png": { pt: "Tela inicial do jogo (celular)", en: "Game home screen (phone)" },
        "51-word-contexts-phone.png": { pt: "Escolha do contexto (celular)", en: "Choosing the context (phone)" },
        "52-gameplay-phone.png": { pt: "A partida: montar a palavra (celular)", en: "Gameplay: building the word (phone)" },
        "53-correct-word-phone.png": { pt: "Palavra montada corretamente (celular)", en: "Word built correctly (phone)" },
        "54-final-score-phone.png": { pt: "Fim da partida com 5 estrelas (celular)", en: "End of the game with 5 stars (phone)" },
      },
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
      captions: {
        "01-home.png": { pt: "Tela inicial", en: "Home screen" },
        "02-quiz-question.png": { pt: "Pergunta do quiz sobre segurança digital", en: "Quiz question on digital safety" },
        "03-quiz-result.png": { pt: "Resultado do quiz", en: "Quiz result" },
        "04-quiz-tutorial.png": { pt: "Tutorial do quiz", en: "Quiz tutorial" },
        "05-scam-tips.png": { pt: "Dicas e materiais sobre golpes", en: "Tips and resources on scams" },
        "06-project-team.png": { pt: "Quem fez o projeto", en: "The people behind the project" },
        "50-home-phone.png": { pt: "Tela inicial (celular)", en: "Home screen (phone)" },
        "51-quiz-question-phone.png": { pt: "Pergunta do quiz (celular)", en: "Quiz question (phone)" },
        "52-scam-tips-phone.png": { pt: "Dicas e materiais sobre golpes (celular)", en: "Tips and resources on scams (phone)" },
      },
      year: "2024",
      title: { pt: "Evite o Golpe", en: "Evite o Golpe" },
      kind: { pt: "Apps4Society · UFPB", en: "Apps4Society · UFPB" },
      body: {
        pt: "Aplicação que ensina a reconhecer golpes comuns antes de cair neles. O público não é técnico, então a tela precisou ser curta, grande e sem jargão. Foi o projeto que mais me ensinou sobre interface.",
        en: "An application that teaches people to recognise common scams before falling for one. The audience is non-technical, so the screen had to be short, large, and free of jargon. It taught me more about interface work than anything else.",
      },
      stack: ["React", "JavaScript", "Vite"],
      repos: [{ label: CODE, url: "https://github.com/FLucasF/EviteOgolpeWEB" }],
    },
  ] satisfies Project[] as Project[],
};

/* -------------------------------------------------------------------------- */
/*  Ferramentas                                                               */
/* -------------------------------------------------------------------------- */

export type ToolGroup = { title: Bi; items: string[] };

export const stack = {
  heading: { pt: "Ferramentas", en: "Tools" } satisfies Bi,
  /**
   * Dois blocos pela mesma divisão de camada: o que ele usa no dia a dia e o
   * que já rendeu projeto fora dele. O componente dá corpo menor ao
   * segundo, para a ordem de leitura sair sozinha.
   */
  blocks: [
    {
      title: { pt: "Uso no cotidiano", en: "Day to day" } satisfies Bi,
      groups: [
        {
          title: { pt: "Front-end", en: "Frontend" } satisfies Bi,
          items: ["Angular", "React", "TypeScript", "HTML", "CSS"],
        },
        {
          title: { pt: "Back-end", en: "Backend" } satisfies Bi,
          items: ["Java", "Spring Boot", "Spring Cloud", "Eureka", "Oracle SQL", "MongoDB", "Kafka", "Flyway"],
        },
        {
          title: { pt: "Gerais", en: "General" } satisfies Bi,
          items: ["Git", "GitLab", "Docker", "Maven", "Gradle", "JUnit", "Vitest", "Docusaurus"],
        },
      ] satisfies ToolGroup[],
    },
    {
      title: { pt: "Já usei em projetos", en: "Used in projects" } satisfies Bi,
      groups: [
        {
          title: { pt: "Front-end", en: "Frontend" } satisfies Bi,
          items: ["Flutter", "Dart", "Electron", "Next.js", "Astro", "Vite", "Tailwind CSS", "SCSS"],
        },
        {
          title: { pt: "Back-end", en: "Backend" } satisfies Bi,
          items: ["PHP", "Laravel", "Symfony", "PostgreSQL", "MySQL", "SQLite", "Prisma", "Javalin", "Thymeleaf", "MinIO"],
        },
        {
          title: { pt: "Gerais", en: "General" } satisfies Bi,
          items: ["GitHub", "Playwright", "Cypress", "Zod", "Python"],
        },
      ] satisfies ToolGroup[],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Livros                                                                    */
/* -------------------------------------------------------------------------- */

export type Book = {
  /** ISBN-10. Monta a URL de origem da capa. Rode `npm run covers` depois de acrescentar um. */
  isbn: string;
  /** Nome do arquivo em src/assets/books, em inglês e sem extensão: o título original do livro. */
  coverName: string;
  title: string;
  author: string;
};

export const books = {
  heading: { pt: "Livros lidos", en: "Books I have read" } satisfies Bi,
  items: [
    {
      isbn: "8582603371",
      coverName: "java-a-beginners-guide",
      title: "Java para Iniciantes",
      author: "Herbert Schildt",
    },
    {
      isbn: "8575225634",
      coverName: "grokking-algorithms",
      title: "Entendendo Algoritmos",
      author: "Aditya Y. Bhargava",
    },
  ] satisfies Book[],
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
    ],
    en: [
      "I study Computer Science at UFPB, Campus IV, in the interior of Paraíba, Brazil. I started programming in 2022, and what held me was the backend: modelling the domain properly, keeping the rules in one place, and not scattering logic across the screen.",
      "Much of what I have built began inside a university lab. At Apps4Society, which builds software for real community needs, I learned to think about interfaces differently: when your user is an older person learning to spot a scam, or a child learning words in an indigenous language, there is no room left for a confusing screen. Today I am at AYTY, the applied software engineering lab at Campus IV, on the Phoebus Tecnologia project.",
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

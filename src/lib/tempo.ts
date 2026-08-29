import type { Lang } from "../data/site";

/**
 * Duração de um período, calculada na build.
 *
 * A ideia é que nenhuma data escrita à mão precise ser atualizada: as entradas
 * guardam só o mês de início e o de fim, e o texto ("1 ano 5 meses") sai daqui.
 * Um cargo em andamento conta até o dia da build, e o workflow roda uma vez por
 * mês justamente para que esse número não fique parado no tempo.
 */

/** Mês no formato `AAAA-MM`. */
export type Mes = `${number}-${number}` | string;

const MESES = {
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
} as const;

function partes(mes: Mes): { ano: number; m: number } {
  const [ano, m] = mes.split("-").map(Number);
  return { ano, m };
}

/**
 * Quantidade de meses entre início e fim, contando os dois extremos — é assim
 * que o LinkedIn conta, e o site precisa bater com ele.
 */
export function contaMeses(inicio: Mes, fim?: Mes): number {
  const a = partes(inicio);
  const b = fim ? partes(fim) : hojeMes();
  return Math.max((b.ano - a.ano) * 12 + (b.m - a.m) + 1, 1);
}

function hojeMes(): { ano: number; m: number } {
  const agora = new Date();
  return { ano: agora.getFullYear(), m: agora.getMonth() + 1 };
}

/** "1 ano 5 meses", "9 meses", "1 yr 5 mos". */
export function duracao(inicio: Mes, fim: Mes | undefined, lang: Lang): string {
  const total = contaMeses(inicio, fim);
  const anos = Math.floor(total / 12);
  const meses = total % 12;

  const pedacos: string[] = [];

  if (lang === "pt") {
    if (anos) pedacos.push(`${anos} ${anos === 1 ? "ano" : "anos"}`);
    if (meses) pedacos.push(`${meses} ${meses === 1 ? "mês" : "meses"}`);
  } else {
    if (anos) pedacos.push(`${anos} ${anos === 1 ? "yr" : "yrs"}`);
    if (meses) pedacos.push(`${meses} ${meses === 1 ? "mo" : "mos"}`);
  }

  return pedacos.join(" ");
}

/** "abr de 2025 — o momento", "Aug 2024 — Apr 2025". */
export function periodo(inicio: Mes, fim: Mes | undefined, lang: Lang): string {
  const rotulo = (mes: Mes) => {
    const { ano, m } = partes(mes);
    const nome = MESES[lang][m - 1];
    return lang === "pt" ? `${nome} de ${ano}` : `${nome} ${ano}`;
  };

  const agora = lang === "pt" ? "o momento" : "present";
  return `${rotulo(inicio)} — ${fim ? rotulo(fim) : agora}`;
}

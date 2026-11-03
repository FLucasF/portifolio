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
export type Month = `${number}-${number}` | string;

const MONTHS = {
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
} as const;

function parseMonth(month: Month): { year: number; m: number } {
  const [year, m] = month.split("-").map(Number);
  return { year, m };
}

/**
 * Quantidade de meses entre início e fim, contando os dois extremos — é assim
 * que o LinkedIn conta, e o site precisa bater com ele.
 */
export function countMonths(start: Month, end?: Month): number {
  const a = parseMonth(start);
  const b = end ? parseMonth(end) : currentMonth();
  return Math.max((b.year - a.year) * 12 + (b.m - a.m) + 1, 1);
}

function currentMonth(): { year: number; m: number } {
  const now = new Date();
  return { year: now.getFullYear(), m: now.getMonth() + 1 };
}

/** "1 ano 5 meses", "9 meses", "1 yr 5 mos". */
export function duration(start: Month, end: Month | undefined, lang: Lang): string {
  const total = countMonths(start, end);
  const years = Math.floor(total / 12);
  const months = total % 12;

  const parts: string[] = [];

  if (lang === "pt") {
    if (years) parts.push(`${years} ${years === 1 ? "ano" : "anos"}`);
    if (months) parts.push(`${months} ${months === 1 ? "mês" : "meses"}`);
  } else {
    if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
    if (months) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  }

  return parts.join(" ");
}

/** "abr de 2025 — o momento", "Aug 2024 — Apr 2025". */
export function period(start: Month, end: Month | undefined, lang: Lang): string {
  const label = (month: Month) => {
    const { year, m } = parseMonth(month);
    const name = MONTHS[lang][m - 1];
    return lang === "pt" ? `${name} de ${year}` : `${name} ${year}`;
  };

  const now = lang === "pt" ? "o momento" : "present";
  return `${label(start)} — ${end ? label(end) : now}`;
}

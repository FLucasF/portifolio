// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

/**
 * O endereço final e o prefixo de caminho vêm do ambiente, então o mesmo
 * projeto publica tanto em flucasf.github.io (raiz) quanto em
 * flucasf.github.io/portfolio (subpasta). Veja o README.
 */
const site = process.env.SITE_URL ?? "https://flucasf.github.io";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

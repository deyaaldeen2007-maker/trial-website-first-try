import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg)",
        text: "var(--text)",
        muted: "var(--muted)",
        line: "var(--border)",
        accent: "var(--accent)",
        tag: "var(--tag-bg)",
        paper: "var(--paper)",
      },
      fontFamily: {
        display: ["var(--font-display)", ...defaultTheme.fontFamily.serif],
        body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        editorial: "46rem",
      },
      spacing: {
        gutter: "var(--page-gutter)",
        section: "var(--section-space)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--text)",
            maxWidth: "none",
            a: {
              color: "var(--accent)",
            },
            h1: {
              fontFamily: "var(--font-display)",
            },
            h2: {
              fontFamily: "var(--font-display)",
            },
            h3: {
              fontFamily: "var(--font-display)",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;

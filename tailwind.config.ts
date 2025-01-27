import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        widget: "var(--widget)",

        white: "var(--white)",

        "black-18": "var(--black-18)",
        "black-21": "var(--black-21)",
        "black-23": "var(--black-23)",

        "grey-28": "var(--grey-28)",
        "grey-204": "var(--grey-204)",
        "grey-225": "var(--grey-225)",
        "middle-grey": "var(--middle-grey)",

        /* Main Colors */
        "violet-dark-hover": "var(--violet-dark-hover)",
        "violet-saturated": "var(--violet-saturated)",
      },
      fontSize: {
        h2: "var(--font-size-h2)",
        l: "var(--font-size-l)",
        body: "var(--font-size-body)",
      },
      keyframes: {
        "paginator-button-fill": {
          "0%": { width: "5%" },
          "1%": { width: "10%" },
          "99%": { width: "90%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "paginator-button-fill": "paginator-button-fill 2s ease-in-out",
      },
      boxShadow: {
        default: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;

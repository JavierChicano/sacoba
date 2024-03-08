import type { Config } from "tailwindcss";
// @ts-ignore
import animations from '@midudev/tailwind-animations'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        fondo: "var(--fondo)",
        fondoSecundario: "var(--fondo-secundario)",
        colorBase: "var(--color-base)",
        colorBaseSecundario: "var(--color-secundario)",
        contraste: "var(--ccontraste)",
      },
    },
  },
  plugins: [animations],
};
export default config;

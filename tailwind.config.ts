import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { yellow: "#FADD05", teal: "#101B21" },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
        arial: ["Arial", "Helvetica", "Liberation Sans", "sans-serif"],
      },
      maxWidth: { shell: "1500px" },
    },
  },
  plugins: [],
};
export default config;

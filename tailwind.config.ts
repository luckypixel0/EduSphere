import type { Config } from "tailwindcss";

const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { ink: "#172036", brand: "#4f46e5", mint: "#ecfdf5" }, boxShadow: { card: "0 10px 35px rgba(23,32,54,.07)" } } }, plugins: [] };
export default config;

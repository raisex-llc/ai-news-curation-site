// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md}"],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/line-clamp'), // ← これを削除
  ],
  safelist: [
  'top-[6rem]',
  'z-[9999]',
],
};

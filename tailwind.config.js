/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui:{
    themes: false,
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require(getDaisyUI())],
};
function getDaisyUI() {
  return "daisyui";
}

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
  plugins: [
    require(getDaisyUI()),
    function ({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '50%'
        }
      })
    }
  ],
};
function getDaisyUI() {
  return "daisyui";
}

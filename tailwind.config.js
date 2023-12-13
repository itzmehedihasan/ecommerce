/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //   fonts list ========================
      fontFamily: {
        'dm' : 'DM Sans',
      },

      //   fonts size list ===================
      fontSize: {
        '39' : '39px',
        '49' : '49px',
      },

      //   spacing list ======================
      spacing: {
        '870': '870px',
      },

      //   colors list =======================
      colors: {
        'off-white': '#FAF9F6',
        'ash': '#F5F5F3',
        'halfBlack': '#767676',
      },

      //   maxWidth list =======================
      maxWidth: {
        'container': '1604px',
      },

      //   width(percentage) list ============
      width: {
        '48': '48%',
      },
    },
  },
  plugins: [],
}


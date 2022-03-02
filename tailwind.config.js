module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'menu-bg': "url('../public/images/menu.jpeg')",
      },
      gridTemplateColumns: {
        blogsList: '2fr 3.5fr 2.5fr',
        mdBlogList: '2fr 1fr'
      }
    },
  },
  plugins: [],
};

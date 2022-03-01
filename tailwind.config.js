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
        blogsList: '1fr 3fr 2fr',
        mdBlogList: '2fr 1fr'
      }
    },
  },
  plugins: [],
};

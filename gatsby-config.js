module.exports = {
  siteMetadata: {
    title: "ike.works web development"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        pathToTheme: "src/themes/default"
      }
    }
  ]
};

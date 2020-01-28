module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/home.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Ariel and Phebe'
    },
    social: {
      // entry for the page
      entry: 'src/social.js',
      // the source template
      template: 'public/social.html',
      // output as dist/index.html
      filename: 'social.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Ariel and Phebe'
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
const path = require("path")

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: { react: path.resolve("./node_modules/react") },
    },
  })
}
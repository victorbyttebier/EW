const path = require("path");
const merge = require("webpack-merge");
const parts = require("./webpack.parts");

//const port = 3000;

const PATHS = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist")
};

const commonConfig = merge([
  {
    entry: [path.join(PATHS.src, "js/script.js"), path.join(PATHS.src, "js/shuffle.js")],
    output: {
      path: PATHS.dist,
      filename: `js/script.[hash].js`
    },
    module: {
      rules: [
        {
          test: /\.(jsx?)$/,
          exclude: /node_modules/,
          use:[`babel-loader`, `eslint-loader`]
        }
      ]
    },
    plugins: []
  }
]);

const productionConfig = merge([
  parts.extractCSS(),
  {
    plugins: []
  }
]);

const developmentConfig = merge([
  {
    devServer: {
      overlay: true,
      contentBase: PATHS.src
    }
  },
  parts.loadCSS(),
]);

module.exports = env => {
  if (process.env.NODE_ENV === "production") {
    console.log("building production");
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const merge = require("webpack-merge");
const parts = require("./webpack.parts");

const PATHS = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist")
};

const commonConfig = merge([
  {
    entry: [path.join(PATHS.src, "css/style.css"), path.join(PATHS.src, "js/shuffle.js")],
    output: {
      path: PATHS.dist, filename: `js/script.[hash].js`,
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: `html-loader`,
          options: {
            attrs: [
              `img:src`,
              `source:srcset`
            ]
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg|webp)$/,
          use: [
            {
              loader: `file-loader`,
              options: {
                limit: 1000,
                context: `./src`,
                name: `[path][name].[ext]`
              }
            }
          ]
        },
        {
          test: /\.(jsx?)$/,
          exclude: /node_modules/,
          use:[`babel-loader`, `eslint-loader`]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
    ]
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

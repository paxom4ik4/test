const path = require("path")

module.exports = (env) => {
  const modules = {
    js: {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "ts-loader",
        },
      ],
    },
    stylus: {
      test: /\.styl$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
        {
          loader: "stylus-loader",
          options: {
            import: [
              path.resolve(__dirname, 'src/Common/Styles/variables.styl'),
            ],
          }
        },
      ],
    },
  }

  if (env === 'production') {
    modules.stylus.use.splice(2, 0, { loader: "postcss-loader" })
  }

  const resolve = {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  }

  return {
    modules,
    resolve,
  }
}
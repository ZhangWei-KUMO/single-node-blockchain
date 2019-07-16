const webpack = require("webpack");
const withCSS = require("@zeit/next-css");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");


if (typeof require !== "undefined") {
  require.extensions[".css"] = () => { };
}
module.exports = withCSS({
  webpack(config, options) {
    config.plugins.push(new FilterWarningsPlugin({ exclude: /mini-css-extract-plugin[^]*Conflicting order between:/ }));
    config.module.rules.push(
      {
        test: /\.md$/,
        use: "raw-loader"
      }
    );
    return config;
  }
});
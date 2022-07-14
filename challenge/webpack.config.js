const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src", "index.jsx"),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, "src"),
				use: ["babel-loader"]
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".css", ".scss"],
		modules: ["node_modules"]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		clean: true
	},
	devServer: {
		static: path.join(__dirname, "dist")
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
			inject: true,
			filename: "index.html"
		})
	]
};

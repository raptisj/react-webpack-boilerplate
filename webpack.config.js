const HTMLWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
	mode: 'development',
	entry: join(__dirname, 'src/index.js'),
	output: {
		path: join(__dirname, 'build'),
		filename: 'app.bundler.js'
	},
	devServer: {
		port: 3000,
		hot: true,
		open: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			},
			{
				test: /\.(scss|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HotModuleReplacementPlugin(),
		new HTMLWebpackPlugin({
			title: 'React and Webpack Starter Boilerplate',
			template: join(__dirname, 'public/index.html'),
			cache: true,
			showErrors: true
		})
	]
};

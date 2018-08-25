const path = require('path')

module.exports = {
  mode: 'development',
	entry: [
		'./app/main.js'
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './public')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /(node_modules|server)/
			}
		]
	}
};

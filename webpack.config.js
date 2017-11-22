const path = require('path')

module.exports = {
	entry: [
		'./app/main.js'
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './public')
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};

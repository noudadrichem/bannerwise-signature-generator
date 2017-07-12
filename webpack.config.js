module.exports = {
	output: {
		filename: './bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
        }, {
			test: /\.json$/,
			loader: 'json-loader'
    }, {
			test: /\.html$/,
			loader: 'html-loader',
			options: {
				minimize: true
			}
		}, {
			test: /\.handlebars$/,
			loader: "handlebars-loader"
		}]
	}
}

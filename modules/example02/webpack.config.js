var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var JS_SOURCE_PATH = path.resolve(__dirname, 'src/main/resources/META-INF/resources/js')
var JS_TARGET_PATH = path.resolve(__dirname, 'build/js')
var MODULE_PATH = '/o/example02/js/'
var MODULE_NAME = 'example02'

var config = {
	entry: [
		path.resolve(JS_SOURCE_PATH, 'main.js')
	],
	output: {
		filename: MODULE_NAME + '.js',
		path: JS_TARGET_PATH,
		library: MODULE_NAME,
		libraryTarget: 'amd'
	},
	resolve: {
		extensions: ['.js', '.vue', '.properties']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.properties$/,
				loader: 'json-loader!java-properties-loader'
			},
		]
	},
	externals: ['vue']
}

module.exports = config

/*
var devConfig = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000'
	],
	output: {
		publicPath: '/'
	},
	devServer: {
		hot: true,
		overlay: true,
		publicPath: '/',
		port: 3000,
		proxy: {
			'**': {
				target: 'http://localhost:8080',
				bypass: function(req, res, proxyOptions) {
					if (req.url.match('/combo/.*?' + MODULE_PATH + MODULE_NAME + '.js')) {
						return '/' + MODULE_NAME + '.js'
					}
				}
			}
		}
	},
	devtool: 'cheap-module-eval-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrorsPlugin()
	]
}

var prodConfig = {
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true
			},
			comments: false
		})
	]
}

module.exports = function(env) {
	if (env && env.production) {
		// production mode
		return merge(baseConfig, prodConfig)
	} else {
		// development mode
		return merge.strategy({ entry: 'prepend' })(baseConfig, devConfig)
	}
}
*/

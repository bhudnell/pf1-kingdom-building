const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html',
});

const cleanWebpackPlugin = new CleanWebpackPlugin();

const extractCssChunksPlugin = new ExtractCssChunksPlugin({
	filename: '[name].[hash].css',
	chunkFilename: '[id].[hash].css',
});

const copyPlugin = new CopyPlugin({
	patterns: [
		{
			from: path.resolve(__dirname, 'src', 'assets'),
			to: path.resolve(__dirname, 'build', 'assets'),
		},
	],
});

const compressionPlugin = new CompressionPlugin({
	test: /\.js(\?.*)?$/i,
});

// const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();

module.exports = {
	mode: 'production',
	entry: './src/main.tsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contenthash].bundle.js',
		chunkFilename: '[name].[contenthash].chunk.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	optimization: {
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: ExtractCssChunksPlugin.loader,
						options: {
							hmr: false,
						},
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		cleanWebpackPlugin,
		htmlPlugin,
		extractCssChunksPlugin,
		copyPlugin,
		compressionPlugin,
		// bundleAnalyzerPlugin
	],
};

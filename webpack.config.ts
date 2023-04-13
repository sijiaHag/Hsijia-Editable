import { Configuration } from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPluin from 'terser-webpack-plugin';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const config: Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPluin()],
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },{
      test: /\.(ts | js | tsx | jsx)$/i,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],          
        }
      }
    },{
      test: /\.tsx$/i,
      exclude: /node_modules/,
      use: ['ts-loader'],
    }]
  },
  plugins: [new HtmlWebpackPlugin(), new BundleAnalyzerPlugin()],
};

export default config;
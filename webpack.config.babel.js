import { DefinePlugin, optimize } from 'webpack'
import { resolve } from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import BabiliPlugin from 'babili-webpack-plugin'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
const { ModuleConcatenationPlugin } = optimize

// exposed environemnt
const env = {
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
  }
}

const postCSSOptions = {
  sourceMap: process.env.NODE_ENV !== 'production',
  'plugins': [
    require('postcss-import'),
    require('postcss-import'),
    require('postcss-cssnext')
  ]
}

if (process.env.NODE_ENV === 'production') {
  postCSSOptions.plugins.push(require('postcss-clean'))
}

const config = {
  entry: {
    app: [
      './src/index'
    ]
  },
  output: {
    path: resolve(__dirname, './public/build'), // YOUR OUTPUT LOCATION
    publicPath: '/build/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        use: [
          {loader: 'babel-loader'}
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader',
              options: postCSSOptions
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 4
              },
              pngquant: {
                quality: '75-90',
                speed: 3
              }
            }
          }
        ]

      },
      {
        test: /\.((woof|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new DefinePlugin(env),
    new ExtractTextPlugin('[name].css')
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new ModuleConcatenationPlugin())
  config.plugins.push(new BabiliPlugin({}, {comments: false}))
} else {
  config.devtool = 'source-map'
}

export default config

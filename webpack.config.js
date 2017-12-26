
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.html$/,
        use:[ 
          {
            loader:'html-loader'
          },
          {
            loader:'html-withimg-loader'
          }
        ]
      },
      {
        test: /\.tpl$/,
        loader:'ejs-loader'
      },
      {
        test: /\.css$/,
        use:[ 
          {
            loader:'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader:'postcss-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use:[ 
          {
            loader:'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader:'postcss-loader'
          },
          {
            loader:"sass-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        // use: "file-loader?name=[name].[ext]&outputPath=images/"
        use:[
          {
            loader:'url-loader',
            options:{
              limit:10000,
              name:'images/[name]-[hash:5].[ext]',
            }
          },
          // {
          //  loader: 'img-loader'
          //  // loader:'image-webpack-loader' 
          // }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ])
}

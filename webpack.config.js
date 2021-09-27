const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    },
    liveReload: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',

    }),
    new WebpackPwaManifest({
      name: 'Pettagram - Tu app social de mascotas',
      short_name: 'Petgram',
      description: 'Con Petgram puedes encontrar y subir fotos de animales domésticos.',
      background_color: '#ffffff',
      theme_color: '#2196f3',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/img/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],// multiple sizes
          purpose: 'maskable' 
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
              '@babel/preset-react']
          }
        }
      }
    ]
  }
}

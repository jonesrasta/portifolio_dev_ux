module.exports = {
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.(pdf)(\?.*)?$/,
            use: [
              {
                loader: './src/assets/cv.pdf',
                options: {
                  name: 'files/[cv].[hash:8].[pdf]'
                }
              }
            ]
          }
        ]
      }
    }
  }
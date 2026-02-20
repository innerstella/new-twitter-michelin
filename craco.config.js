module.exports = {
  style: {
    postcss: {
      plugins: [
        require('postcss-preset-env')({
          stage: 3,
          features: {
            'nesting-rules': true
          }
        })
      ]
    }
  }
}

const path = require('path')
module.exports = {
    reactStrictMode: true,
    sassOptions: {
        sourceMap: false,
        includePaths: [path.join(__dirname, 'src/styles')],
        outputStyle: 'compressed'
    },
}
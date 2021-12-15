// module.exports = {
//     chainWebpack: config => {
//         config
//           .plugin('html')
//           .tap(args => {
//             args[0].title= '你想设置的title名字'
//             return args
//           })
//       }
// }
const webpack = require("webpack");
module.exports = {
    productionSourceMap:false,
	chainWebpack: config => {
        config.plugin('chunkPlugin').use(webpack.optimize.LimitChunkCountPlugin,[{
                maxChunks:2, // 必须大于或等于 1
                minChunkSize: 10000
            }])
    }
}

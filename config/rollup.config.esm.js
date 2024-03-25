// rollup.config.js
// ES output
const common = require('./rollup.js');

module.exports = {
    input: 'src/index.' + common.type,
    output: {
        file: `${common.outDir}/index.esm.js`,
        format: 'es',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        banner: common.banner,
    },
    plugins: [
        common.getCompiler()
    ]
};

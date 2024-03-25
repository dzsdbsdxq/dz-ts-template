// rollup.config.js
// commonjs
const common = require('./rollup.js');

module.exports = {
    input: 'src/index.' + common.type,
    output: {
        file: `${common.outDir}/index.js`,
        format: 'cjs',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        banner: common.banner,
    },
    plugins: [
        common.getCompiler({
            tsconfigOverride: { compilerOptions : { declaration: true, module: 'ES2015' } },
            useTsconfigDeclarationDir: true
        })
    ]
};

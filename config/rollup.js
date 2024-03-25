const typescript = require('rollup-plugin-typescript2');
const babel = require('rollup-plugin-babel');

const pkg = require('../package.json');

const outDir = "build";

const name = (pkg.name + '').replace(/-\D/g,

function (match) {
    return match.charAt(1).toUpperCase();
});
const version = pkg.version;

const banner =
    `/*!
 * ${pkg.name} ${version} (https://git.sztv.com.cn/1sz/ysz-sdk-utils)
 * API https://git.sztv.com.cn/1sz/ysz-sdk-utils/blob/master/doc/api.md
 * Copyright 2024-${(new Date).getFullYear()} ShoujieLi. All Rights Reserved
 * Licensed under MIT (https://git.sztv.com.cn/1sz/ysz-sdk-utils/blob/master/LICENSE)
 */
`;

const type = pkg.srctype === 'ts' ? 'ts' : 'js';

function getCompiler(opt) {
    if (type === 'js') {
        return babel({
            babelrc: false,
            presets: [
                [
                    '@babel/preset-env',
                    {
                        'targets': {
                            'browsers': 'last 2 versions, > 1%, ie >= 6, Android >= 4, iOS >= 6, and_uc > 9',
                            'node': '0.10'
                        },
                        'modules': false,
                        'loose': false
                    }
                ]
            ],
            plugins: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        'helpers': false,
                        'regenerator': false
                    }
                ]
            ],
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        });
    }

    opt = opt || {
        tsconfigOverride: {compilerOptions: {module: 'ES2015'}}
    };

    return typescript(opt);
}

exports.type = type;
exports.name = name;
exports.banner = banner;
exports.outDir = outDir;
exports.getCompiler = getCompiler;

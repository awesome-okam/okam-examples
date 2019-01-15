/**
 * @file Build mini program base config
 * @author <author>
 */

'use strict';

const path = require('path');
const rider = require('rider');

const DEV_SERVER_PORT = 9090;

module.exports = {
    verbose: false,
    root: path.join(__dirname, '..'),
    output: {
        dir: 'dist',
        depDir: 'src/common'
    },
    component: {
        extname: 'vue',
        template: {
            transformTags: {
                div: 'view',
                p: 'view',
                a: {
                    tag: 'navigator',
                    href: 'url'
                },
                img: 'image'
            }
        }
    },
    framework: [
        'ref', 'broadcast', 'data', 'watch', 'filter', 'behavior'
    ],
    designWidth: 375,
    processors: {
        babel7: {
            extnames: ['js']
        },
        stylus: {
            options: {
                use(style) {
                    style.use(rider());
                }
            }
        },
        postcss: {
            extnames: ['styl'],
            options: {
                plugins: ['px2rpx', 'env']
            }
        }
    },

    server: { // 启用开发 Server
        port: DEV_SERVER_PORT,
        // 需要安装 mock 中间件 npm i autoresponse --save-dev
        middlewares: [
            // name: 'autoresponse',
            // options: {
            // }
        ]
    },

    dev: {
        rules: [
            {
                match: '*.js',
                processors: [
                    ['replacement', {
                        'process.env.NODE_ENV': '"production"'
                    }]
                ]
            },
            {
                match: /\.(png|jpe?g|gif)(\?.*)?$/,
                processors: {
                    tinyimg: {
                        replaceRaw: true
                    }
                }
            }
            // {
            //     match: 'src/**/*.js',
            //     processors: [
            //         ['replacement', {
            //             'https://online.com': '${devServer}',
            //         }]
            //     ]
            // }
        ]
    }
};

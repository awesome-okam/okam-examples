/**
 * @file Build weixin mini program build config
 * @author <author>
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    output: {
        dir: 'wx_dist'
    },

    localPolyfill: [
        'async'
    ],

    dev: {
        processors: {
            postcss: {
                options: {
                    plugins: [
                        ['postcss-url', {url: 'inline'}]
                    ]
                }
            },
            filter: {
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    }
});

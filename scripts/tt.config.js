/**
 * @file Build toutiao mini program config
 * @author xxx
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    output: {
        dir: 'tt_dist',
        depDir: 'src/common'
    },

    localPolyfill: ['async'],

    dev: {
        processors: {
            postcss: {
                options: {
                    plugins: [
                        ['postcss-url', {url: 'inline'}]
                    ]
                }
            }
        }
    }
});

/**
 * @file Build swan smart program build config
 * @author <author>
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    output: {
        dir: 'swan_dist'
    },
    polyfill: ['async']
});

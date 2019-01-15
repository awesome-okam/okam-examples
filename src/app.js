/**
 * @file The app entrance
 * @author xxx
 */

'use strict';

/* eslint-disable fecs-camelcase */

export default {
    config: {
        pages: [
            'pages/home/index'
        ],

        window: {
            navigationBarBackgroundColor: '#211E2E',
            navigationBarTextStyle: 'white',
            navigationBarTitleText: 'Okam'
            // backgroundColor: '#211E2E', // 微信是设置的下拉的背景色，而非页面背景色
        },

        networkTimeout: {
            request: 30000
        },

        _quickEnv: {
            networkTimeout: null,
            package: 'com.okam.examples',
            name: 'okam-quick-examples',
            versionCode: '1',
            icon: '/common/img/okam.png'
        }
    },

    onLaunch() {
        console.log('show onLaunch...');
    },

    // onShow/onHide 快应用不支持
    // onShow() {
    //     console.log('show app...');
    // },

    // onHide() {
    //     console.log('hide app...');
    // },

    onError(e) {
        console.error('app error happen', e);
    }
};

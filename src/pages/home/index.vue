<template>
    <view class="home-wrap">
        <view class="banner">
            <image class="banner-logo" src="../../common/img/okam.png"></image>
            <text class="banner-desc">Okam 小程序开发框架示例</text>
        </view>
        <view for="item, index in items" :key="item.name" :class="['list-group', index === items.length - 1 ? 'list-group-last' : '']">
            <view class="list-group-title {{item.open ? '' : 'list-group-close'}}" @click="toggleClick(index, item.path)">
                <image class="title-icon" :src="item.icon"></image>
                <text class="title-desc">{{item.name}}</text>
                <image if="item.path" class="op-icon" src="../../common/img/goto.png"></image>
                <image else class="op-icon" :src="item.open ? '../../common/img/close.png' : '../../common/img/open.png'"></image>
            </view>
            <view class="list-group-content" if="item.open">
                <view class="content-item" for="subItem in item.list" :key="subItem.subName" @click="oneItemClick(subItem.path)">
                    <text class="content-item-desc">{{subItem.subName}}</text>
                    <image class="op-icon" src="../../common/img/goto.png"></image>
                </view>
            </view>
        </view>
    </view>
</template>
<script>

export default {
    config: {
        title: 'OKAM 开发框架示例'
    },

    data: {
        items: [
            {
                icon: '../../common/img/js.png',
                name: '语言',
                open: false,
                list: [
                    {
                        subName: 'typescript',
                        path: 'typescript/ts'
                    }
                ]
            },
            {
                name: '模板',
                icon: '../../common/img/template.png',
                open: false,
                list: [
                    {
                        subName: '模板语法',
                        path: 'tpl/tplSyntax'
                    },
                    {
                        subName: '模板复用',
                        path: 'tpl/tplReuse'
                    },
                    {
                        subName: 'ref 属性支持',
                        path: 'tpl/ref'
                    },
                    {
                        subName: 'filter 支持',
                        path: 'filter/index'
                    },
                    {
                        subName: '其他模板引擎',
                        path: 'tpl/tplPug'
                    },
                    {
                        subName: 'v- 前缀支持',
                        path: 'tpl/vueSyntax'
                    }
                ]
            },
            {
                name: '组件',
                icon: '../../common/img/component.png',
                open: false,
                list: [
                    {
                        subName: '自定义组件',
                        path: 'component/componentPage'
                    },
                    {
                        subName: 'Canvas组件',
                        path: 'component/canvas'
                    },
                    {
                        subName: '生命周期',
                        path: 'lifecycle/index'
                    },
                    {
                        subName: 'Behavior支持',
                        path: 'behavior/index'
                    },
                    {
                        subName: '广播支持',
                        path: 'broadcast/index'
                    }
                ]
            },
            {
                name: '数据操作',
                icon: '../../common/img/data.png',
                open: false,
                list: [
                    {
                        subName: '使用 function 初始化',
                        path: 'data/init'
                    },
                    {
                        subName: '数组操作',
                        path: 'data/array'
                    },
                    {
                        subName: '计算属性',
                        path: 'data/computed'
                    },
                    {
                        subName: 'watch属性',
                        path: 'data/watch'
                    },
                    {
                        subName: 'redux状态管理',
                        path: 'todos/todoList'
                    },
                    {
                        subName: 'v-model属性',
                        path: 'data/model'
                    }
                ]
            },
            {
                icon: '../../common/img/more.png',
                name: '其它',
                open: false,
                list: [
                    {
                        subName: '单文件引入',
                        path: 'sfc/index'
                    },
                    {
                        subName: '单文件分开引入',
                        path: 'sfc/separate'
                    }
                ]
            }
        ]
    },

    mounted() {
        this.$api.showToast({
            title: 'Page Mounted'
        });
    },

    methods: {

        oneItemClick(viewPath) {
            this.$api.navigateTo({
                url: '/pages/' + viewPath
            });
        },

        toggleClick(index, navPath) {
            // 无子项直接跳转
            if (navPath) {
                this.$api.navigateTo({
                    url: '/pages/' + navPath
                });
                return;
            }

            // 子项展开与收起
            let items = this.items;
            let newItem = Object.assign({}, items[index]);
            newItem.open = !newItem.open;
            this.items.splice(index, 1, newItem);
        }
    }
};
</script>
<style lang="stylus">
.home-wrap
    display: flex
    flex-direction: column
    font-size: 14px

.banner
    height: 150px
    padding: 0 15px 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    background-color: #fff

.banner-logo
    width: 80px
    height: @width

.banner-desc
    text-align: center
    color: #999
    margin-top: 20px
    line-height: 20px
    font-size: 16px

.list-group
    display: flex
    flex-direction: column
    border-top: 7px solid #f5f5f5
    background: #fff

    .op-icon
        margin-right: 10px
        width: 30px
        height: @width

.list-group-last
    border-bottom: 7px solid #f5f5f5

.list-group-title
    padding: 10px 5px 10px
    display: flex
    align-items: center

    .title-icon
        width: 30px
        height: @width

    .title-desc
        flex: 1
        margin-left: 20px
        font-size: 16px
        font-weight: 600

.list-group-content
    display: flex
    flex-direction: column

    .content-item
        display: flex
        align-items: center
        margin-left: 15px
        padding: 10px 0

    .content-item-desc
        flex: 1
        color: #666
        font-size: 16px

</style>

<template>
    <view class="vuex-wrap">
        <text class="count-info">Double count: {{doubleCount}}</text>
        <counter></counter>
    </view>
</template>
<script>
import {mapState} from 'vuex';
import Counter from '../../components/vuex/Counter';

export default {
    config: {
        title: 'Vuex 支持'
    },

    components: {
        Counter
    },

    computed: {
        doubleCount() {
            return this.count * 2;
        },
        ...mapState(['count'])
    },

    methods: {
    }
};
</script>
<style lang="stylus">
.vuex-wrap
    display: flex
    flex-direction: column
    align-items: center
    padding: 20px
    .count-info
        font-size: 20px
        font-weigth: 600
</style>

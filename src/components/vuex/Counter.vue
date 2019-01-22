<template>
    <div class="counter-wrap">
        <text class="op-tip">Clicked: {{ count }} times, count is {{ evenOrOdd }}.</text>
        <button class="op-btn" @click="increment">+</button>
        <button class="op-btn" @click="decrement">-</button>
        <button class="op-btn" @click="incrementIfOdd">Increment if odd</button>
        <button class="op-btn" @click="incrementAsync">Increment async</button>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    computed: {
        count() {
            return this.$store.state.count;
        },
        ...mapGetters([
            'evenOrOdd'
        ])
    },

    methods: mapActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
    ])
};
</script>

<style lang="stylus">
.counter-wrap
    display: flex
    flex-direction: column

    .op-tip
        font-size: 16px

    .op-btn
        margin: 10px 0
        font-size: 16px
</style>

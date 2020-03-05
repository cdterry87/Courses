<template>
    <div>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Stock from './Stock.vue'

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            Stock,
        },
    }
</script>

<style  scoped>

</style>
<template>
    <div>
        <Header />
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        components: {
            Header,
        },
        created () {
            this.$store.dispatch('initStocks');

            console.log(this.$store)
        },
    }
</script>

<style>

</style>

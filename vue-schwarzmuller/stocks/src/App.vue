<template>
    <div>
        <Header />
        <div class="row">
            <div class="col">
                <router-view />
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
    }
</script>

<style>

</style>

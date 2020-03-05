<template>
    <div>
        <Header />
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <transition name="slide" mode="out-in">
                        <router-view />
                    </transition>
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
    body {
        padding: 30px;
    }

    .slide-enter-active {
        animation: slide-in .3s ease-in forwards;
    }

    .slide-leave-active {
        animation: slide-out .3s ease-in forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide=out {
        from {
            opacity: 1;
            transform: translateY(0);
        }

        to {
            opacity: 1;
            transform: translateY(-30px);
        }
    }
</style>

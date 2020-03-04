<template>
    <div class="container">
        <Header :quoteCount="quotes.length" :maxQuotes="maxQuotes" />
        <NewQuote @quoteAdded="newQuote" />
        <QuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></QuoteGrid>

        <div class="row">
            <div class="text-center col-sm-12">
                <div class="alert alert-info">
                    Info: Click on a quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import NewQuote from './components/NewQuote.vue';
    import QuoteGrid from './components/QuoteGrid.vue';

    export default {
        components: {
            Header,
            NewQuote,
            QuoteGrid,
        },
        data() {
            return {
                quotes: [
                    'Just a quote to see something'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete a quote first.')
                }
                this.quotes.push(quote)
            },
            deleteQuote(index) {
                console.log('delete ' + index)
                this.quotes.splice(index, 1)
            }
        },
    }
</script>

<style>
</style>

<template>
    <div class="row">
        <form @submit.prevent="createNew">
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label for="quote">Quote</label>
                <textarea id="quote" class="form-control" cols="30" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <button class="btn btn-primary">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quote: ''
            }
        },
        methods: {
            createNew() {
                this.$emit('quoteAdded', this.quote)
                this.quote = ''
            }
        },
    }
</script>

<style scoped>

</style>
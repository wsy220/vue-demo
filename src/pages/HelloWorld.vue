<template>
    <div class="example">{{msg}}</div>
</template>

<script>
    export default {
        name: "hello-world",
        data(){
            return {
                msg:'Hello World!'
            }
        }
    }
</script>

<style scoped>
    .example{
        color: red;
    }
</style>
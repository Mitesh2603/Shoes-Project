<template>
<h1 class="text-red-100">{{msg}}</h1>
</template>

<script lang="ts">
export default {
    name: 'Helloworld',
    props: {
        msg: String
    }
}
</script>

<style scoped>
h1 {
    color: aqua;
}
</style>

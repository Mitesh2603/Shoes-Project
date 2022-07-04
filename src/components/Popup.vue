<template>
<div>
    <h1 v-bind="$attrs"> This is Popup</h1>
    <button @click="$emit('close', 'Mitesh')">Close Popup</button>
</div>
</template>

<script>
export default{
    name: 'Popup',
    emits:['close'],
}
</script>
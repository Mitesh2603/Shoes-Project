<template>
  <div>Lifecycle Hooks</div>
</template>

<script>
export default{
    name:'lifecycle',
    beforeCreate(){
        console.log("Before Create");
    },
    created(){
        console.log("Created");
    },
    beforeMount(){
        console.log("Before Mount");
    },
    mounted(){
        console.log("Mounted");
    },
    beforeUpdate(){
        console.log("Before Update");
    },
    updated(){
        console.log("Updated");
    },
    beforeUnmount(){
        console.log("Before Unmount");
    },
    unmounted(){
        console.log("Unmounted");
    }
}
</script>
<script>
import Nav from './components/Nav.vue';

export default{
    name:'App',
    components:{
    Nav
}
}


</script>

<template>
    <Nav/>
    <RouterView></RouterView>
</template>

<style scoped>
</style>

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
    <RouterView class="page"></RouterView>
</template>

<style scoped>
.page{
    padding-left: 5rem;
    padding-right: 5rem;
}
</style>

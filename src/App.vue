<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Application from './views/Application.vue'


export default {
    name: 'App',
    components: {
        Nav,
        Footer,
        Application
    },
    data() {
        return {
            cart: []
        }
    },
    mounted() {
        if (localStorage.cart) {
            this.cart =JSON.parse(localStorage.cart) ;
        }
    },
    watch: {
        cart: {
            handler(newCart) {
                localStorage.cart = JSON.stringify(newCart) ;
            },
            deep: true
        }
    }

}


</script>

<template>
    <Nav :cart="cart"></Nav>
    <RouterView :cart="cart" class="page"></RouterView>
    <Footer></Footer>
    <!-- <Application></Application> -->
    
</template>

<style scoped>
.page {
    padding-left: 5rem;
    padding-right: 5rem;
}
</style>

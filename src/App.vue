<script>
import Nav from './components/Nav.vue';

export default {
    name: 'App',
    components: {
        Nav
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
                console.log("blablablaa");
            },
            deep: true
        }
    }

}


</script>

<template>
    <Nav :cart="cart" />
    <RouterView :cart="cart" class="page"></RouterView>
</template>

<style scoped>
.page {
    padding-left: 5rem;
    padding-right: 5rem;
}
</style>

<script>
export default {
    name: 'Nav',
    components: {

    },
    data() {
        return {

        }
    },
    props: {
        cart: Array
    },
    computed: {
        cartItems() {
            let noItems=0;
            for (let item of this.cart) {
                noItems += item.quantity;
            }
            return noItems;
        }
    }
   



}
</script>

<template>

    <nav>
        <div class="navItem ">
            <router-link class="router-link" to="/">HOME</router-link>
            <router-link class="router-link" to="/shop">SHOP</router-link>
            <router-link class="router-link" to="/aboutus">ABOUT US</router-link>
        </div>
        <div class="navItem logo">
            <img src="../assets/pics/LOGO LEATHER WINGS.png">
        </div>
        <div class="navItem">
            <router-link class="router-link" to="/userprofile"> <font-awesome-icon icon="fa-solid fa-user"
                    size="lg" /></router-link>
            <div class="cartIcon">
                <router-link class="router-link" to="/cart"><font-awesome-icon icon="fa-solid fa-cart-plus"
                        size="lg" /></router-link>
                <p class="cartNum" v-if="cart.length != 0">{{ cartItems }}</p>
            </div>

        </div>
    </nav>

</template>

<style scoped>
nav {
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    background-color: #161a23a3;
    width: 100%;

}

.router-link-active {
    color: #8a8f6a;
}

img {
    height: inherit;
}

.navItem {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: white;
    height: 9rem;
}

.logo {
    height: 65%;
    position: absolute;
    left: 44.25%;
}

.cartIcon {
    position: relative;
}

.cartNum {
    position: absolute;
    left: 65%;
    top: -30%;
    display: flex;
    color: white;
    background-color: #8a8f6a;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    margin: 0;
    justify-content: center;
    align-items: center;
    font-size: smaller;
}



a {
    margin: 0 1rem;
}
</style>
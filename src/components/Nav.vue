<script>
export default{
    name:'Nav',
    components:{

    },
    data(){
        return{

        }
    },
    props:{
        cart:Array
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
        <div class="navItem">
            <img src="../assets/pics/LOGO LEATHER WINGS.png">
        </div>
        <div class="navItem">
            <router-link class="router-link" to="/userprofile"> <font-awesome-icon icon="fa-solid fa-user" size="lg" /></router-link>
            <router-link class="router-link" to="/cart"><font-awesome-icon icon="fa-solid fa-cart-plus" size="lg"/></router-link>
            <p v-if="cart.length!=0">{{ cart.length }}</p>
        </div>
    </nav>

</template>

<style scoped>
.router-link-active{
    color: #8a8f6a;
}
img{
    width: 9rem;
    height: auto;
    margin-right: 17rem;
}
.navItem{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: white;
}
p{
    position: absolute;
    left: 92.9%;
    top: 35%;
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
nav{
    position: fixed;
    z-index: 10;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    background-color:#161a23cc;
    
}
a{
    margin: 0 1rem;
}
</style>
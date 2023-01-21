<script>
import Add_toCart_btn from './Add_toCart_btn.vue';
export default {
    name: "productCard",
    data() {
        return {
        }
    },
    props: {
        allItems: Array,
        cart:Array

    },
    components: {
        Add_toCart_btn
    },
    methods:{
        async AddToCart(id){
            const response = await fetch(`http://localhost:3000/items/${id}`);
            const data = await response.json();
            this.cart.push(data);
            console.log(this.cart);
        }
    }
}
</script>

<template>
    <div class="mycard" v-for="item in allItems">
        <div class="mycard-img">
            <router-link :to="`/product/${item.id}`" class="imgs">
                <img v-bind:src="item.imgsrc[0]" />
                <img v-bind:src="item.imgsrc[1]" />
            </router-link>
            <Add_toCart_btn @click="AddToCart(item.id)" :value="item.id" class="cart-btn-fromcard"></Add_toCart_btn>
        </div>

        <div class="mycard-body">
            <h5><router-link :to="`/product/${item.id}`">{{ item.title }}</router-link></h5>
            <p>{{ item.price }} EGP</p>
        </div>
    </div>

</template>


<style>
.cat-title {
    font-weight: 800;
}

.mycard {
    position: relative;
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* border: 2px solid red; */
}

.mycard-body {
    z-index: 4;
    background-color: white;
    font-weight: 700;
    text-align: center;
}

.mycard-body h5 {
    font-weight: 600;
    font-size: 1rem;
}

.mycard-img {
    margin-bottom: 2rem;
  overflow: hidden;
}
.imgs{
    display: flex;
    transition: all 0.4s ease-in-out;
    z-index: 1;
}
.mycard-img:hover .imgs{
    transform: translateX(-100%);
}

.mycard-img:hover .cart-btn-fromcard{
    top: 65%;
    opacity: 1;
}

.mycard-img img {
    object-fit: contain;
    padding: 0 0.5rem;
    width: 100%;
    height: auto;
}

.cart-btn-fromcard {
    position: absolute;
    width: 98%;
    height: 2.5rem;
    top: 76%;
    opacity: 0;
    transition: all 0.4s ease-in-out;
    z-index: 2;
}

p {
    color: black;
}
</style>
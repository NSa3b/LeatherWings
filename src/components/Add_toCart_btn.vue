<script>
export default {
    name: "Add_toCart_btn",
    data() {
        return {

        }
    },
    props: {
        cart: Array,
        id: Number,
        quantity:Number
    },
    methods: {
        async AddToCart() {
            let i =this.cart.findIndex(item => item.id === this.id);
            if (i >=0 ) {
                this.cart[i].quantity+=this.quantity;
            }
            else {
                const response = await fetch(`http://localhost:3000/items/${this.id}`);
                const data = await response.json();
                data.quantity = this.quantity;
                this.cart.push(data);
            }

            console.log(this.cart);
        }
    }
}
</script>

<template>
    <button @click="AddToCart()" :value="id" class="cartBtn">+ Add to Cart</button>
</template>

<style>
.cartBtn {
    border: none;
    background-color: #8a8f6a;
    color: white;
    transition: background-color 0.4s ease-in-out , transform 1.5s ease-in-out , top 0.4s ease-in-out, opacity 0.4s ease-in-out;;
}
.cartBtn:hover{
    background-color:#414141;
}
.cartBtn:active{
    transform:scale(0.1)
}
</style>
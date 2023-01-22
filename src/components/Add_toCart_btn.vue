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
}
</style>
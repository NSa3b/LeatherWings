<script>
import Quantity_btn from '../components/Quantity_btn.vue';
export default {
    name: "cart",
    data() {
        return {
            subtotal: 0,
            cartUpdated: ""
        }
    },
    props: {
        cart: Array
    },
    components: {
        Quantity_btn
    },
    methods: {
        changeQuant(item) {
            let newQuantity = item.quant;
            let i = this.cart.findIndex(i => i.id === item.id)
            this.cart[i].quantity = newQuantity;
            this.cartUpdated = true;
        },
        DeletefromCart(i) {
            this.cart.splice(i, 1);
            this.cartUpdated = true;
        },
        getSubtotal() {
            this.subtotal = 0;
            for (let i = 0; i < this.cart.length; i++) {
                let itemTotalprice = this.cart[i].quantity * this.cart[i].price;
                this.subtotal += itemTotalprice;
            }
            this.cartUpdated = false;
        }
    },
    mounted() {
        this.getSubtotal();
    },

}
</script>

<template>
    <div class="mycontainer">
        <div class="mynav"></div>
        <div>
            <h4 class="fw-bold">Shopping Cart</h4>
            <hr>
        </div>
        <div v-if="cart.length">
            <table>
                <tr>
                    <th>Image </th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th class="calculated">Total</th>
                    <th>Delete</th>
                </tr>
                <tr v-for="(item, i) in cart" :key="i">
                    <td class="rest"><img :src="item.imgsrc[0]"></td>
                    <td class="title">
                        <RouterLink :to="`/product/${item.id}`">{{ item.title }}</RouterLink>
                    </td>
                    <td class="rest">{{ item.price }} EGP</td>
                    <td class="rest">
                        <Quantity_btn v-on:changeQuant="changeQuant($event)" :productId="item.id"
                            :productQuantity="item.quantity" class="">
                        </Quantity_btn>
                    </td>
                    <td class="calculated rest">{{ item.price * item.quantity }} EGP</td>
                    <td class="delete"><a @click="DeletefromCart(i)"><font-awesome-icon
                                icon="fa-solid fa-trash-can" /></a>
                    </td>
                </tr>
                <tr>
                    <td colspan="6">
                        <div class="subtotal">
                            <div class="subb">
                                <p class="text-muted mx-2">Subtotal</p>
                                <p class="subtotal-numb">{{ subtotal.toLocaleString() }} EGP</p>
                            </div>
                            <p class="text-muted fst-italic">Shipping & taxes calculated at checkout</p>
                            <div class="subb">
                                <button v-if="cartUpdated" @click="getSubtotal()" class="Update-btn">UPDATECART</button>
                                <router-link class="router-link" to="/orderinfo"><button class="checkout-btn">CHECKOUT</button></router-link>
                            </div>

                        </div>

                    </td>
                </tr>
            </table>
        </div>
        <div v-else class="Noitems">
            <h6 class="text-muted fw-bold">YOUR CART IS CURRENTLY EMPTY.</h6>
            <p>Before proceed to checkout you must add some products to your shopping cart.<br>You will find a lot of interesting products on our Website.</p>
            <router-link class="router-link" to="/shop"><button class="Update-btn">Go to Shopping</button></router-link>

        </div>
    </div>


</template>

<style scoped>
.mycontainer {
    display: grid;
    /* grid-auto-rows: minmax(9rem, auto); */
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
}

h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

th,
td {
    padding: 1rem;
    border: 0.05rem solid;
    border-color: rgb(204, 204, 204);
    text-align: center;
    height: inherit;
}

.title {
    width: 30%;
    text-align: start;
    font-weight: 700;
}

.delete {
    width: 12%;
}

.calculated {
    text-align: end;
    font-weight: 700;
    font-size: larger;
}

.rest {
    width: 16%;
}

img {
    object-fit: cover;
    width: 100px;
}

.subtotal {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.subb {
    display: flex;
    align-items: center;
}

.checkout-btn,
.Update-btn {
    font-weight: 600;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    transition: background-color 0.4s ease-in-out, transform 1.5s ease-in-out;
}

.Update-btn {
    background-color: #414141;
}

.Update-btn:hover {
    background-color: #8a8f6a;
}

.checkout-btn {
    background-color: #8a8f6a;
}

.checkout-btn:hover {
    background-color: #414141;
}

.checkout-btn:active {
    transform: scale(0.1)
}

.subtotal-numb {
    font-weight: 700;
    font-size: x-large;
    color: #8a8f6a;
}
</style>
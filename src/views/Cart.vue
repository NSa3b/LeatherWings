<script>
import Quantity_btn from '../components/Quantity_btn.vue';
export default {
    name: "cart",
    data() {
        return {
            

        }
    },
    props: {
        cart: Array
    },
    components: {
        Quantity_btn
    },
    methods: {
        changeQuant(newQuantity, i) {
            this.cart[i].quantity = newQuantity;
        },
        DeletefromCart(i) {
            this.cart.splice(i, 1);
        }
    }
}
</script>

<template>
    <div class="mycontainer">
        <div class="mynav"></div>
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
                <td class="title"><RouterLink :to="`/product/${item.id}`">{{ item.title }}</RouterLink></td>
                <td class="rest">{{ item.price }} EGP</td>
                <td class="rest">
                    <Quantity_btn v-on:changeQuant="changeQuant($event, i)" :productQuantity="item.quantity" class="">
                    </Quantity_btn>
                </td>
                <td class="calculated rest">{{ item.price * item.quantity }} EGP</td>
                <td class="delete"><a @click="DeletefromCart(i)"><font-awesome-icon icon="fa-solid fa-trash-can" /></a>
                </td>
            </tr>
            <tr>
                <td colspan="6" class="subtotal">
                    <div>
                        <p></p>
                        <h5>{{ subtotal }}</h5>
                    </div>
                    <p class="text-muted">Shipping & taxes calculated at checkout</p>
                </td>
            </tr>
        </table>
    </div>

</template>

<style scoped>
.mycontainer {
    display: grid;
    /* grid-auto-rows: minmax(9rem, auto); */
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

table {

    /* width: 100%; */
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
</style>
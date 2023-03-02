<script>
import { routeLocationKey } from 'vue-router';
import CartItems from '../components/Cart_Items.vue';
export default {
    name: "ShippingInfo",
    data() {
        return {
            order: {}
        }
    },
    props: {
        cart: Array,

    },
    components: {
        CartItems
    },
    methods: {
        showOrder() {
            let orderId = Math.floor(Math.random() * 1000);
            let contactInfo = JSON.parse(localStorage.ContactInfo);
            let orderitems = [];
            let subtotal=0;
            for (let i = 0; i < this.cart.length; i++) {
                orderitems.push({
                    id: this.cart[i].id,
                    title: this.cart[i].title,
                    price: this.cart[i].price,
                    quantity: this.cart[i].quantity
                })
                let itemTotalprice = this.cart[i].quantity * this.cart[i].price;
                subtotal += itemTotalprice;
            }
            let shipping = 0;
            switch (contactInfo.governorate) {
                case "cairo":
                case "Giza":
                    shipping = 50;
                    break;
                case "Alexandria":
                    shipping = 40;
                    break;
                default:
                    shipping = 65;
            }
            this.order = {
                "orderId":orderId,
                "contactInfo": contactInfo,
                "orderitems": orderitems,
                "subtotal":subtotal,
                "shipping": shipping
            };

        },
        async placeOrder() {

            const response = await fetch(`http://localhost:3000/Orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.order),
            })

            let orderedItems=JSON.parse(JSON.stringify(this.cart));
            console.log(orderedItems.length);
            for(let i=0; orderedItems.length>0;i++){

                orderedItems[i].selled=Number(orderedItems[i].selled)+1;
                delete orderedItems[i].quantity;
                console.log(orderedItems[i]);

                const editresponse = await fetch(`http://localhost:3000/Items/${orderedItems[i].id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderedItems[i]),
                })
            }
       
            localStorage.clear();
            this.$router.replace({name:"checkout", params: {id:this.order.orderId} })
        }

    },
    created() {
        this.showOrder();

    },
    computed: {
        total() {
            return this.order.subtotal + this.order.shipping;
        }
    },
}
</script>

<template>
    <div class="mycontainer">
        <div class="mynav"></div>
        <div class="d-flex">
            <div id="Info">
                <div class="shipinfo">
                    <div class="info">
                        <p>Contact</p>
                        <div>
                            <p>{{ order.contactInfo.email }}</p>
                            <p>{{ order.contactInfo.phone }}</p>
                        </div>
                        <router-link to="/orderInfo">
                            <p class="change">change</p>
                        </router-link>
                    </div>
                    <hr>
                    <div class="info">
                        <p>ship to</p>
                        <p>{{ order.contactInfo.address }}, {{ order.contactInfo.governorate }}, {{
                            order.contactInfo.country }}</p>
                        <router-link to="/orderInfo">
                            <p class="change">change</p>
                        </router-link>
                    </div>
                </div>
                <h6>Payment method</h6>
                <div class="shipinfo">
                    <div class="info">
                        <div>
                            <input id="shipmethod" type="radio" checked>
                            <label for="shipmethod">Cash upon deleviry</label>
                        </div>
                        <p class="total">{{ total }} EGP</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <h5>Delivery: within 10-20 working days</h5>
                </div>
                <div class="info mt-3">
                    <router-link to="/orderInfo"><font-awesome-icon icon="fa-solid fa-chevron-left" /> Return to
                        Info</router-link>
                    <button @click="placeOrder()" class="checkout-btn">Place Order</button>
                </div>
            </div>
            <div id="cartItems">
                <CartItems :cart="cart" :shipping="order.shipping"></CartItems>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mycontainer {
    justify-content: start;
    text-align: start;
    overflow: hidden;
}

.mynav {
    width: 100vw;
}

#Info {
    width: 60vw;
    margin-right: 2.5rem;
}

#cartItems {
    border: 0.1rem solid #8a8f6a;
    padding: 1rem;
    width: 40vw;
}

.shipinfo {
    border: 0.05rem rgba(128, 128, 128, 0.808) solid;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: small;
    margin-bottom: 2rem;
}

.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.change {
    color: #8a8f6a;
    cursor: pointer;
}

p {
    margin: 0;
}

#shipmethod {
    accent-color: #8a8f6a;
    margin: 0.5rem;
}

.total {
    font-weight: bold;
}

input[type="radio"]:checked+label {
    font-weight: bold;
    margin-left: 0.5rem;

}

.checkout-btn {
    font-weight: 600;
    border: none;
    background-color: #8a8f6a;

    color: white;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    transition: background-color 0.4s ease-in-out, transform 1.5s ease-in-out;
}</style>
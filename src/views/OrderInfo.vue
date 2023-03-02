<script>
import { toTypeString } from '@vue/shared';
import ContactInfoForm from '../components/ContactInfo_Form.vue';
import ShippingInfo from './Shipping_Info.vue';
import CartItems from '../components/Cart_Items.vue';

export default {
    name: "orderinfo",
    components: {
        ContactInfoForm,
        ShippingInfo,
        CartItems
    },
    data() {
        return {
            shipping:0,
            subtotal:0

        }
    },
    props: {
        cart: Array
    },
    methods: {
        getSubtotal() {
            this.subtotal = 0;
            for (let i = 0; i < this.cart.length; i++) {
                let itemTotalprice = this.cart[i].quantity * this.cart[i].price;
                this.subtotal += itemTotalprice;
            }
        },
    },
    created() {
        this.getSubtotal();
    }

}
</script>

<template>
    <div class="mycontainer">
        <div class="mynav"></div>
        <div class="d-flex">   
            <div id="Info">
                <ContactInfoForm :cart="cart"></ContactInfoForm>
            </div>
            <div id="cartItems">
                <CartItems :cart="cart" :shipping="shipping"></CartItems>
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




</style>
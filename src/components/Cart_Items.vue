<script>
export default {
    name: "CartItems",
    data() {
        return {
            subtotal:0

        }
    },
    props: {
        cart:Array,
        shipping:Number
    },
    methods:{
        getSubtotal() {
            this.subtotal = 0;
            for (let i = 0; i < this.cart.length; i++) {
                let itemTotalprice = this.cart[i].quantity * this.cart[i].price;
                this.subtotal += itemTotalprice;
            }
        },
    }, 
    computed: {
        total(){
            return this.subtotal+this.shipping;
        }

    },
    created() {
        this.getSubtotal();
    },
}
</script>

<template>

    <div v-for="item in cart" class="Item">
        <div class="d-flex align-items-center">
            <div class="itemImg">
                <div class="itemCont">
                    <img class="Img" img :src="item.imgsrc[0]">
                </div>
                <p class="itemNum">{{ item.quantity }}</p>
            </div>
            <p class="itemTitle">{{ item.title }}</p>
        </div>
        <div>
            <p>{{ item.price * item.quantity }} EGP</p>
        </div>
    </div>
    <hr>
    <div class="Item">
        <p>Subtotal</p>
        <p>{{ subtotal.toLocaleString() }} EGP</p>
    </div>
    <div class="Item">
        <p>Shipping</p>
        <p v-if="this.shipping>0">{{ this.shipping }} EGP</p>
        <p v-else class="text-muted fst-italic">shipping calculated in next step</p>
    </div>
    <hr>
    <div class="Item">
        <p>Total</p>
        <p class="fw-bold fs-5">{{ total }} EGP</p>
    </div>

</template>

<style scoped>
.Item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: small;
}

.shipping {
    font-size: small;
}

.itemImg {
    position: relative;
    width: 4rem;
    height: 4rem;
    margin-right: 0.5rem;
    margin-bottom: 0.6rem;
}

.itemCont {
    border: 0.06rem solid rgba(91, 91, 91, 0.557);
    border-radius: 10%;
    overflow: hidden;
    width: 4rem;
    height: 4rem;
}

.itemTitle {
    width: 16rem;
    margin-bottom: 0rem;
}

.Img {
    object-fit: contain;
    width: auto;
    height: 100%;
}

.itemNum {
    position: absolute;
    left: 83%;
    top: -12%;
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
</style>
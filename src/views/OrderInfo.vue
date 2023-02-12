<script>
export default {
    name: "orderinfo",
    data() {
        return {
            subtotal:0

        }
    },
    props: {
        cart: Array
    },
    methods:{

        getSubtotal() {
            this.subtotal = 0;
            for (let i = 0; i < this.cart.length; i++) {
                let itemTotalprice = this.cart[i].quantity * this.cart[i].price;
                this.subtotal += itemTotalprice;
            }
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
        <div class="d-flex">
            <div id="Info">
                <h5>Contact Information</h5>
                <hr>

            </div>

            <div id="cartItems">
                <h5>Cart</h5>
                <hr>
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
                    <p class="text-muted">Calculated at next step</p>
                </div>
                <hr>
                <div class="Item">
                    <p>Total</p>
                    <p class="fw-bold fs-5">{{ subtotal.toLocaleString() }} EGP</p>
                </div>
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
    width: 40vw;
}

.Item {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
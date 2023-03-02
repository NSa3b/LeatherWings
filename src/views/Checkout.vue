<script>
export default {
    name: "checkout",
    data() {
        return {
            orderId: this.$route.params.id,
            order: []

        }
    },
    props: {


    },
    methods: {
        async getOrder() {
            const response = await fetch(`http://localhost:3000/Orders/?orderId=${this.orderId}`);
            const data = await response.json();
            return data[0];
        },

    },
    async created() {
        this.order = await this.getOrder();

    }
}
</script>

<template>
    <div class="mycontainer">
        <div class="mynav"></div>
        <h2>Order Placed</h2>
        <div class="shipinfo">
            <p class="fw-bold fs-6">Order No. {{ order.orderId }}</p>
            <hr>
            <div class="info">
                <p>Contact</p>
                <div>
                    <p>{{ order.contactInfo.email }}</p>
                    <p>{{ order.contactInfo.phone }}</p>
                </div>
            </div>
            <hr>
            <div class="info">
                <p>Shipping to</p>
                <p>{{ order.contactInfo.address }}, {{ order.contactInfo.governorate }}, {{ order.contactInfo.country }}</p>

            </div>
            <hr>
            <div>
                <div v-for="item in order.orderitems " class="info">
                    <p>{{ item.title }}</p>
                    <p>{{ item.quantity }} x {{ item.price }} EGP</p>
                </div>
                <div class="info">
                    <p>Shipping</p>
                    <p>{{ order.shipping }} EGP</p>
                </div>
                <div class="info">
                    <p>Total</p>
                    <p class="fw-bold fs-6">{{ order.shipping + order.subtotal }} EGP</p>
                </div>
            </div>
            <h6>Thank you ! hope to see you again</h6>
           
        </div>
 

    </div>
</template>

<style scoped>
.mycontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
}

.mynav {
    width: 100vw;
}

.shipinfo {
    text-align: start;
    width: 55vw;
    border: 0.05rem #525252d4 solid;
    box-shadow: 2px 2px 4px 2px #8a8f6a;
    border-radius: 0.3rem;
    padding: 2rem;
    font-size: small;
    margin: 1rem 0;
}

.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

hr {
    margin: 0.5rem 0;
}
h6{
    align-self: center;
}
</style>
<script>
export default {
    name: "product",
    data() {
        return {
            product:Object,
            productId:this.$route.params.id

        }
    },
    methods: {
        async fetshItem() {
            const response = await fetch(`http://localhost:3000/items/${this.productId}`);
            const data = await response.json();
            return data;
        }
    },
    async created() {
        this.product = await this.fetshItem();
       
    }
}
</script>

<template>
    <div class="container">
        <h1>HELLO FROM PRODUCT {{this.product.title}}!</h1>
        <div class="imgGrp">
            <img class="badgee"
                src="https://firebasestorage.googleapis.com/v0/b/avada-boost-sales.appspot.com/o/badges%2Fimages%2FufvDZNcIdjSuksIJsFA1%2FHandmade.png-1665947088444?alt=media&token=4fbb5b07-94d4-4f6f-81f7-65e9bea5eabe" />
            <img class="badgee"
                src="https://firebasestorage.googleapis.com/v0/b/avada-boost-sales.appspot.com/o/badges%2Fimages%2FufvDZNcIdjSuksIJsFA1%2FFull%20Grain%20Leather.png-1665947086319?alt=media&token=00123282-667e-4b66-8210-01b45a3f8bc2" />
            <img class="badgee"
                src="https://firebasestorage.googleapis.com/v0/b/avada-boost-sales.appspot.com/o/badges%2Fimages%2FufvDZNcIdjSuksIJsFA1%2FNo%20Toxic%20Chemicals.png-1665947090348?alt=media&token=647a4fd6-5bac-4187-93ff-1f0e74e65f49" />
            <img class="badgee"
                src="https://firebasestorage.googleapis.com/v0/b/avada-boost-sales.appspot.com/o/badges%2Fimages%2FufvDZNcIdjSuksIJsFA1%2FFree%20Shipping.png-1665947084660?alt=media&token=0a12ddf2-4575-487e-9431-5fcd578e79e2" />
            <img class="badgee"
                src="https://firebasestorage.googleapis.com/v0/b/avada-boost-sales.appspot.com/o/badges%2Fimages%2FufvDZNcIdjSuksIJsFA1%2F30%20days%20Money%20Back.png-1665947082605?alt=media&token=23683438-2c61-4aa6-b6c2-bf7c00a39153" />
        </div>
    </div>



</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.badgee {
    width: 70px;
    margin: 0.7rem;
}
</style>
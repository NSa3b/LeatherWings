<script>
export default {
    name: "product",
    data() {
        return {
            product: Object,
            productId: this.$route.params.id,
            selectedImg: 0,
            productQuantity: 1

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
    <div class="mycontainer">
        <div class="mynav"></div>
        <div>
            <div>
                <img class="mainImg" :src="product.imgsrc[this.selectedImg]" />
            </div>
            <div class="productImgs">
                <img v-for="(img, i) in product.imgsrc" :key="i" :src="img" @click="this.selectedImg = i"
                    :class="(this.selectedImg == i) ? 'selectedImg' : 'nonSelectedImg'" />
            </div>
        </div>
        <div class="productInfo">
            <h2>{{ product.title }}</h2>
            <p>{{ product.price }} EGP</p>
            <div>
                <p>Quantity</p>
                <div class="actions">
                    <div class="quantity-input">
                        <button @click="(productQuantity==1)?productQuantity=1:productQuantity-=1">-</button>
                        <p>{{ productQuantity }}</p>
                        <button  @click="productQuantity+=1">+</button>
                    </div>
                    <button class="cartBtn">+ Add to Cart</button>
                </div>
            </div>
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
            <div>
                <p>{{ product.description }}</p>
                <h6>Dimensions</h6>
                <p>{{ product.dimension }}</p>
            </div>
        </div>

    </div>



</template>

<style scoped>
.mycontainer {
    display: grid;
    grid-auto-rows: minmax(10rem, auto);
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5rem;
    justify-content: center;

}

@media(max-width:500px) {
    .mycontainer {
        display: flex;
        flex-direction: column-reverse;
    }
}

.mynav {
    grid-column: 1/3;

}

.mainImg {
    width: 100%;
}

.productImgs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 4rem;
}

.nonSelectedImg {
    opacity: 0.6;
    width: 26%;
    margin: 0.3rem;
}

.selectedImg {
    opacity: 1;
    width: 26%;
    margin: 0.3rem;

}

.nonSelectedImg:hover {
    cursor: pointer;
}

.productInfo {
    display: flex;
    flex-direction: column;
    align-items: center
}

.badgee {
    width: 70px;
    margin: 0.7rem;
}

.actions {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.quantity-input {
    border: 2px solid #cccccc;
    padding: 1rem;
    margin: 0 0.5rem;
    display: flex;
    justify-content: center;
}
.quantity-input button{
    border: none;
    background-color: inherit;
}
.quantity-input p{
   margin:0 3rem;
}
.cartBtn{
    border: none;
    background-color: #8a8f6a;
    color: white;
    width: 20rem;
    margin: 0 0.5rem;
}
</style>
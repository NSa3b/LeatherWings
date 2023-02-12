<script>
import Add_toCart_btn from '../components/Add_toCart_btn.vue';
import Quantity_btn from '../components/Quantity_btn.vue';
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
    props:{
        cart:Array,
    },
    components:{
        Add_toCart_btn,
        Quantity_btn

    },
    methods: {
        async getProduct() {
            const response = await fetch(`http://localhost:3000/items/${this.productId}`);
            const data = await response.json();
            return data;
        },
        changeQuant(item) {
            this.productQuantity = item.quant;
        }
    },
    async created() {
        this.product = await this.getProduct();

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
            <h3>{{ product.title }}</h3>
            <div class="price">
                <p class="price-after" >{{ product.price }} EGP</p>
                <p class="price-before">{{ product.price*1.2 }} EGP</p>
            </div>
            
            <div class="actions">
                <p class="b-titles">Quantity</p>
                <div class="options"> 
                    <Quantity_btn v-on:changeQuant="changeQuant($event)" :productId="product.id" :productQuantity="1" class="quantity-input-fromproduct"></Quantity_btn>
                    <Add_toCart_btn :quantity="productQuantity" :cart="cart" :id="product.id" class="cart-btn-fromproduct"></Add_toCart_btn>
                </div>
            </div>
            <div class="imgGrp">
                <div>
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
            <hr/>
            <div>
                <p>{{ product.description }}</p>
                <p class="b-titles">Dimensions</p>
                <p>{{ product.dimension }}</p>
            </div>
        </div>

    </div>



</template>

<style scoped>
.mycontainer {
    display: grid;
    /* grid-auto-rows: minmax(9rem, auto); */
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5rem;
    justify-content: center;
    text-align: start;

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
.imgGrp{
    display: flex;
    justify-content: center;
    margin: 1rem 0;
}

.productInfo {
    display: flex;
    flex-direction: column;
}
h3{
    font-weight: 800;
   
}

.badgee {
    width: 70px;
    margin: 0.7rem;
}

.actions {
    width: 100%;  
}
.options{
    display: flex;
    justify-content: space-between;
}


.quantity-input-fromproduct{
    width: 39%;
}
.cart-btn-fromproduct{
    width: 59%;
}

.price{
    display: flex;
    font-size: xx-large;
    font-weight: 800;
    text-align: start;
    width: 100%;
}
.price-after{
    color: #8a8f6a;
}
.price-before{
    text-decoration: line-through;
    color: rgb(204,204,204);
    margin: 0 1.2rem ;
}
.b-titles{
    font-weight: 800;
    margin-bottom: 0.4rem;
}
</style>
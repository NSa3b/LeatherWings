<script>
import Home_carousel from '../components/Home_carousel.vue';
import Product_car from '../components/Product_card.vue';

export default {
    name: 'Home',
    components: {
        Home_carousel,
        Product_car
    },
    data() {
        return {
            bestSeller: []
        }
    },
    props: {
        cart: Array
    },
    methods: {
        async getBestseller() {
            const response = await fetch(`http://localhost:3000/Items?_sort=selled&_order=desc&_limit=4`);
            const data = await response.json();
            this.bestSeller = data;
        }
    },
    async created() {
        await this.getBestseller();
    }

}
</script>
<template>
    <Home_carousel />
    <div class="mycontainer">
        <div class="img1">
            <img
                src="//cdn.shopify.com/s/files/1/0184/4605/7572/files/Main_Steel_Horse_Leather_Image_Website_Crop_2000x.jpg?v=1613674677">
        </div>
        <div class="img2">
            <img
                src="//cdn.shopify.com/s/files/1/0184/4605/7572/files/Dagny_Weekender_on_Brick_7ebca90f-06dc-42ac-aca4-1d5c956b6af3_2000x.jpg?v=1613683531">
            <img class="margin"
                src="//cdn.shopify.com/s/files/1/0184/4605/7572/files/Dagny_Weekender_on_Concrete_Background_2000x.jpg?v=1613683631">

        </div>
        <div class="img3">
            <img
                src="//cdn.shopify.com/s/files/1/0184/4605/7572/files/Dagny_Weekender_by_Brooklyn_Bridge_2000x.jpg?v=1613683590">
            <img class="margin"
                src="//cdn.shopify.com/s/files/1/0184/4605/7572/files/Dagny_Weekender_by_Waterfront_2000x.jpg?v=1613683566">

        </div>
    </div>
    <div class="bestseller">
        <h4 class="besttitle">HANDMADE LEATHER BAGS</h4>
        <p>BEST SELLER</p>
        <div class="cards">
            <Product_car :cart="cart" :all-items="this.bestSeller"></Product_car>
        </div>
    </div>
    
</template>

<style scoped>
img {
    object-fit: cover;
    width: 100%;
}

.mycontainer {
    margin: 2rem 0;
    display: flex;
}

.img1 {
    display: flex;
    flex-direction: column;
    width: 44vw;
}

.img2 {
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    width: 34.6vw;
}

.img3 {
    display: flex;
    flex-direction: column;
    width: 25.3vw;
}

.margin {
    margin-top: 2rem;
}
.cards {
    margin: 2rem 4rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
}
.bestseller{
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.besttitle{
    font-weight: bold;
    position: relative;
}
.besttitle::after{
    content: "";
    position: absolute;
    width: 10rem;
    height: 0.15rem;
    background-color: #8a8f6abd ;
    top: 50%;
   
    left: 361px;
}
.besttitle::before{
    content: "";
    position: absolute;
    width: 10rem;
    height: 0.15rem;
     background-color: #8a8f6abd ;
    top: 50%;
    left: -55%;
}
</style>
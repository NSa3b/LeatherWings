<script>
import Home_carousel_item from './Home_carousel_item.vue';


export default {
    name: "Home_carousel",
    components: {
        Home_carousel_item
    },
    data() {
        return {
            slides: [
                {
                    src: "https://cdn.shopify.com/s/files/1/0184/4605/7572/files/Vintage_Leather_Bags_Banner_9af001cf-ef2d-4209-8e0b-c7b3445d1ef9_1920x1011.jpg?v=1642526279",
                    title: "Vintage Leather Bags",
                    subtitle: "Made for Adventure"
                },
                {
                    src: "https://cdn.shopify.com/s/files/1/0184/4605/7572/files/bag-briefcase-business-1058959_1920x1011.jpg?v=1613184792",
                    title: "Handmade Leather Dufel Bags",
                    subtitle: "Made for your Lifestyle"
                },
                {
                    src: "https://cdn.shopify.com/s/files/1/0184/4605/7572/files/aforestation-dirt-road-dusty-road-52599_1920x1011.jpg?v=1613184792",
                    title: "Vintage Leather Backpacks",
                    subtitle: "Built for Travel"
                },
                {
                    src: "https://cdn.shopify.com/s/files/1/0184/4605/7572/files/hero_home_02v2_1920x1011.jpg?v=1613184923",
                    title: "Handmade Genuine Leather Bags",
                    subtitle: "Crafted by Hand"
                }
            ],
            currentSlide: 0,
            slideInterval: null,
            arrowShown: false
        }
    },
    methods:{

    },
    mounted() {
        this.slideInterval = setInterval(() => {
            if (this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
            else {
                this.currentSlide = 0;
            }

        }, 6000)

    },
    beforeUnmount() {
        clearInterval(this.slideInterval);
    }
}
</script>

<template>


    <div class="carousell" @mouseenter="arrowShown = true" @mouseleave="arrowShown = false">
        <div class="carousell-inner">
            <Home_carousel_item v-for="(slide, index) in slides" :key="`item-${index}`" :slide="slide"
                :currentSlide="currentSlide" :index="index">
            </Home_carousel_item>
            <Transition name="show-arrows">
                <div class="arrows" v-show="arrowShown">
                    <div @click="this.currentSlide = this.currentSlide > 0 ? this.currentSlide-1 : this.slides.length - 1">
                        <a><font-awesome-icon icon="fa-solid fa-circle-chevron-left" size="3x" /></a>
                    </div>
                    <div @click="this.currentSlide = this.currentSlide < this.slides.length - 1 ? this.currentSlide+1 : 0">
                        <a><font-awesome-icon icon="fa-solid fa-circle-chevron-right" size="3x" /></a>
                    </div>
                </div>
            </Transition>
        </div>
    </div>



</template>

<style scoped>
.carousell {
    display: flex;
    justify-content: center;
    color: white;
}

.carousell-inner {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.arrows {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    width: 100%;
    position: absolute;
    top: 55%;
    opacity: 80%;
}

.show-arrows-enter-active,
.show-arrows-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.show-arrows-enter-from,
.show-arrows-leave-to {
    opacity: 0;
}
</style>
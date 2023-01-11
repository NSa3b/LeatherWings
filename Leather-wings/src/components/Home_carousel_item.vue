<script>
export default {
    name: "Home_carousel_item",
    data() {
        return {
            arrowShown: false
        }

    },
    props: {
        slide: Object,
        currentSlide: Number,
        index: Number
    },
    methods: {
        // carousalNav() {
        //     if(!this.arrowShown){
        //         this.arrowShown=true;
        //         console.log("in");
        //     }
        //     else{
        //         this.arrowShown=false;
        //         console.log("out");
        //     }

        // }
    },
    mounted() {

    }


}
</script>

<template>
    <Transition name="slide-in">
        <div class="carousell-item" v-show="currentSlide == index" @mouseenter="arrowShown = true"
            @mouseleave="arrowShown = false">

            <img class="slide_img" v-bind:src="slide.src" />
            <div class="carousell-caption">
                <p class="title">{{ slide.title }}</p>
                <h1 class="subtitle">{{ slide.subtitle }}</h1>
            </div>
            <Transition name="show-arrows">
                <div class="arrows" v-show="arrowShown">
                    <div>
                        <a><font-awesome-icon icon="fa-solid fa-circle-chevron-left" size="3x" /></a>
                    </div>
                    <div>
                        <a><font-awesome-icon icon="fa-solid fa-circle-chevron-right" size="3x" /></a>
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>


</template>

<style scoped>
.title {
    font-size: 5.8rem;
    line-height: 5.5rem;
    font-weight: 800;
    margin-bottom: 2rem;
}

/* .carousell-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
} */

.carousell-caption {
    animation: caption 0.7s linear  1 ;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: start;
    top: 33%;
    padding: 0 5rem;
    /* z-index: 10; */
}
@keyframes caption {
    0%{
        opacity: 0;
        top:40%
    }
    100%{
        opacity: 1;
        top:33%
    }
    
}

.slide_img {
    width: 100vw;
    height: auto;
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

/* .slide-in-enter-active,
.slide-in-leave-active{

    transition: opacity 0.3s ease-in-out;
}
.slide-in-enter-from{
    opacity: 0;
    
}
.slide-in-leave-to {
    opacity: 1;
    
} */
</style>
<script>
export default {
    name: "Home_carousel_item",
    data(){
        return{
            arrowShown:false
        }

    },
    props: {
        slide: Object,
        currentSlide: Number,
        index: Number
    },
    methods: {
        carousalNav() {
            if(!this.arrowShown){
                this.arrowShown=true;
                console.log("in");
            }
            else{
                this.arrowShown=false;
                console.log("out");
            }
         
        }
    },
    mounted() {
       
    }


}
</script>

<template>

    <div class="carousell-item" v-show="currentSlide == index" 
    @mouseenter="carousalNav()" 
    @mouseleave="carousalNav()">


        <img class="slide_img" v-bind:src="slide.src" />

        <div class="carousell-caption" >
            <p class="title">{{ slide.title }}</p>
            <h1 class="subtitle">{{ slide.subtitle }}</h1>
        </div>
        <div class="arrows" v-show="arrowShown">
            <div>
                <a><font-awesome-icon icon="fa-solid fa-circle-chevron-left" size="3x" /></a>
            </div>
            <div>
                <a><font-awesome-icon icon="fa-solid fa-circle-chevron-right" size="3x" /></a>
            </div>
            
        </div>



    </div>
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
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: start;
    top: 33%;
    padding: 0 5rem;
    /* z-index: 10; */


}

.slide_img {
    width: 100vw;
    height: auto;
}

.arrows {
    animation: arrow 0.2s ease-in-out 1 alternate-reverse;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    width: 100%;
    position: absolute;
    top: 55%;
    opacity: 80%;
}
@keyframes arrow{
    0%{ opacity: 0%;}
    100%{opacity: 80%;}

}

</style>
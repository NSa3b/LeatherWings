<script>
export default {
    name: "Home_carousel_item",
    data() {
        return {

        }

    },
    props: {
        slide: Object,
        currentSlide: Number,
        index: Number
    },
    methods: {
    },
    mounted() {

    }


}
</script>

<template>

    <div class="carousell-item" v-show="currentSlide == index">

        <img class="slide_img" v-bind:src="slide.src" />
        <div class="carousell-caption">
            <p class="title">{{ slide.title }}</p>
            <h1 class="subtitle">{{ slide.subtitle }}</h1>
        </div>

    </div>



</template>

<style scoped>
.title {
    font-size: 5.8rem;
    line-height: 5.5rem;
    font-weight: 800;
    margin-bottom: 2rem;
    color: white;
}


.carousell-caption {
    animation: caption 0.7s linear 1;
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
    0% {
        opacity: 0;
        top: 40%
    }

    100% {
        opacity: 1;
        top: 33%
    }

}

.slide_img {
    width: 100vw;
    height: auto;
}
</style>
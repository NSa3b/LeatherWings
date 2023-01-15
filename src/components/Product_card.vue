<script>
export default {
    name: "productCard",
    data() {
        return {
            imgOn:true
        }
    },
    props:{
        allItems:Array
    }
}
</script>

<template>
    <router-link :to="`/product/${item.id}`" class="mycard" v-bind:id="item.id" v-for="item in allItems">
        <div class="mycard-img" @mouseenter="imgOn=false" >
            <img v-bind:src="item.imgsrc[0]" />
            <img v-bind:src="item.imgsrc[1]" />
        </div>
        <div class="mycard-body">
            <h5><a>{{ item.title }}</a></h5>
            <p>{{ item.price }} EGP</p>
        </div>
    </router-link>

</template>


<style>
.cat-title {
    font-weight: 800;
}
.mycard {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 2px solid red;
}
.mycard-body {
    font-weight: 700;
    text-align: center;
}
.mycard-body h5 {
    font-weight: 600;
    font-size: 1rem;
}
.mycard-img {
    display: flex;
}
.mycard-img img {
    /* object-fit: cover; */
    padding:0 0.5rem;
    width: 100%;
    height: auto;
}

</style>
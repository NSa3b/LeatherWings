<script>
export default{
    name:"shop",
    data(){
        return{
            allItems:[]
        }
    },
    methods:{
        async fetshItems(){
            const response= await fetch('http://localhost:3000/items');
            const data= await response.json();
            return data;

        }

    },
    async created(){
        this.allItems= await this.fetshItems()  
    }
}
</script>

<template>

    <h1>HELLO FROM SHOP!</h1>
    <div class="card">
        <img v-bind:src="allItems[1].imgsrc[0]" />
    </div>

</template>

<style scoped>
h1{
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
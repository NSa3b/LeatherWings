<script>
export default {
    name: "Quantity_btn",
    data() {
        return {
            
        }
    },
    props:{
        productQuantity: Number,
        productId:Number
    },
    updated(){
        this.$emit("changeQuant",{quant:this.productQuantity,id:this.productId});
    }
}
</script>

<template>
    <div class="quantity-input">
        <button @click="(productQuantity == 1) ? productQuantity = 1 : productQuantity -= 1">-</button>
        <p>{{ productQuantity }}</p>
        <button @click="productQuantity += 1">+</button>
    </div>
</template>

<style>
.quantity-input {
    border: 2px solid #cccccc;
    padding: 0.7rem;
    display: flex;
    justify-content: space-between;
    
}
.quantity-input button{
    border: none;
    background-color: inherit;
}
.quantity-input p{
   margin:0 3rem;
}
</style>